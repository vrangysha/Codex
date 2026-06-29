export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = ""
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase text-clinic-primary dark:text-clinic-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-clinic-ink dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-clinic-body dark:text-cyan-50/80 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
