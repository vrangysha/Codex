import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { contacts } from "@/data/site";
import { cn } from "@/lib/utils";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function MobileStickyCta() {
  const messenger = contacts.messengers[0];
  const isMessengerExternal = messenger ? /^https?:\/\//.test(messenger.href) : false;

  return (
    <nav
      aria-label="Быстрые действия"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-18px_44px_-34px_oklch(var(--foreground)/0.45)] md:hidden"
    >
      <div className={cn("mx-auto grid max-w-md gap-2", messenger ? "grid-cols-3" : "grid-cols-2")}>
        <a
          className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-md border border-border bg-surface px-2 text-center text-xs font-semibold text-foreground focus-visible:outline-ring"
          href={phoneHref(contacts.phone)}
        >
          <Phone aria-hidden="true" className="h-4 w-4 text-primary" />
          <span className="break-words">Позвонить</span>
        </a>
        <Link
          className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-md bg-primary px-2 text-center text-xs font-semibold text-primary-foreground focus-visible:outline-ring"
          href="/contacts"
        >
          <Send aria-hidden="true" className="h-4 w-4" />
          <span className="break-words">Заявка</span>
        </Link>
        {messenger ? (
          <a
            className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-md border border-border bg-surface px-2 text-center text-xs font-semibold text-foreground focus-visible:outline-ring"
            href={messenger.href}
            rel={isMessengerExternal ? "noreferrer noopener" : undefined}
            target={isMessengerExternal ? "_blank" : undefined}
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4 text-primary" />
            <span className="break-words">{messenger.label}</span>
          </a>
        ) : null}
      </div>
    </nav>
  );
}
