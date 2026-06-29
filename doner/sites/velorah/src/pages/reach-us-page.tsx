import { ArrowRight, Mail, MapPin, Send } from "lucide-react";

import { PageSection } from "@/components/site/page-section";
import { Button } from "@/components/ui/button";

const contactPoints = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@velorah.studio",
    href: "mailto:hello@velorah.studio",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "Remote studio",
    href: null,
  },
];

export function ReachUsPage() {
  return (
    <PageSection className="grid min-h-[calc(100dvh-96px)] items-center gap-12 pb-20 pt-24 md:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
      <div>
        <p className="animate-fade-rise text-sm uppercase text-muted-foreground">
          Reach Us
        </p>
        <h1
          className="animate-fade-rise mt-5 max-w-4xl text-5xl font-normal leading-none text-foreground sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Bring the signal. We will meet it carefully.
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tell us what you are trying to build, clarify, or transform. We read
          every note with attention.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {contactPoints.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass-panel rounded-lg p-5">
              <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
              <p className="mt-5 text-sm text-muted-foreground">{label}</p>
              {href ? (
                <a
                  href={href}
                  className="mt-1 inline-flex items-center text-base text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70"
                >
                  {value}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-1 text-base text-foreground">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <form
        action="mailto:hello@velorah.studio"
        method="post"
        encType="text/plain"
        className="glass-panel animate-fade-rise-delay rounded-lg p-6"
      >
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm text-foreground">
            Name
            <input
              name="name"
              autoComplete="name"
              required
              className="field-glass"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm text-foreground">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="field-glass"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2 text-sm text-foreground">
            Project
            <textarea
              name="project"
              required
              rows={6}
              className="field-glass resize-none"
              placeholder="What are you trying to make quieter, sharper, or more alive?"
            />
          </label>
        </div>

        <Button
          type="submit"
          variant="ghost"
          className="liquid-glass mt-8 h-auto w-full rounded-full px-8 py-4 text-sm font-normal text-foreground transition-transform duration-300 ease-out hover:scale-[1.02] hover:bg-transparent hover:text-foreground"
        >
          Send Signal
          <Send className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </form>
    </PageSection>
  );
}
