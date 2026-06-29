import { CheckCircle2 } from "lucide-react";
import { LeadButton } from "@/components/ui/lead-button";
import { cn } from "@/lib/utils";

export interface PriceCardProps {
  className?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  note?: string;
  price: string;
  title: string;
}

export function PriceCard({
  className,
  description,
  features,
  highlighted,
  note,
  price,
  title,
}: PriceCardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface p-6 shadow-soft",
        highlighted && "border-primary bg-primary text-primary-foreground",
        className,
      )}
    >
      <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
      <p
        className={cn(
          "mt-3 text-base leading-7 text-muted",
          highlighted && "text-primary-foreground/80",
        )}
      >
        {description}
      </p>
      <p className="mt-6 font-display text-3xl font-semibold leading-none">{price}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li className="flex gap-3 text-sm leading-6" key={feature}>
            <CheckCircle2
              aria-hidden="true"
              className={cn(
                "mt-0.5 h-5 w-5 flex-none text-primary",
                highlighted && "text-primary-foreground",
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {note ? (
        <p
          className={cn(
            "mt-5 text-sm leading-6 text-muted",
            highlighted && "text-primary-foreground/80",
          )}
        >
          {note}
        </p>
      ) : null}
      <LeadButton
        className={cn("mt-6 w-full", highlighted && "bg-background text-primary hover:bg-surface")}
      />
    </article>
  );
}
