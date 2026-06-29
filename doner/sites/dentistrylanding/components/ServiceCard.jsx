import IconBadge from "@/components/IconBadge";

export default function ServiceCard({ service, icon = "Sparkles", featured = false }) {
  return (
    <article
      className={`group rounded-card border bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-soft dark:bg-white/10 ${
        featured
          ? "border-clinic-primary shadow-lift"
          : "border-clinic-line dark:border-white/10"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <IconBadge name={icon} tone={featured ? "accent" : "primary"} />
        <span className="rounded-card bg-clinic-mist px-3 py-1 text-sm font-bold text-clinic-primary dark:bg-cyan-400/10 dark:text-cyan-100">
          {service.eyebrow}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-black text-clinic-ink dark:text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-clinic-body dark:text-cyan-50/80">
        {service.description}
      </p>
      <ul className="mt-5 grid gap-2">
        {service.points.map((point) => (
          <li key={point} className="flex gap-2 text-sm font-semibold text-clinic-body dark:text-cyan-50/80">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clinic-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
