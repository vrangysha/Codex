"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { leadFormOptions } from "@/data/site";
import type { LeadFieldName } from "@/lib/lead";
import { cn } from "@/lib/utils";
import {
  ConsentField,
  fieldDescriptionId,
  FormField,
  FormStatus,
  HoneypotField,
} from "./lead-form-primitives";
import { useLeadForm } from "./use-lead-form";

type SelectFieldName =
  "objectType" | "area" | "renovationType" | "startTime" | "budgetRange" | "contactMethod";

const optionByName = Object.fromEntries(
  leadFormOptions.map((option) => [option.name, option]),
) as Record<string, (typeof leadFormOptions)[number] | undefined>;

export interface ContactLeadFormProps {
  className?: string;
}

export function ContactLeadForm({ className }: ContactLeadFormProps) {
  const { clearError, errors, handleSubmit, isSubmitting, status, statusText } = useLeadForm({
    focusPrefix: "contact",
    source: "contact_full",
  });

  return (
    <form
      aria-describedby="contact-form-description"
      className={cn(
        "relative rounded-lg border border-border bg-surface p-6 shadow-soft",
        className,
      )}
      noValidate
      onSubmit={handleSubmit}
    >
      <HoneypotField id="contact-company" />

      <div>
        <h2 className="text-2xl font-semibold leading-tight">Заявка на консультацию или замер</h2>
        <p className="mt-3 text-base leading-7 text-muted" id="contact-form-description">
          Опишите объект и удобный формат связи. Сейчас форма работает как безопасный тестовый
          обработчик: заявка валидируется на клиенте и сервере, но не отправляется в CRM без
          настройки интеграции.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <FormField error={errors.name} htmlFor="contact-name" label="Имя" required>
          <Input
            aria-describedby={fieldDescriptionId("contact", "name", errors.name)}
            autoComplete="name"
            disabled={isSubmitting}
            id="contact-name"
            name="name"
            onChange={() => clearError("name")}
            placeholder="Как к вам обращаться"
            state={errors.name ? "error" : "default"}
            type="text"
          />
        </FormField>

        <FormField error={errors.phone} htmlFor="contact-phone" label="Телефон" required>
          <Input
            aria-describedby={fieldDescriptionId("contact", "phone", errors.phone)}
            autoComplete="tel"
            disabled={isSubmitting}
            id="contact-phone"
            inputMode="tel"
            name="phone"
            onChange={() => clearError("phone")}
            placeholder="+7"
            state={errors.phone ? "error" : "default"}
            type="tel"
          />
        </FormField>

        <FormField
          error={errors.email}
          helperText="Можно оставить пустым."
          htmlFor="contact-email"
          label="Эл. почта"
        >
          <Input
            aria-describedby={fieldDescriptionId("contact", "email", errors.email, true)}
            autoComplete="email"
            disabled={isSubmitting}
            id="contact-email"
            name="email"
            onChange={() => clearError("email")}
            placeholder="name@example.com"
            state={errors.email ? "error" : "default"}
            type="email"
          />
        </FormField>

        <FormField
          error={errors.location}
          htmlFor="contact-location"
          label="Город или район"
          required
        >
          <Input
            aria-describedby={fieldDescriptionId("contact", "location", errors.location)}
            autoComplete="address-level2"
            disabled={isSubmitting}
            id="contact-location"
            name="location"
            onChange={() => clearError("location")}
            placeholder="Город, район или ближайший ориентир"
            state={errors.location ? "error" : "default"}
            type="text"
          />
        </FormField>

        <SelectField
          disabled={isSubmitting}
          error={errors.objectType}
          field="objectType"
          onClear={() => clearError("objectType")}
          required
        />
        <SelectField
          disabled={isSubmitting}
          error={errors.area}
          field="area"
          onClear={() => clearError("area")}
          required
        />
        <SelectField
          disabled={isSubmitting}
          error={errors.renovationType}
          field="renovationType"
          onClear={() => clearError("renovationType")}
          required
        />
        <SelectField
          disabled={isSubmitting}
          error={errors.startTime}
          field="startTime"
          onClear={() => clearError("startTime")}
          required
        />
        <SelectField
          disabled={isSubmitting}
          error={errors.budgetRange}
          field="budgetRange"
          onClear={() => clearError("budgetRange")}
        />
        <SelectField
          disabled={isSubmitting}
          error={errors.contactMethod}
          field="contactMethod"
          onClear={() => clearError("contactMethod")}
        />

        <FormField className="md:col-span-2" htmlFor="contact-message" label="Комментарий">
          <Textarea
            disabled={isSubmitting}
            id="contact-message"
            maxLength={1000}
            name="message"
            onChange={() => clearError("message")}
            placeholder="Что нужно сделать, есть ли дизайн-проект, можно ли прислать фото или планировку."
          />
        </FormField>
      </div>

      <div className="mt-6">
        <ConsentField
          disabled={isSubmitting}
          error={errors.consent}
          id="contact-consent"
          onChange={() => clearError("consent")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button loading={isSubmitting} loadingText="Отправляем..." size="lg" type="submit">
          <Send aria-hidden="true" className="h-4 w-4" />
          Отправить заявку
        </Button>
        <FormStatus
          idleText="После отправки уточним задачу, район и удобный следующий шаг."
          status={status}
          statusText={statusText}
        />
      </div>
    </form>
  );
}

function SelectField({
  disabled,
  error,
  field,
  onClear,
  required,
}: {
  disabled?: boolean;
  error?: string;
  field: SelectFieldName;
  onClear: () => void;
  required?: boolean;
}) {
  const option = optionByName[field];
  const id = `contact-${field}`;

  if (!option) {
    return null;
  }

  return (
    <FormField error={error} htmlFor={id} label={option.label} required={required}>
      <Select
        aria-describedby={fieldDescriptionId("contact", field as LeadFieldName, error)}
        disabled={disabled}
        id={id}
        name={field}
        onChange={onClear}
        state={error ? "error" : "default"}
      >
        <option value="">Выберите вариант</option>
        {option.options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </FormField>
  );
}
