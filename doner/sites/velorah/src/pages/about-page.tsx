import { PageSection } from "@/components/site/page-section";

const values = [
  {
    title: "Stillness",
    copy: "We remove excess until the work has room to breathe and the next action feels obvious.",
  },
  {
    title: "Precision",
    copy: "We care about rhythm, language, contrast, and the small states people meet every day.",
  },
  {
    title: "Momentum",
    copy: "We design for teams who need beauty to become behavior, not a static mood board.",
  },
];

const timeline = [
  ["Origins", "A practice built around focus, digital craft, and editorial restraint."],
  ["Method", "A blend of product strategy, interface design, prototyping, and content systems."],
  ["Promise", "Tools that make demanding work feel more lucid, deliberate, and alive."],
];

export function AboutPage() {
  return (
    <>
      <PageSection className="grid min-h-[calc(100dvh-96px)] items-center gap-12 pb-20 pt-24 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
        <div>
          <p className="animate-fade-rise text-sm uppercase text-muted-foreground">
            About
          </p>
          <h1
            className="animate-fade-rise mt-5 max-w-4xl text-5xl font-normal leading-none text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We build where silence becomes structure.
          </h1>
        </div>

        <div className="animate-fade-rise-delay max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Velorah is a small creative technology studio for people who think
            deeply and ship carefully. We make digital environments that hold
            attention without flattening imagination.
          </p>
          <p className="mt-6">
            The work sits between product design, systems thinking, and
            cinematic editorial direction.
          </p>
        </div>
      </PageSection>

      <PageSection className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="glass-panel rounded-lg p-6">
              <h2
                className="text-3xl font-normal text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {value.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <h2
            className="text-4xl font-normal leading-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Designed for creators who do not confuse noise with progress.
          </h2>
          <div className="grid gap-6">
            {timeline.map(([title, copy]) => (
              <div key={title} className="border-t border-white/10 pt-6">
                <h3 className="text-xl text-foreground">{title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
