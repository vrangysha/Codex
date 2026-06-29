import { cn } from "@/lib/utils";

export interface StatCardProps {
  className?: string;
  description?: string;
  label: string;
  value: string;
}

export function StatCard({ className, description, label, value }: StatCardProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-5", className)}>
      <p className="font-display text-3xl font-semibold leading-none text-foreground">{value}</p>
      <p className="mt-3 font-medium leading-6 text-foreground">{label}</p>
      {description ? <p className="mt-2 text-sm leading-6 text-muted">{description}</p> : null}
    </div>
  );
}
