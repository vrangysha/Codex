"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, Hammer, Menu, Phone, X } from "lucide-react";
import type { KeyboardEvent } from "react";
import { useId, useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import type { NavItem } from "@/data/site";
import { cn } from "@/lib/utils";

export interface SiteHeaderProps {
  navItems: readonly NavItem[];
  phone: string;
  siteName: string;
}

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ navItems, phone, siteName }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu({ restoreFocus = false }: { restoreFocus?: boolean } = {}) {
    setMenuOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

  function handleMobileMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape") {
      return;
    }

    event.preventDefault();
    closeMenu({ restoreFocus: true });
  }

  function handleMenuButtonKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (!menuOpen || event.key !== "Escape") {
      return;
    }

    event.preventDefault();
    closeMenu({ restoreFocus: true });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/96 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-container-wide items-center justify-between gap-4 px-4 sm:px-6 md:px-8 lg:h-20 lg:px-10">
        <Link
          className="flex min-h-11 min-w-0 items-center gap-3 rounded-md font-semibold text-foreground focus-visible:outline-ring"
          href="/"
        >
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Hammer aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="truncate">{siteName}</span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActiveLink(pathname, item.href);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 ease-out hover:bg-surface hover:text-foreground focus-visible:outline-ring",
                  active && "bg-surface-alt text-foreground",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:bg-surface focus-visible:outline-ring"
            href={phoneHref(phone)}
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-primary" />
            {phone}
          </a>
          <Link className={buttonVariants({ size: "sm" })} href="/contacts">
            <Calculator aria-hidden="true" className="h-4 w-4" />
            Рассчитать стоимость
          </Link>
        </div>

        <button
          aria-controls={menuId}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors duration-200 ease-out hover:border-primary/35 hover:bg-surface-alt focus-visible:outline-ring lg:hidden"
          onKeyDown={handleMenuButtonKeyDown}
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={cn(
          "grid border-t border-border bg-background transition-[grid-template-rows,opacity] duration-200 ease-out lg:hidden",
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        hidden={!menuOpen}
        id={menuId}
        onKeyDown={handleMobileMenuKeyDown}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Мобильная навигация"
            className="mx-auto flex max-w-container flex-col gap-1 px-4 py-4 sm:px-6 md:px-8"
          >
            {navItems.map((item) => {
              const active = isActiveLink(pathname, item.href);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center rounded-md px-3 text-base font-medium text-muted transition-colors duration-200 ease-out hover:bg-surface hover:text-foreground focus-visible:outline-ring",
                    active && "bg-surface-alt text-foreground",
                  )}
                  href={item.href}
                  key={item.href}
                  onClick={() => closeMenu()}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
              <a
                className={buttonVariants({ variant: "secondary", size: "lg" })}
                href={phoneHref(phone)}
                onClick={() => closeMenu()}
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Позвонить
              </a>
              <Link
                className={buttonVariants({ size: "lg" })}
                href="/contacts"
                onClick={() => closeMenu()}
              >
                <Calculator aria-hidden="true" className="h-4 w-4" />
                Рассчитать стоимость
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
