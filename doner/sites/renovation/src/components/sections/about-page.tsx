import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  HardHat,
  ListChecks,
  MessageCircle,
  PenTool,
  Ruler,
  ShieldCheck,
  Sparkles,
  UserCog,
  Wrench,
} from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const missionItems = [
  "сделать ремонт понятным",
  "убрать хаос из решений, сроков и материалов",
  "держать клиента в курсе на каждом важном этапе",
  "отвечать за качество видимых и скрытых работ",
  "сохранять прозрачность сметы и изменений",
];

export const aboutApproach = [
  {
    title: "Диагностика объекта",
    description: "Сначала смотрим исходное состояние, ограничения дома, инженерные узлы и риски.",
    icon: Ruler,
  },
  {
    title: "Реалистичная смета",
    description: "Разделяем работы, материалы, допущения и позиции, которые нужно уточнить.",
    icon: ClipboardList,
  },
  {
    title: "Планирование этапов",
    description: "Показываем порядок работ, контрольные точки, поставки и решения от клиента.",
    icon: ListChecks,
  },
  {
    title: "Фиксация договорённостей",
    description: "Важные условия, изменения и дополнительные работы должны оставаться письменно.",
    icon: FileText,
  },
  {
    title: "Контроль качества",
    description: "Проверяем скрытые работы, геометрию, инженерию и чистовые поверхности.",
    icon: ClipboardCheck,
  },
  {
    title: "Сдача по чек-листу",
    description: "Передаём результат после осмотра, замечаний, документов и понятной гарантии.",
    icon: FileCheck2,
  },
];

const standards = [
  {
    title: "Чистота на объекте",
    description: "Организованное хранение материалов, проходы и понятные зоны работ.",
    icon: Sparkles,
  },
  {
    title: "Защита поверхностей",
    description: "Сохраняем уже готовые покрытия и узлы от повреждений на следующих этапах.",
    icon: ShieldCheck,
  },
  {
    title: "Контроль скрытых работ",
    description: "Не закрываем критичные слои без проверки и фиксации результата.",
    icon: ClipboardCheck,
  },
  {
    title: "Фотофиксация",
    description: "Сохраняем визуальную историю этапов, особенно по скрытым узлам.",
    icon: Camera,
  },
  {
    title: "Аккуратная коммуникация",
    description: "Объясняем решения обычным языком и заранее выносим вопросы на согласование.",
    icon: MessageCircle,
  },
  {
    title: "Гарантия",
    description: "Условия гарантии должны быть закреплены в документах перед стартом.",
    icon: BadgeCheck,
  },
];

const teamRoles = [
  {
    title: "Руководитель проекта",
    description: "Следит за договорённостями, сроками, бюджетной логикой и общим ходом работ.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Прораб",
    description: "Координирует объект, мастеров, поставки, промежуточный контроль и отчёты.",
    icon: HardHat,
  },
  {
    title: "Мастер отделочных работ",
    description: "Отвечает за аккуратное выполнение черновых и чистовых операций на своём участке.",
    icon: Wrench,
  },
  {
    title: "Инженер",
    description: "Помогает с электрикой, сантехникой, вентиляцией и техническими узлами.",
    icon: UserCog,
  },
  {
    title: "Дизайнер",
    description: "Помогает связать планировку, материалы, визуальные решения и рабочие чертежи.",
    icon: PenTool,
  },
];

const placeholderNumbers = [
  {
    value: "X объектов",
    label: "будет подтверждено",
    description: "Нужна реальная статистика завершённых объектов и критерий подсчёта.",
  },
  {
    value: "X лет опыта",
    label: "данные владельца",
    description: "Опыт нельзя публиковать без даты основания или подтверждённой истории команды.",
  },
  {
    value: "X специалистов",
    label: "структура команды",
    description: "Нужно подтвердить штат, подрядчиков и роли, которые реально ведут проекты.",
  },
  {
    value: "X этапов контроля",
    label: "регламент качества",
    description: "Количество контрольных точек зависит от реального стандарта компании.",
  },
];

const choiceReasons = [
  "не исчезаем после старта работ",
  "объясняем решения без строительного жаргона",
  "фиксируем изменения до выполнения",
  "не экономим на скрытых работах",
  "не перегружаем клиента лишними техническими деталями",
];

const documents = [
  {
    title: "Договор",
    description: "Фиксирует условия, ответственность, оплату и порядок изменения работ.",
    icon: FileText,
  },
  {
    title: "Гарантия",
    description: "Описывает срок, условия обращения и границы гарантийных обязательств.",
    icon: ShieldCheck,
  },
  {
    title: "Смета",
    description: "Показывает состав работ, материалы, допущения и изменения стоимости.",
    icon: ClipboardList,
  },
  {
    title: "Акты",
    description: "Закрывают этапы, замечания и финальную передачу объекта.",
    icon: FileCheck2,
  },
];

export function AboutPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "О компании" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Подход без недоказанных обещаний
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            О компании
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            ремонт, в котором порядок важен не меньше результата
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Эта страница описывает рабочие принципы и структуру взаимодействия. Реальные имена,
            фотографии, цифры и юридические формулировки нужно заменить после подтверждения
            владельцем бизнеса.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#about-consult">
              Обсудить ремонт
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#about-approach"
            >
              Как мы работаем
            </Link>
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold leading-tight">
              Что держит ремонт под контролем
            </h2>
            <Badge variant="warning">реальные доказательства нужны</Badge>
          </div>
          <div className="mt-6 divide-y divide-border rounded-md border border-border bg-background">
            {[
              ["01", "смета", "состав работ и допущения видны до старта"],
              ["02", "договор", "условия и ответственность фиксируются письменно"],
              ["03", "контроль", "скрытые этапы не закрываются без проверки"],
              ["04", "связь", "клиент понимает, что происходит на объекте"],
            ].map(([number, title, text]) => (
              <div className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-4 p-4" key={number}>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  {number}
                </span>
                <div>
                  <p className="font-semibold leading-6">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            description="Миссия сформулирована вокруг главной тревоги клиента: ремонт не должен превращаться в хаос из устных обещаний, внезапных расходов и непонятных решений."
            title="Миссия"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {missionItems.map((item) => (
              <li
                className="flex gap-3 rounded-lg border border-border bg-background p-5"
                key={item}
              >
                <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary" />
                <span className="text-base leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="about-approach">
        <SectionHeading
          description="Подход строится не на обещании идеального ремонта, а на порядке: сначала диагностика, затем расчёт, план, фиксация, контроль и сдача."
          title="Как мы работаем"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aboutApproach.map((item, index) => (
            <IconPanel
              description={item.description}
              icon={item.icon}
              index={index + 1}
              key={item.title}
              title={item.title}
            />
          ))}
        </ol>
      </Section>

      <Section background="surface">
        <SectionHeading
          description="Стандарты нужны, чтобы клиент видел не только красивый финал, но и то, как команда ведёт объект в процессе."
          title="Стандарты на объекте"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((item) => (
            <IconPanel
              as="article"
              description={item.description}
              icon={item.icon}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeading
              description="Пока реальные данные команды не предоставлены, показываем только роли без имён, портретов и персональных заявлений."
              title="Команда проекта"
            />
            <p className="mt-6 rounded-lg border border-warning/30 bg-warning/15 p-4 text-sm leading-6 text-warning-foreground">
              Ролевые карточки не являются профилями сотрудников. Их нужно заменить реальными
              данными, фото и согласиями перед публикацией.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {teamRoles.map((role) => (
              <RoleCard key={role.title} role={role} />
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            description="Цифры оставлены как временные значения, потому что реальные достижения нельзя придумывать. Это место для подтверждённой статистики владельца бизнеса."
            title="Цифры, которые нужно подтвердить"
          />
          <Badge className="w-fit" variant="warning">
            статистика требует подтверждения
          </Badge>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderNumbers.map((item) => (
            <article className="rounded-lg border border-border bg-background p-5" key={item.value}>
              <p className="font-display text-3xl font-semibold leading-none text-foreground">
                {item.value}
              </p>
              <p className="mt-3 font-medium leading-6 text-foreground">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            description="Выбор подрядчика чаще зависит от управляемости процесса, а не только от цены. Поэтому на странице важны прозрачные правила и ответственность."
            title="Почему клиенты выбирают нас"
          />
          <ul className="grid gap-3">
            {choiceReasons.map((reason) => (
              <li
                className="flex gap-3 rounded-lg border border-border bg-surface p-4"
                key={reason}
              >
                <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary" />
                <span className="text-base leading-7">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading
          description="Договор, смета, акты и гарантия помогают отделить понятный ремонт от устных обещаний. Реальные шаблоны документов пока не предоставлены."
          title="Документы и гарантия"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {documents.map((document) => (
            <IconPanel
              as="article"
              badge="плейсхолдер документа"
              description={document.description}
              icon={document.icon}
              key={document.title}
              title={document.title}
            />
          ))}
        </div>
      </Section>

      <Section id="about-consult">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            description="Расскажите, что ремонтируете, какая площадь и когда хотите начать. На следующем шаге можно предложить формат работ и список вопросов для замера."
            title="Расскажите о вашем объекте — подскажем оптимальный формат ремонта"
          />
          <LeadForm
            description="Форма валидируется на клиенте и сервере. CRM, почта, вебхук и финальная политика хранения данных остаются задачами интеграции."
            title="Обсудить ремонт"
          />
        </div>
      </Section>
    </>
  );
}

function IconPanel({
  as,
  badge,
  description,
  icon: Icon,
  index,
  title,
}: {
  as?: "article";
  badge?: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  title: string;
}) {
  const Element = as ?? "li";

  return (
    <Element className="rounded-lg border border-border bg-background p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
        {index ? (
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            {index}
          </span>
        ) : null}
      </div>
      {badge ? (
        <Badge className="mt-5 w-fit" variant="warning">
          {badge}
        </Badge>
      ) : null}
      <h2 className="mt-4 text-xl font-semibold leading-tight">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </Element>
  );
}

function RoleCard({
  role,
}: {
  role: {
    description: string;
    icon: LucideIcon;
    title: string;
  };
}) {
  const Icon = role.icon;

  return (
    <article className="rounded-lg border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-4">
        <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
        <Badge variant="neutral">роль</Badge>
      </div>
      <h2 className="mt-4 text-xl font-semibold leading-tight">{role.title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">{role.description}</p>
    </article>
  );
}
