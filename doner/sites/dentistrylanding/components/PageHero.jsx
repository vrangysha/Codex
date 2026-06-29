import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryHref = "/consultation",
  primaryLabel = "Записаться",
  secondaryHref,
  secondaryLabel,
  badges = []
}) {
  return (
    <section className="relative overflow-hidden bg-clinic-ink py-20 md:py-28">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-clinic-ink/70" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-clinic-ink to-transparent" aria-hidden="true" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase text-clinic-secondary">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-black leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50/90">
            {description}
          </p>
          {badges.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-card border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-sm backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            {secondaryHref ? (
              <ButtonLink href={secondaryHref} variant="secondary" className="bg-white/90">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
