import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import IconBadge from "@/components/IconBadge";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { cabinetSteps } from "@/data/site";

export const metadata = {
  title: "Личный кабинет",
  description: "Личный кабинет пациента NovaDent: записи, план лечения, рекомендации, документы и история оплат."
};

const dashboardItems = [
  { label: "Следующий визит", value: "12 июля, 10:30", icon: "CalendarCheck" },
  { label: "Текущий этап", value: "Профгигиена", icon: "Activity" },
  { label: "Документы", value: "8 файлов", icon: "FileText" }
];

export default function CabinetPage() {
  return (
    <>
      <PageHero
        eyebrow="Личный кабинет"
        title="Весь план лечения в одном спокойном интерфейсе"
        description="Записи, этапы, рекомендации врача и документы доступны пациенту после первого визита. Никаких потерянных смет и забытых назначений."
        image="/images/cabinet-suite.png"
        imageAlt="Современный стоматологический кабинет NovaDent"
        primaryLabel="Открыть доступ"
        secondaryHref="/consultation"
        secondaryLabel="Получить план"
        badges={["Напоминания", "Документы", "Этапы лечения"]}
      />

      <AnimatedSection className="bg-white py-16 dark:bg-clinic-ink md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Зачем нужен кабинет"
              title="Пациент видит не только запись, но и весь маршрут"
              description="Личный кабинет снижает тревожность: понятно, что уже сделано, что будет дальше, какие рекомендации действуют сейчас и когда прийти на контроль."
            />
            <div className="mt-8 grid gap-4">
              {cabinetSteps.map((step, index) => (
                <article
                  key={step}
                  className="flex items-center gap-4 rounded-card border border-clinic-line bg-clinic-mist p-5 dark:border-white/10 dark:bg-white/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-card bg-clinic-primary text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h2 className="text-base font-black text-clinic-ink dark:text-white">{step}</h2>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-card border border-clinic-line bg-clinic-mist p-5 shadow-soft dark:border-white/10 dark:bg-white/10">
            <div className="flex items-center justify-between gap-4 border-b border-clinic-line pb-5 dark:border-white/10">
              <div>
                <p className="text-sm font-bold uppercase text-clinic-primary dark:text-clinic-secondary">
                  Кабинет пациента
                </p>
                <h2 className="mt-2 text-2xl font-black text-clinic-ink dark:text-white">Мария Б.</h2>
              </div>
              <span className="rounded-card bg-emerald-50 px-3 py-2 text-sm font-black text-clinic-accentDark dark:bg-emerald-400/10 dark:text-emerald-100">
                Активно
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {dashboardItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-card border border-clinic-line bg-white p-4 dark:border-white/10 dark:bg-clinic-ink"
                >
                  <IconBadge name={item.icon} className="h-10 w-10" />
                  <p className="mt-4 text-xs font-bold uppercase text-clinic-muted dark:text-cyan-50/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-black text-clinic-ink dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-card border border-clinic-line bg-white p-5 dark:border-white/10 dark:bg-clinic-ink">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-black text-clinic-ink dark:text-white">План лечения</h3>
                <span className="text-sm font-bold text-clinic-primary dark:text-clinic-secondary">62%</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-clinic-ice dark:bg-white/10">
                <div className="h-full w-3/5 rounded-full bg-clinic-accent" />
              </div>
              <div className="mt-5 grid gap-3">
                {["Диагностика завершена", "Гигиена назначена", "Контроль ортопеда ожидает подтверждения"].map((item) => (
                  <p
                    key={item}
                    className="rounded-card bg-clinic-mist px-4 py-3 text-sm font-semibold text-clinic-body dark:bg-white/10 dark:text-cyan-50/80"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-clinic-ink py-14 text-white dark:bg-black">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-clinic-secondary">Доступ после визита</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight">
              Кабинет подключается после диагностики и закрепляется за вашим номером телефона.
            </h2>
          </div>
          <ButtonLink href="/consultation" variant="primary">
            Начать с консультации
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
