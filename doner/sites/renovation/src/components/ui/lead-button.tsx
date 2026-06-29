import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface LeadButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
}

export function LeadButton({
  children = "Получить расчёт",
  className,
  href = "/contacts",
}: LeadButtonProps) {
  return (
    <Link className={cn(buttonVariants({ size: "lg" }), className)} href={href}>
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
