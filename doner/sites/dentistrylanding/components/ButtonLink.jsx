import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-clinic-accent text-white shadow-soft hover:bg-clinic-accentDark hover:shadow-lift",
  secondary:
    "border border-clinic-line bg-white text-clinic-ink hover:border-clinic-primary hover:text-clinic-primary dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-clinic-secondary",
  dark:
    "bg-clinic-ink text-white shadow-soft hover:bg-clinic-navy dark:bg-white dark:text-clinic-ink"
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = true,
  className = ""
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-bold transition-all duration-200 ease-smooth hover:scale-105 focus-visible:shadow-focus ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </Link>
  );
}
