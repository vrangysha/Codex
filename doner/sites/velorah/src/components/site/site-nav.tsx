import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, type PageId } from "@/site/navigation";
import type { NavigateHandler } from "@/site/routing";

type SiteNavProps = {
  activePage: PageId;
  onNavigate: NavigateHandler;
};

export function SiteNav({ activePage, onNavigate }: SiteNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activePage]);

  return (
    <>
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <a
          href="/"
          onClick={onNavigate("/")}
          className="font-display text-3xl font-normal tracking-tight text-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          aria-label="Velorah home"
        >
          Velorah<sup className="text-xs">{"\u00ae"}</sup>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              onClick={onNavigate(item.path)}
              aria-current={activePage === item.id ? "page" : undefined}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70",
                activePage === item.id && "text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            asChild
            type="button"
            variant="ghost"
            className="liquid-glass h-auto rounded-full px-4 py-2 text-xs font-normal text-foreground transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-transparent hover:text-foreground sm:px-6 sm:py-2.5 sm:text-sm"
          >
            <a href="/studio" onClick={onNavigate("/studio")}>
              Begin Journey
            </a>
          </Button>

          <Button
            type="button"
            variant="ghost"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            className="liquid-glass h-10 w-10 rounded-full p-0 text-foreground transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-transparent hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div className="relative z-20 mx-5 -mt-2 mb-8 md:hidden">
          <div className="glass-panel grid gap-1 rounded-lg p-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={onNavigate(item.path)}
                aria-current={activePage === item.id ? "page" : undefined}
                className={cn(
                  "rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70",
                  activePage === item.id && "bg-white/5 text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
