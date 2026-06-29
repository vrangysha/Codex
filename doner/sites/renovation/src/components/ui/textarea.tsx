import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: "default" | "error" | "success";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, state = "default", ...props }, ref) => (
    <textarea
      aria-invalid={state === "error" || undefined}
      className={cn(
        "min-h-32 w-full resize-y rounded-md border border-input bg-background px-4 py-3 text-base text-foreground shadow-none transition-[border-color,box-shadow] duration-200 ease-out placeholder:text-muted focus-visible:border-ring focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/30 disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-60",
        state === "error" && "border-destructive focus-visible:border-destructive",
        state === "success" && "border-success focus-visible:border-success",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
