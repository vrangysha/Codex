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

const objectTypeOptions = ["Квартира", "Дом", "Комната", "Ванная", "Кухня", "Пока не уверен"];

const areaOptions = [
  "до 30 м²",
  "30-60 м²",
  "60-100 м²",
  "100-160 м²",
  "больше 160 м²",
  "нужно уточнить",
];

export interface PortfolioEstimateFormProps {
  className?: string;
}

export function PortfolioEstimateForm({ className }: PortfolioEstimateFormProps) {
  const { clearError, errors, handleSubmit, isSubmitting, status, statusText } = useLeadForm({
    focusPrefix: "portfolio",
    source: "portfolio_estimate",
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
      <HoneypotField id="portfolio-company" />

      <div>
        <h2 className="text-2xl font-semibold leading-tight">Рассчитать похожий проект</h2>
        <p className="mt-3 text-base leading-7 text-muted">
          Коротко опишите объект. Форма работает через безопасный тестовый обработчик заявок и не
          отправляет данные в CRM, почту или мессенджеры до настройки интеграции.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <FormField error={errors.name} htmlFor="portfolio-name" label="Имя" required>
          <Input
            aria-describedby={fieldDescriptionId("portfolio", "name", errors.name)}
            autoComplete="name"
            disabled={isSubmitting}
            id="portfolio-name"
            name="name"
            onChange={() => clearError("name")}
            placeholder="Как к вам обращаться"
            state={errors.name ? "error" : "default"}
            type="text"
          />
        </FormField>

        <FormField error={errors.phone} htmlFor="portfolio-phone" label="Телефон" required>
          <Input
            aria-describedby={fieldDescriptionId("portfolio", "phone", errors.phone)}
            autoComplete="tel"
            disabled={isSubmitting}
            id="portfolio-phone"
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
          htmlFor="portfolio-objectType"
          label="Тип объекта"
          required
        >
          <Select
            aria-describedby={fieldDescriptionId("portfolio", "objectType", errors.objectType)}
            disabled={isSubmitting}
            id="portfolio-objectType"
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

        <FormField error={errors.area} htmlFor="portfolio-area" label="Площадь" required>
          <Select
            aria-describedby={fieldDescriptionId("portfolio", "area", errors.area)}
            disabled={isSubmitting}
            id="portfolio-area"
            name="area"
            onChange={() => clearError("area")}
            state={errors.area ? "error" : "default"}
          >
            <option value="">Выберите площадь</option>
            {areaOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField className="md:col-span-2" htmlFor="portfolio-message" label="Комментарий">
          <Textarea
            disabled={isSubmitting}
            id="portfolio-message"
            maxLength={1000}
            name="message"
            onChange={() => clearError("message")}
            placeholder="Можно указать похожий пример из портфолио, состояние объекта, желаемые сроки или прикрепить фото позже в переписке."
          />
        </FormField>
      </div>

      <div className="mt-6">
        <ConsentField
          disabled={isSubmitting}
          error={errors.consent}
          id="portfolio-consent"
          onChange={() => clearError("consent")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button loading={isSubmitting} loadingText="Отправляем..." size="lg" type="submit">
          <Send aria-hidden="true" className="h-4 w-4" />
          Отправить заявку
        </Button>
        <FormStatus
          idleText="Без скрытых подписок и публикации данных."
          status={status}
          statusText={statusText}
        />
      </div>
    </form>
  );
}
