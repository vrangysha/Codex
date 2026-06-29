import { ArrowRight, Blocks, Focus, PenTool } from "lucide-react";

import { PageSection } from "@/components/site/page-section";
import { Button } from "@/components/ui/button";
import type { NavigateHandler } from "@/site/routing";

const offerings = [
  {
    icon: Focus,
    title: "Focus systems",
    copy: "Interfaces, rituals, and working environments shaped to help ambitious teams find signal quickly.",
  },
  {
    icon: Blocks,
    title: "Product rooms",
    copy: "Structured sprints for turning quiet ideas into working prototypes with a clear creative spine.",
  },
  {
    icon: PenTool,
    title: "Narrative surfaces",
    copy: "Brand, UX, and editorial layers that make complex tools feel composed, spacious, and memorable.",
  },
];

const process = [
  ["01", "Listen", "We map the friction, language, and emotional gravity around the work."],
  ["02", "Distill", "We reduce the system to its sharpest movements, screens, and decisions."],
  ["03", "Compose", "We shape a cinematic interface that can survive repeated daily use."],
  ["04", "Release", "We hand over patterns, source, and launch guidance without drama."],
];

type StudioPageProps = {
  onNavigate: NavigateHandler;
};

export function StudioPage({ onNavigate }: StudioPageProps) {
  return (
    <>
      <PageSection className="grid min-h-[calc(100dvh-96px)] items-center gap-12 pb-20 pt-24 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div>
          <p className="animate-fade-rise text-sm uppercase text-muted-foreground">
            Studio
          </p>
          <h1
            className="animate-fade-rise mt-5 max-w-4xl text-5xl font-normal leading-none text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Systems for quiet work and bold creation.
          </h1>
          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Velorah partners with founders, creators, and internal teams to
            design digital spaces that lower noise and raise momentum.
          </p>
          <Button
            asChild
            variant="ghost"
            className="liquid-glass animate-fade-rise-delay-2 mt-10 h-auto rounded-full px-8 py-4 text-sm font-normal text-foreground transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-transparent hover:text-foreground"
          >
            <a href="/reach-us" onClick={onNavigate("/reach-us")}>
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <aside className="glass-panel animate-fade-rise-delay rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Current rhythm</p>
          <div className="mt-8 grid gap-6">
            {["Discovery", "Prototype", "Launch"].map((phase, index) => (
              <div
                key={phase}
                className="flex items-center justify-between border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-muted-foreground">
                  0{index + 1}
                </span>
                <span className="text-base text-foreground">{phase}</span>
              </div>
            ))}
          </div>
        </aside>
      </PageSection>

      <PageSection className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {offerings.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="glass-panel rounded-lg p-6">
              <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
              <h2 className="mt-8 text-2xl text-foreground">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2
            className="text-4xl font-normal leading-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            A calm process with clean handoffs.
          </h2>
          <div className="grid gap-6">
            {process.map(([number, title, copy]) => (
              <div
                key={number}
                className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-[80px_1fr]"
              >
                <span className="text-sm text-muted-foreground">{number}</span>
                <div>
                  <h3 className="text-xl text-foreground">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
