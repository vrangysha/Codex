import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  ClipboardCheck,
  FileSignature,
  Hammer,
  KeyRound,
  SearchCheck,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ServiceChoiceForm } from "@/components/forms/service-choice-form";
import { FinalCta } from "@/components/sections/final-cta";
import { getServiceIcon } from "@/components/sections/service-icons";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { LeadButton } from "@/components/ui/lead-button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import {
  contacts,
  faqGroups,
  pricingPackages,
  serviceBySlug,
  services,
  siteConfig,
} from "@/data/site";
import { cn } from "@/lib/utils";

const includedSteps: {
  description: string;
  icon: LucideIcon;
  title: string;
}[] = [
  {
    icon: SearchCheck,
    title: "Замер",
    description: "Собираем исходные данные по объекту, состоянию и ожиданиям.",
  },
  {
    icon: Calculator,
    title: "Смета",
    description: "Разделяем работы, материалы, допущения и возможные ограничения.",
  },
  {
    icon: FileSignature,
    title: "Договор",
    description: "Фиксируем этапы, ответственность, оплату и порядок изменений.",
  },
  {
    icon: ShoppingCart,
    title: "Закупка",
    description: "Планируем материалы, аналоги и поставки под график ремонта.",
  },
  {
    icon: Hammer,
    title: "Ремонт",
    description: "Ведём черновые, инженерные и чистовые работы по согласованному составу.",
  },
  {
    icon: ClipboardCheck,
    title: "Контроль",
    description: "Проверяем скрытые и ключевые этапы до перехода дальше.",
  },
  {
    icon: Sparkles,
    title: "Уборка",
    description: "Оставляем объект готовым к финальному осмотру и передаче.",
  },
  {
    icon: KeyRound,
    title: "Сдача",
    description: "Передаём результат, документы и порядок гарантийного обращения.",
  },
];

const comparison = [
  {
    packageSlug: "cosmetic",
    serviceSlug: "cosmetic-renovation",
    title: "Косметический",
    when: "Интерьер устарел, но инженерия и базовые поверхности в порядке.",
  },
  {
    packageSlug: "capital",
    serviceSlug: "capital-renovation",
    title: "Капитальный",
    when: "Нужны демонтаж, замена электрики, сантехники и полная подготовка основания.",
  },
  {
    packageSlug: "turnkey",
    serviceSlug: "apartment-renovation",
    title: "Под ключ",
    when: "Нужен один ответственный подрядчик, который ведёт ремонт от замера до сдачи.",
  },
  {
    packageSlug: "designer",
    serviceSlug: "design-project",
    title: "Дизайнерский",
    when: "Важны планировка, визуальная цельность, чертежи и контроль соответствия проекту.",
  },
];

const chooser = [
  {
    answer: "Косметический ремонт",
    question: "Нужно быстро освежить интерьер?",
    serviceSlug: "cosmetic-renovation",
  },
  {
    answer: "Капитальный ремонт",
    question: "Нужно менять электрику и трубы?",
    serviceSlug: "capital-renovation",
  },
  {
    answer: "Ремонт под ключ",
    question: "Хотите въехать без участия в ремонте?",
    serviceSlug: "apartment-renovation",
  },
  {
    answer: "Дизайн-проект",
    question: "Нужна планировка и визуализация?",
    serviceSlug: "design-project",
  },
];

const serviceFaq = [
  faqGroups.find((group) => group.slug === "pricing")?.items[0],
  faqGroups.find((group) => group.slug === "timeline")?.items[0],
  faqGroups.find((group) => group.slug === "materials")?.items[1],
  faqGroups.find((group) => group.slug === "design")?.items[0],
  faqGroups.find((group) => group.slug === "contract-payment")?.items[0],
].filter(Boolean);

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function ServicesPage() {
  return (
    <>
      <Section
        className="overflow-hidden"
        containerClassName="grid gap-10 pt-4 lg:grid-cols-[0.98fr_1.02fr] lg:items-center"
        containerSize="wide"
      >
        <div className="max-w-3xl">
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "Услуги" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            {services.length} направлений ремонта
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-7xl">
            Услуги по ремонту квартир и домов
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Закрываем весь процесс от замера и сметы до закупки, ремонта, контроля качества и сдачи
            объекта. Если формат работ пока непонятен, поможем выбрать безопасный следующий шаг.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LeadButton href="#service-consultation">Получить консультацию</LeadButton>
            <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/pricing">
              Посмотреть цены
            </Link>
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "выбор", value: "по состоянию объекта" },
              { label: "цены", value: "ориентиры до замера" },
              { label: "маршрут", value: "от заявки до сдачи" },
            ].map((item) => (
              <div className="rounded-md border border-border bg-surface p-4" key={item.label}>
                <dt className="text-sm leading-5 text-muted">{item.label}</dt>
                <dd className="mt-1 font-semibold leading-6 text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="rounded-xl border border-border bg-surface p-4 shadow-soft">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-alt">
            <Image
              alt="AI-иллюстрация стола с планом ремонта, образцами материалов и измерительной рулеткой"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/generated/services-index-ai.webp"
            />
            <div className="absolute left-4 top-4">
              <Badge variant="warning">AI-иллюстрация</Badge>
            </div>
          </div>
          <figcaption className="mt-4 text-sm leading-6 text-muted">
            Иллюстративный кадр для выбора услуг. Не является фотографией реального объекта.
          </figcaption>
        </figure>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Карточки берут контент из централизованной модели: описание, состав работ, сроки, цены и ссылки."
          title="Выберите направление работ"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = getServiceIcon(service.iconName);

            return (
              <ServiceCard
                ctaLabel={service.cta}
                description={service.description}
                href={service.route}
                icon={Icon}
                key={service.slug}
                meta={[
                  { label: "Срок", value: service.estimatedTime },
                  {
                    label: "Цена",
                    value: service.isPlaceholderPrice
                      ? `${service.priceFrom} · ориентировочно`
                      : service.priceFrom,
                  },
                ]}
                points={service.includes.slice(0, 3)}
                title={service.title}
              />
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Сравнение показывает не “лучший” пакет, а сценарий, в котором формат ремонта действительно подходит."
          title="Сравните основные форматы"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {comparison.map((item) => {
            const pack = pricingPackages.find(
              (packageItem) => packageItem.slug === item.packageSlug,
            );
            const service = serviceBySlug[item.serviceSlug];

            if (!pack || !service) {
              return null;
            }

            return (
              <article
                className={cn(
                  "flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-soft",
                  item.packageSlug === "turnkey" ? "border-primary/45 bg-primary/5" : null,
                )}
                key={item.packageSlug}
              >
                <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                <dl className="mt-6 flex flex-1 flex-col gap-5 text-sm leading-6">
                  <div>
                    <dt className="font-semibold text-foreground">Когда подходит</dt>
                    <dd className="mt-2 text-muted">{item.when}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Что входит</dt>
                    <dd className="mt-2 text-muted">{pack.includes.slice(0, 4).join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Примерный срок</dt>
                    <dd className="mt-2 text-muted">{pack.timeline}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Ориентировочная цена</dt>
                    <dd className="mt-2 text-muted">
                      {pack.priceFrom} / {pack.unit}
                    </dd>
                  </div>
                </dl>
                <Link
                  className={cn(buttonVariants({ variant: "outline" }), "mt-6")}
                  href={service.route}
                >
                  {pack.cta}
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
          Цены и сроки являются условными ориентирами. Перед запуском нужны реальные условия,
          ограничения и юридически корректная формулировка оферты.
        </p>
      </Section>

      <Section background="surface">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            description="Собственнику не нужно держать в голове десятки подрядчиков. На странице показано, какие задачи можно собрать в один управляемый процесс."
            title="Что мы берём на себя"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {includedSteps.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-lg border border-border bg-background p-5"
                  key={item.title}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              description="Если пользователь ещё не знает терминов ремонта, он выбирает ситуацию, а не читает каталог подрядчика."
              title="Как выбрать услугу"
            />
            <Link className={buttonVariants({ variant: "secondary" })} href="#service-consultation">
              Подобрать формат по объекту
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {chooser.map((item) => {
              const service = serviceBySlug[item.serviceSlug];

              return (
                <article
                  className="rounded-lg border border-border bg-surface p-6 shadow-soft"
                  key={item.question}
                >
                  <p className="text-base font-semibold leading-7 text-foreground">
                    {item.question}
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-primary">
                    {item.answer}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                  <Link
                    className="mt-5 inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-primary hover:text-foreground focus-visible:outline-ring"
                    href={service.route}
                  >
                    Перейти к услуге
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section
        background="surface-alt"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
      >
        <div id="service-consultation">
          <Badge variant="accent">Подбор услуги</Badge>
          <SectionHeading
            className="mt-5"
            description="Форма не просит адрес и лишние персональные данные. Достаточно понять объект, площадь, состояние и способ связи."
            title="Получите консультацию по формату ремонта"
          />
          <p className="mt-6 text-base leading-7 text-muted">
            Форма уже отправляет данные в безопасный тестовый обработчик заявок с клиентской и
            серверной валидацией. CRM, почта, вебхук и финальная политика хранения данных остаются
            задачами интеграции.
          </p>
        </div>
        <ServiceChoiceForm />
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            description="Короткие ответы помогают выбрать между услугами без звонка. Полный FAQ будет реализован отдельной страницей."
            title="Вопросы по услугам"
          />
          <Accordion
            items={serviceFaq.map((item) => ({
              content: <p>{item!.answer}</p>,
              title: item!.question,
              value: item!.question,
            }))}
          />
        </div>
      </Section>

      <FinalCta
        description={`Расскажите о задаче или позвоните ${contacts.phone}. Если услуга выбрана неверно, мы подскажем другой формат после первичной консультации.`}
        title="Нужен понятный маршрут ремонта вместо списка работ?"
      />

      {siteConfig.isPlaceholder ? (
        <section className="border-t border-border bg-background">
          <div className="mx-auto flex max-w-container-wide flex-col gap-3 px-4 py-6 text-sm leading-6 text-muted sm:px-6 md:px-8 lg:px-10">
            <p>
              Важная пометка: цены, сроки, гарантия, маршруты услуг и условия заявки на этой
              странице являются условными данными до подтверждения владельцем бизнеса.
            </p>
            <a
              className={cn(
                buttonVariants({ variant: "link" }),
                "self-start text-sm text-primary focus-visible:outline-ring",
              )}
              href={phoneHref(contacts.phone)}
            >
              Позвонить по условному номеру
            </a>
          </div>
        </section>
      ) : null}
    </>
  );
}
