import { JsonLd } from "@/components/seo/json-ld";
import {
  DesignProjectPage,
  designProjectFaq,
  designProjectPackages,
} from "@/components/sections/design-project-page";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Дизайн-проект для ремонта квартиры и дома";
const pageDescription =
  "Планировочные решения, визуализации, рабочие чертежи, подбор материалов и авторский надзор.";
const pagePath = "/services/design-project";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Дизайн-проект для ремонта квартиры или дома",
    description: pageDescription,
    serviceType: "Interior design project for turnkey renovation",
    provider: serviceProviderSchema(),
    areaServed: siteConfig.serviceArea,
    url: absoluteUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Пакеты дизайн-проекта для ремонта",
      itemListElement: designProjectPackages.map((item) => ({
        "@type": "Offer",
        name: item.title,
        description: `${item.description} ${item.price}; ${item.secondaryPrice}. Ориентировочная цена, не публичная оферта.`,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "RUB",
          description: `${item.price}; ${item.secondaryPrice}. Ориентировочная цена, не публичная оферта.`,
        },
      })),
    },
  },
  faqPageSchema(designProjectFaq),
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Дизайн-проект для ремонта квартиры или дома", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <DesignProjectPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
