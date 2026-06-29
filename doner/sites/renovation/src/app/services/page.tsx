import { JsonLd } from "@/components/seo/json-ld";
import { ServicesPage } from "@/components/sections/services-page";
import { services, siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Услуги ремонта квартир и домов под ключ";
const pageDescription =
  "Косметический, капитальный ремонт, ремонт домов, дизайн-проект, инженерные и отделочные работы.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services",
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Услуги ремонта квартир и домов",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(service.route),
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: serviceProviderSchema(),
        areaServed: siteConfig.serviceArea,
      },
    })),
  },
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
  ]),
];

export default function Page() {
  return (
    <>
      <ServicesPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
