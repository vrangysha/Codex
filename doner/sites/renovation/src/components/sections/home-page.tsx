import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  Phone,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { FinalCta } from "@/components/sections/final-cta";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { getServiceIcon } from "@/components/sections/service-icons";
import { TrustBar } from "@/components/sections/trust-bar";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LeadButton } from "@/components/ui/lead-button";
import { PriceCard } from "@/components/ui/price-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import {
  contacts,
  faqGroups,
  portfolioProjects,
  pricingPackages,
  processSteps,
  services,
  siteConfig,
  testimonials,
} from "@/data/site";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    title: "Договор",
    description: "Фиксируем состав работ, этапы и ответственность до старта.",
  },
  {
    title: "Смета",
    description: "Разделяем работы, материалы и допущения, чтобы не прятать расходы.",
  },
  {
    title: "Гарантия",
    description: "Условия гарантии требуют подтверждения владельцем бизнеса.",
  },
  {
    title: "Контроль качества",
    description: "Проверяем этапы, скрытые работы и замечания до сдачи.",
  },
  {
    title: "Материалы",
    description: "Помогаем с подбором, аналогами, закупкой и сроками поставки.",
  },
];

const problemSolutions = [
  {
    problem: "Боитесь, что смета вырастет после старта?",
    solution: "Фиксируем объём работ и согласуем изменения письменно.",
  },
  {
    problem: "Нет времени контролировать мастеров?",
    solution: "Прораб ведёт объект, закрывает вопросы и отправляет отчёты по этапам.",
  },
  {
    problem: "Не знаете, какие материалы выбрать?",
    solution: "Помогаем подобрать совместимые материалы и заранее увидеть критичные поставки.",
  },
  {
    problem: "Не хотите управлять разными подрядчиками?",
    solution: "Собираем ремонт, инженерию, материалы и контроль в одну последовательность.",
  },
];

const standards = [
  {
    icon: ClipboardCheck,
    title: "Скрытые работы",
    text: "Закрываем только после проверки и фиксации результата.",
  },
  {
    icon: FileCheck2,
    title: "Фотоотчёты",
    text: "Формат и частоту нужно подтвердить, но место под отчётность предусмотрено.",
  },
  {
    icon: PackageCheck,
    title: "Закупка без хаоса",
    text: "Материалы привязаны к смете и графику, а не покупаются в последний момент.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    text: "Условия гарантии должны быть внесены в договор и юридические страницы.",
  },
  {
    icon: BadgeCheck,
    title: "Документы",
    text: "Договор, приложения, акты и изменения должны быть понятны клиенту.",
  },
  {
    icon: Sparkles,
    title: "Чистота объекта",
    text: "Финальная уборка и порядок на объекте задаются как стандарт работы.",
  },
];

const featuredServices = [
  "apartment-renovation",
  "house-renovation",
  "cosmetic-renovation",
  "capital-renovation",
  "design-project",
  "engineering",
];

const faqPreview = [
  faqGroups.find((group) => group.slug === "pricing")?.items[0],
  faqGroups.find((group) => group.slug === "design")?.items[0],
  faqGroups.find((group) => group.slug === "materials")?.items[1],
  faqGroups.find((group) => group.slug === "timeline")?.items[0],
  faqGroups.find((group) => group.slug === "warranty")?.items[0],
  faqGroups.find((group) => group.slug === "contract-payment")?.items[0],
].filter(Boolean);

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function HomePage() {
  const servicePreview = services.filter((service) => featuredServices.includes(service.slug));
  const portfolioPreview = portfolioProjects.slice(0, 4);
  const pricingPreview = pricingPackages.slice(0, 4);
  const testimonialPreview = testimonials.slice(0, 3);
  const processPreview = processSteps.slice(0, 6);

  return (
    <>
      <Section
        className="overflow-hidden"
        containerClassName="grid min-h-[calc(100dvh-5rem)] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]"
        containerSize="wide"
      >
        <div className="max-w-3xl py-8">
          <Badge variant="primary">Ремонт квартир и домов под ключ</Badge>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-normal text-foreground sm:text-5xl lg:text-7xl">
            Ремонт без хаоса, сорванных сроков и скрытых расходов
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Планируем смету, этапы, материалы и контроль работ до старта. Вы понимаете, кто отвечает
            за объект, как принимаются этапы и что происходит после заявки.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LeadButton href="#estimate">Рассчитать стоимость</LeadButton>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="/portfolio"
            >
              Посмотреть работы
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
            {[
              "договор и прозрачная смета",
              "поэтапная оплата",
              "гарантия на работы",
              "фотоотчёты по этапам",
            ].map((item) => (
              <li className="flex gap-3" key={item}>
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-border bg-surface p-4 shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-alt">
              <Image
                alt="Иллюстративный светлый интерьер после ремонта, созданный AI для hero-блока"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                src="/images/generated/home-hero-renovation-ai.webp"
              />
              <div className="absolute left-4 top-4">
                <Badge variant="warning">AI-иллюстрация</Badge>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { label: "старт", value: "от 2 недель" },
                { label: "гарантия", value: "срок уточнить" },
                { label: "контроль", value: `${processSteps.length} этапов` },
              ].map((stat) => (
                <div className="rounded-md bg-background p-4" key={stat.label}>
                  <p className="text-sm leading-5 text-muted">{stat.label}</p>
                  <p className="mt-1 font-semibold leading-6 text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <TrustBar items={trustItems} />

      <Section
        background="surface-alt"
        containerClassName="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
      >
        <SectionHeading
          description="Главная должна говорить с тревогами собственника напрямую: стоимость, контроль, материалы, ответственность и документы."
          title="Закрываем типичные риски ремонта до того, как они станут проблемой"
        />
        <div className="grid gap-4">
          {problemSolutions.map((item) => (
            <article
              className="grid gap-4 rounded-lg border border-border bg-background p-5 md:grid-cols-[0.92fr_1.08fr]"
              key={item.problem}
            >
              <h3 className="text-xl font-semibold leading-tight">{item.problem}</h3>
              <p className="text-base leading-7 text-muted">{item.solution}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            description="Основные направления собраны так, чтобы клиент быстро нашёл свой сценарий и перешёл к деталям услуги."
            title="Услуги для квартиры, дома и сложного ремонта"
          />
          <Link className={buttonVariants({ variant: "outline" })} href="/services">
            Все услуги
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicePreview.map((service) => {
            const Icon = getServiceIcon(service.iconName);

            return (
              <ServiceCard
                description={service.description}
                href={service.route}
                icon={Icon}
                key={service.slug}
                points={service.includes.slice(0, 3)}
                title={service.title}
              />
            );
          })}
        </div>
      </Section>

      <Section
        background="surface-alt"
        containerClassName="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start"
      >
        <div className="lg:sticky lg:top-28">
          <Badge variant="accent">Предварительный расчёт</Badge>
          <SectionHeading
            className="mt-5"
            description="Форма помогает собрать исходные данные без лишнего давления. Точная смета возможна только после замера и уточнения материалов."
            title="Получите ориентир по стоимости и следующему шагу"
          />
          <p className="mt-6 text-base leading-7 text-muted">
            Форма уже подключена к безопасному тестовому обработчику заявок с клиентской и серверной
            валидацией. CRM, почта или вебхук подключаются отдельно после выбора реального маршрута
            обработки.
          </p>
        </div>
        <div id="estimate">
          <LeadForm source="home_quick_estimate" title="Получите предварительный расчёт" />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            description="Это демонстрация структуры портфолио. Реальные фото, сроки, состав работ и разрешения на публикацию нужно добавить перед запуском."
            title="Как будет выглядеть блок портфолио"
          />
          <Link className={buttonVariants({ variant: "outline" })} href="/portfolio">
            Перейти в портфолио
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {portfolioPreview.map((project) => (
            <article
              className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft"
              key={project.slug}
            >
              <div className="relative aspect-[4/3] bg-surface-alt">
                <Image
                  alt={project.imageAlt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  src={project.image}
                />
                <div className="absolute left-3 top-3">
                  <Badge variant="warning">Демо</Badge>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium leading-6 text-muted">
                  {project.type} · {project.area} · {project.duration}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.scope.slice(0, 2).join(", ")}
                </p>
                <Link
                  className="mt-4 inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-primary hover:text-foreground focus-visible:outline-ring"
                  href="/portfolio"
                >
                  Смотреть структуру кейса
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            description="Показываем короткую версию процесса на главной, а детальная последовательность будет на отдельной странице."
            title="Как проходит ремонт"
          />
          <Link className={buttonVariants({ variant: "outline" })} href="/process">
            Все этапы
          </Link>
        </div>
        <div className="mt-10">
          <ProcessTimeline heading={false} steps={processPreview} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            description="Суммы являются условными ориентирами и не публичной офертой. Нужны реальные цены, условия и ограничения."
            title="Ориентиры по форматам ремонта"
          />
          <Link className={buttonVariants({ variant: "outline" })} href="/pricing">
            Подробнее о ценах
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPreview.map((item, index) => (
            <PriceCard
              description={item.description}
              features={item.includes.slice(0, 4)}
              highlighted={index === 2}
              key={item.slug}
              note={`Ориентировочно. ${item.timeline}`}
              price={`${item.priceFrom} / ${item.unit}`}
              title={item.name}
            />
          ))}
        </div>
      </Section>

      <Section
        background="surface-alt"
        containerClassName="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
      >
        <SectionHeading
          description="Стандарты показывают, как компания должна удерживать качество. Формулировки требуют подтверждения бизнесом перед запуском."
          title="Стандарты, которые создают доверие"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="rounded-lg border border-border bg-background p-5"
                key={item.title}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Эти отзывы демонстрационные. Перед публикацией нужны реальные отзывы, источник, дата и разрешение на использование."
          title="Как будет выглядеть блок отзывов"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonialPreview.map((item) => (
            <article
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={item.name}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={item.isDemo ? "warning" : "success"}>
                  {item.isDemo ? "Демо-отзыв" : "Подтверждённый отзыв"}
                </Badge>
                <span className="text-sm font-medium text-muted">{item.rating} из 5</span>
              </div>
              <blockquote className="mt-5 text-base leading-7 text-foreground">
                “{item.text}”
              </blockquote>
              <p className="mt-5 text-sm font-semibold leading-6 text-foreground">{item.name}</p>
              <p className="text-sm leading-6 text-muted">
                {item.projectType}, {item.date}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            description="Короткие ответы снимают самые частые сомнения до заявки. Подробный FAQ будет вынесен на отдельную страницу."
            title="Вопросы перед стартом ремонта"
          />
          <Accordion
            items={faqPreview.map((item) => ({
              content: <p>{item!.answer}</p>,
              title: item!.question,
              value: item!.question,
            }))}
          />
        </div>
      </Section>

      <FinalCta
        description={`Оставьте заявку или позвоните ${contacts.phone}. Детали объекта и персональные данные не публикуются; юридический текст политики нужно подтвердить перед запуском.`}
        title="Готовы обсудить ремонт без давления и скрытых условий?"
      />

      {siteConfig.isPlaceholder ? (
        <section className="border-t border-border bg-background">
          <div className="mx-auto flex max-w-container-wide flex-col gap-3 px-4 py-6 text-sm leading-6 text-muted sm:px-6 md:px-8 lg:px-10">
            <p>
              Важная пометка: контакты, цены, сроки, гарантия, портфолио и отзывы на этой странице
              являются условными данными или демонстрацией структуры.
            </p>
            <p>
              Перед запуском заменить на подтверждённые данные владельца бизнеса и проверить
              юридические тексты.
            </p>
            <a
              className={cn(
                buttonVariants({ variant: "link" }),
                "self-start text-sm text-primary focus-visible:outline-ring",
              )}
              href={phoneHref(contacts.phone)}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Позвонить по условному номеру
            </a>
          </div>
        </section>
      ) : null}
    </>
  );
}
