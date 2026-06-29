import { JsonLd } from "@/components/seo/json-ld";
import { HomePage } from "@/components/sections/home-page";
import { services, siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  localBusinessSchema,
  organizationSchema,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Ремонт квартир и домов под ключ - расчёт стоимости и замер";
const pageDescription =
  "Современный ремонт квартир и домов под ключ: смета, договор, поэтапная оплата, гарантия и контроль качества.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/",
});

const jsonLd = [
  organizationSchema(),
  localBusinessSchema(),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ремонт квартир и домов под ключ",
    provider: serviceProviderSchema(),
    serviceType: services.slice(0, 6).map((service) => service.title),
    areaServed: siteConfig.serviceArea,
    description: siteConfig.tagline,
    url: absoluteUrl("/"),
  },
  breadcrumbSchema([{ name: "Главная", path: "/" }]),
];

export default function Page() {
  return (
    <>
      <HomePage />
      <JsonLd data={jsonLd} />
    </>
  );
}
