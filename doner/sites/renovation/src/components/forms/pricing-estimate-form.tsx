"use client";

import { Calculator } from "lucide-react";
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
  "objectType" | "objectCondition" | "renovationType" | "startTime" | "budgetRange";

const optionByName = Object.fromEntries(
  leadFormOptions.map((option) => [option.name, option]),
) as Record<string, (typeof leadFormOptions)[number] | undefined>;

export interface PricingEstimateFormProps {
  className?: string;
}

export function PricingEstimateForm({ className }: PricingEstimateFormProps) {
  const { clearError, errors, handleSubmit, isSubmitting, status, statusText } = useLeadForm({
    focusPrefix: "pricing",
    source: "pricing_estimate",
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
      <HoneypotField id="pricing-company" />

      <div>
        <h2 className="text-2xl font-semibold leading-tight">Получить точную смету</h2>
        <p className="mt-3 text-base leading-7 text-muted">
          Оставьте исходные данные. Ответим с ориентиром по бюджету и подскажем, что нужно уточнить
          на замере. Тестовый обработчик не отправляет данные во внешние сервисы без настройки
          интеграции.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <SelectField
          disabled={isSubmitting}
          error={errors.objectType}
          field="objectType"
          onClear={() => clearError("objectType")}
          required
        />

        <FormField
          error={errors.area}
          helperText="Можно указать приблизительно, если точный метраж пока неизвестен."
          htmlFor="pricing-area"
          label="Площадь"
          required
        >
          <Input
            aria-describedby={fieldDescriptionId("pricing", "area", errors.area, true)}
            disabled={isSubmitting}
            id="pricing-area"
            inputMode="decimal"
            name="area"
            onChange={() => clearError("area")}
            placeholder="Например, 65 м²"
            state={errors.area ? "error" : "default"}
            type="text"
          />
        </FormField>

        <SelectField
          disabled={isSubmitting}
          error={errors.objectCondition}
          field="objectCondition"
          onClear={() => clearError("objectCondition")}
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

        <FormField error={errors.phone} htmlFor="pricing-phone" label="Телефон" required>
          <Input
            aria-describedby={fieldDescriptionId("pricing", "phone", errors.phone)}
            autoComplete="tel"
            disabled={isSubmitting}
            id="pricing-phone"
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
          htmlFor="pricing-email"
          label="Эл. почта"
        >
          <Input
            aria-describedby={fieldDescriptionId("pricing", "email", errors.email, true)}
            autoComplete="email"
            disabled={isSubmitting}
            id="pricing-email"
            name="email"
            onChange={() => clearError("email")}
            placeholder="name@example.com"
            state={errors.email ? "error" : "default"}
            type="email"
          />
        </FormField>

        <SelectField
          disabled={isSubmitting}
          error={errors.budgetRange}
          field="budgetRange"
          onClear={() => clearError("budgetRange")}
        />

        <FormField className="md:col-span-2" htmlFor="pricing-message" label="Комментарий">
          <Textarea
            disabled={isSubmitting}
            id="pricing-message"
            maxLength={1000}
            name="message"
            onChange={() => clearError("message")}
            placeholder="Например: нужна смета для вторички, планируем капитальный ремонт, материалы пока не выбраны."
          />
        </FormField>
      </div>

      <div className="mt-6">
        <ConsentField
          disabled={isSubmitting}
          error={errors.consent}
          id="pricing-consent"
          onChange={() => clearError("consent")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button loading={isSubmitting} loadingText="Отправляем..." size="lg" type="submit">
          <Calculator aria-hidden="true" className="h-4 w-4" />
          Запросить смету
        </Button>
        <FormStatus
          idleText="Адрес на этом этапе не нужен, достаточно параметров объекта."
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
  const id = `pricing-${field}`;

  if (!option) {
    return null;
  }

  return (
    <FormField error={error} htmlFor={id} label={option.label} required={required}>
      <Select
        aria-describedby={fieldDescriptionId("pricing", field as LeadFieldName, error)}
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
