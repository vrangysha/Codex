import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
};

export function PageSection({ children, className }: PageSectionProps) {
  return (
    <section
      className={cn(
        "relative z-10 mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
