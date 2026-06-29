import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/data/site";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container
        className="grid gap-10 py-12 pb-32 md:grid-cols-[1.1fr_0.9fr_0.8fr_0.9fr] md:pb-12 lg:py-16"
        size="wide"
      >
        <div>
          <Link
            className="inline-flex min-h-11 items-center rounded-md text-xl font-semibold text-foreground focus-visible:outline-ring"
            href="/"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-sm text-base leading-7 text-muted">{siteConfig.tagline}</p>
          {siteConfig.isPlaceholder ? (
            <p className="mt-5 rounded-md border border-warning/30 bg-warning/20 px-4 py-3 text-sm leading-6 text-warning-foreground">
              Контакты, реквизиты, регион работ и гарантии пока отмечены как условные данные.
            </p>
          ) : null}
          <Link className={buttonVariants({ className: "mt-6" })} href={navigation.footer.cta.href}>
            {navigation.footer.cta.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <FooterColumn title="Услуги" items={navigation.footer.services} />
        <FooterColumn title="Разделы" items={navigation.main.filter((item) => item.href !== "/")} />

        <div>
          <h2 className="text-base font-semibold text-foreground">Контакты</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>
              <a
                className="inline-flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-ring"
                href={phoneHref(siteConfig.phone)}
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-primary" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-ring"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail aria-hidden="true" className="h-4 w-4 text-primary" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-primary" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-primary" />
              <span>{siteConfig.workingHours}</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.messengers.map((messenger) => {
              const isExternal = /^https?:\/\//.test(messenger.href);

              return (
                <a
                  className="inline-flex min-h-11 items-center rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:border-primary/35 hover:bg-surface-alt focus-visible:outline-ring"
                  href={messenger.href}
                  key={messenger.label}
                  rel={isExternal ? "noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  {messenger.label}
                </a>
              );
            })}
          </div>
        </div>
      </Container>

      <Container
        className="flex flex-col gap-4 border-t border-border py-6 text-sm text-muted md:flex-row md:items-center md:justify-between"
        size="wide"
      >
        <p>
          © {year} {siteConfig.name}. Реальные юридические данные требуют подтверждения.
        </p>
        <nav aria-label="Юридические ссылки" className="flex flex-wrap gap-x-5 gap-y-2">
          {navigation.footer.legal.map((item) => (
            <Link
              className="inline-flex min-h-11 items-center rounded-sm hover:text-foreground focus-visible:outline-ring"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}

function FooterColumn({
  items,
  title,
}: {
  items: readonly { href: string; label: string }[];
  title: string;
}) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <nav aria-label={title} className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <Link
            className="inline-flex min-h-11 items-center rounded-md text-sm font-medium text-muted transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-ring"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
