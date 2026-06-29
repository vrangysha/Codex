import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Banknote,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HardHat,
  Home,
  Layers3,
  ListChecks,
  MessageCircle,
  PackageCheck,
  Plug,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export type ProcessTimelineStep = {
  artifact: string;
  clientAction: string;
  companyAction: string;
  description: string;
  icon: LucideIcon;
  number: number;
  result: string;
  title: string;
};

export const processTimelineSteps: ProcessTimelineStep[] = [
  {
    number: 1,
    title: "Заявка",
    description: "Фиксируем первичный запрос и понимаем, какой ремонт нужен.",
    clientAction: "Оставляет контакты, тип объекта, примерную площадь и удобное время связи.",
    companyAction: "Связывается, уточняет задачу и назначает консультацию.",
    result: "Понятен первый контекст объекта и следующий шаг.",
    artifact: "карточка заявки",
    icon: ClipboardList,
  },
  {
    number: 2,
    title: "Консультация",
    description: "Разбираем цели, бюджетные рамки, ограничения и сомнения.",
    clientAction: "Рассказывает о планах, сроках, приоритетах и вопросах.",
    companyAction: "Объясняет варианты ремонта, риски и порядок подготовки сметы.",
    result: "Сформирован черновой сценарий работ и список исходных данных.",
    artifact: "краткое резюме консультации",
    icon: MessageCircle,
  },
  {
    number: 3,
    title: "Замер",
    description: "Собираем фактические данные объекта перед расчётом.",
    clientAction: "Открывает доступ на объект и передаёт планы, если они есть.",
    companyAction: "Снимает размеры, проверяет состояние оснований и отмечает сложные узлы.",
    result: "Есть база для расчёта, графика и технических решений.",
    artifact: "замерный лист и фотофиксация",
    icon: Ruler,
  },
  {
    number: 4,
    title: "Смета",
    description: "Разделяем работы, материалы и допущения на понятные блоки.",
    clientAction: "Проверяет состав работ, приоритеты и бюджетные рамки.",
    companyAction: "Готовит расчёт, поясняет вилки и спорные позиции.",
    result: "Понятно, что входит в стоимость и что требует уточнения.",
    artifact: "смета и список допущений",
    icon: Banknote,
  },
  {
    number: 5,
    title: "Договор",
    description: "Фиксируем ответственность, оплату, этапы и порядок изменений.",
    clientAction: "Согласует условия и подписывает документы.",
    companyAction: "Подготавливает договор, приложения и правила взаимодействия.",
    result: "Работы стартуют на понятных письменных условиях.",
    artifact: "договор и приложения",
    icon: FileText,
  },
  {
    number: 6,
    title: "График работ",
    description: "Собираем ремонт в этапы, сроки, поставки и контрольные точки.",
    clientAction: "Согласует доступ, важные даты и порядок промежуточных решений.",
    companyAction: "Формирует план работ, проверок, закупок и промежуточной приёмки.",
    result: "Понятно, что происходит сейчас, что дальше и где возможны задержки.",
    artifact: "график работ",
    icon: CalendarCheck,
  },
  {
    number: 7,
    title: "Закупка материалов",
    description: "Планируем черновые и чистовые материалы до критичных этапов.",
    clientAction: "Утверждает выбранные позиции, аналоги и лимиты бюджета.",
    companyAction: "Считает объёмы, проверяет совместимость и контролирует поставки.",
    result: "Материалы не тормозят этапы и не конфликтуют с технологией.",
    artifact: "ведомость материалов и заказов",
    icon: PackageCheck,
  },
  {
    number: 8,
    title: "Черновые работы",
    description: "Готовим объект: демонтаж, основания, выравнивание и базовые слои.",
    clientAction: "Согласует решения, которые всплывают после вскрытия конструкций.",
    companyAction: "Выполняет работы, защищает зоны и фиксирует скрытые этапы.",
    result: "Основание готово для инженерии и чистовой отделки.",
    artifact: "акт этапа и фотоотчёт",
    icon: HardHat,
  },
  {
    number: 9,
    title: "Инженерные системы",
    description: "Монтируем электрику, сантехнику, вентиляцию и другие инженерные узлы.",
    clientAction: "Подтверждает точки подключения, оборудование и сценарии использования.",
    companyAction: "Прокладывает линии, проверяет узлы и фиксирует скрытые работы до закрытия.",
    result: "Инженерия смонтирована и проверена до чистовых слоёв.",
    artifact: "схема линий, акт скрытых работ, фотоотчёт",
    icon: Plug,
  },
  {
    number: 10,
    title: "Чистовая отделка",
    description: "Доводим помещения до финального вида: покрытия, монтаж и детали.",
    clientAction: "Подтверждает чистовые материалы, цвета и финальные решения.",
    companyAction: "Выполняет отделку, монтаж и локальные доработки по согласованному составу.",
    result: "Помещения получают готовый вид без потери контроля по деталям.",
    artifact: "фотоотчёт этапа",
    icon: Layers3,
  },
  {
    number: 11,
    title: "Контроль качества",
    description: "Проверяем скрытые и видимые работы перед финальной передачей.",
    clientAction: "Участвует в осмотре или согласует замечания дистанционно.",
    companyAction: "Проверяет геометрию, инженерные узлы, поверхности и список замечаний.",
    result: "Доработки собраны в один понятный список до сдачи.",
    artifact: "финальный чек-лист и список замечаний",
    icon: ClipboardCheck,
  },
  {
    number: 12,
    title: "Сдача объекта",
    description: "Передаём объект, документы и рекомендации по эксплуатации.",
    clientAction: "Осматривает результат, принимает работы и подписывает акт.",
    companyAction: "Передаёт объект, закрывает замечания и объясняет дальнейшие действия.",
    result: "Ремонт принят, а документы собраны в понятный пакет.",
    artifact: "акт приёмки и пакет документов",
    icon: Home,
  },
  {
    number: 13,
    title: "Гарантия",
    description: "Остаёмся на связи после сдачи по вопросам эксплуатации и гарантии.",
    clientAction: "Обращается при гарантийном вопросе по условиям договора.",
    companyAction: "Разбирает обращение и организует гарантийные действия по согласованной схеме.",
    result: "Понятно, куда обращаться после сдачи и какие условия действуют.",
    artifact: "гарантийные условия",
    icon: ShieldCheck,
  },
];

const communicationItems = [
  {
    title: "Фотоотчёты",
    description: "Показываем состояние объекта по этапам, особенно если клиент не может приехать.",
    icon: Camera,
  },
  {
    title: "Прораб на связи",
    description:
      "У объекта есть ответственный контакт, который координирует вопросы и подрядчиков.",
    icon: MessageCircle,
  },
  {
    title: "Согласование изменений",
    description:
      "Новые решения обсуждаются до выполнения: состав, цена, сроки и причина изменения.",
    icon: CheckCircle2,
  },
  {
    title: "Отчёты по этапам",
    description: "Ключевые работы закрываются отчётом, актом или понятной фиксацией результата.",
    icon: ClipboardCheck,
  },
  {
    title: "Без строительного жаргона",
    description: "Сложные решения объясняем обычным языком: что это даёт и какой риск снижает.",
    icon: ListChecks,
  },
];

const qualityChecks = [
  "проверка скрытых работ до закрытия конструкций",
  "контроль геометрии стен, полов и примыканий",
  "проверка инженерии перед чистовыми слоями",
  "защита готовых поверхностей во время следующих этапов",
  "финальный чек-лист перед сдачей объекта",
];

const documentPlaceholders = [
  {
    title: "Договор",
    description: "Условия работ, ответственность сторон, порядок оплаты и изменения объёма.",
    icon: FileText,
  },
  {
    title: "Смета",
    description: "Состав работ, материалы, допущения и позиции, которые требуют уточнения.",
    icon: Banknote,
  },
  {
    title: "График",
    description: "Этапы, контрольные точки, поставки и решения, которые нужны от клиента.",
    icon: CalendarCheck,
  },
  {
    title: "Акты этапов",
    description: "Промежуточная фиксация выполненных работ и замечаний.",
    icon: ClipboardCheck,
  },
  {
    title: "Гарантия",
    description: "Условия обращения после сдачи и порядок гарантийных действий.",
    icon: ShieldCheck,
  },
];

const changeRules = [
  {
    title: "Сначала причина",
    description:
      "Фиксируем, почему работа появилась: скрытый дефект, новое решение или изменение задачи.",
  },
  {
    title: "Затем пересчёт",
    description: "Смета обновляется до выполнения работ, чтобы клиент видел стоимость и состав.",
  },
  {
    title: "Сроки отдельно",
    description: "Если изменение влияет на график, это показывается заранее, а не в день сдачи.",
  },
  {
    title: "Всё письменно",
    description: "Допработы, материалы, сроки и согласования должны оставаться в фиксируемом виде.",
  },
];

export function ProcessPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "Процесс" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Процесс и контроль
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Как проходит ремонт
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            понятный процесс от заявки до гарантии
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Показываем, какие решения нужны от клиента, что делает команда, какой результат должен
            появиться на каждом этапе и чем он фиксируется.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#process-plan">
              Обсудить проект
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="/pricing#pricing-estimate"
            >
              Получить смету
            </Link>
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold leading-tight">Маршрут объекта</h2>
            <Badge variant="warning">13 этапов</Badge>
          </div>
          <ol className="mt-6 divide-y divide-border rounded-md border border-border bg-background">
            {[
              ["01", "Заявка", "понять задачу"],
              ["04", "Смета", "зафиксировать состав"],
              ["08", "Работы", "вести этапы и отчёты"],
              ["13", "Гарантия", "остаться на связи"],
            ].map(([number, title, text]) => (
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 p-4" key={number}>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  {number}
                </span>
                <div>
                  <p className="font-semibold leading-6">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-6 text-muted">
            Сроки и точные документы требуют подтверждения владельцем бизнеса перед публикацией.
          </p>
        </div>
      </Section>

      <Section background="surface-alt" id="process-timeline">
        <SectionHeading
          description="Карточки читаются как простой маршрут: что делает клиент, что делает команда, какой результат получается и какой артефакт остаётся после этапа."
          title="Таймлайн ремонта"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processTimelineSteps.map((step) => (
            <ProcessStepCard key={step.number} step={step} />
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeading
            description="Главный страх ремонта - потерять связь с объектом. Поэтому важны короткие отчёты, понятные решения и единый ответственный контакт."
            title="Как мы держим вас в курсе"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {communicationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  className={cn(
                    "rounded-lg border border-border bg-surface p-5",
                    index === communicationItems.length - 1 && "sm:col-span-2",
                  )}
                  key={item.title}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  <h2 className="mt-4 text-xl font-semibold leading-tight">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <SectionHeading
              description="Контроль должен быть понятен не только строителям. Поэтому ключевые проверки вынесены в отдельные точки до финальной сдачи."
              title="Контроль качества"
            />
            <p className="mt-6 text-base leading-7 text-muted">
              Финальный результат зависит от того, что проверяется до закрытия слоёв: скрытые
              работы, инженерия, геометрия и защита уже готовых поверхностей.
            </p>
          </div>
          <ul className="grid gap-3">
            {qualityChecks.map((check) => (
              <li
                className="flex gap-3 rounded-lg border border-border bg-background p-4"
                key={check}
              >
                <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary" />
                <span className="text-base leading-7">{check}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Реальные шаблоны документов пока не предоставлены, поэтому здесь показана структура пакета, а не настоящие файлы компании."
          title="Документы по ремонту"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {documentPlaceholders.map((document) => {
            const Icon = document.icon;
            return (
              <article
                className="flex h-full flex-col rounded-lg border border-border bg-surface p-5"
                key={document.title}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                <Badge className="mt-5 w-fit" variant="warning">
                  Плейсхолдер документа
                </Badge>
                <h2 className="mt-4 text-xl font-semibold leading-tight">{document.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{document.description}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
          Перед запуском нужны утверждённые названия документов, условия договора, формат сметы,
          порядок актов и гарантийная процедура.
        </p>
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            description="Дополнительные работы не должны появляться устно и внезапно. Для клиента важны причина, пересчёт, влияние на график и письменная фиксация."
            title="Если появляются изменения"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {changeRules.map((rule, index) => (
              <article
                className="rounded-lg border border-border bg-background p-5 shadow-soft"
                key={rule.title}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <h2 className="mt-4 text-xl font-semibold leading-tight">{rule.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{rule.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="process-plan">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            description="Опишите объект и желаемый формат ремонта. На следующем шаге можно собрать предварительный план работ, вопросы для замера и основу для сметы."
            title="Получить план работ"
          />
          <LeadForm
            description="Форма валидируется на клиенте и сервере. CRM, почта, вебхук и финальная политика хранения данных остаются задачами интеграции."
            title="Получить план работ для вашего объекта"
          />
        </div>
      </Section>
    </>
  );
}

function ProcessStepCard({ step }: { step: ProcessTimelineStep }) {
  const Icon = step.icon;

  return (
    <li className="flex">
      <article className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-background p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            {String(step.number).padStart(2, "0")}
          </span>
          <Icon aria-hidden="true" className="h-6 w-6 flex-none text-primary" />
        </div>
        <h2 className="mt-5 text-xl font-semibold leading-tight">{step.title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
        <dl className="mt-5 grid gap-4 text-sm leading-6">
          <ProcessDetail term="Клиент" value={step.clientAction} />
          <ProcessDetail term="Компания" value={step.companyAction} />
          <ProcessDetail term="Результат" value={step.result} />
          <ProcessDetail term="Артефакт" value={step.artifact} />
        </dl>
      </article>
    </li>
  );
}

function ProcessDetail({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-foreground">{term}</dt>
      <dd className="mt-1 text-muted">{value}</dd>
    </div>
  );
}
