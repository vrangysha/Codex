import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clinic } from "@/data/site";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope"
});

export const metadata = {
  title: {
    default: `${clinic.name} - современная стоматология в Москве`,
    template: `%s | ${clinic.name}`
  },
  description:
    "Многостраничный сайт современной стоматологии: консультации, продукты лечения, личный кабинет, врачи, FAQ и отзывы.",
  metadataBase: new URL("https://novadent.example")
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={manrope.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-clinic-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Перейти к содержимому
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
