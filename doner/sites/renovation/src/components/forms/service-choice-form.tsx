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

type SelectFieldName = "objectType" | "area" | "objectCondition";

const optionByName = Object.fromEntries(
  leadFormOptions.map((option) => [option.name, option]),
) as Record<string, (typeof leadFormOptions)[number] | undefined>;

export interface ServiceChoiceFormProps {
  className?: string;
}

export function ServiceChoiceForm({ className }: ServiceChoiceFormProps) {
  const { clearError, errors, handleSubmit, isSubmitting, status, statusText } = useLeadForm({
    focusPrefix: "service-lead",
    source: "service_choice",
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
      <HoneypotField id="service-lead-company" />

      <div>
        <h3 className="text-2xl font-semibold leading-tight">Не знаете, какой ремонт нужен?</h3>
        <p className="mt-3 text-base leading-7 text-muted">
          Опишите объект коротко. Мы подскажем формат работ и следующий безопасный шаг без
          публикации данных и без отправки во внешние сервисы до настройки интеграции.
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
        <SelectField
          disabled={isSubmitting}
          error={errors.area}
          field="area"
          onClear={() => clearError("area")}
          required
        />
        <SelectField
          disabled={isSubmitting}
          error={errors.objectCondition}
          field="objectCondition"
          onClear={() => clearError("objectCondition")}
          required
        />
        <FormField error={errors.phone} htmlFor="service-lead-phone" label="Телефон" required>
          <Input
            aria-describedby={fieldDescriptionId("service-lead", "phone", errors.phone)}
            autoComplete="tel"
            disabled={isSubmitting}
            id="service-lead-phone"
            inputMode="tel"
            name="phone"
            onChange={() => clearError("phone")}
            placeholder="+7"
            state={errors.phone ? "error" : "default"}
            type="tel"
          />
        </FormField>
        <FormField className="md:col-span-2" htmlFor="service-lead-message" label="Комментарий">
          <Textarea
            disabled={isSubmitting}
            id="service-lead-message"
            maxLength={1000}
            name="message"
            onChange={() => clearError("message")}
            placeholder="Например: нужна консультация по вторичке, есть старые коммуникации, хочется понять бюджет."
          />
        </FormField>
      </div>

      <div className="mt-6">
        <ConsentField
          disabled={isSubmitting}
          error={errors.consent}
          id="service-lead-consent"
          onChange={() => clearError("consent")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button loading={isSubmitting} loadingText="Отправляем..." size="lg" type="submit">
          <Send aria-hidden="true" className="h-4 w-4" />
          Подобрать услугу
        </Button>
        <FormStatus
          idleText="Ответим с ориентиром по формату ремонта и составу работ."
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
  const id = `service-lead-${field}`;

  if (!option) {
    return null;
  }

  return (
    <FormField error={error} htmlFor={id} label={option.label} required={required}>
      <Select
        aria-describedby={fieldDescriptionId("service-lead", field as LeadFieldName, error)}
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
