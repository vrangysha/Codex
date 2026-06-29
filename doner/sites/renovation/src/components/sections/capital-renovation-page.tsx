import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  FileText,
  Hammer,
  Home,
  Layers,
  Plug,
  Ruler,
  ShieldCheck,
  Trash2,
  WalletCards,
} from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { ProjectCard } from "@/components/ui/project-card";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/data/site";

const trustBullets = [
  { icon: ClipboardCheck, label: "смета по этапам" },
  { icon: Camera, label: "фотофиксация скрытых работ" },
  { icon: ShieldCheck, label: "проверка до закрытия" },
  { icon: WalletCards, label: "поэтапная оплата" },
];

const capitalNeedCards = [
  {
    icon: Plug,
    title: "Старая электрика",
    description:
      "Нужно пересчитать группы, нагрузки, щит, розетки, освещение и выводы под технику.",
  },
  {
    icon: Droplets,
    title: "Изношенные трубы",
    description:
      "Сантехника, стояки, коллекторы и мокрые зоны требуют проверки до чистовой отделки.",
  },
  {
    icon: Ruler,
    title: "Кривые стены или полы",
    description: "Серьёзные перепады лучше решать до финишных покрытий, чтобы не платить дважды.",
  },
  {
    icon: Layers,
    title: "Перепланировка",
    description:
      "Новые перегородки и сценарии требуют технической проверки, порядка работ и сметы.",
  },
  {
    icon: Building2,
    title: "Старый фонд",
    description: "Часто встречаются скрытые дефекты, ограничения дома и нестандартные основания.",
  },
  {
    icon: Home,
    title: "Квартира после долгой эксплуатации",
    description: "Когда износ накопился в отделке, инженерии, мокрых зонах и базовых поверхностях.",
  },
  {
    icon: Hammer,
    title: "Дом с устаревшей инженерией",
    description: "Нужно связать электрику, воду, отопление, вентиляцию и отделку в один план.",
  },
];

const includedWorkGroups = [
  "демонтаж",
  "вывоз мусора",
  "электрика",
  "сантехника",
  "отопление",
  "перегородки",
  "штукатурка",
  "стяжка",
  "гидроизоляция",
  "плитка",
  "потолки",
  "чистовая отделка",
  "финальная проверка",
];

const hiddenWorksControl = [
  {
    icon: Camera,
    title: "Фотофиксация скрытых работ",
    text: "Сохраняем состояние узлов до закрытия стен, пола, потолков и мокрых зон.",
  },
  {
    icon: ShieldCheck,
    title: "Проверка инженерии до закрытия",
    text: "Электрика, сантехника, отопление и гидроизоляция проверяются до следующего слоя работ.",
  },
  {
    icon: FileText,
    title: "Акты этапов",
    text: "Фиксируем готовность ключевых этапов, чтобы клиент понимал, что уже принято.",
  },
  {
    icon: ClipboardCheck,
    title: "Согласование изменений",
    text: "Допработы не должны появляться устно: меняется состав работ, смета и график.",
  },
  {
    icon: Layers,
    title: "Контроль материалов",
    text: "Материалы сверяются с задачей этапа, технологией и согласованной сметой.",
  },
];

const paymentStages = [
  {
    title: "Предоплата или старт",
    text: "Фиксируется договор, состав стартовых работ, условия закупки и первый участок объекта.",
  },
  {
    title: "После чернового этапа",
    text: "Оплата привязывается к принятому объёму демонтажа, подготовки, штукатурки или стяжки.",
  },
  {
    title: "После инженерии",
    text: "Проверяются трассы, узлы, выводы, скрытые работы и согласованные изменения.",
  },
  {
    title: "После чистовой отделки",
    text: "Закрывается основной финишный объём: плитка, потолки, покрытия, стены и монтаж.",
  },
  {
    title: "Финальная оплата после сдачи",
    text: "Оставшаяся часть проводится после проверки результата, уборки и передачи объекта.",
  },
];

const timelineSteps = [
  {
    title: "Осмотр и замер",
    text: "Фиксируем состояние объекта, ограничения дома, мокрые зоны, инженерные узлы и доступ.",
  },
  {
    title: "Демонтаж и вывоз",
    text: "Разбираем старую отделку и освобождаем объект для диагностики основания.",
  },
  {
    title: "Черновые работы",
    text: "Перегородки, штукатурка, стяжка, гидроизоляция и подготовка базовых поверхностей.",
  },
  {
    title: "Инженерные системы",
    text: "Электрика, сантехника, отопление и выводы под оборудование до закрытия конструкций.",
  },
  {
    title: "Контроль скрытых работ",
    text: "Проверка, фотофиксация, согласование изменений и переход к следующему слою.",
  },
  {
    title: "Чистовая отделка",
    text: "Плитка, потолки, стены, покрытия, двери, плинтусы и финальный монтаж.",
  },
  {
    title: "Проверка и сдача",
    text: "Финальная уборка, обход по списку замечаний и передача результата клиенту.",
  },
];

export const capitalPriceExamples = [
  {
    title: "Квартира",
    price: "от 22 000 ₽/м²",
    note: "Для вторичного жилья или объекта с заменой инженерии и черновыми работами.",
  },
  {
    title: "Дом",
    price: "от 24 000 ₽/м²",
    note: "Зависит от площади, инженерии, технических помещений, отопления и логистики.",
  },
  {
    title: "Отдельные зоны",
    price: "по смете",
    note: "Санузлы, кухня, коридор, технические помещения или часть дома оцениваются отдельно.",
  },
  {
    title: "Сложный объект",
    price: "после обследования",
    note: "Старый фонд, скрытые дефекты, перепланировка или нестандартная инженерия требуют диагностики.",
  },
];

export const capitalRenovationFaq = [
  {
    question: "Сколько длится капитальный ремонт?",
    answer:
      "Срок зависит от площади, исходного состояния, демонтажа, инженерии, мокрых зон, материалов и согласований. На странице указан типовой порядок, но точный график формируется только после замера и сметы.",
  },
  {
    question: "Что делать с мебелью?",
    answer:
      "Для капитального ремонта мебель лучше вывезти или вынести в зоны, не участвующие в работах. Если это невозможно, нужно заранее обсудить защиту, переносы, хранение и влияние мебели на срок.",
  },
  {
    question: "Можно ли жить во время работ?",
    answer:
      "Обычно это неудобно и часто небезопасно: идут демонтаж, пыльные работы, отключения, мокрые зоны и инженерия. Возможность частичного проживания оценивается отдельно по зонам и этапам.",
  },
  {
    question: "Как согласуются допработы?",
    answer:
      "Допработы нужно фиксировать до выполнения: почему они появились, как меняют смету, срок и материалы. Устные изменения без подтверждения повышают риск споров.",
  },
  {
    question: "Что входит в гарантию?",
    answer:
      "Точные гарантийные условия должен подтвердить владелец бизнеса и договор. Важно отдельно описать гарантийный срок, исключения, материалы клиента, скрытые работы и порядок обращения.",
  },
  {
    question: "Как контролируются скрытые работы?",
    answer:
      "Скрытые работы проверяются до закрытия конструкций: фотофиксацией, промежуточной приёмкой, актами этапов и согласованием изменений, если состояние объекта отличается от исходной сметы.",
  },
];

const relatedProjects = portfolioProjects
  .filter((project) =>
    project.scope.some((item) =>
      ["демонтаж", "электрика", "сантехника", "инженерия", "черновая отделка"].includes(item),
    ),
  )
  .slice(0, 3);

export function CapitalRenovationPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { href: "/services", label: "Услуги" },
              { current: true, label: "Капитальный ремонт" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Глубокий ремонт объекта
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Капитальный ремонт под ключ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Обновляем пространство полностью — от демонтажа до чистовой отделки, с инженерией,
            черновыми работами, контролем скрытых этапов и понятной сметой после замера.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#capital-estimate">
              Получить смету на капитальный ремонт
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#capital-timeline"
            >
              Узнать этапы
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
            alt="Светлая AI-иллюстрация контролируемого чернового этапа капитального ремонта"
            className="aspect-[4/3] h-full w-full object-cover"
            height={1024}
            priority
            quality={90}
            src="/images/generated/capital-renovation-hero-ai.webp"
            width={1456}
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-background/92 px-4 py-3 text-sm leading-6 text-muted backdrop-blur">
            <span>Визуальный ориентир чернового этапа</span>
            <Badge variant="warning">AI-иллюстрация, не реальный объект</Badge>
          </figcaption>
        </figure>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Капитальный ремонт нужен, когда косметическое обновление уже не решает износ, скрытые дефекты или инженерные задачи."
          title="Когда нужен капитальный ремонт"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capitalNeedCards.map(({ icon: Icon, title, description }) => (
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
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeading
            description="Фактический объём работ определяется после замера, демонтажа и проверки исходного состояния. Ниже — типовые группы капитального ремонта."
            title="Что входит"
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
          description="Самые дорогие ошибки в капитальном ремонте обычно скрываются под чистовой отделкой. Поэтому инженерные и черновые этапы нужно принять до закрытия."
          title="Контроль скрытых работ"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {hiddenWorksControl.map(({ icon: Icon, title, text }) => (
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

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <Badge variant="accent">Без жёстких процентов</Badge>
            <SectionHeading
              className="mt-5"
              description="Проценты оплаты нужно подтверждать договором. Пока бизнес-данных нет, показываем безопасную схему: деньги привязаны к понятному этапу и принятому объёму."
              title="Оплата по этапам"
            />
          </div>
          <ol className="grid gap-4">
            {paymentStages.map((stage, index) => (
              <li
                className="rounded-lg border border-border bg-surface p-6 shadow-soft"
                key={stage.title}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">{stage.title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{stage.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section background="surface-alt" className="scroll-mt-24" id="capital-timeline">
        <SectionHeading
          description="Это типовой порядок без обещания точных сроков. Реальный график зависит от площади, состояния объекта, поставок, согласований и объёма инженерии."
          title="Этапы капитального ремонта"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {timelineSteps.map((step, index) => (
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

      <Section className="scroll-mt-24" id="capital-pricing">
        <SectionHeading
          description="Диапазоны ниже являются ориентировочными заглушками. После замера стоимость уточняется по состоянию объекта, инженерии, материалам и графику."
          title="Ориентировочные диапазоны"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capitalPriceExamples.map((item) => (
            <article
              className="flex rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={item.title}
            >
              <div className="flex min-h-full flex-col">
                <Badge variant="warning">После замера стоимость уточняется</Badge>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-5 font-display text-3xl font-semibold leading-none">
                  {item.price}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">{item.note}</p>
                <Link
                  className={`${buttonVariants({ variant: "primary" })} mt-auto w-full`}
                  href="#capital-estimate"
                >
                  Уточнить после замера
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Показываем только демонстрационную структуру будущего портфолио. Для публикации нужны реальные объекты капитального ремонта с фото, сроками, составом работ и разрешением владельца."
            title="Проекты капитального ремонта"
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
              note="Демо-кейс. Требуются реальные фото, состав работ, даты, бюджетный диапазон и разрешение владельца."
              scope={`${project.description} Состав: ${project.scope.join(", ")}.`}
              status={project.isDemo ? "placeholder" : "real"}
              title={project.title}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeading
            description="Ответы закрывают основные страхи клиента: срок, мебель, проживание, допработы, гарантия и скрытые работы."
            title="FAQ по капитальному ремонту"
          />
          <Accordion
            items={capitalRenovationFaq.map((item, index) => ({
              content: item.answer,
              title: item.question,
              value: `capital-faq-${index}`,
            }))}
          />
        </div>
      </Section>

      <Section
        background="surface-alt"
        className="scroll-mt-24"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        id="capital-estimate"
      >
        <div>
          <Badge variant="accent">Смета после замера</Badge>
          <SectionHeading
            className="mt-5"
            description="Опишите объект, площадь, состояние инженерии и желаемый формат работ. Форма уже валидируется через тестовый обработчик заявок; CRM/почта подключается отдельно."
            title="Рассчитать капитальный ремонт"
          />
          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <AlertTriangle aria-hidden="true" className="h-6 w-6 text-warning-foreground" />
            <p className="mt-3 text-sm leading-6 text-muted">
              Фиксированную цену капитального ремонта нельзя корректно обещать до замера, проверки
              инженерии и согласования состава работ.
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-surface p-5">
            <Trash2 aria-hidden="true" className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm leading-6 text-muted">
              На первом разговоре достаточно описать состояние объекта, примерную площадь, демонтаж,
              мокрые зоны и желаемый срок старта.
            </p>
          </div>
        </div>
        <LeadForm
          description="Укажите тип объекта, площадь и ближайший удобный срок обсуждения. Форма валидируется на клиенте и сервере; CRM/почта пока не подключена."
          source="service_context"
          title="Рассчитать капитальный ремонт"
        />
      </Section>
    </>
  );
}
