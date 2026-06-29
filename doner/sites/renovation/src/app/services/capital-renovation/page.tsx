import { JsonLd } from "@/components/seo/json-ld";
import {
  CapitalRenovationPage,
  capitalPriceExamples,
  capitalRenovationFaq,
} from "@/components/sections/capital-renovation-page";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Капитальный ремонт квартир и домов под ключ";
const pageDescription =
  "Капитальный ремонт: демонтаж, инженерия, черновые работы, отделка, контроль скрытых работ и гарантия.";
const pagePath = "/services/capital-renovation";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Капитальный ремонт квартир и домов под ключ",
    description: pageDescription,
    serviceType: "Capital renovation",
    provider: serviceProviderSchema(),
    areaServed: siteConfig.serviceArea,
    url: absoluteUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ориентиры стоимости капитального ремонта",
      itemListElement: capitalPriceExamples.map((item) => ({
        "@type": "Offer",
        name: item.title,
        description: `${item.note} ${item.price}. Ориентировочное значение; после замера стоимость уточняется.`,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "RUB",
          description: `${item.price}. Ориентировочное значение; после замера стоимость уточняется.`,
        },
      })),
    },
  },
  faqPageSchema(capitalRenovationFaq),
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Капитальный ремонт квартир и домов под ключ", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <CapitalRenovationPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
