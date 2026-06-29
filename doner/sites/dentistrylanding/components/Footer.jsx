import Link from "next/link";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { clinic, navItems } from "@/data/site";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-clinic-line bg-clinic-ink text-white dark:border-white/10 dark:bg-black">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex min-h-12 items-center gap-3 rounded-card">
            <span className="grid h-11 w-11 place-items-center rounded-card bg-clinic-secondary text-clinic-ink">
              <Sparkles aria-hidden="true" className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-xl font-black">{clinic.name}</span>
              <span className="text-sm text-cyan-50/75">{clinic.tagline}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-cyan-50/80">
            Современная стоматология с цифровой диагностикой, понятной сметой и
            координатором лечения на каждом этапе.
          </p>
        </div>

        <nav aria-label="Ссылки в футере">
          <p className="mb-4 text-sm font-bold uppercase text-clinic-secondary">Разделы</p>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
            className="rounded-card py-2 text-sm text-cyan-50/80 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="mb-4 text-sm font-bold uppercase text-clinic-secondary">На связи</p>
          <div className="grid gap-3 text-sm text-cyan-50/80">
            <a className="flex min-h-10 items-center gap-3 rounded-card" href={`tel:${clinic.phone.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" className="h-4 w-4 text-clinic-secondary" />
              {clinic.phone}
            </a>
            <a className="flex min-h-10 items-center gap-3 rounded-card" href={`mailto:${clinic.email}`}>
              <Mail aria-hidden="true" className="h-4 w-4 text-clinic-secondary" />
              {clinic.email}
            </a>
            <p className="flex min-h-10 items-center gap-3 rounded-card">
              <MapPin aria-hidden="true" className="h-4 w-4 text-clinic-secondary" />
              {clinic.address}
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-3 text-sm text-cyan-50/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {clinic.name}. Все права защищены.</p>
          <p>Лицензия и документы доступны на стойке администратора.</p>
        </div>
      </div>
    </footer>
  );
}
