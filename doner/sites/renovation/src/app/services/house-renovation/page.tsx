import { JsonLd } from "@/components/seo/json-ld";
import {
  HouseRenovationPage,
  houseRenovationFaq,
} from "@/components/sections/house-renovation-page";
import { pricingPackages, siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Ремонт домов под ключ — инженерия, отделка, гарантия";
const pageDescription =
  "Ремонт частных домов: черновые и чистовые работы, инженерные системы, материалы, контроль качества.";
const pagePath = "/services/house-renovation";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const houseOfferSlugs = new Set(["cosmetic", "capital", "turnkey", "designer"]);

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ремонт домов под ключ",
    description: pageDescription,
    serviceType: "Private house renovation",
    provider: serviceProviderSchema(),
    areaServed: siteConfig.serviceArea,
    url: absoluteUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Пакеты ремонта домов",
      itemListElement: pricingPackages
        .filter((item) => houseOfferSlugs.has(item.slug))
        .map((item) => ({
          "@type": "Offer",
          name: item.name,
          description: item.description,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "RUB",
            unitText: item.unit,
            description: `${item.priceFrom} / ${item.unit}. Ориентировочная цена, не публичная оферта.`,
          },
        })),
    },
  },
  faqPageSchema(houseRenovationFaq),
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Ремонт домов под ключ", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <HouseRenovationPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
