import {
  Activity,
  BadgeCheck,
  CalendarCheck,
  Clock,
  CreditCard,
  FileText,
  HeartPulse,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards
} from "lucide-react";

const icons = {
  Activity,
  BadgeCheck,
  CalendarCheck,
  Clock3: Clock,
  CreditCard,
  FileText,
  HeartPulse,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards
};

export default function IconBadge({ name = "Sparkles", tone = "primary", className = "" }) {
  const Icon = icons[name] || Sparkles;
  const toneClass =
    tone === "accent"
      ? "bg-emerald-50 text-clinic-accent dark:bg-emerald-400/10 dark:text-emerald-200"
      : "bg-cyan-50 text-clinic-primary dark:bg-cyan-400/10 dark:text-cyan-200";

  return (
    <span className={`grid h-12 w-12 place-items-center rounded-card ${toneClass} ${className}`}>
      <Icon aria-hidden="true" className="h-6 w-6" />
    </span>
  );
}
