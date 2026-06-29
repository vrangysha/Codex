import { ArrowRight, Clock } from "lucide-react";
import type { ProcessStep } from "@/data/site";
import { processSteps } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export interface ProcessTimelineProps {
  className?: string;
  heading?: boolean;
  steps?: ProcessStep[];
}

export function ProcessTimeline({
  className,
  heading = true,
  steps = processSteps,
}: ProcessTimelineProps) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      {heading ? (
        <SectionHeading
          description="Показываем процесс как последовательность решений, работ и точек контроля. Сроки пока требуют подтверждения владельцем бизнеса."
          title="Этапы ремонта без потери контроля"
        />
      ) : null}
      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <li
            className="rounded-lg border border-border bg-surface p-6 shadow-soft"
            key={step.number}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                {String(step.number).padStart(2, "0")}
              </span>
              {step.isPlaceholderDuration ? <Badge variant="warning">Срок уточнить</Badge> : null}
            </div>
            <h3 className="mt-5 text-2xl font-semibold leading-tight">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-muted">{step.description}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm leading-6 text-muted">
              <span className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2">
                <Clock aria-hidden="true" className="h-4 w-4 text-primary" />
                {step.duration}
              </span>
            </div>
            <div className="mt-5 grid gap-3 text-sm leading-6 md:grid-cols-2">
              <p>
                <span className="font-semibold text-foreground">Клиент: </span>
                <span className="text-muted">{step.clientAction}</span>
              </p>
              <p>
                <span className="font-semibold text-foreground">Команда: </span>
                <span className="text-muted">{step.companyAction}</span>
              </p>
            </div>
            <ArrowRight aria-hidden="true" className="mt-5 h-5 w-5 text-accent md:hidden" />
          </li>
        ))}
      </ol>
    </div>
  );
}
