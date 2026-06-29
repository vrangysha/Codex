"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { leadFormOptions } from "@/data/site";
import type { LeadFieldName, LeadSource } from "@/lib/lead";
import { cn } from "@/lib/utils";
import {
  ConsentField,
  fieldDescriptionId,
  FormField,
  FormStatus,
  HoneypotField,
} from "./lead-form-primitives";
import { useLeadForm } from "./use-lead-form";

type SelectFieldName = "objectType" | "area" | "renovationType" | "startTime" | "budgetRange";

const optionByName = Object.fromEntries(
  leadFormOptions.map((option) => [option.name, option]),
) as Record<string, (typeof leadFormOptions)[number] | undefined>;

export interface LeadFormProps {
  className?: string;
  description?: string;
  showNameField?: boolean;
  source?: LeadSource;
  title?: string;
}

export function LeadForm({
  className,
  description = "Расчёт предварительный: точная смета формируется после замера, уточнения состава работ и материалов.",
  showNameField = true,
  source = "general_estimate",
  title = "Заявка на расчёт ремонта",
}: LeadFormProps) {
  const { clearError, errors, handleSubmit, isSubmitting, status, statusText } = useLeadForm({
    focusPrefix: "lead",
    source,
  });

  return (
    <form
      className={cn(
        "relative rounded-lg border border-border bg-surface p-6 shadow-soft",
        className,
      )}
      noValidate
      onSubmit={handleSubmit}
    >
      <HoneypotField id="lead-company" />

      <div>
        <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
        <p className="mt-3 text-base leading-7 text-muted">{description}</p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {showNameField ? (
          <FormField error={errors.name} htmlFor="lead-name" label="Имя" required>
            <Input
              aria-describedby={fieldDescriptionId("lead", "name", errors.name)}
              autoComplete="name"
              disabled={isSubmitting}
              id="lead-name"
              name="name"
              onChange={() => clearError("name")}
              placeholder="Как к вам обращаться"
              state={errors.name ? "error" : "default"}
              type="text"
            />
          </FormField>
        ) : null}

        <FormField error={errors.phone} htmlFor="lead-phone" label="Телефон" required>
          <Input
            aria-describedby={fieldDescriptionId("lead", "phone", errors.phone)}
            autoComplete="tel"
            disabled={isSubmitting}
            id="lead-phone"
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
          htmlFor="lead-email"
          label="Эл. почта"
        >
          <Input
            aria-describedby={fieldDescriptionId("lead", "email", errors.email, true)}
            autoComplete="email"
            disabled={isSubmitting}
            id="lead-email"
            name="email"
            onChange={() => clearError("email")}
            placeholder="name@example.com"
            state={errors.email ? "error" : "default"}
            type="email"
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

        <FormField className="md:col-span-2" htmlFor="lead-message" label="Комментарий">
          <Textarea
            disabled={isSubmitting}
            id="lead-message"
            maxLength={1000}
            name="message"
            onChange={() => clearError("message")}
            placeholder="Можно указать задачи, сроки, вопросы или состояние объекта. Адрес на этом этапе не нужен."
          />
        </FormField>
      </div>

      <div className="mt-6">
        <ConsentField
          disabled={isSubmitting}
          error={errors.consent}
          id="lead-consent"
          onChange={() => clearError("consent")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button loading={isSubmitting} loadingText="Отправляем..." size="lg" type="submit">
          <Send aria-hidden="true" className="h-4 w-4" />
          Отправить заявку
        </Button>
        <FormStatus
          idleText="Без скрытых подписок, публикации данных и передачи во внешние сервисы."
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
  const id = `lead-${field}`;

  if (!option) {
    return null;
  }

  return (
    <FormField error={error} htmlFor={id} label={option.label} required={required}>
      <Select
        aria-describedby={fieldDescriptionId("lead", field as LeadFieldName, error)}
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
