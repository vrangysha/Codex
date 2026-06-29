import { JsonLd } from "@/components/seo/json-ld";
import { PricingPage, pricingFaq } from "@/components/sections/pricing-page";
import { pricingPackages, siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Цены на ремонт квартир и домов — смета и расчёт стоимости";
const pageDescription =
  "Ориентировочные цены на косметический, капитальный ремонт и ремонт под ключ. Точная смета после замера.";
const pagePath = "/pricing";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Расчёт стоимости ремонта квартир и домов",
    description: pageDescription,
    url: absoluteUrl(pagePath),
    provider: serviceProviderSchema(),
    areaServed: siteConfig.serviceArea,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ориентировочные пакеты ремонта",
      itemListElement: pricingPackages.map((pack, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: pack.name,
        description: `${pack.priceFrom} за ${pack.unit}, ориентировочно. Не является публичной офертой; точная смета после замера и согласования материалов.`,
        itemOffered: {
          "@type": "Service",
          name: `Ремонт: ${pack.name}`,
          description: pack.description,
        },
      })),
    },
  },
  faqPageSchema(pricingFaq),
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Цены", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <PricingPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
