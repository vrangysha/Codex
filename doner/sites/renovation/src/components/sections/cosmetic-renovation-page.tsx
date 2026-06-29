import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brush,
  CheckCircle2,
  ClipboardList,
  Home,
  Layers,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sparkles,
  Timer,
  WalletCards,
  XCircle,
} from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BeforeAfterPlaceholder } from "@/components/sections/before-after-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const trustBullets = [
  { icon: Timer, label: "короткий цикл работ" },
  { icon: ClipboardList, label: "понятный список задач" },
  { icon: ShieldCheck, label: "без перепланировки" },
  { icon: WalletCards, label: "смета до старта" },
];

const suitableCases = [
  {
    icon: Home,
    title: "Квартира после арендаторов",
    description:
      "Обновить видимые покрытия, убрать следы эксплуатации и подготовить объект к показу.",
  },
  {
    icon: Sparkles,
    title: "Обновление перед продажей",
    description: "Сделать интерьер аккуратнее без капитальной перестройки и долгого простоя.",
  },
  {
    icon: PaintBucket,
    title: "Освежить стены и пол",
    description:
      "Покраска, обои, напольные покрытия и плинтусы, если основание в рабочем состоянии.",
  },
  {
    icon: ClipboardList,
    title: "Подготовка квартиры к сдаче",
    description: "Практичные материалы, быстрый порядок работ и понятный минимум перед заселением.",
  },
  {
    icon: Layers,
    title: "Локальное обновление комнат",
    description:
      "Можно двигаться по помещениям, если это не конфликтует с пылью, мебелью и доступом.",
  },
  {
    icon: Ruler,
    title: "Ремонт без перепланировки",
    description: "Подходит, когда не нужно менять геометрию, инженерные системы и скрытые узлы.",
  },
];

const includedWorks = [
  "защита поверхностей",
  "демонтаж старых покрытий",
  "подготовка стен",
  "покраска или обои",
  "замена напольных покрытий",
  "плинтусы",
  "частичная замена электрики, если нужно",
  "мелкие работы",
  "уборка",
];

const excludedWorks = [
  "замена всех коммуникаций",
  "перепланировка",
  "сложные черновые работы",
  "полная замена инженерии",
  "серьёзное выравнивание, если требуется капитальный ремонт",
];

const processSteps = ["Осмотр", "Список работ", "Смета", "Подготовка", "Отделка", "Уборка и сдача"];

export const cosmeticPriceExamples = [
  {
    title: "Комната",
    price: "от 45 000 ₽",
    note: "Стены, пол, плинтус и мелкие доработки при исправном основании.",
  },
  {
    title: "Студия",
    price: "от 160 000 ₽",
    note: "Короткий цикл обновления без переноса мокрых зон и инженерии.",
  },
  {
    title: "Однокомнатная",
    price: "от 220 000 ₽",
    note: "Обновление основных поверхностей и финальная уборка перед заселением.",
  },
  {
    title: "Двухкомнатная",
    price: "от 320 000 ₽",
    note: "Работы по комнатам с согласованием доступа, мебели и материалов.",
  },
  {
    title: "Дом или часть дома",
    price: "по смете после осмотра",
    note: "Оценивается по зонам, состоянию покрытий и техническим ограничениям.",
  },
];

export const cosmeticRenovationFaq = [
  {
    question: "Сколько длится косметический ремонт?",
    answer:
      "Обычно это более короткий формат, чем капитальный ремонт, но срок зависит от площади, состояния покрытий, материалов, мебели и доступа к помещениям. Ориентир можно дать только после осмотра и списка работ.",
  },
  {
    question: "Нужно ли выезжать из квартиры?",
    answer:
      "Иногда можно остаться, если работы идут по комнатам и есть доступ к базовым бытовым зонам. При пыльном демонтаже, покраске, запахах материалов или ремонте нескольких помещений подряд лучше заранее обсудить временный выезд.",
  },
  {
    question: "Можно ли делать косметический ремонт по комнатам?",
    answer:
      "Да, это один из удобных сценариев. Важно согласовать порядок помещений, защиту мебели, хранение материалов и моменты, когда пыль или шум затрагивают соседние зоны.",
  },
  {
    question: "Можно ли оставить мебель?",
    answer:
      "Можно, если её реально защитить и передвигать без риска для работ. Крупная мебель может увеличить срок и стоимость, потому что влияет на доступ к стенам, полу и плинтусам.",
  },
  {
    question: "Чем косметический ремонт отличается от капитального?",
    answer:
      "Косметический ремонт обновляет видимые поверхности и мелкие элементы без полной замены инженерии, перепланировки и сложной черновой подготовки. Если нужны коммуникации, серьёзное выравнивание или скрытые работы, это уже ближе к капитальному ремонту.",
  },
];

export function CosmeticRenovationPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { href: "/services", label: "Услуги" },
              { current: true, label: "Косметический ремонт" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Быстрое обновление интерьера
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Косметический ремонт квартир и домов
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Обновим интерьер без капитальной перестройки: стены, полы, плинтусы, локальная отделка и
            аккуратная сдача после уборки.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#cosmetic-estimate">
              Оценить косметический ремонт
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#cosmetic-prices"
            >
              Посмотреть цены
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
            alt="Светлая AI-иллюстрация комнаты после косметического ремонта"
            className="aspect-[4/3] h-full w-full object-cover"
            height={1024}
            priority
            quality={90}
            src="/images/generated/cosmetic-renovation-hero-ai.webp"
            width={1456}
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-background/92 px-4 py-3 text-sm leading-6 text-muted backdrop-blur">
            <span>Визуальный ориентир лёгкого обновления интерьера</span>
            <Badge variant="warning">AI-иллюстрация, не реальный объект</Badge>
          </figcaption>
        </figure>
      </Section>

      <Section background="surface-alt">
        <SectionHeading
          description="Косметический ремонт полезен, когда база объекта уже рабочая, а интерьер нужно привести в порядок быстрее и легче, чем при капитальном ремонте."
          title="Когда подходит косметический ремонт"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {suitableCases.map(({ icon: Icon, title, description }) => (
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
            description="Итоговый список зависит от осмотра. На странице показан типовой состав лёгкого обновления без полной замены инженерии."
            title="Что входит"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {includedWorks.map((item) => (
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
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Badge variant="warning">Честное ограничение</Badge>
            <SectionHeading
              className="mt-5"
              description="Если при осмотре видно, что объект требует инженерии, сложной подготовки или перепланировки, косметический формат лучше не маскировать под быстрый ремонт."
              title="Что обычно не входит"
            />
            <p className="mt-6 max-w-xl text-base leading-7 text-muted">
              В таком случае корректнее обсуждать капитальный ремонт или отдельный технический этап,
              чтобы не обещать короткий срок и низкий бюджет там, где нужны скрытые работы.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {excludedWorks.map((item) => (
              <div
                className="flex min-h-14 items-center gap-3 rounded-md border border-border bg-surface px-4 py-3"
                key={item}
              >
                <XCircle aria-hidden="true" className="h-5 w-5 flex-none text-destructive" />
                <span className="text-base font-semibold leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Процесс короткий, но не хаотичный: сначала фиксируем состояние объекта и перечень работ, потом переходим к отделке."
          title="Как проходит косметический ремонт"
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

      <Section background="surface-alt" className="scroll-mt-24" id="cosmetic-prices">
        <SectionHeading
          description="Цены ниже являются ориентировочными заглушками для структуры страницы. Реальная смета зависит от площади, состояния покрытий, материалов, мебели и сроков."
          title="Примеры стоимости"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {cosmeticPriceExamples.map((item) => (
            <article
              className="flex rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={item.title}
            >
              <div className="flex min-h-full flex-col">
                <Badge variant="warning">Ориентир, не оферта</Badge>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-5 font-display text-3xl font-semibold leading-none">
                  {item.price}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">{item.note}</p>
                <Link
                  className={`${buttonVariants({ variant: "primary" })} mt-auto w-full`}
                  href="#cosmetic-estimate"
                >
                  Уточнить смету
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeading
            description="Реальных фото до/после для этой услуги пока нет. Блок оставлен как место для будущих подтверждённых объектов и не является портфолио."
            title="До и после"
          />
          <BeforeAfterPlaceholder
            afterLabel="После: нужны реальные фото"
            beforeLabel="До: нужны реальные фото"
          />
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <SectionHeading
            description="Ответы помогают выбрать формат работ, но точные сроки, ограничения и смета подтверждаются после осмотра."
            title="FAQ по косметическому ремонту"
          />
          <Accordion
            items={cosmeticRenovationFaq.map((item, index) => ({
              content: item.answer,
              title: item.question,
              value: `cosmetic-faq-${index}`,
            }))}
          />
        </div>
      </Section>

      <Section
        className="scroll-mt-24"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        id="cosmetic-estimate"
      >
        <div>
          <Badge variant="accent">Предварительная оценка</Badge>
          <SectionHeading
            className="mt-5"
            description="Опишите объект, площадь, состояние покрытий и что нужно обновить. Форма уже валидируется через тестовый обработчик заявок; CRM/почта подключается отдельно."
            title="Рассчитать косметический ремонт"
          />
          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <Brush aria-hidden="true" className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm leading-6 text-muted">
              Если после осмотра окажется, что нужны коммуникации, перепланировка или сложная
              подготовка, предложим другой формат работ до согласования сметы.
            </p>
          </div>
        </div>
        <LeadForm
          description="Укажите тип объекта, площадь и желаемый срок старта. Форма валидируется на клиенте и сервере; CRM/почта пока не подключена."
          source="service_context"
          title="Рассчитать косметический ремонт"
        />
      </Section>
    </>
  );
}
