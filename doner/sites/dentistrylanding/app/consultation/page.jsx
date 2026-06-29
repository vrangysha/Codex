import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import ConsultationForm from "@/components/ConsultationForm";
import IconBadge from "@/components/IconBadge";
import ImagePanel from "@/components/ImagePanel";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { clinic } from "@/data/site";

export const metadata = {
  title: "Консультация",
  description: "Запись на консультацию в NovaDent: диагностика, фотопротокол, план лечения и понятная смета."
};

const steps = [
  {
    title: "Заявка",
    text: "Координатор уточняет запрос, страхи, сроки и удобное время визита.",
    icon: "MessageCircle"
  },
  {
    title: "Диагностика",
    text: "Врач проводит осмотр, фотопротокол и при необходимости назначает КТ.",
    icon: "ScanLine"
  },
  {
    title: "План",
    text: "Вы получаете поэтапный маршрут лечения с вариантами и сметой.",
    icon: "FileText"
  }
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Консультация"
        title="Первый визит без давления и непонятных назначений"
        description="Расскажите, что беспокоит, а мы аккуратно разберем ситуацию и покажем варианты лечения понятным языком."
        image="/images/consultation.png"
        imageAlt="Врач обсуждает план лечения с пациентом на консультации"
        primaryLabel="Оставить заявку"
        secondaryHref="/doctors"
        secondaryLabel="Выбрать врача"
        badges={["45-60 минут", "Фотопротокол", "Смета по этапам"]}
      />

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2">
          <ConsultationForm />
          <div className="grid gap-6">
            <SectionHeading
              eyebrow="Как проходит"
              title="Консультация заканчивается ясным следующим шагом"
              description="Вы уходите не с набором терминов, а с понятным планом: что срочно, что можно отложить, какие есть варианты и сколько они стоят."
            />
            <div className="grid gap-4">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="flex gap-4 rounded-card border border-clinic-line bg-clinic-mist p-5 dark:border-white/10 dark:bg-white/10"
                >
                  <IconBadge name={step.icon} />
                  <div>
                    <h2 className="text-lg font-black text-clinic-ink dark:text-white">{step.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-clinic-body dark:text-cyan-50/80">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-clinic-mesh py-16 dark:bg-clinic-dark md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <ImagePanel
            src="/images/cabinet-suite.png"
            alt="Подготовленный стоматологический кабинет NovaDent"
            caption="Кабинет готовится под конкретный план пациента: от диагностики до этапа лечения."
          />
          <div>
            <SectionHeading
              eyebrow="Перед визитом"
              title="Можно прийти с любым уровнем тревоги"
              description="Мы заранее уточняем, что важно: прошлый опыт, чувствительность, ограничения по времени и желаемый темп."
            />
            <div className="mt-7 grid gap-3">
              {["Без осуждения и спешки", "Паузы во время приема", "Варианты анестезии", "План без скрытых этапов"].map((item) => (
                <p
                  key={item}
                  className="rounded-card border border-clinic-line bg-white px-4 py-3 text-sm font-bold text-clinic-ink dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${clinic.phone.replace(/\s/g, "")}`} variant="dark">
                Позвонить
              </ButtonLink>
              <ButtonLink href="/faq" variant="secondary">
                FAQ перед визитом
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
