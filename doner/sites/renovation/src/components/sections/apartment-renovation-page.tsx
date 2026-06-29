import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Home,
  KeyRound,
  ListChecks,
  Ruler,
  ShieldCheck,
  Sparkles,
  WalletCards,
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
type ApartmentPackage = {
  note: string;
  pricePackage: PricingPackage;
  title: string;
};

const trustBullets = [
  { icon: FileText, label: "договор" },
  { icon: ShieldCheck, label: "гарантия" },
  { icon: Camera, label: "фотоотчёты" },
  { icon: WalletCards, label: "поэтапная оплата" },
];

const apartmentTypes = [
  {
    icon: Building2,
    title: "Новостройка без отделки",
    description: "Планируем черновые работы, электрику, сантехнику и чистовую отделку с нуля.",
  },
  {
    icon: ClipboardCheck,
    title: "Черновая отделка",
    description: "Проверяем качество базы от застройщика и доводим квартиру до готового состояния.",
  },
  {
    icon: Home,
    title: "Вторичное жильё",
    description: "Учитываем демонтаж, скрытые дефекты, замену инженерии и ограничения жилого дома.",
  },
  {
    icon: Ruler,
    title: "Студия",
    description:
      "Собираем компактный сценарий работ, где важны хранение, свет и аккуратные стыки зон.",
  },
  {
    icon: ListChecks,
    title: "Семейная квартира",
    description:
      "Разводим этапы по комнатам, мокрым зонам и графику согласований для нескольких жильцов.",
  },
  {
    icon: KeyRound,
    title: "Квартира под аренду",
    description:
      "Подбираем практичные решения, которые легче обслуживать и быстрее готовить к заселению.",
  },
];

const includedWorkGroups = [
  "демонтаж",
  "электрика",
  "сантехника",
  "выравнивание",
  "перегородки",
  "потолки",
  "плитка",
  "покраска или обои",
  "напольные покрытия",
  "двери и плинтусы",
  "уборка и передача",
];

const packageSlugByTitle = {
  "Базовый косметический": "cosmetic",
  Капитальный: "capital",
  "Под ключ": "turnkey",
  "С дизайн-проектом": "designer",
} as const;

const packageNotes: Record<keyof typeof packageSlugByTitle, string> = {
  "Базовый косметический":
    "Подходит, когда база исправна, а нужно обновить видимые поверхности и быстро привести квартиру в порядок.",
  Капитальный:
    "Подходит для вторички или квартиры с изношенной инженерией, где важно разобрать скрытые узлы до чистовой отделки.",
  "Под ключ":
    "Подходит, если нужен один подрядчик для сметы, графика, работ, закупок по согласованию и финальной сдачи.",
  "С дизайн-проектом":
    "Подходит, когда важны планировка, рабочие чертежи, подбор материалов и контроль соответствия решениям.",
};

const processSteps = [
  "Заявка",
  "Замер",
  "План работ",
  "Смета",
  "Договор",
  "Черновые работы",
  "Чистовая отделка",
  "Финальная проверка",
  "Сдача ключей",
];

const riskCards = [
  {
    title: "Смета растёт по ходу работ",
    text: "Снижаем риск за счёт подробного состава работ, допущений и отдельного согласования дополнительных задач.",
  },
  {
    title: "Шумные работы конфликтуют с правилами дома",
    text: "До старта уточняем режим работ, лифты, вывоз мусора и ограничения управляющей компании.",
  },
  {
    title: "Ошибки в электрике становятся видны поздно",
    text: "Фиксируем точки, группы, нагрузки и проверку до закрытия стен и чистовой отделки.",
  },
  {
    title: "Материалы не совпали с ожиданиями",
    text: "Согласовываем замены, аналоги и влияние поставок на стоимость и график до закупки.",
  },
  {
    title: "Сроки сдвигаются из-за поставок",
    text: "Выделяем критичные позиции заранее и показываем, какие решения могут остановить этап.",
  },
  {
    title: "Скрытые работы плохо контролируются",
    text: "Фиксируем промежуточные проверки и фотоотчёты до перехода к следующему слою ремонта.",
  },
];

export const apartmentRenovationFaq = [
  {
    question: "Сколько стоит ремонт квартиры под ключ?",
    answer:
      "Стоимость зависит от площади, состояния квартиры, инженерии, состава работ и материалов. Цены на странице являются ориентировочными значениями и не являются офертой; точная смета формируется после замера.",
  },
  {
    question: "Можно ли начать с замера и сметы без обязательства?",
    answer:
      "Да, первый шаг страницы предполагает заявку на предварительный расчёт. Условия выезда, платность замера и зона обслуживания должны быть подтверждены владельцем бизнеса перед публикацией.",
  },
  {
    question: "Делаете ремонт в новостройках и во вторичном жилье?",
    answer:
      "Да, структура услуги рассчитана на новостройки без отделки, черновую отделку от застройщика и вторичные квартиры с демонтажом и заменой инженерии.",
  },
  {
    question: "Материалы входят в стоимость?",
    answer:
      "Это зависит от выбранной модели работы. В смете лучше разделять работы, черновые материалы и чистовые материалы, чтобы клиент видел структуру расходов.",
  },
  {
    question: "Как контролируются скрытые работы?",
    answer:
      "Скрытые работы нужно фиксировать до закрытия конструкций: фотоотчётами, промежуточной проверкой и актами по этапам, если такой порядок подтверждён договором.",
  },
  {
    question: "Можно ли жить в квартире во время ремонта?",
    answer:
      "При капитальном ремонте это обычно неудобно и часто небезопасно. Возможность зависит от объёма работ, мокрых зон, пыли, шума и доступа к коммуникациям.",
  },
];

const relatedProjects = portfolioProjects
  .filter((project) => project.type === "Квартира" || project.type === "Новостройка")
  .slice(0, 3);

const priceTeaserSlugs = ["cosmetic", "capital", "turnkey"] as const;

export function ApartmentRenovationPage() {
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
    .filter((item): item is ApartmentPackage => item !== null);

  const priceTeasers = priceTeaserSlugs
    .map((slug) => pricingPackages.find((item) => item.slug === slug))
    .filter((item): item is PricingPackage => item !== undefined);

  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { href: "/services", label: "Услуги" },
              { current: true, label: "Ремонт квартир" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Ремонт квартиры под ключ
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Ремонт квартир под ключ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            От замера и понятной сметы до чистовой отделки, уборки и передачи квартиры. Подходит для
            новостроек, вторичного жилья, студий, семейных квартир и объектов под аренду.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#apartment-estimate">
              Рассчитать ремонт квартиры
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="/portfolio"
            >
              Смотреть примеры работ
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
            alt="Светлая AI-иллюстрация готовой квартиры после ремонта"
            className="aspect-[4/3] h-full w-full object-cover"
            height={1024}
            priority
            quality={90}
            src="/images/generated/apartment-renovation-hero-ai.webp"
            width={1456}
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-background/92 px-4 py-3 text-sm leading-6 text-muted backdrop-blur">
            <span>Светлый интерьер для визуального ориентира</span>
            <Badge variant="warning">AI-иллюстрация, не реальный объект</Badge>
          </figcaption>
        </figure>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Сценарий ремонта зависит от исходного состояния квартиры, состава инженерии и цели: жить, сдавать, продавать или подготовить семейное пространство."
          title="Для каких квартир"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apartmentTypes.map(({ icon: Icon, title, description }) => (
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
            description="Состав работ уточняется после замера. На странице перечислены основные группы, которые чаще всего входят в комплексный ремонт квартиры."
            title="Что входит в ремонт квартиры"
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
          description="Пакеты помогают быстро выбрать стартовый сценарий. Точный состав, сроки и материалы подтверждаются сметой после осмотра квартиры."
          title="Пакеты ремонта квартиры"
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
                <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
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
                  Ориентировочная цена, не оферта. Итог считается после замера и сметы.
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
                    href="#apartment-estimate"
                  >
                    {pricePackage.cta}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Процесс нужен не для красивой схемы, а для контроля решений: что согласовано, что уже закрыто, где возможны изменения и кто принимает следующий этап."
          title="Как проходит ремонт квартиры"
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

      <Section background="surface-alt">
        <SectionHeading
          description="На странице специально показаны типовые риски, потому что честный ремонт начинается с обсуждения ограничений до старта работ."
          title="Что часто идёт не так"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {riskCards.map((risk) => (
            <article
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={risk.title}
            >
              <AlertTriangle aria-hidden="true" className="h-7 w-7 text-warning-foreground" />
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{risk.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{risk.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Карточки ниже оставлены как структура будущего портфолио и не являются подтверждёнными реальными объектами."
            title="Похожие проекты квартир"
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
              note="Демо-кейс. Требуются реальные фото, адрес без персональных данных и подтверждённый результат."
              scope={`${project.description} Состав: ${project.scope.join(", ")}.`}
              status={project.isDemo ? "placeholder" : "real"}
              title={project.title}
            />
          ))}
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <SectionHeading
            description="Эти цифры нужны только как первичный ориентир. Финальная стоимость зависит от замера, состава работ, состояния квартиры, материалов и согласованных этапов."
            title="Ориентиры стоимости"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {priceTeasers.map((item) => (
              <article
                className="rounded-lg border border-border bg-surface p-6 shadow-soft"
                key={item.slug}
              >
                <Badge variant="warning">Ориентир, не оферта</Badge>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.name}</h3>
                <p className="mt-3 font-display text-3xl font-semibold leading-none">
                  {item.priceFrom} / {item.unit}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeading
            description="Ответы не заменяют договор и смету. Юридические условия, гарантийный срок и формат закупки материалов нужно подтвердить перед публикацией."
            title="FAQ по ремонту квартир"
          />
          <Accordion
            items={apartmentRenovationFaq.map((item, index) => ({
              content: item.answer,
              title: item.question,
              value: `apartment-faq-${index}`,
            }))}
          />
        </div>
      </Section>

      <Section
        background="surface-alt"
        className="scroll-mt-24"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        id="apartment-estimate"
      >
        <div>
          <Badge variant="accent">Предварительный расчёт</Badge>
          <SectionHeading
            className="mt-5"
            description="Опишите квартиру, площадь и желаемый формат ремонта. Форма уже валидируется через тестовый обработчик заявок; CRM/почта подключается отдельно."
            title="Получить предварительную смету по квартире"
          />
          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <Sparkles aria-hidden="true" className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm leading-6 text-muted">
              Точный расчёт возможен только после замера, проверки исходного состояния и
              согласования материалов.
            </p>
          </div>
        </div>
        <LeadForm
          description="Укажите параметры квартиры и удобный срок старта. Форма валидируется на клиенте и сервере; CRM/почта пока не подключена."
          source="service_context"
          title="Получить предварительную смету по квартире"
        />
      </Section>
    </>
  );
}
