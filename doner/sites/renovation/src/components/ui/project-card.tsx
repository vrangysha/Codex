import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  className?: string;
  href?: string;
  location?: string;
  note?: string;
  scope: string;
  status?: "real" | "placeholder" | "illustrative";
  title: string;
}

export function ProjectCard({
  className,
  href,
  location,
  note,
  scope,
  status = "placeholder",
  title,
}: ProjectCardProps) {
  const statusLabel = status === "real" ? "Реальный проект" : "Нужны реальные данные";

  const content = (
    <article
      className={cn("rounded-lg border border-border bg-surface p-6 shadow-soft", className)}
    >
      <div
        aria-hidden="true"
        className="aspect-[4/3] rounded-md border border-border bg-surface-alt"
      />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Badge variant={status === "real" ? "success" : "warning"}>{statusLabel}</Badge>
        {location ? <span className="text-sm text-muted">{location}</span> : null}
      </div>
      <h3 className="mt-4 text-2xl font-semibold leading-tight">{title}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{scope}</p>
      {note ? <p className="mt-4 text-sm leading-6 text-muted">{note}</p> : null}
    </article>
  );

  return href ? (
    <Link className="block rounded-lg focus-visible:outline-ring" href={href}>
      {content}
    </Link>
  ) : (
    content
  );
}
