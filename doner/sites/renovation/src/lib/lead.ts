import { z } from "zod";

export const leadSources = [
  "general_estimate",
  "home_quick_estimate",
  "service_context",
  "service_choice",
  "contact_full",
  "pricing_estimate",
  "portfolio_estimate",
  "faq_question",
  "reviews_trust",
] as const;

export type LeadSource = (typeof leadSources)[number];

export type LeadFieldName =
  | "name"
  | "phone"
  | "email"
  | "objectType"
  | "area"
  | "objectCondition"
  | "renovationType"
  | "startTime"
  | "budgetRange"
  | "contactMethod"
  | "location"
  | "message"
  | "consent";

export const leadFieldMessages: Record<LeadFieldName, string> = {
  name: "Введите имя минимум из 2 символов",
  phone: "Введите телефон, чтобы мы могли связаться",
  email: "Укажите email в формате name@example.com или оставьте поле пустым",
  objectType: "Выберите тип объекта",
  area: "Укажите примерную площадь",
  objectCondition: "Выберите состояние объекта",
  renovationType: "Выберите тип ремонта",
  startTime: "Выберите, когда планируете старт",
  budgetRange: "Выберите бюджетный диапазон или оставьте поле пустым",
  contactMethod: "Выберите удобный способ связи или оставьте поле пустым",
  location: "Укажите город или район",
  message: "Опишите задачу чуть подробнее",
  consent: "Подтвердите согласие с политикой конфиденциальности",
};

export const leadSourceRequiredFields: Record<LeadSource, LeadFieldName[]> = {
  general_estimate: [
    "name",
    "phone",
    "objectType",
    "area",
    "renovationType",
    "startTime",
    "consent",
  ],
  home_quick_estimate: [
    "name",
    "phone",
    "objectType",
    "area",
    "renovationType",
    "startTime",
    "consent",
  ],
  service_context: [
    "name",
    "phone",
    "objectType",
    "area",
    "renovationType",
    "startTime",
    "consent",
  ],
  service_choice: ["phone", "objectType", "area", "objectCondition", "consent"],
  contact_full: [
    "name",
    "phone",
    "objectType",
    "area",
    "renovationType",
    "location",
    "startTime",
    "consent",
  ],
  pricing_estimate: [
    "phone",
    "objectType",
    "area",
    "objectCondition",
    "renovationType",
    "startTime",
    "consent",
  ],
  portfolio_estimate: ["name", "phone", "objectType", "area", "consent"],
  faq_question: ["phone", "message", "consent"],
  reviews_trust: ["phone", "objectType", "consent"],
};

const optionalText = (maxLength: number) =>
  z.preprocess((value) => {
    if (typeof value !== "string") {
      return undefined;
    }

    const trimmed = value.trim();
    return trimmed ? trimmed : undefined;
  }, z.string().max(maxLength).optional());

const baseLeadSchema = z.object({
  source: z.enum(leadSources),
  sourcePath: optionalText(180),
  name: optionalText(80),
  phone: z.string().trim().max(40),
  email: optionalText(120).pipe(z.string().email(leadFieldMessages.email).optional()),
  objectType: optionalText(100),
  area: optionalText(80),
  objectCondition: optionalText(100),
  renovationType: optionalText(100),
  startTime: optionalText(100),
  budgetRange: optionalText(100),
  contactMethod: optionalText(100),
  location: optionalText(160),
  message: optionalText(1000),
  consent: z.boolean(),
  honeypot: optionalText(160),
});

export const leadSchema = baseLeadSchema.superRefine((data, context) => {
  const requiredFields = leadSourceRequiredFields[data.source];

  for (const field of requiredFields) {
    const value = data[field];
    const isMissing =
      field === "consent" ? value !== true : typeof value !== "string" || !value.trim();

    if (isMissing) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: leadFieldMessages[field],
        path: [field],
      });
    }
  }

  if (data.name && data.name.trim().length < 2) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: leadFieldMessages.name,
      path: ["name"],
    });
  }

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: leadFieldMessages.phone,
      path: ["phone"],
    });
  }

  if (data.area) {
    const areaValue = data.area.toLowerCase();
    const hasAreaSignal = /\d|м²|м2|до|более|свыше|точно не знаю|нужно уточнить|уточнить/.test(
      areaValue,
    );

    if (!hasAreaSignal) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Укажите площадь числом или диапазоном",
        path: ["area"],
      });
    }
  }
});

export type LeadPayload = z.infer<typeof baseLeadSchema>;
export type LeadFieldErrors = Partial<Record<LeadFieldName, string>>;

export function formDataToLeadPayload(
  formData: FormData,
  options: { source: LeadSource; sourcePath?: string },
): LeadPayload {
  const text = (field: string) => String(formData.get(field) ?? "").trim();
  const message = text("message") || text("comment") || text("question");

  return {
    source: options.source,
    sourcePath: options.sourcePath,
    name: text("name") || undefined,
    phone: text("phone"),
    email: text("email") || undefined,
    objectType: text("objectType") || undefined,
    area: text("area") || undefined,
    objectCondition: text("objectCondition") || undefined,
    renovationType: text("renovationType") || undefined,
    startTime: text("startTime") || undefined,
    budgetRange: text("budgetRange") || undefined,
    contactMethod: text("contactMethod") || undefined,
    location: text("location") || undefined,
    message: message || undefined,
    consent: formData.get("consent") === "on" || formData.get("privacy") === "on",
    honeypot: text("company") || text("website") || text("middleName") || undefined,
  };
}

export function validateLeadPayload(payload: LeadPayload) {
  return leadSchema.safeParse(payload);
}

export function fieldErrorsFromZod(error: z.ZodError): LeadFieldErrors {
  const errors: LeadFieldErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && isLeadFieldName(field) && !errors[field]) {
      errors[field] = issue.message;
    }
  }

  return errors;
}

function isLeadFieldName(field: string): field is LeadFieldName {
  return [
    "name",
    "phone",
    "email",
    "objectType",
    "area",
    "objectCondition",
    "renovationType",
    "startTime",
    "budgetRange",
    "contactMethod",
    "location",
    "message",
    "consent",
  ].includes(field);
}
