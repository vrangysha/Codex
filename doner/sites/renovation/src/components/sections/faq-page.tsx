import { Fragment } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CircleDollarSign,
  Clock3,
  FileText,
  HelpCircle,
  Images,
  MessageCircleQuestion,
  PackageCheck,
  PenTool,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { FaqQuestionForm } from "@/components/forms/faq-question-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqGroups, type FaqGroup } from "@/data/site";

export const faqPageGroups = faqGroups;

const groupMeta: Record<
  string,
  {
    description: string;
    icon: LucideIcon;
  }
> = {
  pricing: {
    description: "Как формируется смета, почему нужен замер и где проходят границы цены.",
    icon: CircleDollarSign,
  },
  timeline: {
    description: "Что влияет на график, поставки, ускорение и контроль сроков.",
    icon: Clock3,
  },
  "contract-payment": {
    description: "Как фиксируются условия, изменения, документы и этапная оплата.",
    icon: FileText,
  },
  materials: {
    description: "Кто закупает материалы, как согласуются аналоги и поставки.",
    icon: PackageCheck,
  },
  process: {
    description: "Как устроены отчёты, контроль мастеров, скрытые работы и приёмка.",
    icon: SlidersHorizontal,
  },
  warranty: {
    description: "Что можно обещать только после подтверждения договора и условий.",
    icon: ShieldCheck,
  },
  design: {
    description: "Когда нужен проект, что в него входит и как он связан со сметой.",
    icon: PenTool,
  },
  "portfolio-reviews": {
    description: "Как публиковать работы и отзывы без фейковых кейсов и рекомендаций.",
    icon: Images,
  },
};

const totalQuestions = faqPageGroups.reduce((sum, group) => sum + group.items.length, 0);

export function FaqPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "FAQ" },
            ]}
          />
          <Badge className="mt-8" variant="primary">
            Ответы до заявки
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Частые вопросы о ремонте
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            собрали ответы о стоимости, сроках, материалах, договоре и гарантии
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Ответы помогают подготовиться к консультации, но не заменяют замер, договор и юридически
            подтверждённые условия подрядчика.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#faq-question-form">
              Задать свой вопрос
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#faq-groups"
            >
              Выбрать тему
            </Link>
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">Что покрывает FAQ</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {faqPageGroups.length} групп и {totalQuestions} вопросов: от бюджета до отзывов.
              </p>
            </div>
            <Badge variant="warning">условия нужно подтвердить</Badge>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {faqPageGroups.slice(0, 4).map((group) => {
              const meta = getGroupMeta(group);
              const Icon = meta.icon;

              return (
                <a
                  className="rounded-md border border-border bg-background p-4 transition-colors duration-200 hover:border-primary/35 hover:bg-surface-alt focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring"
                  href={`#faq-${group.slug}`}
                  key={group.slug}
                >
                  <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                  <span className="mt-3 block font-semibold leading-6 text-foreground">
                    {group.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">
                    {group.items.length} вопросов
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </Section>

      <Section background="surface-alt" className="scroll-mt-24" id="faq-groups">
        <SectionHeading
          description="Выберите тему и переходите к нужному блоку. Все вопросы раскрываются через нативные раскрывающиеся элементы."
          title="Темы вопросов"
        />
        <nav aria-label="Группы FAQ" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {faqPageGroups.map((group) => {
            const meta = getGroupMeta(group);
            const Icon = meta.icon;

            return (
              <a
                className="group rounded-lg border border-border bg-background p-5 shadow-soft transition-[border-color,background-color] duration-200 hover:border-primary/35 hover:bg-surface focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring"
                href={`#faq-${group.slug}`}
                key={group.slug}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                <span className="mt-4 block text-lg font-semibold leading-tight text-foreground">
                  {group.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted">{meta.description}</span>
              </a>
            );
          })}
        </nav>
      </Section>

      <Section>
        <div className="grid gap-12">
          {faqPageGroups.map((group, index) => (
            <Fragment key={group.slug}>
              <FaqGroupBlock group={group} />
              {index === 2 ? <MidPageCta /> : null}
            </Fragment>
          ))}
        </div>
      </Section>

      <Section background="surface-alt" className="scroll-mt-24" id="faq-question-form">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <Badge variant="primary">если вопрос остался</Badge>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Задайте вопрос до замера
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Коротко опишите ситуацию: тип объекта, площадь, этап ремонта или сомнение по смете.
              Ответ поможет понять следующий шаг без давления и скрытых условий.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
              {[
                "не просим адрес до первичного разговора",
                "не публикуем вопрос и персональные данные",
                "точные условия подтверждаются только после замера и договора",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <HelpCircle
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 flex-none text-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <FaqQuestionForm />
        </div>
      </Section>
    </>
  );
}

function FaqGroupBlock({ group }: { group: FaqGroup }) {
  const meta = getGroupMeta(group);
  const Icon = meta.icon;

  return (
    <section
      aria-labelledby={`faq-${group.slug}-title`}
      className="scroll-mt-24"
      id={`faq-${group.slug}`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Icon aria-hidden="true" className="h-6 w-6" />
          </div>
          <h2
            className="mt-5 text-balance font-display text-3xl font-semibold leading-tight text-foreground"
            id={`faq-${group.slug}-title`}
          >
            {group.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">{meta.description}</p>
          <p className="mt-4 text-sm leading-6 text-muted">
            {group.items.length} вопросов. Формулировки требуют подтверждения реальными условиями
            бизнеса перед запуском.
          </p>
        </div>
        <Accordion
          items={group.items.map((item) => ({
            content: <p>{item.answer}</p>,
            title: item.question,
            value: item.question,
          }))}
        />
      </div>
    </section>
  );
}

function MidPageCta() {
  return (
    <div className="rounded-lg border border-primary/20 bg-primary p-6 text-primary-foreground shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-primary-foreground">
            Не нашли ответ в первых блоках?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-primary-foreground/80">
            Оставьте вопрос: мы уточним вводные и подскажем, какие данные нужны для расчёта.
          </p>
        </div>
        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href="#faq-question-form"
        >
          Задать вопрос
          <MessageCircleQuestion aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function getGroupMeta(group: FaqGroup) {
  return groupMeta[group.slug] ?? { description: group.title, icon: HelpCircle };
}
