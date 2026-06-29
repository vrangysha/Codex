import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contacts } from "@/data/site";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ContactCardProps {
  className?: string;
}

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function ContactCard({ className }: ContactCardProps) {
  return (
    <Card className={cn("flex flex-col gap-5", className)}>
      <div>
        <Badge variant="warning">Контакты требуют подтверждения</Badge>
        <h2 className="mt-4 text-2xl font-semibold leading-tight">Связаться удобным способом</h2>
        <p className="mt-3 text-base leading-7 text-muted">
          Эти данные нужны для структуры интерфейса. Перед публикацией заменить на реальные контакты
          бизнеса.
        </p>
      </div>
      <ul className="space-y-3 text-base leading-7">
        <li>
          <a
            className="inline-flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-ring"
            href={phoneHref(contacts.phone)}
          >
            <Phone aria-hidden="true" className="h-5 w-5 text-primary" />
            {contacts.phone}
          </a>
        </li>
        <li>
          <a
            className="inline-flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-ring"
            href={`mailto:${contacts.email}`}
          >
            <Mail aria-hidden="true" className="h-5 w-5 text-primary" />
            {contacts.email}
          </a>
        </li>
        <li className="flex gap-3 text-muted">
          <MapPin aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary" />
          <span>{contacts.address}</span>
        </li>
        <li className="flex gap-3 text-muted">
          <Clock aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary" />
          <span>{contacts.workingHours}</span>
        </li>
      </ul>
      <div className="flex flex-wrap gap-3">
        {contacts.messengers.map((messenger) => {
          const isExternal = /^https?:\/\//.test(messenger.href);

          return (
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold transition-colors duration-200 ease-out hover:border-primary/35 hover:bg-surface-alt focus-visible:outline-ring"
              href={messenger.href}
              key={messenger.label}
              rel={isExternal ? "noreferrer" : undefined}
              target={isExternal ? "_blank" : undefined}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4 text-primary" />
              {messenger.label}
            </a>
          );
        })}
      </div>
    </Card>
  );
}
