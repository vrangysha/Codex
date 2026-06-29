import * as React from "react";
import { Container, type ContainerProps } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionBackground = "default" | "surface" | "surface-alt";

const backgroundClass: Record<SectionBackground, string> = {
  default: "bg-background",
  surface: "bg-surface",
  "surface-alt": "bg-surface-alt",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  containerClassName?: string;
  containerSize?: ContainerProps["size"];
}

export function Section({
  background = "default",
  children,
  className,
  containerClassName,
  containerSize = "default",
  ...props
}: SectionProps) {
  return (
    <section className={cn("section-y", backgroundClass[background], className)} {...props}>
      <Container className={containerClassName} size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
