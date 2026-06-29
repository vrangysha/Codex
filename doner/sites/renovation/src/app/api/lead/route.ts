import { NextResponse } from "next/server";
import { fieldErrorsFromZod, validateLeadPayload, type LeadPayload } from "@/lib/lead";

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "INVALID_JSON",
        message: "Не удалось прочитать заявку. Отправьте форму ещё раз.",
      },
      { status: 400 },
    );
  }

  const validation = validateLeadPayload(payload);

  if (!validation.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Проверьте отмеченные поля.",
        fields: fieldErrorsFromZod(validation.error),
      },
      { status: 400 },
    );
  }

  if (validation.data.honeypot) {
    return NextResponse.json({
      ok: true,
      mode: "stub",
      accepted: false,
      leadId: crypto.randomUUID(),
      message: "Заявка принята в тестовом режиме.",
    });
  }

  return NextResponse.json({
    ok: true,
    mode: "stub",
    accepted: false,
    leadId: crypto.randomUUID(),
    message:
      "Заявка принята в тестовом режиме. CRM, почта или вебхук пока не подключены, данные не отправлены во внешние сервисы.",
  });
}
