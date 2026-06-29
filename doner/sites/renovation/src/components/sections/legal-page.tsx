import Link from "next/link";
import { AlertTriangle, ArrowRight, CalendarDays, FileText, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contacts, siteConfig } from "@/data/site";

export type LegalSection = {
  title: string;
  body: string[];
};

export interface LegalPageProps {
  description: string;
  sections: LegalSection[];
  title: string;
  updatedAt: string;
}

export function LegalPage({ description, sections, title, updatedAt }: LegalPageProps) {
  return (
    <>
      <section className="bg-background">
        <Container className="pb-14 pt-8 sm:pt-10 lg:pb-20" size="wide">
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: title },
            ]}
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div className="min-w-0">
              <Badge variant="warning">Требует юридической проверки</Badge>
              <SectionHeading
                className="mt-6 max-w-4xl"
                description={description}
                title={title}
                titleAs="h1"
              />
            </div>
            <Card className="min-w-0 bg-surface-alt">
              <div className="flex items-start gap-4">
                <AlertTriangle
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-warning-foreground"
                />
                <div>
                  <h2 className="text-lg font-semibold leading-tight">Юридический статус</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Текст является шаблоном и требует проверки юристом. Не публиковать как
                    утверждённый документ без владельца бизнеса и юриста.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]" size="wide">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-background p-5">
              <p className="text-sm font-semibold text-foreground">Разделы</p>
              <nav
                aria-label={`Навигация по странице ${title}`}
                className="mt-4 flex flex-col gap-2"
              >
                {sections.map((section) => (
                  <a
                    className="inline-flex min-h-11 items-center rounded-md text-sm font-medium text-muted transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-ring"
                    href={`#${sectionId(section.title)}`}
                    key={section.title}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="rounded-lg border border-border bg-background p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <FileText aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Временный документ для структуры сайта.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm leading-6 text-muted">
                <CalendarDays
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 flex-none text-primary"
                />
                <span>Дата обновления: {updatedAt}</span>
              </div>
            </div>

            <div className="mt-8 space-y-10">
              {sections.map((section) => (
                <section id={sectionId(section.title)} key={section.title}>
                  <h2 className="text-2xl font-semibold leading-tight">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-muted">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-warning/30 bg-warning/20 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-warning-foreground"
                />
                <p className="text-sm leading-6 text-warning-foreground">
                  Перед публичным запуском нужно заменить временные данные, согласовать текст с
                  юристом и проверить соответствие реальным процессам обработки заявок.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className={buttonVariants({ variant: "secondary", size: "lg" })}
                href="/contacts"
              >
                Контакты
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                className={buttonVariants({ variant: "outline", size: "lg" })}
                href={`mailto:${contacts.email}`}
              >
                {contacts.email}
              </a>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^а-яa-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
