import { Check, Star } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";
import { pricingPlans } from "@/data/site";

export default function PricingSection({ compact = false }) {
  return (
    <section className={compact ? "py-12" : "bg-white py-16 dark:bg-clinic-ink md:py-24"}>
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Пакеты"
          title="Понятная стоимость до начала лечения"
          description="Три стартовых сценария помогают быстро понять маршрут: от первичной диагностики до комплексной реабилитации."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-card border bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lift dark:bg-white/10 ${
                plan.popular
                  ? "border-clinic-accent ring-4 ring-emerald-100 dark:ring-emerald-400/20"
                  : "border-clinic-line dark:border-white/10"
              }`}
            >
              {plan.popular ? (
                <div className="mb-5 inline-flex items-center gap-2 rounded-card bg-clinic-accent px-3 py-1 text-sm font-bold text-white">
                  <Star aria-hidden="true" className="h-4 w-4 fill-current" />
                  Самый популярный
                </div>
              ) : null}
              <h3 className="text-2xl font-black text-clinic-ink dark:text-white">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-clinic-body dark:text-cyan-50/80">
                {plan.description}
              </p>
              <p className="mt-6 font-display text-3xl font-black text-clinic-primary dark:text-clinic-secondary">
                {plan.price}
              </p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-semibold text-clinic-body dark:text-cyan-50/80">
                    <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-clinic-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/consultation"
                variant={plan.popular ? "primary" : "secondary"}
                className="mt-7 w-full"
              >
                Выбрать пакет
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
