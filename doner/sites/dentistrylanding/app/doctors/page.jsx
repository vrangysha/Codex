import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import IconBadge from "@/components/IconBadge";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { doctors } from "@/data/site";

export const metadata = {
  title: "Врачи",
  description: "Команда врачей NovaDent: ортопед, хирург-имплантолог, ортодонт и терапевт-эндодонтист."
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Команда врачей"
        title="Ваш случай ведет не один врач, а собранная команда"
        description="Мы соединяем специалистов вокруг плана лечения, чтобы терапия, ортопедия, хирургия и ортодонтия не спорили друг с другом."
        image="/images/doctors-team.png"
        imageAlt="Команда врачей стоматологии NovaDent"
        primaryLabel="Записаться к врачу"
        secondaryHref="/reviews"
        secondaryLabel="Отзывы пациентов"
        badges={["Консилиумы", "Узкие специализации", "План без противоречий"]}
      />

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Специалисты"
            title="Врачи, которые объясняют лечение человеческим языком"
            description="Каждый специалист отвечает за свою область, но план пациента остается единым."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="rounded-card border border-clinic-line bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-soft dark:border-white/10 dark:bg-white/10"
              >
                <div className="flex gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-card bg-clinic-primary text-xl font-black text-white">
                    {doctor.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-clinic-ink dark:text-white">{doctor.name}</h2>
                    <p className="mt-1 text-sm font-bold text-clinic-primary dark:text-clinic-secondary">
                      {doctor.role}
                    </p>
                    <p className="mt-2 text-sm text-clinic-muted dark:text-cyan-50/70">{doctor.experience}</p>
                  </div>
                </div>
                <div className="mt-5 rounded-card bg-clinic-mist p-4 dark:bg-clinic-ink">
                  <p className="text-sm font-black text-clinic-ink dark:text-white">{doctor.focus}</p>
                  <p className="mt-2 text-sm leading-6 text-clinic-body dark:text-cyan-50/80">{doctor.bio}</p>
                </div>
                <ButtonLink href="/consultation" variant="secondary" className="mt-5 w-full">
                  Записаться
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-clinic-mesh py-16 dark:bg-clinic-dark md:py-24">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            ["Консилиум", "Сложные случаи обсуждают несколько специалистов до старта лечения.", "Users"],
            ["Фотопротокол", "Врачи показывают динамику лечения на понятных изображениях.", "ScanLine"],
            ["Куратор", "Координатор помогает не потеряться между этапами и кабинетами.", "BadgeCheck"]
          ].map(([title, text, icon]) => (
            <article
              key={title}
              className="rounded-card border border-clinic-line bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10"
            >
              <IconBadge name={icon} />
              <h2 className="mt-5 text-xl font-black text-clinic-ink dark:text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-clinic-body dark:text-cyan-50/80">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
