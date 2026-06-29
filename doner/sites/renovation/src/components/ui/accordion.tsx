import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  content: React.ReactNode;
  title: React.ReactNode;
  value: string;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
}

export function Accordion({ className, items, ...props }: AccordionProps) {
  return (
    <div
      className={cn("divide-y divide-border rounded-lg border border-border bg-surface", className)}
      {...props}
    >
      {items.map((item) => (
        <details className="group" key={item.value}>
          <summary className="flex min-h-14 list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground transition-colors duration-200 ease-out hover:bg-surface-alt focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring">
            <span>{item.title}</span>
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 flex-none text-muted transition-transform duration-200 ease-out group-open:rotate-180"
            />
          </summary>
          <div className="px-5 pb-5 text-base leading-7 text-muted">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
