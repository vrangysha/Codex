import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/site";

export const metadata = {
  title: "Отзывы",
  description: "Отзывы пациентов NovaDent о консультации, имплантации, элайнерах, коронках и профилактике."
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы"
        title="Пациенты ценят спокойствие, ясность и аккуратный результат"
        description="Мы собираем обратную связь после визитов, чтобы сервис оставался человеческим, а лечение — прозрачным."
        image="/images/consultation.png"
        imageAlt="Пациент обсуждает лечение с врачом NovaDent"
        primaryLabel="Получить консультацию"
        secondaryHref="/doctors"
        secondaryLabel="Познакомиться с врачами"
        badges={["4.9 из 5", "Фотоотчеты", "Координатор лечения"]}
      />

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Пациентский опыт"
            title="Отзывы о разных маршрутах лечения"
            description="Здесь нет универсальных обещаний: каждый отзыв показывает конкретный сценарий и то, что было важно пациенту."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-clinic-mesh py-16 dark:bg-clinic-dark md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            ["92%", "пациентов отмечают, что план лечения был понятен до старта"],
            ["87%", "пациентов выбирают следующий визит сразу после консультации"],
            ["4.9", "средняя оценка бережности и коммуникации врачей"]
          ].map(([value, text]) => (
            <article
              key={value}
              className="rounded-card border border-clinic-line bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10"
            >
              <p className="font-display text-4xl font-black text-clinic-primary dark:text-clinic-secondary">{value}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-clinic-body dark:text-cyan-50/80">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <section className="bg-clinic-ink py-14 text-white dark:bg-black">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-clinic-secondary">Ваш опыт</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight">
              Хотите понять, какой маршрут подойдет именно вам?
            </h2>
          </div>
          <ButtonLink href="/consultation" variant="primary">
            Обсудить задачу
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
