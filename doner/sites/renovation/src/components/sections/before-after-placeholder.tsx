import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface BeforeAfterPlaceholderProps {
  afterLabel?: string;
  beforeLabel?: string;
  className?: string;
}

export function BeforeAfterPlaceholder({
  afterLabel = "После",
  beforeLabel = "До",
  className,
}: BeforeAfterPlaceholderProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-5", className)}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Badge variant="warning">Плейсхолдер до/после</Badge>
        <p className="text-sm leading-6 text-muted">
          Нужны реальные фото и разрешение на публикацию.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {[beforeLabel, afterLabel].map((label) => (
          <div
            className="flex aspect-[4/3] items-end rounded-md border border-border bg-surface-alt p-4"
            key={label}
          >
            <span className="rounded-md bg-background px-3 py-2 text-sm font-semibold text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
