import type { LucideIcon } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TrustBadgeProps {
  className?: string;
  description?: string;
  icon?: LucideIcon;
  title: string;
}

export function TrustBadge({
  className,
  description,
  icon: Icon = ShieldCheck,
  title,
}: TrustBadgeProps) {
  return (
    <div className={cn("flex gap-4 rounded-lg border border-border bg-surface p-5", className)}>
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <div>
        <p className="font-semibold leading-6 text-foreground">{title}</p>
        {description ? <p className="mt-1 text-sm leading-6 text-muted">{description}</p> : null}
      </div>
    </div>
  );
}
