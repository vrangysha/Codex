import { ArrowRight } from "lucide-react";

import { PageSection } from "@/components/site/page-section";

const articles = [
  {
    kicker: "Field Note 01",
    title: "The discipline of quiet interfaces",
    copy: "How restraint, pacing, and empty space help complex tools become easier to trust.",
    href: "#quiet-interfaces",
  },
  {
    kicker: "Field Note 02",
    title: "Designing rooms for deep work",
    copy: "A practical look at digital spaces that lower switching costs and protect attention.",
    href: "#deep-work",
  },
  {
    kicker: "Field Note 03",
    title: "Cinematic product language",
    copy: "What rhythm, framing, and contrast can teach everyday software about presence.",
    href: "#cinematic-language",
  },
];

const signals = [
  "Focus",
  "Restraint",
  "Interface rhythm",
  "Creative systems",
  "Slow media",
];

export function JournalPage() {
  return (
    <>
      <PageSection className="grid min-h-[calc(100dvh-96px)] items-center gap-12 pb-20 pt-24 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div>
          <p className="animate-fade-rise text-sm uppercase text-muted-foreground">
            Journal
          </p>
          <h1
            className="animate-fade-rise mt-5 max-w-4xl text-5xl font-normal leading-none text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Notes from the edge of focus.
          </h1>
          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Essays and field notes on interface calm, creative discipline, and
            the strange courage it takes to make useful things slowly.
          </p>
        </div>

        <aside className="glass-panel animate-fade-rise-delay rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Signal index</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-foreground"
              >
                {signal}
              </span>
            ))}
          </div>
        </aside>
      </PageSection>

      <PageSection className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.href}
              id={article.href.slice(1)}
              className="glass-panel rounded-lg p-6"
            >
              <p className="text-sm text-muted-foreground">{article.kicker}</p>
              <h2
                className="mt-10 text-3xl font-normal leading-tight text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {article.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {article.copy}
              </p>
              <a
                href={article.href}
                className="mt-8 inline-flex items-center text-sm text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70"
              >
                Read note
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </PageSection>
    </>
  );
}
