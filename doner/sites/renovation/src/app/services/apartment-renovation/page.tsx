import { JsonLd } from "@/components/seo/json-ld";
import {
  ApartmentRenovationPage,
  apartmentRenovationFaq,
} from "@/components/sections/apartment-renovation-page";
import { pricingPackages, siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Ремонт квартир под ключ — смета, договор, гарантия";
const pageDescription =
  "Косметический и капитальный ремонт квартир под ключ: замер, смета, материалы, отделка и гарантия.";
const pagePath = "/services/apartment-renovation";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const apartmentOfferSlugs = new Set(["cosmetic", "capital", "turnkey", "designer"]);

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ремонт квартир под ключ",
    description: pageDescription,
    serviceType: "Apartment renovation",
    provider: serviceProviderSchema(),
    areaServed: siteConfig.serviceArea,
    url: absoluteUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Пакеты ремонта квартир",
      itemListElement: pricingPackages
        .filter((item) => apartmentOfferSlugs.has(item.slug))
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
  faqPageSchema(apartmentRenovationFaq),
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Ремонт квартир под ключ", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <ApartmentRenovationPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
