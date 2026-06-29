import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { contacts, navigation, siteConfig } from "@/data/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <a
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-200 ease-out focus:translate-y-0 focus-visible:translate-y-0 focus-visible:outline-ring"
        href="#main-content"
      >
        Перейти к содержимому
      </a>
      <SiteHeader navItems={navigation.main} phone={contacts.phone} siteName={siteConfig.name} />
      <main className="flex-1 pb-24 md:pb-0" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}
