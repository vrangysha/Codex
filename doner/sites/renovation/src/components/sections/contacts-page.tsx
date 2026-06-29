import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Clock,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { ContactLeadForm } from "@/components/forms/contact-lead-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contacts, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const serviceAreaItems = [
  {
    title: "Город",
    value: siteConfig.city,
    description: "Публичный город работы нужно подтвердить владельцу бизнеса.",
  },
  {
    title: "Районы",
    value: "Список районов уточняется",
    description: "Перед запуском стоит указать реальные районы, где команда берёт объекты.",
  },
  {
    title: "Ближайшие населённые пункты",
    value: "Перечень населённых пунктов уточняется",
    description: "Точную возможность выезда проверяем после заявки и адресного ориентира.",
  },
];

const quickSteps = [
  "Опишите объект, площадь и район.",
  "Пришлите фото, планировку или дизайн-проект в мессенджер после первого ответа.",
  "Получите следующий шаг: консультацию, замер или список уточняющих вопросов.",
];

export const contactsMiniFaq = [
  {
    question: "Как быстро отвечаете?",
    answer:
      "Точный срок ответа пока нужно подтвердить. Ориентир для интерфейса: отвечаем в рабочее время и уточняем задачу перед расчётом.",
  },
  {
    question: "Можно ли прислать фото объекта?",
    answer:
      "Да, после первого контакта можно отправить фото, планировку или существующий дизайн-проект в удобный мессенджер. Хранение файлов и обработка заявок будут подключены на этапе API.",
  },
  {
    question: "Сколько стоит замер?",
    answer:
      "Стоимость и условия замера являются временными данными. Их нужно подтвердить владельцу бизнеса до публикации.",
  },
  {
    question: "Нужна ли встреча на объекте?",
    answer:
      "Для точной сметы обычно нужен осмотр объекта или подробные исходные данные. Формат встречи уточняем после заявки.",
  },
];

const contactCards: {
  action?: string;
  href?: string;
  icon: LucideIcon;
  title: string;
  value: string;
  note: string;
  external?: boolean;
}[] = [
  {
    action: "Позвонить",
    href: phoneHref(contacts.phone),
    icon: Phone,
    title: "Телефон",
    value: contacts.phone,
    note: "Номер временный: заменить на реальный до запуска рекламы и SEO-трафика.",
  },
  {
    action: "Написать на почту",
    href: `mailto:${contacts.email}`,
    icon: Mail,
    title: "Эл. почта",
    value: contacts.email,
    note: "Почта временная: нужна реальная рабочая почта для заявок и документов.",
  },
  {
    icon: MessageCircle,
    title: "Мессенджеры",
    value: contacts.messengers.map((messenger) => messenger.label).join(" / "),
    note: "Telegram и WhatsApp указаны как временные ссылки, их нужно подтвердить.",
  },
  {
    icon: Clock,
    title: "Часы работы",
    value: contacts.workingHours,
    note: "График предварительный, включая запись на замер и консультации.",
  },
  {
    icon: MapPin,
    title: "Адрес или зона",
    value: contacts.address,
    note: "Публичный офис, шоурум или сервисную зону нужно подтвердить отдельно.",
  },
  {
    icon: Building2,
    title: "Соцсети",
    value: "Публичные ссылки не предоставлены",
    note: "Если соцсети будут использоваться для заявок или доверия, добавить реальные URL.",
  },
];

export function ContactsPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="pb-16 pt-8 sm:pt-10 lg:pb-24" size="wide">
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "Контакты" },
            ]}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
            <div>
              <Badge variant="primary">Заявка, консультация, замер</Badge>
              <SectionHeading
                className="mt-6 max-w-4xl"
                description="Оставьте заявку — уточним задачу и подскажем следующий шаг. Если точная зона выезда, адрес офиса или публичные контакты ещё не подтверждены, они отмечены как временные."
                title="Контакты"
                titleAs="h1"
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className={buttonVariants({ size: "lg" })} href="#contact-form">
                  Перейти к форме
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                  href={phoneHref(contacts.phone)}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  {contacts.phone}
                </a>
              </div>
            </div>

            <aside className="rounded-lg border border-border bg-surface-alt p-6">
              <p className="text-sm font-semibold text-foreground">Что происходит после заявки</p>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-muted">
                {quickSteps.map((step, index) => (
                  <li className="flex gap-3" key={step}>
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            description="Каналы связи собраны на первом экране страницы. Временные данные оставлены видимыми, чтобы их нельзя было принять за подтверждённые реальные контакты."
            title="Связаться удобным способом"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <Card className="flex min-h-full flex-col gap-5" key={item.title}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold leading-tight">{item.title}</h2>
                      <p className="mt-2 text-base font-semibold leading-7 text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-muted">{item.note}</p>
                  {item.href ? (
                    <a
                      className="mt-auto inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-ring"
                      href={item.href}
                      rel={item.external ? "noreferrer" : undefined}
                      target={item.external ? "_blank" : undefined}
                    >
                      {item.action}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  ) : null}
                </Card>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {contacts.messengers.map((messenger) => {
              const isExternal = /^https?:\/\//.test(messenger.href);

              return (
                <a
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold transition-colors duration-200 ease-out hover:border-primary/35 hover:bg-surface-alt focus-visible:outline-ring"
                  href={messenger.href}
                  key={messenger.label}
                  rel={isExternal ? "noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-primary" />
                  {messenger.label}: {messenger.handle}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24" id="contact-form">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <SectionHeading
                description="Форма собирает только данные, нужные для первого ответа: контакты, тип объекта, площадь, район, формат ремонта и желаемый старт."
                title="Оставьте заявку"
              />
              <div className="mt-8 rounded-lg border border-border bg-surface-alt p-6">
                <h3 className="text-xl font-semibold leading-tight">Можно подготовить заранее</h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
                  <li className="flex gap-3">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-primary"
                    />
                    <span>Площадь, планировку или примерный список задач.</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-primary"
                    />
                    <span>Фото текущего состояния, если удобнее начать с удалённой оценки.</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-primary"
                    />
                    <span>Желаемые сроки и ограничения по доступу на объект.</span>
                  </li>
                </ul>
              </div>
            </div>
            <ContactLeadForm />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <SectionHeading
                description="Реальная география работ пока не предоставлена. До запуска рекламы и локального SEO нужно указать город, районы и условия выезда."
                title="Где работаем"
              />
              <p className="mt-6 text-base leading-7 text-muted">
                Точную возможность выезда уточняем при заявке: учитываем адрес, состав работ,
                сезонность, загрузку команды и минимальный объём проекта.
              </p>
            </div>
            <div className="grid gap-4">
              {serviceAreaItems.map((item) => (
                <Card className="grid gap-2 sm:grid-cols-[12rem_1fr]" key={item.title}>
                  <h3 className="text-base font-semibold leading-7">{item.title}</h3>
                  <div>
                    <p className="text-base font-semibold leading-7 text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <SectionHeading
                description="Случайную карту не подключаем: адрес офиса или шоурума нужно подтвердить, а провайдера карты выбрать с учётом лицензии, производительности и cookie/персональных данных."
                title="Карта будет подключена после подтверждения адреса"
              />
              <p className="mt-6 text-sm leading-6 text-muted">{contacts.mapNote}</p>
            </div>
            <div
              aria-label="Схема карты без реального адреса"
              className="relative min-h-[22rem] overflow-hidden rounded-lg border border-border bg-surface shadow-soft"
              role="img"
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(var(--border))_1px,transparent_1px),linear-gradient(0deg,oklch(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] opacity-55" />
              <div className="absolute left-8 top-8 h-24 w-36 rounded-lg border border-primary/25 bg-primary/10" />
              <div className="absolute bottom-12 right-10 h-28 w-44 rounded-lg border border-accent/25 bg-accent/10" />
              <div className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 rotate-12 bg-surface-alt" />
              <div className="absolute bottom-0 left-0 h-12 w-full -rotate-6 bg-surface-alt" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="max-w-sm rounded-lg border border-border bg-background/95 p-6 text-center shadow-soft">
                  <MapPinned aria-hidden="true" className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-4 text-lg font-semibold leading-tight text-foreground">
                    Адрес уточняется
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Здесь появится реальная карта только после подтверждения публичного адреса и
                    легального способа встраивания.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-14 text-primary-foreground sm:py-16">
        <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center" size="wide">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground md:text-5xl">
              Нужна консультация по объекту?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/80">
              Позвоните или отправьте заявку. Время ответа зависит от реального графика, который
              нужно подтвердить перед запуском сайта.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "bg-background text-foreground hover:bg-surface",
              )}
              href={phoneHref(contacts.phone)}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {contacts.phone}
            </a>
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
              )}
              href="#contact-form"
            >
              <Send aria-hidden="true" className="h-4 w-4" />
              Оставить заявку
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <SectionHeading
                description="Короткие ответы на вопросы перед первым звонком. Подробные ответы собраны на общей странице FAQ."
                title="Перед обращением"
              />
              <Link
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-ring"
                href="/faq"
              >
                Открыть полный FAQ
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <Accordion
              items={contactsMiniFaq.map((item) => ({
                content: item.answer,
                title: item.question,
                value: item.question,
              }))}
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-12">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <Navigation aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary" />
            <p className="max-w-3xl text-sm leading-6 text-muted">
              Контакты, адрес, зона обслуживания, мессенджеры и условия выезда пока являются
              временными данными. Перед публичным запуском заменить их на подтверждённые данные
              бизнеса.
            </p>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-ring"
            href="#contact-form"
          >
            К форме заявки
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </Container>
      </section>
    </>
  );
}
