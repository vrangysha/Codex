import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Fan,
  FileText,
  Flame,
  Gauge,
  Hammer,
  Layers,
  Network,
  Plug,
  Ruler,
  Sparkles,
  Truck,
  WalletCards,
  Zap,
} from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects, pricingPackages } from "@/data/site";
import { cn } from "@/lib/utils";

type PricingPackage = (typeof pricingPackages)[number];
type HousePackage = {
  note: string;
  pricePackage: PricingPackage;
  title: string;
};

const trustBullets = [
  { icon: ClipboardCheck, label: "технический осмотр" },
  { icon: Gauge, label: "инженерная смета" },
  { icon: Camera, label: "контроль этапов" },
  { icon: WalletCards, label: "поэтапная оплата" },
];

const houseFeatures = [
  {
    icon: Zap,
    title: "Больше инженерных систем",
    description:
      "Электрика, отопление, водоснабжение, вентиляция и слаботочные линии должны быть согласованы как единая схема.",
  },
  {
    icon: Droplets,
    title: "Влажные и технические зоны",
    description:
      "Санузлы, постирочная, котельная и хозяйственные помещения требуют отдельной проверки узлов и материалов.",
  },
  {
    icon: Layers,
    title: "Лестницы и высокие потолки",
    description:
      "Нужны безопасные решения для отделки высоты, стыков, освещения, ограждений и примыканий.",
  },
  {
    icon: Flame,
    title: "Котельная и санузлы",
    description:
      "Технические помещения нельзя планировать как обычные комнаты: важны доступ, вентиляция и сервисное обслуживание.",
  },
  {
    icon: Hammer,
    title: "Утепление и черновые работы",
    description:
      "Качество основания влияет на отделку, микроклимат, сезонность работ и долговечность финишных покрытий.",
  },
  {
    icon: Truck,
    title: "Логистика материалов",
    description:
      "Площадь дома увеличивает объём поставок, место хранения и риск простоя, если материалы не согласованы заранее.",
  },
];

const includedWorkGroups = [
  "черновая отделка",
  "электрика",
  "водоснабжение",
  "отопление",
  "вентиляция",
  "санузлы",
  "напольные покрытия",
  "стены и потолки",
  "лестницы",
  "технические помещения",
  "финальная отделка",
];

const processSteps = [
  "Осмотр дома",
  "Обмеры и техническое обследование",
  "План работ",
  "Инженерная смета",
  "Материалы",
  "Черновой этап",
  "Инженерные системы",
  "Чистовая отделка",
  "Проверка и сдача",
];

const engineeringItems = [
  {
    icon: Zap,
    title: "Электрика",
    text: "Группы, нагрузки, щиты, выводы под свет, технику и будущие сценарии использования.",
  },
  {
    icon: Droplets,
    title: "Сантехника",
    text: "Разводка, мокрые зоны, доступ к узлам, гидроизоляция и порядок проверки до закрытия конструкций.",
  },
  {
    icon: Flame,
    title: "Отопление",
    text: "Радиаторы, тёплые полы, котельная, коллекторы и согласование отделки с техническим обслуживанием.",
  },
  {
    icon: Fan,
    title: "Вентиляция",
    text: "Воздухообмен в санузлах, кухне, котельной и технических помещениях без случайных решений на финише.",
  },
  {
    icon: Network,
    title: "Слаботочные системы",
    text: "Интернет, камеры, домофония, датчики и точки доступа планируются до чистовой отделки.",
  },
  {
    icon: Plug,
    title: "Выводы под технику",
    text: "Кухня, постирочная, мастер-санузел, насосное оборудование и наружные потребители получают понятные точки.",
  },
];

const logisticsItems = [
  {
    icon: Ruler,
    title: "Планируем закупку по зонам",
    text: "Разделяем материалы для чернового этапа, инженерии и чистовой отделки, чтобы не перегружать объект.",
  },
  {
    icon: Boxes,
    title: "Снижаем риск простоев",
    text: "Критичные позиции выбираются заранее: без них нельзя закрывать стены, запускать мокрые зоны или сдавать этап.",
  },
  {
    icon: Truck,
    title: "Контролируем поставку",
    text: "Фиксируем сроки доставки, место хранения, подъезд, разгрузку и зависимость работ от поставщиков.",
  },
  {
    icon: FileText,
    title: "Согласуем материалы заранее",
    text: "Замены и аналоги должны быть понятны по цене, срокам, внешнему виду и влиянию на технологию работ.",
  },
];

const packageSlugByTitle = {
  "Базовая отделка": "cosmetic",
  "Капитальный ремонт": "capital",
  "Ремонт под ключ": "turnkey",
  "Дизайнерский ремонт дома": "designer",
} as const;

const packageNotes: Record<keyof typeof packageSlugByTitle, string> = {
  "Базовая отделка":
    "Для дома с подготовленной инженерией, где нужно аккуратно довести основные поверхности и помещения.",
  "Капитальный ремонт":
    "Для домов с демонтажом, заменой инженерии, черновыми работами и серьёзной подготовкой основания.",
  "Ремонт под ключ":
    "Для собственника, которому нужен один ответственный процесс: от обследования до финальной сдачи.",
  "Дизайнерский ремонт дома":
    "Для сложных планировок, высоких потолков, лестниц, технических помещений и точного подбора материалов.",
};

export const houseRenovationFaq = [
  {
    question: "Чем ремонт дома отличается от ремонта квартиры?",
    answer:
      "В доме больше инженерных систем, технических помещений, влажных зон, высот, поставок и зависимостей между этапами. Поэтому перед сметой важны осмотр, обмеры и техническое обследование.",
  },
  {
    question: "Сколько длится ремонт дома?",
    answer:
      "Срок зависит от площади, состояния конструкций, объёма инженерии, сезонности, материалов и этапности. Ориентиры на сайте являются временными данными; реальный график формируется после осмотра.",
  },
  {
    question: "Можно ли делать ремонт дома поэтапно?",
    answer:
      "Да, дом часто разумно делить на зоны или инженерные этапы. Важно заранее согласовать порядок работ, платежей, закупок и временного хранения материалов.",
  },
  {
    question: "Кто отвечает за инженерные системы?",
    answer:
      "На странице предполагается единый контроль процесса, но реальные зоны ответственности, подрядчики и гарантийные условия должны быть закреплены в договоре и смете.",
  },
  {
    question: "Можно ли работать зимой?",
    answer:
      "Некоторые внутренние работы возможны зимой, если дом подготовлен по температуре, влажности и инженерным условиям. Ограничения зависят от материалов и состояния объекта.",
  },
  {
    question: "Как хранить материалы на объекте?",
    answer:
      "Материалы нужно хранить по требованиям производителя: с контролем влажности, температуры, доступа и защиты от повреждений. Порядок хранения лучше включить в план поставок.",
  },
];

const relatedProjects = portfolioProjects
  .filter(
    (project) =>
      project.type === "Дом" || project.type === "Помещение" || project.type === "Мокрая зона",
  )
  .slice(0, 3);

export function HouseRenovationPage() {
  const packages = Object.entries(packageSlugByTitle)
    .map(([title, slug]) => {
      const pricePackage = pricingPackages.find((item) => item.slug === slug);

      return pricePackage
        ? {
            title,
            note: packageNotes[title as keyof typeof packageNotes],
            pricePackage,
          }
        : null;
    })
    .filter((item): item is HousePackage => item !== null);

  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { href: "/services", label: "Услуги" },
              { current: true, label: "Ремонт домов" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Ремонт частного дома
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Ремонт домов под ключ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Внутренние работы, инженерия, отделка и контроль качества для частных домов, коттеджей и
            таунхаусов. Начинаем с осмотра, чтобы не обещать цену и сроки без понимания технического
            состояния.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#house-plan">
              Рассчитать ремонт дома
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#house-plan"
            >
              Обсудить проект
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustBullets.map(({ icon: Icon, label }) => (
              <li
                className="flex min-h-12 items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground"
                key={label}
              >
                <Icon aria-hidden="true" className="h-5 w-5 flex-none text-primary" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
          <Image
            alt="Светлая AI-иллюстрация современного частного дома после ремонта"
            className="aspect-[4/3] h-full w-full object-cover"
            height={1024}
            priority
            quality={90}
            src="/images/generated/house-renovation-hero-ai.webp"
            width={1456}
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-background/92 px-4 py-3 text-sm leading-6 text-muted backdrop-blur">
            <span>Светлый интерьер дома для визуального ориентира</span>
            <Badge variant="warning">AI-иллюстрация, не реальный объект</Badge>
          </figcaption>
        </figure>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Дом сложнее квартиры не площадью самой по себе, а количеством связанных инженерных и эксплуатационных решений."
          title="Особенности ремонта дома"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {houseFeatures.map(({ icon: Icon, title, description }) => (
            <article
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={title}
            >
              <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            description="Фактический состав работ зависит от состояния дома, инженерных систем, высоты помещений, мокрых зон и выбранного уровня отделки."
            title="Что входит в ремонт дома"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {includedWorkGroups.map((item) => (
              <div
                className="flex min-h-14 items-center gap-3 rounded-md border border-border bg-surface px-4 py-3"
                key={item}
              >
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 flex-none text-primary" />
                <span className="text-base font-semibold leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Этапы помогают отделить технические решения от чистовой отделки, увидеть зависимости и снизить риск переделок."
          title="Как проходит ремонт дома"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <li className="rounded-lg border border-border bg-surface p-6 shadow-soft" key={step}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{step}</h3>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="scroll-mt-24" id="engineering">
        <SectionHeading
          description="Инженерные решения нужно согласовать до чистовой отделки. Так меньше случайных переносов, штробления по готовым стенам и конфликтов между системами."
          title="Инженерия без сюрпризов"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {engineeringItems.map(({ icon: Icon, title, text }) => (
            <article
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={title}
            >
              <Icon aria-hidden="true" className="h-7 w-7 text-accent" />
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeading
            description="В ремонте дома поставки часто влияют на весь график. Чем раньше согласованы материалы, тем меньше пауз между черновыми, инженерными и чистовыми этапами."
            title="Материалы и логистика"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {logisticsItems.map(({ icon: Icon, title, text }) => (
              <article
                className="rounded-lg border border-border bg-surface p-6 shadow-soft"
                key={title}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Показываем только демонстрационную структуру будущего портфолио. Нужны реальные объекты домов или больших помещений с разрешением на публикацию."
            title="Похожие проекты домов и больших зон"
          />
          <Link className={buttonVariants({ variant: "secondary" })} href="/portfolio">
            Все проекты
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedProjects.map((project) => (
            <ProjectCard
              href="/portfolio"
              key={project.slug}
              location={project.location}
              note="Демо-кейс. Для публикации нужны реальные фото, состав работ, даты, бюджетный диапазон и разрешение владельца."
              scope={`${project.description} Состав: ${project.scope.join(", ")}.`}
              status={project.isDemo ? "placeholder" : "real"}
              title={project.title}
            />
          ))}
        </div>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Пакеты являются ориентиром для первого разговора. Точную стоимость ремонта дома нельзя обещать без осмотра, технического обследования и сметы по зонам."
          title="Ориентировочные пакеты"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {packages.map(({ title, note, pricePackage }, index) => (
            <article
              className={cn(
                "flex rounded-lg border border-border bg-surface p-6 shadow-soft",
                index === 2 && "border-primary/45 bg-primary text-primary-foreground",
              )}
              key={title}
            >
              <div className="flex min-h-full w-full flex-col">
                <Badge variant={index === 2 ? "accent" : "warning"}>Ориентир, не оферта</Badge>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{title}</h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-6 text-muted",
                    index === 2 && "text-primary-foreground/80",
                  )}
                >
                  {note}
                </p>
                <dl className="mt-6 grid gap-4 text-sm leading-6">
                  <div>
                    <dt className={cn("text-muted", index === 2 && "text-primary-foreground/75")}>
                      Лучше для
                    </dt>
                    <dd className="mt-1 font-semibold">{pricePackage.bestFor}</dd>
                  </div>
                  <div>
                    <dt className={cn("text-muted", index === 2 && "text-primary-foreground/75")}>
                      Срок
                    </dt>
                    <dd className="mt-1 font-semibold">{pricePackage.timeline}</dd>
                  </div>
                  <div>
                    <dt className={cn("text-muted", index === 2 && "text-primary-foreground/75")}>
                      Ориентир цены
                    </dt>
                    <dd className="mt-1 font-semibold">
                      {pricePackage.priceFrom} / {pricePackage.unit}
                    </dd>
                  </div>
                </dl>
                <ul className="mt-6 space-y-3">
                  {pricePackage.includes.slice(0, 4).map((feature) => (
                    <li className="flex gap-3 text-sm leading-6" key={feature}>
                      <CheckCircle2
                        aria-hidden="true"
                        className={cn(
                          "mt-0.5 h-5 w-5 flex-none text-primary",
                          index === 2 && "text-primary-foreground",
                        )}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className={cn(
                    "mt-6 text-sm leading-6 text-muted",
                    index === 2 && "text-primary-foreground/80",
                  )}
                >
                  Итоговая смета зависит от осмотра дома, инженерии, материалов и этапности.
                </p>
                <div className="mt-auto pt-6">
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: index === 2 ? "secondary" : "primary",
                        size: "lg",
                      }),
                      "w-full",
                    )}
                    href="#house-plan"
                  >
                    Получить план
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeading
            description="Ответы помогают понять логику работ, но договор, смета, гарантия и зона ответственности должны быть подтверждены владельцем бизнеса."
            title="FAQ по ремонту домов"
          />
          <Accordion
            items={houseRenovationFaq.map((item, index) => ({
              content: item.answer,
              title: item.question,
              value: `house-faq-${index}`,
            }))}
          />
        </div>
      </Section>

      <Section
        background="surface-alt"
        className="scroll-mt-24"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        id="house-plan"
      >
        <div>
          <Badge variant="accent">План ремонта дома</Badge>
          <SectionHeading
            className="mt-5"
            description="Опишите дом, площадь, состояние инженерии и желаемый формат работ. Форма уже валидируется через тестовый обработчик заявок; CRM/почта подключается отдельно."
            title="Получить план ремонта дома"
          />
          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <Sparkles aria-hidden="true" className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm leading-6 text-muted">
              План и смета по дому формируются после осмотра, обмеров и проверки ключевых инженерных
              узлов.
            </p>
          </div>
        </div>
        <LeadForm
          description="Укажите параметры дома, площадь и ближайший удобный срок обсуждения. Форма валидируется на клиенте и сервере; CRM/почта пока не подключена."
          source="service_context"
          title="Получить план ремонта дома"
        />
      </Section>
    </>
  );
}
