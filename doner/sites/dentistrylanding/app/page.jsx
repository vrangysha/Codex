import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import FaqAccordion from "@/components/FaqAccordion";
import IconBadge from "@/components/IconBadge";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  faqItems,
  features,
  partnerLogos,
  productGroups,
  stats,
  testimonials
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Цифровая стоматология в Москве"
        title="Лечение зубов, которое понятно до первого шага"
        description="Диагностика, план лечения, смета и координатор в одном маршруте. Мы делаем стоматологию спокойной, предсказуемой и визуально прозрачной для пациента."
        image="/images/hero-clinic.png"
        imageAlt="Современная светлая стоматологическая клиника NovaDent"
        primaryHref="/consultation"
        primaryLabel="Получить план лечения"
        secondaryHref="/products"
        secondaryLabel="Посмотреть услуги"
        badges={["3D-диагностика", "План за 24 часа", "Рассрочка по этапам"]}
      />

      <AnimatedSection className="bg-white py-10 dark:bg-clinic-ink">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-card border border-clinic-line bg-clinic-mist p-5 dark:border-white/10 dark:bg-white/10"
              >
                <p className="font-display text-3xl font-black text-clinic-primary dark:text-clinic-secondary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-clinic-body dark:text-cyan-50/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6" aria-label="Партнеры и технологии">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="grid min-h-16 place-items-center rounded-card border border-clinic-line bg-white px-4 text-center text-sm font-black text-clinic-muted shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-cyan-50/75"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-clinic-mesh py-16 dark:bg-clinic-dark md:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Почему нам доверяют"
            title="Не просто лечим зубы, а ведем весь путь пациента"
            description="Каждый блок сервиса убирает неопределенность: от диагностики до последнего контрольного визита."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-card border border-clinic-line bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-soft dark:border-white/10 dark:bg-white/10"
              >
                <IconBadge name={feature.icon} />
                <h3 className="mt-5 text-xl font-black text-clinic-ink dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-clinic-body dark:text-cyan-50/80">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Продукты лечения"
              title="Маршруты под разные задачи улыбки"
              description="От профилактики до имплантации: каждый продукт собран как понятный пакет с результатом, этапами и контролем качества."
            />
            <ButtonLink href="/products" variant="secondary">
              Все продукты
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productGroups.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={index === 0 ? "HeartPulse" : index === 1 ? "Sparkles" : "ScanLine"}
                featured={index === 1}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <PricingSection />

      <AnimatedSection className="bg-clinic-mesh py-16 dark:bg-clinic-dark md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Отзывы"
              title="Пациенты отмечают ясность, бережность и отсутствие сюрпризов"
              description="Отзывы помогают нам держать сервис внимательным, а лечение — понятным и спокойным."
            />
            <ButtonLink href="/reviews" variant="secondary" className="mt-7">
              Читать отзывы
            </ButtonLink>
          </div>
          <div className="grid gap-5">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="FAQ"
            title="Коротко о том, что обычно волнует перед первым визитом"
            description="Если вопрос не закрыт, оставьте заявку: координатор подскажет следующий шаг без навязчивых продаж."
          />
          <FaqAccordion items={faqItems.slice(0, 4)} />
        </div>
      </AnimatedSection>

      <section className="bg-clinic-ink py-14 text-white dark:bg-black">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-clinic-secondary">Первый шаг</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-tight md:text-4xl">
              Пришлите запрос, а мы соберем спокойный маршрут лечения.
            </h2>
          </div>
          <ButtonLink href="/consultation" variant="primary">
            Записаться
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
