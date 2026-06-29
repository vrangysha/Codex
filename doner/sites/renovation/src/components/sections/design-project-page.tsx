import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Layers,
  Lightbulb,
  PackageCheck,
  PencilRuler,
  Plug,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  WalletCards,
} from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const trustItems = [
  { icon: Eye, label: "визуализации до старта ремонта" },
  { icon: PencilRuler, label: "рабочие чертежи для бригады" },
  { icon: ShoppingCart, label: "ведомость материалов и закупки" },
  { icon: WalletCards, label: "меньше неопределённости в смете" },
];

const problemSolutionItems = [
  {
    icon: Eye,
    problem: "сложно представить результат",
    solution: "визуализации показывают интерьер до закупок и работ",
  },
  {
    icon: Plug,
    problem: "неясно, где розетки",
    solution: "рабочие чертежи фиксируют электрику, свет и сценарии",
  },
  {
    icon: Layers,
    problem: "материалы не сочетаются",
    solution: "спецификация связывает отделку, мебель и палитру",
  },
  {
    icon: WalletCards,
    problem: "смета растёт",
    solution: "проект снижает неопределённость до начала ремонта",
  },
  {
    icon: FileText,
    problem: "строители задают вопросы",
    solution: "документация отвечает заранее и уменьшает импровизацию",
  },
];

export const designProjectPackages = [
  {
    title: "Планировочное решение",
    price: "от 900 ₽/м²",
    secondaryPrice: "или от 35 000 ₽ за объект",
    description:
      "Подходит, когда нужно понять зонирование, мебель, проходы и мокрые зоны без полной визуальной части.",
    features: [
      "обмерный план",
      "2-3 варианта планировки",
      "план мебели",
      "правки выбранного решения",
    ],
  },
  {
    title: "Базовый дизайн-проект",
    price: "от 1 800 ₽/м²",
    secondaryPrice: "ориентировочная цена, не оферта",
    description:
      "Формат для ремонта, где важно согласовать планировку, стиль, базовые материалы и основные чертежи.",
    features: [
      "планировочное решение",
      "концепция и moodboard",
      "электрика и освещение",
      "ведомость базовых материалов",
    ],
  },
  {
    title: "Полный дизайн-проект",
    price: "от 3 200 ₽/м²",
    secondaryPrice: "ориентировочная цена, не оферта",
    description:
      "Комплект для ремонта под ключ: визуализации, рабочая документация, материалы и спецификации для сметы.",
    features: [
      "визуализации ключевых помещений",
      "планы демонтажа и монтажа",
      "развёртки, сантехника, освещение",
      "спецификация отделки и позиций",
    ],
  },
  {
    title: "Авторский надзор",
    price: "от 45 000 ₽/мес.",
    secondaryPrice: "условия уточняются договором",
    description:
      "Сопровождение ремонта, чтобы решения проекта не потерялись на объекте и в закупках.",
    features: [
      "выезды на объект по графику",
      "ответы на вопросы бригады",
      "сверка материалов с проектом",
      "согласование замен и корректировок",
    ],
  },
];

const compositionItems = [
  "обмерный план",
  "план демонтажа/монтажа",
  "план мебели",
  "электрика",
  "освещение",
  "сантехника",
  "развёртки",
  "визуализации",
  "ведомость материалов",
  "спецификация",
];

const processSteps = [
  {
    title: "Бриф",
    text: "Собираем задачи семьи, образ жизни, бюджетные рамки, сроки и пожелания к ремонту.",
  },
  {
    title: "Замер",
    text: "Фиксируем размеры, инженерные узлы, проёмы, ограничения дома и исходное состояние.",
  },
  {
    title: "Планировка",
    text: "Собираем сценарии жизни в план мебели, проходы, мокрые зоны и хранение.",
  },
  {
    title: "Концепция",
    text: "Определяем настроение, материалы, палитру и принцип будущего интерьера.",
  },
  {
    title: "Визуализации",
    text: "Показываем ключевые помещения так, чтобы решения можно было согласовать до закупок.",
  },
  {
    title: "Рабочие чертежи",
    text: "Готовим планы для строителей: электрика, свет, сантехника, монтаж, развёртки.",
  },
  {
    title: "Материалы",
    text: "Собираем ведомость, спецификацию и позиции, которые влияют на смету и поставки.",
  },
  {
    title: "Передача в ремонт",
    text: "Передаём комплект в работу, чтобы бригада строила по согласованным решениям.",
  },
];

const savingsItems = [
  {
    icon: ShieldCheck,
    title: "меньше переделок",
    text: "Розетки, перегородки, сантехника и освещение согласованы до того, как их нужно переносить.",
  },
  {
    icon: ShoppingCart,
    title: "понятная закупка",
    text: "Материалы и позиции собраны в ведомость, поэтому легче планировать поставки и замены.",
  },
  {
    icon: ClipboardCheck,
    title: "точнее смета",
    text: "Чертежи и спецификация дают больше исходных данных для расчёта работ и материалов.",
  },
  {
    icon: Lightbulb,
    title: "меньше импровизации на объекте",
    text: "Строители получают ответы в документации, а не решают узлы на месте устно.",
  },
  {
    icon: PackageCheck,
    title: "быстрее принятие решений",
    text: "Владелец видит варианты заранее и не тормозит ремонт срочными согласованиями.",
  },
];

const examplePlaceholders = [
  {
    title: "Мудборд",
    type: "moodboard",
    description: "Палитра, фактуры, мебельные ориентиры и настроение будущего интерьера.",
  },
  {
    title: "Планировка",
    type: "layout",
    description: "Схема мебели, проходов, мокрых зон и функционального сценария.",
  },
  {
    title: "Визуализация",
    type: "visualization",
    description: "Изображение ключевой комнаты до начала ремонта и закупок.",
  },
  {
    title: "Спецификация",
    type: "specification",
    description: "Таблица материалов, артикулов, объёмов и замен для сметы.",
  },
] as const;

export const designProjectFaq = [
  {
    question: "Можно ли делать ремонт без дизайн-проекта?",
    answer:
      "Можно, если объект простой, решения понятны и вы готовы быстро отвечать на вопросы бригады. Дизайн-проект нужен, когда важны планировка, электрика, материалы, смета и предсказуемость ремонта.",
  },
  {
    question: "Сколько длится проект?",
    answer:
      "Срок зависит от площади, состава пакета, количества помещений и скорости согласований. Планировочное решение обычно быстрее полного проекта с визуализациями и рабочими чертежами.",
  },
  {
    question: "Что такое авторский надзор?",
    answer:
      "Это сопровождение ремонта по проекту: выезды на объект, ответы на вопросы строителей, сверка решений и материалов, согласование замен и корректировок.",
  },
  {
    question: "Входят ли материалы?",
    answer:
      "В проект входит подбор и ведомость материалов, если это предусмотрено пакетом. Покупка, доставка, хранение и замены должны быть отдельно подтверждены владельцем бизнеса и договором.",
  },
  {
    question: "Можно ли заказать только планировку?",
    answer:
      "Да, планировочное решение можно рассматривать как отдельный стартовый этап. Оно помогает понять мебель, зоны, хранение и общую логику пространства.",
  },
  {
    question: "Можно ли потом ремонтировать у вас?",
    answer:
      "Да, проект можно передать в ремонт под ключ. Тогда чертежи, материалы и спецификация становятся основой для сметы, графика и вопросов бригады.",
  },
];

export function DesignProjectPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { href: "/services", label: "Услуги" },
              { current: true, label: "Дизайн-проект" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Проект перед ремонтом
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Дизайн-проект для ремонта квартиры или дома
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Планировка, визуализации, материалы и рабочая документация перед стартом ремонта, чтобы
            результат был понятен заранее, а стройка шла по согласованному плану.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#design-project-consult">
              Обсудить дизайн-проект
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#design-project-included"
            >
              Что входит
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map(({ icon: Icon, label }) => (
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
            alt="AI-иллюстрация стола с чертежами, образцами материалов и визуализацией интерьера для дизайн-проекта"
            className="aspect-[4/3] h-full w-full object-cover"
            height={1024}
            priority
            quality={90}
            src="/images/generated/design-project-hero-ai.webp"
            width={1456}
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-background/92 px-4 py-3 text-sm leading-6 text-muted backdrop-blur">
            <span>Визуальный ориентир работы над проектом</span>
            <Badge variant="warning">AI-иллюстрация, не реальный объект</Badge>
          </figcaption>
        </figure>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Дизайн-проект нужен не ради красивых картинок. Он переводит желания в решения, по которым можно считать смету, закупать материалы и вести ремонт под ключ."
          title="Почему дизайн-проект нужен"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {problemSolutionItems.map(({ icon: Icon, problem, solution }) => (
            <article
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={problem}
            >
              <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
              <p className="mt-5 text-sm font-semibold leading-6 text-muted">Проблема</p>
              <h3 className="mt-1 text-xl font-semibold leading-tight">{problem}</h3>
              <p className="mt-5 text-sm font-semibold leading-6 text-muted">Решение</p>
              <p className="mt-1 text-base leading-7 text-foreground">{solution}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="scroll-mt-24" id="design-project-included">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeading
            description="Состав зависит от пакета, площади, сложности объекта и задач ремонта. Ниже показана безопасная структура без обещания окончательной цены."
            title="Что входит"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {designProjectPackages.map((item) => (
              <article
                className="rounded-lg border border-border bg-surface p-6 shadow-soft"
                key={item.title}
              >
                <Badge variant="warning">Ориентировочная цена, не оферта</Badge>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
                <p className="mt-6 font-display text-3xl font-semibold leading-none">
                  {item.price}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.secondaryPrice}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold leading-tight">Состав документации</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
                Эти материалы помогают заранее согласовать план и передать бригаде понятные рабочие
                решения.
              </p>
            </div>
            <Badge variant="primary">Комплект уточняется по пакету</Badge>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {compositionItems.map((item) => (
              <div
                className="flex min-h-14 items-center gap-3 rounded-md border border-border bg-background px-4 py-3"
                key={item}
              >
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 flex-none text-primary" />
                <span className="text-sm font-semibold leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Процесс делает проект понятным для владельца и пригодным для ремонта: от задач семьи до передачи рабочей документации."
          title="Процесс дизайн-проекта"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={step.title}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          description="Проект снижает стоимость ошибок: часть решений дешевле проверить на бумаге и в визуализации, чем переделывать на объекте."
          title="Как проект экономит деньги во время ремонта"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {savingsItems.map(({ icon: Icon, title, text }) => (
            <article
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={title}
            >
              <Icon aria-hidden="true" className="h-7 w-7 text-accent" />
              <h3 className="mt-5 text-xl font-semibold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="surface-alt" className="scroll-mt-24" id="design-project-pricing">
        <SectionHeading
          description="Цены ниже нужны только как ориентир для структуры страницы. Перед публикацией владелец бизнеса должен подтвердить реальные тарифы, единицы расчёта и условия."
          title="Пакеты и ориентировочные цены"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {designProjectPackages.map((item) => (
            <article
              className="flex rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={item.title}
            >
              <div className="flex min-h-full flex-col">
                <Badge variant="warning">Не публичная оферта</Badge>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-5 font-display text-3xl font-semibold leading-none">
                  {item.price}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.secondaryPrice}</p>
                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li className="flex gap-3 text-sm leading-6" key={feature}>
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 flex-none text-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  className={`${buttonVariants({ variant: "primary" })} mt-auto w-full`}
                  href="#design-project-consult"
                >
                  Обсудить пакет
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Реальные файлы проекта не предоставлены, поэтому ниже только структурные визуальные плейсхолдеры. Их нельзя считать портфолио или примером выполненной работы."
            title="Как могут выглядеть материалы проекта"
          />
          <Badge variant="warning">Плейсхолдеры, нужны реальные файлы</Badge>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {examplePlaceholders.map((item) => (
            <article
              className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft"
              key={item.title}
            >
              <DesignExampleVisual type={item.type} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                <p className="mt-5 rounded-md border border-warning/30 bg-warning/15 px-4 py-3 text-sm font-semibold leading-6 text-warning-foreground">
                  Плейсхолдер. Нужны реальные файлы проекта.
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeading
            description="Ответы связывают проект с ремонтом под ключ: зачем он нужен, сколько времени занимает, что входит в материалы и как потом перейти к работам."
            title="FAQ по дизайн-проекту"
          />
          <Accordion
            items={designProjectFaq.map((item, index) => ({
              content: item.answer,
              title: item.question,
              value: `design-project-faq-${index}`,
            }))}
          />
        </div>
      </Section>

      <Section
        className="scroll-mt-24"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        id="design-project-consult"
      >
        <div>
          <Badge variant="accent">Проект как старт ремонта под ключ</Badge>
          <SectionHeading
            className="mt-5"
            description="Опишите объект, площадь, желаемый формат проекта и планируемый ремонт. Форма уже валидируется через тестовый обработчик заявок; CRM/почта подключается отдельно."
            title="Получить консультацию по дизайн-проекту"
          />
          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <FileText aria-hidden="true" className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm leading-6 text-muted">
              Для первой консультации достаточно площади, типа объекта, желаемого состава проекта и
              вопроса, будете ли вы затем запускать ремонт под ключ.
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-surface p-5">
            <Ruler aria-hidden="true" className="h-6 w-6 text-accent" />
            <p className="mt-3 text-sm leading-6 text-muted">
              Точный состав, сроки, цена за м² или за объект и условия авторского надзора должны
              быть подтверждены после брифа и замера.
            </p>
          </div>
        </div>
        <LeadForm
          description="Укажите объект, площадь, желаемый срок и комментарий по проекту. Форма валидируется на клиенте и сервере; CRM/почта пока не подключена."
          source="service_context"
          title="Получить консультацию по дизайн-проекту"
        />
      </Section>
    </>
  );
}

function DesignExampleVisual({ type }: { type: (typeof examplePlaceholders)[number]["type"] }) {
  if (type === "moodboard") {
    return (
      <div className="grid aspect-[4/3] grid-cols-[0.9fr_1.1fr] gap-3 bg-surface-alt p-5">
        <div className="rounded-md bg-background" />
        <div className="grid gap-3">
          <div className="rounded-md bg-primary/30" />
          <div className="rounded-md bg-accent/30" />
          <div className="rounded-md bg-border" />
        </div>
      </div>
    );
  }

  if (type === "layout") {
    return (
      <div className="aspect-[4/3] bg-surface-alt p-5">
        <div className="grid h-full grid-cols-[1.2fr_0.8fr] grid-rows-[1fr_0.8fr] gap-2 rounded-md border-2 border-primary/50 bg-background p-3">
          <div className="rounded border border-border bg-primary/10" />
          <div className="rounded border border-border bg-accent/10" />
          <div className="rounded border border-border bg-surface" />
          <div className="rounded border border-border bg-primary/5" />
        </div>
      </div>
    );
  }

  if (type === "visualization") {
    return (
      <div className="aspect-[4/3] bg-surface-alt p-5">
        <div className="flex h-full items-end justify-between rounded-md border border-border bg-background p-4">
          <div className="h-20 w-24 rounded-md bg-primary/20" />
          <div className="h-28 w-10 rounded bg-accent/20" />
          <div className="h-16 w-28 rounded-full bg-primary/25" />
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] bg-surface-alt p-5">
      <div className="h-full rounded-md border border-border bg-background p-4">
        <div className="grid grid-cols-[1fr_0.5fr_0.45fr] gap-2 border-b border-border pb-3 text-xs font-semibold text-muted">
          <span>Материал</span>
          <span>Объём</span>
          <span>Статус</span>
        </div>
        <div className="mt-3 space-y-3">
          {[0, 1, 2, 3].map((item) => (
            <div className="grid grid-cols-[1fr_0.5fr_0.45fr] gap-2" key={item}>
              <span className="h-3 rounded-full bg-primary/20" />
              <span className="h-3 rounded-full bg-accent/20" />
              <span className="h-3 rounded-full bg-border" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
