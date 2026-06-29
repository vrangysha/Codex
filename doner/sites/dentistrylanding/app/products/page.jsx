import AnimatedSection from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { faqItems, productGroups } from "@/data/site";

export const metadata = {
  title: "Продукты лечения",
  description: "Пакеты стоматологических услуг NovaDent: профилактика, эстетика, ортодонтия, имплантация и лечение под микроскопом."
};

const icons = ["HeartPulse", "Sparkles", "ScanLine", "ShieldCheck", "Activity", "Users"];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Продукты и услуги"
        title="Стоматологические маршруты с понятной целью"
        description="Каждый продукт описывает не только услугу, но и результат: что диагностируем, какие этапы проходим и как контролируем качество."
        image="/images/products-care.png"
        imageAlt="Премиальная подборка стоматологических продуктов и инструментов"
        primaryLabel="Подобрать продукт"
        secondaryHref="/consultation"
        secondaryLabel="Задать вопрос"
        badges={["Фиксированная смета", "Фотоотчет", "Контроль результата"]}
      />

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Каталог"
            title="Выберите задачу, а не отдельную манипуляцию"
            description="Мы объединяем диагностику, лечение и сопровождение в понятные продуктовые сценарии, чтобы пациент видел путь целиком."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productGroups.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={icons[index]}
                featured={index === 2}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-clinic-mesh py-16 dark:bg-clinic-dark md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            ["01", "Диагностика", "Собираем снимки, фото и жалобы, чтобы не лечить вслепую."],
            ["02", "План", "Разбиваем лечение на этапы, сроки, стоимость и приоритеты."],
            ["03", "Контроль", "После каждого этапа фиксируем результат и корректируем домашний уход."]
          ].map(([number, title, text]) => (
            <article
              key={title}
              className="rounded-card border border-clinic-line bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10"
            >
              <p className="font-display text-4xl font-black text-clinic-secondary">{number}</p>
              <h2 className="mt-4 text-xl font-black text-clinic-ink dark:text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-clinic-body dark:text-cyan-50/80">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <PricingSection compact />

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="FAQ по продуктам"
            title="Частые вопросы о пакетах и стоимости"
            description="Стартовую смету можно получить после диагностики, а комплексный план разбить на этапы."
          />
          <FaqAccordion items={faqItems.slice(1, 5)} />
        </div>
      </AnimatedSection>
    </>
  );
}
