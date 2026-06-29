"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ConsentField,
  fieldDescriptionId,
  FormField,
  FormStatus,
  HoneypotField,
} from "./lead-form-primitives";
import { useLeadForm } from "./use-lead-form";

export interface FaqQuestionFormProps {
  className?: string;
}

export function FaqQuestionForm({ className }: FaqQuestionFormProps) {
  const { clearError, errors, handleSubmit, isSubmitting, status, statusText } = useLeadForm({
    focusPrefix: "faq",
    source: "faq_question",
  });

  return (
    <form
      className={cn(
        "relative rounded-lg border border-border bg-background p-6 shadow-soft",
        className,
      )}
      noValidate
      onSubmit={handleSubmit}
    >
      <HoneypotField id="faq-company" />

      <div>
        <h2 className="text-2xl font-semibold leading-tight">Задать свой вопрос</h2>
        <p className="mt-3 text-base leading-7 text-muted">
          Если ответа нет на странице, оставьте вопрос и телефон. Форма валидируется на сервере, но
          реальная отправка в CRM или почту пока не подключена.
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        <FormField error={errors.message} htmlFor="faq-message" label="Ваш вопрос" required>
          <Textarea
            aria-describedby={fieldDescriptionId("faq", "message", errors.message)}
            disabled={isSubmitting}
            id="faq-message"
            maxLength={1000}
            name="message"
            onChange={() => clearError("message")}
            placeholder="Например: можно ли начать ремонт по готовому дизайн-проекту и как проверить смету?"
            state={errors.message ? "error" : "default"}
          />
        </FormField>

        <FormField error={errors.phone} htmlFor="faq-phone" label="Телефон для ответа" required>
          <Input
            aria-describedby={fieldDescriptionId("faq", "phone", errors.phone)}
            autoComplete="tel"
            disabled={isSubmitting}
            id="faq-phone"
            inputMode="tel"
            name="phone"
            onChange={() => clearError("phone")}
            placeholder="+7"
            state={errors.phone ? "error" : "default"}
            type="tel"
          />
        </FormField>
      </div>

      <div className="mt-6">
        <ConsentField
          disabled={isSubmitting}
          error={errors.consent}
          id="faq-consent"
          onChange={() => clearError("consent")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button loading={isSubmitting} loadingText="Отправляем..." size="lg" type="submit">
          <Send aria-hidden="true" className="h-4 w-4" />
          Отправить вопрос
        </Button>
        <FormStatus
          idleText="Без публикации вопроса и персональных данных."
          status={status}
          statusText={statusText}
        />
      </div>
    </form>
  );
}
