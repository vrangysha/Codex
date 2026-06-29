import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out active:translate-y-px focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/92 hover:shadow-lift focus-visible:outline-ring",
        secondary:
          "border border-border bg-surface text-foreground hover:border-primary/35 hover:bg-surface-alt focus-visible:outline-ring",
        outline:
          "border border-primary/35 bg-background text-primary hover:border-primary hover:bg-surface focus-visible:outline-ring",
        ghost: "bg-transparent text-foreground hover:bg-surface focus-visible:outline-ring",
        link: "min-h-0 rounded-sm px-0 py-0 text-primary underline-offset-4 hover:underline focus-visible:outline-ring",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:outline-ring",
      },
      size: {
        sm: "min-h-10 px-4 py-2",
        md: "min-h-11 px-5 py-3",
        lg: "min-h-12 px-6 py-3.5 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, loading, loadingText, size, variant, ...props }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        aria-busy={loading || undefined}
        className={cn(buttonVariants({ size, variant, className }))}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {loading ? <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" /> : null}
        {loading ? (loadingText ?? children) : children}
      </button>
    );
  },
);

Button.displayName = "Button";
