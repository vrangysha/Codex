import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  className?: string;
  ctaLabel?: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  meta?: {
    label: string;
    value: string;
  }[];
  points?: string[];
  title: string;
}

export function ServiceCard({
  className,
  ctaLabel = "Подробнее",
  description,
  href,
  icon: Icon = Hammer,
  meta = [],
  points = [],
  title,
}: ServiceCardProps) {
  return (
    <article
      className={cn("group rounded-lg border border-border bg-surface p-6 shadow-soft", className)}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold leading-tight">{title}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{description}</p>
      {meta.length ? (
        <dl className="mt-5 grid gap-3 rounded-md bg-background p-4 sm:grid-cols-2">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-medium leading-5 text-muted">{item.label}</dt>
              <dd className="mt-1 text-sm font-semibold leading-5 text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {points.length ? (
        <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
          {points.map((point) => (
            <li className="flex gap-2" key={point}>
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primary transition-colors hover:text-foreground focus-visible:outline-ring"
        href={href}
      >
        {ctaLabel}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
