"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
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

const objectTypeOptions = ["Квартира", "Дом", "Дизайн-проект", "Пока не уверен"];

export interface ReviewsTrustFormProps {
  className?: string;
}

export function ReviewsTrustForm({ className }: ReviewsTrustFormProps) {
  const { clearError, errors, handleSubmit, isSubmitting, status, statusText } = useLeadForm({
    focusPrefix: "reviews",
    source: "reviews_trust",
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
      <HoneypotField id="reviews-company" />

      <div>
        <h2 className="text-2xl font-semibold leading-tight">
          Хотите понять, сколько будет стоить ваш ремонт?
        </h2>
        <p className="mt-3 text-base leading-7 text-muted">
          Оставьте телефон и тип объекта. Форма короткая, но использует тот же тестовый обработчик
          заявок, серверную валидацию и скрытое антиспам-поле.
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        <FormField error={errors.phone} htmlFor="reviews-phone" label="Телефон" required>
          <Input
            aria-describedby={fieldDescriptionId("reviews", "phone", errors.phone)}
            autoComplete="tel"
            disabled={isSubmitting}
            id="reviews-phone"
            inputMode="tel"
            name="phone"
            onChange={() => clearError("phone")}
            placeholder="+7"
            state={errors.phone ? "error" : "default"}
            type="tel"
          />
        </FormField>

        <FormField
          error={errors.objectType}
          htmlFor="reviews-objectType"
          label="Тип объекта"
          required
        >
          <Select
            aria-describedby={fieldDescriptionId("reviews", "objectType", errors.objectType)}
            disabled={isSubmitting}
            id="reviews-objectType"
            name="objectType"
            onChange={() => clearError("objectType")}
            state={errors.objectType ? "error" : "default"}
          >
            <option value="">Выберите тип</option>
            {objectTypeOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField htmlFor="reviews-message" label="Что нужно оценить">
          <Textarea
            disabled={isSubmitting}
            id="reviews-message"
            maxLength={1000}
            name="message"
            onChange={() => clearError("message")}
            placeholder="Можно указать площадь, состояние объекта, желаемые сроки или вопрос по смете."
          />
        </FormField>
      </div>

      <div className="mt-6">
        <ConsentField
          disabled={isSubmitting}
          error={errors.consent}
          id="reviews-consent"
          onChange={() => clearError("consent")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button loading={isSubmitting} loadingText="Отправляем..." size="lg" type="submit">
          <Send aria-hidden="true" className="h-4 w-4" />
          Получить ориентир
        </Button>
        <FormStatus
          idleText="Без публикации данных и без обязательств."
          status={status}
          statusText={statusText}
        />
      </div>
    </form>
  );
}
