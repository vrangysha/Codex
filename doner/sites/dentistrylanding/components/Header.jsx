"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  CalendarCheck,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import { clinic, navItems } from "@/data/site";

const themeEventName = "novadent-theme-change";

function subscribeTheme(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", callback);
  window.addEventListener(themeEventName, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeEventName, callback);
  };
}

function getThemeSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem("theme") === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event(themeEventName));
  };

  const phoneHref = `tel:${clinic.phone.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-clinic-line/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-clinic-ink/90">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${clinic.name}, на главную`}
          className="flex min-h-12 shrink-0 items-center gap-3 rounded-card pr-2 transition-all duration-200 hover:scale-105"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-card bg-clinic-primary text-white shadow-soft">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-black text-clinic-ink dark:text-white">
              {clinic.name}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-card px-3 py-2 text-sm font-bold transition-all duration-200 hover:scale-105 hover:bg-clinic-mist hover:text-clinic-primary dark:hover:bg-white/10 ${
                  isActive
                    ? "bg-clinic-mist text-clinic-primary dark:bg-white/10 dark:text-clinic-secondary"
                    : "text-clinic-body dark:text-cyan-50/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={phoneHref}
            className="hidden min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-card px-3 text-sm font-bold text-clinic-ink transition-all duration-200 hover:scale-105 hover:bg-clinic-mist dark:text-white dark:hover:bg-white/10 xl:inline-flex"
          >
            <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-clinic-primary" />
            {clinic.phone}
          </a>
          <div className="relative xl:hidden">
            <button
              type="button"
              aria-label={`Показать номер телефона ${clinic.phone}`}
              aria-expanded={phoneOpen}
              onClick={() => setPhoneOpen((current) => !current)}
              className="grid min-h-11 min-w-11 place-items-center rounded-card text-clinic-ink transition-all duration-200 hover:scale-105 hover:bg-clinic-mist dark:text-white dark:hover:bg-white/10"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-clinic-primary dark:text-clinic-secondary" />
            </button>
            {phoneOpen ? (
              <div className="absolute right-0 top-full z-50 mt-3 rounded-card border border-clinic-line bg-white p-2 shadow-soft dark:border-white/10 dark:bg-clinic-ink">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-card px-3 text-sm font-bold text-clinic-ink transition-all duration-200 hover:bg-clinic-mist dark:text-white dark:hover:bg-white/10"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-clinic-primary dark:text-clinic-secondary" />
                  {clinic.phone}
                </a>
              </div>
            ) : null}
          </div>
          <button
            type="button"
            aria-label={isDark ? "Включить светлую тему" : "Включить темную тему"}
            onClick={toggleTheme}
            className="grid min-h-11 min-w-11 place-items-center rounded-card border border-clinic-line bg-white text-clinic-ink transition-all duration-200 hover:scale-105 hover:border-clinic-primary dark:border-white/20 dark:bg-white/10 dark:text-white"
          >
            {isDark ? <Sun aria-hidden="true" className="h-5 w-5" /> : <Moon aria-hidden="true" className="h-5 w-5" />}
          </button>
          <Link
            href="/consultation"
            className="inline-flex min-h-11 items-center gap-2 rounded-card bg-clinic-accent px-4 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:scale-105 hover:bg-clinic-accentDark"
          >
            <CalendarCheck aria-hidden="true" className="h-4 w-4" />
            Записаться
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={isDark ? "Включить светлую тему" : "Включить темную тему"}
            onClick={toggleTheme}
            className="grid min-h-11 min-w-11 place-items-center rounded-card border border-clinic-line bg-white text-clinic-ink transition-all duration-200 hover:scale-105 dark:border-white/20 dark:bg-white/10 dark:text-white"
          >
            {isDark ? <Sun aria-hidden="true" className="h-5 w-5" /> : <Moon aria-hidden="true" className="h-5 w-5" />}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid min-h-11 min-w-11 place-items-center rounded-card border border-clinic-line bg-white text-clinic-ink transition-all duration-200 hover:scale-105 dark:border-white/20 dark:bg-white/10 dark:text-white"
          >
            {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-clinic-line bg-white py-3 shadow-soft dark:border-white/10 dark:bg-clinic-ink lg:hidden">
          <nav className="container-page grid gap-2" aria-label="Мобильная навигация">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-card px-4 py-3 text-base font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-clinic-primary text-white"
                      : "text-clinic-ink hover:bg-clinic-mist dark:text-white dark:hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/consultation"
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-card bg-clinic-accent px-4 text-base font-bold text-white transition-all duration-200 hover:bg-clinic-accentDark"
            >
              <CalendarCheck aria-hidden="true" className="h-5 w-5" />
              Записаться на консультацию
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
