import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, error, helperText, id, label, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        <label
          className="flex min-h-11 items-start gap-3 text-base leading-7 text-foreground"
          htmlFor={checkboxId}
        >
          <input
            aria-describedby={
              error ? `${checkboxId}-error` : helperText ? `${checkboxId}-helper` : undefined
            }
            aria-invalid={Boolean(error) || undefined}
            className={cn(
              "mt-1 h-5 w-5 rounded-sm border border-input accent-primary focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/30 disabled:cursor-not-allowed disabled:opacity-60",
              className,
            )}
            id={checkboxId}
            ref={ref}
            type="checkbox"
            {...props}
          />
          {label ? <span>{label}</span> : null}
        </label>
        {helperText && !error ? (
          <p className="pl-8 text-sm leading-6 text-muted" id={`${checkboxId}-helper`}>
            {helperText}
          </p>
        ) : null}
        {error ? (
          <p
            className="pl-8 text-sm leading-6 text-destructive"
            id={`${checkboxId}-error`}
            role="alert"
          >
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
