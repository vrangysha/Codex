import { CheckCircle2, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { benefits } from "@/data/site";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [FileText, ClipboardCheck, ShieldCheck, CheckCircle2];

export interface TrustBarProps {
  className?: string;
  items?: {
    description: string;
    title: string;
  }[];
}

export function TrustBar({ className, items = benefits.slice(0, 4) }: TrustBarProps) {
  return (
    <section className={cn("border-y border-border bg-surface", className)}>
      <div className="mx-auto grid max-w-container-wide gap-4 px-4 py-6 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-10">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div className="flex min-h-28 gap-4 rounded-lg bg-background p-5" key={item.title}>
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-base font-semibold leading-6 text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
