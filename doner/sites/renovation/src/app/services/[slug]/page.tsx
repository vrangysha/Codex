import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ServiceChoiceForm } from "@/components/forms/service-choice-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceBySlug, services, siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  serviceProviderSchema,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const staticServiceSlugs = new Set([
  "apartment-renovation",
  "house-renovation",
  "cosmetic-renovation",
  "capital-renovation",
  "design-project",
]);

export function generateStaticParams() {
  return services
    .filter((service) => !staticServiceSlugs.has(service.slug))
    .map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: service.route,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: serviceProviderSchema(),
      areaServed: siteConfig.serviceArea,
      url: absoluteUrl(service.route),
    },
    breadcrumbSchema([
      { name: "Главная", path: "/" },
      { name: "Услуги", path: "/services" },
      { name: service.title, path: service.route },
    ]),
  ];

  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { href: "/services", label: "Услуги" },
              { current: true, label: service.title },
            ]}
          />
          <Badge className="mt-8" variant="warning">
            Маршрут подготовлен для будущего этапа
          </Badge>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/services">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Все услуги
            </Link>
            <Link
              className={buttonVariants({ variant: "primary", size: "lg" })}
              href="#service-route-form"
            >
              Получить консультацию
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <article className="rounded-lg border border-border bg-surface p-6 shadow-soft">
          <h2 className="text-2xl font-semibold leading-tight">Краткий состав услуги</h2>
          <ul className="mt-6 space-y-3 text-base leading-7 text-muted">
            {service.includes.map((item) => (
              <li className="flex gap-3" key={item}>
                <span
                  aria-hidden="true"
                  className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 grid gap-3 rounded-md bg-background p-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm leading-5 text-muted">Примерный срок</dt>
              <dd className="mt-1 font-semibold leading-6 text-foreground">
                {service.estimatedTime}
              </dd>
            </div>
            <div>
              <dt className="text-sm leading-5 text-muted">Ориентир цены</dt>
              <dd className="mt-1 font-semibold leading-6 text-foreground">{service.priceFrom}</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-6 text-muted">
            Эта страница является безопасным резервным маршрутом этапа 07. Полная SEO-страница
            услуги будет раскрыта на соответствующем будущем этапе.
          </p>
        </article>
      </Section>

      <Section
        background="surface-alt"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
      >
        <div id="service-route-form">
          <SectionHeading
            description="Если этот формат подходит не полностью, уточним состояние объекта и предложим другой маршрут работ."
            title="Уточнить формат ремонта"
          />
        </div>
        <ServiceChoiceForm />
      </Section>

      <JsonLd data={jsonLd} />
    </>
  );
}
