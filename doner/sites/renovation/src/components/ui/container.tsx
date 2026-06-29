import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "narrow" | "default" | "wide";

const sizeClass: Record<ContainerSize, string> = {
  narrow: "max-w-4xl",
  default: "max-w-container",
  wide: "max-w-container-wide",
};

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10", sizeClass[size], className)}
      {...props}
    />
  );
}
