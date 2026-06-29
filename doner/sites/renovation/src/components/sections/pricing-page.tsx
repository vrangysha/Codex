import Link from "next/link";
import {
  Banknote,
  Bath,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HardHat,
  Home,
  Layers3,
  PackageCheck,
  PencilRuler,
  Plug,
  Ruler,
  ShieldCheck,
  TimerReset,
  Truck,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PricingEstimateForm } from "@/components/forms/pricing-estimate-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPackages } from "@/data/site";
import { cn } from "@/lib/utils";

const packageDisplay: Record<
  string,
  { label: string; highlighted?: boolean; serviceHref: string }
> = {
  cosmetic: {
    label: "Косметический",
    serviceHref: "/services/cosmetic-renovation",
  },
  capital: {
    label: "Капитальный",
    serviceHref: "/services/capital-renovation",
  },
  turnkey: {
    label: "Под ключ",
    highlighted: true,
    serviceHref: "/services/apartment-renovation",
  },
  designer: {
    label: "С дизайн-проектом",
    serviceHref: "/services/design-project",
  },
};

const priceFactors: {
  description: string;
  icon: LucideIcon;
  title: string;
}[] = [
  {
    icon: Ruler,
    title: "Площадь",
    description: "метраж влияет на объём черновых, чистовых и организационных работ",
  },
  {
    icon: Home,
    title: "Состояние объекта",
    description: "новостройка, вторичка, частично выполненный ремонт или старый фонд",
  },
  {
    icon: HardHat,
    title: "Демонтаж",
    description: "старые покрытия, перегородки, сантехника и вывоз строительного мусора",
  },
  {
    icon: Plug,
    title: "Инженерные работы",
    description: "электрика, сантехника, вентиляция и слабые токи требуют точного расчёта",
  },
  {
    icon: Bath,
    title: "Санузлы",
    description: "мокрые зоны добавляют гидроизоляцию, плитку, выводы и узлы доступа",
  },
  {
    icon: Layers3,
    title: "Потолки и стены",
    description: "геометрия, выравнивание, ниши, сложные примыкания и декоративные решения",
  },
  {
    icon: PackageCheck,
    title: "Материалы",
    description: "черновые и чистовые позиции, аналоги, сроки поставки и остатки",
  },
  {
    icon: TimerReset,
    title: "Сроки",
    description: "сжатый график может менять логистику, сменность и порядок этапов",
  },
  {
    icon: PencilRuler,
    title: "Дизайн-проект",
    description: "чертежи помогают точнее считать работы и снижать риск переделок",
  },
  {
    icon: Truck,
    title: "Логистика",
    description: "доставка, подъём, хранение материалов, доступ на объект и ограничения дома",
  },
];

const exampleCalculations = [
  {
    title: "Студия 32 м²",
    type: "косметический или базовый ремонт под ключ",
    scope: ["подготовка стен", "покраска или обои", "напольные покрытия", "локальный монтаж"],
    range: "пример: 350-750 тыс. ₽",
    timeline: "примерно 3-8 недель",
  },
  {
    title: "Квартира 65 м²",
    type: "капитальный ремонт или под ключ",
    scope: ["демонтаж", "электрика и сантехника", "черновые работы", "чистовая отделка"],
    range: "пример: 1,4-2,8 млн ₽",
    timeline: "примерно 3-5 месяцев",
  },
  {
    title: "Дом 120 м²",
    type: "ремонт дома с инженерными узлами",
    scope: ["обследование", "инженерные решения", "отделка помещений", "логистика материалов"],
    range: "пример: 2,8-5,8 млн ₽",
    timeline: "примерно 4-8 месяцев",
  },
];

const comparisonRows = [
  {
    title: "Стены",
    cosmetic: "подготовка и обновление покрытий",
    capital: "выравнивание и полная подготовка",
    turnkey: "черновой и чистовой цикл",
    designer: "по проекту и ведомости покрытий",
  },
  {
    title: "Пол",
    cosmetic: "замена покрытия при готовом основании",
    capital: "основание, стяжка, покрытие",
    turnkey: "от основания до плинтуса",
    designer: "по раскладке и спецификации",
  },
  {
    title: "Потолок",
    cosmetic: "окраска или простое обновление",
    capital: "выравнивание или новая система",
    turnkey: "подготовка, монтаж, свет",
    designer: "сценарии света и узлы",
  },
  {
    title: "Электрика",
    cosmetic: "локальные доработки",
    capital: "замена линий и щита",
    turnkey: "проектирование групп и монтаж",
    designer: "по плану розеток и света",
  },
  {
    title: "Сантехника",
    cosmetic: "локальная замена",
    capital: "новая разводка и узлы",
    turnkey: "мокрые зоны под сдачу",
    designer: "по чертежам и оборудованию",
  },
  {
    title: "Демонтаж",
    cosmetic: "минимальный",
    capital: "полный по согласованию",
    turnkey: "включён по смете",
    designer: "по проектным решениям",
  },
  {
    title: "Материалы",
    cosmetic: "базовая ведомость",
    capital: "черновые и чистовые отдельно",
    turnkey: "подбор, расчёт, поставки",
    designer: "спецификация и аналоги",
  },
  {
    title: "Дизайн",
    cosmetic: "не обязателен",
    capital: "техническое задание",
    turnkey: "по необходимости",
    designer: "обязательная основа работ",
  },
  {
    title: "Контроль",
    cosmetic: "по ключевым работам",
    capital: "контроль скрытых этапов",
    turnkey: "единый ответственный процесс",
    designer: "соответствие проекту",
  },
];

const paymentStages = [
  {
    icon: FileText,
    title: "После согласования сметы",
    description:
      "Стартовый платёж возможен только после согласования состава работ, материалов и этапности.",
  },
  {
    icon: ClipboardCheck,
    title: "После этапов работ",
    description:
      "Дальнейшие платежи привязываются к понятным этапам и промежуточной приёмке, а не к устным обещаниям.",
  },
  {
    icon: ShieldCheck,
    title: "Финальная часть после сдачи",
    description:
      "Финальный расчёт закрывается после осмотра, устранения замечаний и передачи документов.",
  },
];

export const pricingFaq = [
  {
    question: "Почему нельзя назвать точную цену сразу?",
    answer:
      "Без замера невозможно честно оценить состояние основания, инженерные узлы, мокрые зоны, доступ на объект и реальные материалы. На странице указаны только ориентиры.",
  },
  {
    question: "Что входит в смету?",
    answer:
      "В смете нужно разделить работы, материалы, этапы, допущения и условия изменения стоимости. Итоговый формат требует подтверждения владельцем бизнеса.",
  },
  {
    question: "Можно ли купить материалы самостоятельно?",
    answer:
      "Да, если материалы подходят по характеристикам и не нарушают технологию работ. Ответственность за сроки поставки и замену аналогов нужно согласовать заранее.",
  },
  {
    question: "Как фиксируются допработы?",
    answer:
      "Дополнительные работы должны согласовываться отдельно: состав, стоимость, влияние на сроки и причина появления фиксируются до выполнения.",
  },
  {
    question: "Можно ли уложиться в бюджет?",
    answer:
      "Можно планировать бюджетные рамки, если заранее отделить обязательные работы от желательных и оставить резерв на скрытые дефекты.",
  },
  {
    question: "Есть ли рассрочка или этапная оплата?",
    answer:
      "Этапная оплата предусмотрена как временная модель. Рассрочка, проценты и платёжные условия требуют подтверждения владельца бизнеса и договора.",
  },
];

export function PricingPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "Цены" },
            ]}
          />
          <Badge className="mt-8" variant="warning">
            Ориентиры, не публичная оферта
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Цены на ремонт квартир и домов
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Стоимость зависит от площади, состояния объекта, материалов и состава работ. Точную
            смету готовим после замера, уточнения решений и согласования материалов.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#pricing-estimate">
              Получить точную смету
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#price-factors"
            >
              Что влияет на цену
            </Link>
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-3">
            <HeroSignal icon={Banknote} label="смета после замера" />
            <HeroSignal icon={WalletCards} label="оплата по этапам" />
            <HeroSignal icon={ClipboardList} label="состав работ отдельно" />
          </div>
          <div className="mt-6 rounded-md border border-warning/30 bg-warning/15 p-5">
            <p className="font-semibold leading-7 text-warning-foreground">
              Не является публичной офертой. Точная смета после замера и согласования материалов.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Цены на странице нужны для первичной ориентации, а не для обещания фиксированной
              стоимости без осмотра объекта.
            </p>
          </div>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <HeroMetric label="пакеты" value="4 формата" />
            <HeroMetric label="расчёты" value="3 примера" />
          </dl>
        </div>
      </Section>

      <Section background="surface-alt" id="pricing-packages">
        <SectionHeading
          description="Каждый пакет показывает порядок бюджета, состав работ и сценарий, где формат подходит. Перед публикацией реальные цены и ограничения нужно подтвердить."
          title="Пакеты ремонта"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {pricingPackages.map((pack) => {
            const display = packageDisplay[pack.slug];
            const highlighted = Boolean(display?.highlighted);

            return (
              <article
                className={cn(
                  "flex h-full flex-col rounded-lg border border-border bg-background p-6 shadow-soft",
                  highlighted && "border-primary bg-primary text-primary-foreground",
                )}
                key={pack.slug}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-semibold leading-tight">
                    {display?.label ?? pack.name}
                  </h2>
                  {highlighted ? (
                    <span className="rounded-full bg-background/16 px-3 py-1 text-sm font-medium">
                      частый запрос
                    </span>
                  ) : null}
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm leading-6 text-muted",
                    highlighted && "text-primary-foreground/82",
                  )}
                >
                  {pack.description}
                </p>
                <div className="mt-6">
                  <p className="font-display text-3xl font-semibold leading-none">
                    {pack.priceFrom}
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-6 text-muted",
                      highlighted && "text-primary-foreground/82",
                    )}
                  >
                    ориентировочно за {pack.unit}
                  </p>
                </div>
                <div className="mt-6 flex-1 space-y-5">
                  <PackageList highlighted={highlighted} items={pack.includes} title="Что входит" />
                  <div>
                    <p className="text-sm font-semibold leading-6">Кому подходит</p>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-6 text-muted",
                        highlighted && "text-primary-foreground/82",
                      )}
                    >
                      {pack.bestFor}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-6">Примерный срок</p>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-6 text-muted",
                        highlighted && "text-primary-foreground/82",
                      )}
                    >
                      {pack.timeline}
                    </p>
                  </div>
                </div>
                <Link
                  className={cn(
                    buttonVariants({
                      variant: highlighted ? "secondary" : "outline",
                    }),
                    "mt-6 w-full",
                    highlighted && "bg-background text-primary hover:bg-surface",
                  )}
                  href="#pricing-estimate"
                >
                  {pack.cta}
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
          Не является публичной офертой. Точная смета после замера и согласования материалов.
        </p>
      </Section>

      <Section id="price-factors">
        <SectionHeading
          description="Цена меняется не только от метража. Сильнее всего влияют состояние объекта, инженерия, мокрые зоны, материалы и логистика."
          title="Что влияет на цену"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {priceFactors.map((factor) => {
            const Icon = factor.icon;

            return (
              <article
                className="rounded-lg border border-border bg-surface p-5"
                key={factor.title}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-lg font-semibold leading-tight">{factor.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{factor.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading
          description="Сценарии нужны для ориентира. Это не расчёт конкретного объекта и не обещание уложиться в диапазон без замера."
          title="Примеры расчёта"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {exampleCalculations.map((example) => (
            <article
              className="flex h-full flex-col rounded-lg border border-border bg-background p-6 shadow-soft"
              key={example.title}
            >
              <Badge variant="warning">пример</Badge>
              <h2 className="mt-5 text-2xl font-semibold leading-tight">{example.title}</h2>
              <dl className="mt-6 space-y-5 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-foreground">Тип ремонта</dt>
                  <dd className="mt-2 text-muted">{example.type}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Состав работ</dt>
                  <dd className="mt-2 text-muted">{example.scope.join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Ориентировочный диапазон</dt>
                  <dd className="mt-2 text-muted">{example.range}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Ориентировочные сроки</dt>
                  <dd className="mt-2 text-muted">{example.timeline}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            description="На телефоне таблица прокручивается внутри блока, не создавая горизонтальный скролл всей страницы."
            title="Что входит в разные форматы"
          />
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
            <div
              aria-label="Прокручиваемая таблица сравнения форматов ремонта"
              className="overflow-x-auto focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring"
              role="region"
              tabIndex={0}
            >
              <table className="min-w-[780px] border-collapse text-left text-sm leading-6">
                <caption className="sr-only">
                  Сравнение косметического, капитального, под ключ и дизайнерского ремонта
                </caption>
                <thead className="bg-surface-alt text-foreground">
                  <tr>
                    <th className="sticky left-0 z-10 w-40 bg-surface-alt px-5 py-4 font-semibold">
                      Работы
                    </th>
                    <th className="px-5 py-4 font-semibold">Косметический</th>
                    <th className="px-5 py-4 font-semibold">Капитальный</th>
                    <th className="px-5 py-4 font-semibold">Под ключ</th>
                    <th className="px-5 py-4 font-semibold">Дизайнерский</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map((row) => (
                    <tr key={row.title}>
                      <th className="sticky left-0 z-10 bg-surface px-5 py-4 font-semibold text-foreground">
                        {row.title}
                      </th>
                      <td className="px-5 py-4 text-muted">{row.cosmetic}</td>
                      <td className="px-5 py-4 text-muted">{row.capital}</td>
                      <td className="px-5 py-4 text-muted">{row.turnkey}</td>
                      <td className="px-5 py-4 text-muted">{row.designer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            description="Точные проценты не указаны, потому что реальные условия оплаты должен подтвердить владелец бизнеса и договор."
            title="Поэтапная оплата"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {paymentStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  className="rounded-lg border border-border bg-background p-6"
                  key={stage.title}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  <h2 className="mt-4 text-xl font-semibold leading-tight">{stage.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{stage.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section
        className="scroll-mt-24"
        containerClassName="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
        id="pricing-estimate"
      >
        <div className="lg:sticky lg:top-28">
          <Badge variant="accent">Заявка на смету</Badge>
          <SectionHeading
            className="mt-5"
            description="Форма собирает только параметры, нужные для первичной оценки: объект, площадь, состояние, формат ремонта, желаемый старт и телефон."
            title="Опишите объект для точного расчёта"
          />
          <div className="mt-6 rounded-md border border-border bg-surface p-5 text-sm leading-6 text-muted">
            <p>
              Форма уже отправляет данные в безопасный тестовый обработчик `/api/lead` с клиентской
              и серверной валидацией. CRM, почта, вебхук и финальная политика хранения данных
              остаются задачами интеграции.
            </p>
          </div>
        </div>
        <PricingEstimateForm />
      </Section>

      <Section background="surface">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            description="Короткие ответы снимают главные сомнения до заявки и не обещают фиксированную цену без исходных данных."
            title="Вопросы о стоимости"
          />
          <Accordion
            items={pricingFaq.map((item) => ({
              content: <p>{item.answer}</p>,
              title: item.question,
              value: item.question,
            }))}
          />
        </div>
      </Section>
    </>
  );
}

function HeroSignal({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
      <p className="mt-3 text-sm font-semibold leading-6 text-foreground">{label}</p>
    </div>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <dt className="text-sm leading-5 text-muted">{label}</dt>
      <dd className="mt-1 font-semibold leading-6 text-foreground">{value}</dd>
    </div>
  );
}

function PackageList({
  highlighted,
  items,
  title,
}: {
  highlighted?: boolean;
  items: string[];
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold leading-6">{title}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li className="flex gap-2 text-sm leading-6" key={item}>
            <CheckCircle2
              aria-hidden="true"
              className={cn(
                "mt-0.5 h-4 w-4 flex-none text-primary",
                highlighted && "text-primary-foreground",
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
