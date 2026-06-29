import Link from "next/link";
import type { ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import type { LeadFieldName } from "@/lib/lead";
import { cn } from "@/lib/utils";

export type LeadSubmitStatus =
  | "idle"
  | "typing"
  | "validation-error"
  | "submitting"
  | "success"
  | "server-error"
  | "network-error";

export const defaultLeadStatusText: Record<LeadSubmitStatus, string> = {
  idle: "Без скрытых подписок, публикации данных и передачи во внешние сервисы.",
  typing: "Заполните поля и отправьте форму, когда будете готовы.",
  "validation-error": "Проверьте отмеченные поля и отправьте форму ещё раз.",
  submitting: "Отправляем заявку...",
  success:
    "Заявка принята в тестовом режиме. CRM, почта или вебхук пока не подключены, данные не отправлены во внешние сервисы.",
  "server-error": "Сервер не принял заявку. Проверьте поля или попробуйте позже.",
  "network-error":
    "Не удалось связаться с сервером. Проверьте подключение и отправьте форму ещё раз.",
};

export function FormField({
  children,
  className,
  error,
  helperText,
  htmlFor,
  label,
  required,
}: {
  children: ReactNode;
  className?: string;
  error?: string;
  helperText?: string;
  htmlFor: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label className="text-sm font-semibold leading-6 text-foreground" htmlFor={htmlFor}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>
      {children}
      {helperText && !error ? (
        <p className="text-sm leading-6 text-muted" id={`${htmlFor}-helper`}>
          {helperText}
        </p>
      ) : null}
      {error ? (
        <p className="text-sm leading-6 text-destructive" id={`${htmlFor}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ConsentField({
  disabled,
  error,
  id,
  onChange,
}: {
  disabled?: boolean;
  error?: string;
  id: string;
  onChange: () => void;
}) {
  return (
    <Checkbox
      disabled={disabled}
      error={error}
      id={id}
      label={
        <>
          Нажимая кнопку, вы соглашаетесь с{" "}
          <Link
            className="font-semibold text-primary underline-offset-4 hover:underline"
            href="/privacy"
          >
            политикой конфиденциальности
          </Link>
          .
        </>
      }
      name="consent"
      onChange={onChange}
    />
  );
}

export function HoneypotField({ id }: { id: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
    >
      <label htmlFor={id}>Компания</label>
      <input autoComplete="off" id={id} name="company" tabIndex={-1} type="text" />
    </div>
  );
}

export function FormStatus({
  idleText,
  status,
  statusText,
}: {
  idleText?: string;
  status: LeadSubmitStatus;
  statusText?: string;
}) {
  const text =
    statusText ?? (status === "idle" && idleText ? idleText : defaultLeadStatusText[status]);
  const isError =
    status === "validation-error" || status === "server-error" || status === "network-error";
  const isSuccess = status === "success";

  return (
    <p
      aria-live="polite"
      className={cn(
        "text-sm leading-6",
        isError ? "text-destructive" : isSuccess ? "text-success" : "text-muted",
      )}
    >
      {text}
    </p>
  );
}

export function fieldDescriptionId(
  prefix: string,
  field: LeadFieldName,
  error?: string,
  helper?: boolean,
) {
  if (error) {
    return `${prefix}-${field}-error`;
  }

  return helper ? `${prefix}-${field}-helper` : undefined;
}
