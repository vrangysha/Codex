import { Button } from "@/components/ui/button";
import type { NavigateHandler } from "@/site/routing";

type HomePageProps = {
  onNavigate: NavigateHandler;
};

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <section className="relative z-10 flex min-h-[calc(100dvh-96px)] flex-col items-center justify-center px-6 py-[90px] pb-40 pt-32 text-center">
      <h1
        className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Where <em className="not-italic text-muted-foreground">dreams</em>{" "}
        rise{" "}
        <em className="not-italic text-muted-foreground">
          through the silence.
        </em>
      </h1>

      <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        We're designing tools for deep thinkers, bold creators, and quiet
        rebels. Amid the chaos, we build digital spaces for sharp focus and
        inspired work.
      </p>

      <Button
        asChild
        type="button"
        variant="ghost"
        className="liquid-glass animate-fade-rise-delay-2 mt-12 h-auto cursor-pointer rounded-full px-14 py-5 text-base font-normal text-foreground transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-transparent hover:text-foreground"
      >
        <a href="/studio" onClick={onNavigate("/studio")}>
          Begin Journey
        </a>
      </Button>
    </section>
  );
}
