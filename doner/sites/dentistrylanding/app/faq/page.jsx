import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { faqItems } from "@/data/site";

export const metadata = {
  title: "FAQ",
  description: "Ответы на частые вопросы о консультации, стоимости, тревоге перед лечением и личном кабинете NovaDent."
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Ответы на вопросы, которые лучше закрыть до визита"
        description="Мы собрали короткие ответы про консультацию, оплату, тревогу, семейные визиты и личный кабинет пациента."
        image="/images/hero-clinic.png"
        imageAlt="Светлая зона ожидания стоматологии NovaDent"
        primaryLabel="Задать свой вопрос"
        secondaryHref="/consultation"
        secondaryLabel="Записаться"
        badges={["Без давления", "Коротко", "По делу"]}
      />

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Вопросы"
            title="Если ответа не хватает, координатор уточнит детали"
            description="Некоторые решения зависят от диагностики, но общий маршрут можно понять заранее."
          />
          <FaqAccordion items={faqItems} />
        </div>
      </AnimatedSection>

      <section className="bg-clinic-mesh py-14 dark:bg-clinic-dark">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-clinic-primary dark:text-clinic-secondary">Остался вопрос?</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-clinic-ink dark:text-white">
              Напишите нам, и мы подскажем следующий шаг без обязательств.
            </h2>
          </div>
          <ButtonLink href="/consultation">Получить ответ</ButtonLink>
        </div>
      </section>
    </>
  );
}
