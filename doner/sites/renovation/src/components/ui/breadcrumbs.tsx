import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  current?: boolean;
  href?: string;
  label: string;
}

export interface BreadcrumbsProps {
  className?: string;
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className={cn("text-sm text-muted", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
            {index > 0 ? <ChevronRight aria-hidden="true" className="h-4 w-4 text-border" /> : null}
            {item.href && !item.current ? (
              <Link
                className="inline-flex min-h-11 min-w-11 items-center rounded-sm hover:text-foreground focus-visible:outline-ring"
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current={item.current ? "page" : undefined} className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
