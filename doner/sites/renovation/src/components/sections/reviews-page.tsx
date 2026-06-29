import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ImageIcon,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
} from "lucide-react";
import { ReviewsTrustForm } from "@/components/forms/reviews-trust-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials, type Testimonial } from "@/data/site";

export const reviewThemes = [
  {
    title: "Понятная смета",
    description: "Клиент видит состав работ, допущения, материалы и причины изменений.",
    icon: FileText,
  },
  {
    title: "Аккуратность",
    description: "Порядок на объекте, защита поверхностей и чистая передача результата.",
    icon: Sparkles,
  },
  {
    title: "Связь с прорабом",
    description: "Понятный контакт, ответы по объекту и сообщения о важных решениях.",
    icon: MessageCircle,
  },
  {
    title: "Соблюдение этапов",
    description: "Работы идут по согласованной последовательности с контрольными точками.",
    icon: ClipboardCheck,
  },
  {
    title: "Помощь с материалами",
    description: "Подбор, совместимость, поставки и замены обсуждаются до влияния на сроки.",
    icon: PackageCheck,
  },
  {
    title: "Спокойный процесс",
    description: "Меньше хаоса, устных обещаний и внезапных решений во время ремонта.",
    icon: ShieldCheck,
  },
];

export const reviewsFaq = [
  {
    question: "Где посмотреть реальные работы?",
    answer:
      "Раздел портфолио уже подготовлен, но реальные фото, даты, состав работ и разрешения на публикацию нужно добавить перед публичным запуском.",
  },
  {
    question: "Можно ли связаться с клиентами?",
    answer:
      "Только если конкретный клиент отдельно согласится на такой формат связи. Это нужно фиксировать заранее и не публиковать контакты без разрешения.",
  },
  {
    question: "Как оставить отзыв?",
    answer:
      "После сдачи объекта можно согласовать удобный канал: текст, скриншот из переписки, видео или ссылка на внешний источник. Перед публикацией нужно получить разрешение.",
  },
  {
    question: "Как фиксируется гарантия?",
    answer:
      "Гарантийные условия должны быть указаны в договоре и документах после сдачи. Сроки, исключения и канал обращения нужно подтвердить владельцу бизнеса.",
  },
];

const trustPolicies = [
  {
    title: "Источник",
    text: "реальная площадка, переписка, письмо или подписанный текст",
  },
  {
    title: "Разрешение",
    text: "согласие клиента на публикацию имени, проекта, текста и медиа",
  },
  {
    title: "Контекст",
    text: "тип объекта, площадь, дата, состав работ и статус проекта",
  },
  {
    title: "Маркировка",
    text: "демонстрационные материалы и иллюстрации не смешиваются с реальными отзывами",
  },
];

const mediaPlaceholders = [
  {
    title: "Видеоотзыв клиента",
    description: "Место для реального видео после согласия клиента и проверки файла.",
    needed: "нужны видеофайл, дата, проект и разрешение",
    icon: Video,
  },
  {
    title: "Фото клиента или объекта",
    description: "Будущий блок для реального фото, если клиент разрешит публикацию.",
    needed: "нужны фото, источник и права на публикацию",
    icon: Camera,
  },
  {
    title: "Скриншот отзыва",
    description: "Место для скриншота из разрешённого канала без персональных лишних данных.",
    needed: "нужны согласие, ретушь личных данных и источник",
    icon: ImageIcon,
  },
];

const hasTestimonials = testimonials.length > 0;
const allReviewsAreDemo = hasTestimonials && testimonials.every((item) => item.isDemo);

export function ReviewsPage() {
  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "Отзывы" },
            ]}
          />
          <Badge className="mt-8" variant="warning">
            Демо-структура отзывов
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Отзывы клиентов
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            что клиенты ценят в процессе ремонта
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Сейчас на странице используются демонстрационные карточки. Они показывают будущую
            структуру отзывов и не являются реальными рекомендациями клиентов.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#reviews-consult">
              Обсудить ваш ремонт
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="/portfolio"
            >
              Смотреть работы
            </Link>
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold leading-tight">Как отзывы попадут на сайт</h2>
            <Badge variant="primary">честная публикация</Badge>
          </div>
          <div className="mt-6 grid gap-4">
            {trustPolicies.map((item) => (
              <div
                className="grid gap-3 rounded-md border border-border bg-background p-4 sm:grid-cols-[8rem_minmax(0,1fr)]"
                key={item.title}
              >
                <p className="font-semibold leading-6 text-foreground">{item.title}</p>
                <p className="text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface-alt" className="scroll-mt-24" id="reviews-grid">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Каждая карточка содержит тип проекта, площадь, рейтинг, дату и статус. Пока источник не подтверждён, отзыв остаётся демо."
            title="Отзывы о ремонте"
          />
          {allReviewsAreDemo ? (
            <div
              className="rounded-md border border-warning/30 bg-warning/15 px-4 py-3 text-sm leading-6 text-warning-foreground"
              role="note"
            >
              Все отзывы ниже демонстрационные и должны быть заменены реальными отзывами с
              разрешением клиентов.
            </div>
          ) : null}
        </div>

        {hasTestimonials ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <ReviewCard item={item} key={`${item.name}-${item.projectType}-${item.area}`} />
            ))}
          </div>
        ) : (
          <ReviewsEmptyState />
        )}
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Эти темы подготовлены как структура для будущих подтверждённых отзывов. В реальной версии сюда нужно подставить наблюдения из настоящих клиентских текстов."
            title="Что чаще всего отмечают клиенты"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {reviewThemes.map((item) => (
              <ThemeCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading
          description="Здесь зарезервированы места для будущих видео, фото и скриншотов. Сейчас блоки не имитируют реальные медиа и не используют чужие изображения."
          title="Видео и фотоотзывы"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {mediaPlaceholders.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="rounded-lg border border-border bg-background p-5 shadow-soft"
                key={item.title}
              >
                <div className="flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-border bg-surface-alt">
                  <div className="text-center">
                    <Icon aria-hidden="true" className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-foreground">
                      Плейсхолдер
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <Badge variant="warning">не реальное медиа</Badge>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-foreground">
                  {item.needed}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section background="surface-alt" className="scroll-mt-24" id="reviews-consult">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <Badge variant="primary">ориентир перед сметой</Badge>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Хотите понять, сколько будет стоить ваш ремонт?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Опишите объект в короткой форме. Заявка валидируется через тестовый обработчик
              `/api/lead`; CRM, почта или вебхук подключаются отдельно после выбора реального
              маршрута обработки.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
              {[
                "перезвонить и уточнить вводные",
                "объяснить, какие данные нужны для сметы",
                "не публиковать персональные данные",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 flex-none text-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ReviewsTrustForm />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            description="Короткие ответы фиксируют правила публикации отзывов, связи с клиентами и гарантии."
            title="Вопросы об отзывах"
          />
          <Accordion
            items={reviewsFaq.map((item) => ({
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

function ReviewsEmptyState() {
  return (
    <div className="mt-10 rounded-lg border border-dashed border-border bg-background p-6 text-center">
      <Badge variant="warning">Отзывы пока не опубликованы</Badge>
      <h3 className="mx-auto mt-4 max-w-xl text-2xl font-semibold leading-tight">
        Нужны реальные отзывы с разрешением клиентов
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
        Если подтвержденных отзывов нет, страница показывает честное пустое состояние и не имитирует
        социальное доказательство. Добавьте источник, дату, контекст проекта и согласие клиента
        перед публикацией.
      </p>
      <Link className={`${buttonVariants({ size: "lg" })} mt-6`} href="#reviews-consult">
        Обсудить ремонт
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ReviewCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-background p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            {getInitials(item.name)}
          </div>
          <div>
            <p className="font-semibold leading-6 text-foreground">{item.name}</p>
            <p className="text-sm leading-6 text-muted">{item.projectType}</p>
          </div>
        </div>
        <Badge variant={item.isDemo ? "warning" : "success"}>
          {item.isDemo ? "Демо-отзыв" : "Подтверждённый"}
        </Badge>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Rating value={item.rating} isDemo={item.isDemo} />
        <Badge variant="neutral">{item.tag}</Badge>
      </div>

      <blockquote className="mt-5 text-base leading-7 text-foreground">“{item.text}”</blockquote>

      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm leading-6">
        <div>
          <dt className="text-muted">Площадь</dt>
          <dd className="font-semibold text-foreground">{item.area}</dd>
        </div>
        <div>
          <dt className="text-muted">Дата</dt>
          <dd className="font-semibold text-foreground">{item.date}</dd>
        </div>
      </dl>
    </article>
  );
}

function ThemeCard({ item }: { item: { title: string; description: string; icon: LucideIcon } }) {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border border-border bg-surface p-5 shadow-soft">
      <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
      <h3 className="mt-4 text-xl font-semibold leading-tight">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
    </article>
  );
}

function Rating({ value, isDemo }: { value: number; isDemo: boolean }) {
  return (
    <div
      aria-label={`Рейтинг ${value} из 5${isDemo ? ", демонстрационный" : ""}`}
      className="flex items-center gap-2 text-sm font-semibold text-foreground"
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            className={index < value ? "h-4 w-4 fill-warning text-warning" : "h-4 w-4 text-border"}
            key={index}
          />
        ))}
      </span>
      <span>{value} из 5</span>
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}
