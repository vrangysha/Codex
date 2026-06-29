import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contacts, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export interface FinalCtaProps {
  className?: string;
  description?: string;
  title?: string;
}

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function FinalCta({
  className,
  description = "Опишите объект, площадь и желаемый формат ремонта. Контактная форма использует безопасный тестовый обработчик; CRM, почта и вебхук подключаются отдельно.",
  title = "Получите понятный следующий шаг по ремонту",
}: FinalCtaProps) {
  return (
    <section className={cn("bg-primary text-primary-foreground", className)}>
      <Container
        className="grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-center lg:py-16"
        size="wide"
      >
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-primary-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/80">
            {description}
          </p>
          {siteConfig.isPlaceholder ? (
            <p className="mt-4 text-sm leading-6 text-primary-foreground/75">
              Контакты и реквизиты пока условные. Не публиковать как реальные без замены.
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/contacts">
            Рассчитать стоимость
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
            )}
            href={phoneHref(contacts.phone)}
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            Позвонить
          </a>
        </div>
      </Container>
    </section>
  );
}
