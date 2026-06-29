import { navItems } from "@/site/navigation";
import type { NavigateHandler } from "@/site/routing";

type SiteFooterProps = {
  onNavigate: NavigateHandler;
};

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-10 pt-6 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
      <a
        href="/"
        onClick={onNavigate("/")}
        className="font-display text-2xl text-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Velorah<sup className="text-[10px]">{"\u00ae"}</sup>
      </a>

      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.path}
            onClick={onNavigate(item.path)}
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70"
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
