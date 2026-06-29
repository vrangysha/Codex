"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  fieldErrorsFromZod,
  formDataToLeadPayload,
  validateLeadPayload,
  type LeadFieldErrors,
  type LeadFieldName,
  type LeadSource,
} from "@/lib/lead";
import type { LeadSubmitStatus } from "./lead-form-primitives";

type LeadApiResponse =
  | {
      ok: true;
      accepted: boolean;
      leadId: string;
      message?: string;
      mode: "stub";
    }
  | {
      ok: false;
      code: string;
      fields?: LeadFieldErrors;
      message: string;
    };

export function useLeadForm({ focusPrefix, source }: { focusPrefix: string; source: LeadSource }) {
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [status, setStatus] = useState<LeadSubmitStatus>("idle");
  const [statusText, setStatusText] = useState<string | undefined>();

  const isSubmitting = status === "submitting";

  function clearError(field: LeadFieldName) {
    setStatus((current) => (current === "submitting" ? current : "typing"));
    setStatusText(undefined);

    if (!errors[field]) {
      return;
    }

    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = formDataToLeadPayload(new FormData(form), {
      source,
      sourcePath: window.location.pathname,
    });

    const clientValidation = validateLeadPayload(payload);
    if (!clientValidation.success) {
      applyErrors(fieldErrorsFromZod(clientValidation.error));
      setStatus("validation-error");
      setStatusText(undefined);
      return;
    }

    setErrors({});
    setStatus("submitting");
    setStatusText(undefined);

    let response: Response;
    let data: LeadApiResponse;

    try {
      response = await fetch("/api/lead", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      data = (await response.json()) as LeadApiResponse;
    } catch {
      setStatus("network-error");
      return;
    }

    if (!response.ok || !data.ok) {
      if (!data.ok && data.fields) {
        applyErrors(data.fields);
        setStatus("validation-error");
        setStatusText(data.message);
        return;
      }

      setStatus("server-error");
      setStatusText(data.message);
      return;
    }

    form.reset();
    setStatus("success");
    setStatusText(data.message);
  }

  function applyErrors(nextErrors: LeadFieldErrors) {
    setErrors(nextErrors);

    const firstField = Object.keys(nextErrors)[0] as LeadFieldName | undefined;
    if (firstField) {
      window.requestAnimationFrame(() => {
        document.getElementById(`${focusPrefix}-${firstField}`)?.focus();
      });
    }
  }

  return {
    clearError,
    errors,
    handleSubmit,
    isSubmitting,
    status,
    statusText,
  };
}
