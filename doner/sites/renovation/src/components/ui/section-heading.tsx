import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  label?: string;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  align = "left",
  className,
  description,
  label,
  title,
  titleAs = "h2",
  ...props
}: SectionHeadingProps) {
  const Title = titleAs;

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
      {...props}
    >
      {label ? (
        <p className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium leading-none text-muted">
          {label}
        </p>
      ) : null}
      <Title
        className={cn(
          "max-w-full text-balance font-display font-semibold tracking-normal",
          titleAs === "h1" && "text-4xl sm:text-5xl lg:text-7xl",
          titleAs === "h2" && "text-3xl sm:text-4xl lg:text-5xl",
          titleAs === "h3" && "text-2xl sm:text-3xl",
        )}
      >
        {title}
      </Title>
      {description ? (
        <p className="max-w-full text-measure text-lg leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
