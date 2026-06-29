import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex min-h-8 items-center rounded-full border px-3 py-1 text-sm font-medium leading-none",
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface text-muted",
        primary: "border-primary/20 bg-primary/10 text-primary",
        accent: "border-accent/20 bg-accent/10 text-foreground",
        success: "border-success/20 bg-success/10 text-success",
        warning: "border-warning/30 bg-warning/18 text-warning-foreground",
        destructive: "border-destructive/20 bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}
