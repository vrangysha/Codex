import { JsonLd } from "@/components/seo/json-ld";
import {
  CosmeticRenovationPage,
  cosmeticPriceExamples,
  cosmeticRenovationFaq,
} from "@/components/sections/cosmetic-renovation-page";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Косметический ремонт квартир и домов — быстрое обновление интерьера";
const pageDescription =
  "Косметический ремонт: стены, полы, потолки, обои, покраска, подготовка квартиры к продаже или аренде.";
const pagePath = "/services/cosmetic-renovation";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Косметический ремонт квартир и домов",
    description: pageDescription,
    serviceType: "Cosmetic renovation",
    provider: serviceProviderSchema(),
    areaServed: siteConfig.serviceArea,
    url: absoluteUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Примеры стоимости косметического ремонта",
      itemListElement: cosmeticPriceExamples.map((item) => ({
        "@type": "Offer",
        name: item.title,
        description: `${item.note} ${item.price}. Ориентировочное значение, не публичная оферта.`,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "RUB",
          description: `${item.price}. Ориентировочное значение, не публичная оферта.`,
        },
      })),
    },
  },
  faqPageSchema(cosmeticRenovationFaq),
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Косметический ремонт квартир и домов", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <CosmeticRenovationPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
