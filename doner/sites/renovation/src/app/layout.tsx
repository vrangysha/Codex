import type { Metadata, Viewport } from "next";
import { Geologica, Onest } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/data/site";
import { defaultOpenGraphImage, siteUrl } from "@/lib/seo";

const bodyFont = Onest({
  subsets: ["cyrillic", "latin"],
  variable: "--font-onest",
  display: "swap",
});

const displayFont = Geologica({
  subsets: ["cyrillic", "latin"],
  variable: "--font-geologica",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Ремонт квартир и домов под ключ`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    type: "website",
    locale: "ru_RU",
    images: [defaultOpenGraphImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-background text-foreground`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
