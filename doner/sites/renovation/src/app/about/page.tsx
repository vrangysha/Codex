import { JsonLd } from "@/components/seo/json-ld";
import { AboutPage, aboutApproach } from "@/components/sections/about-page";
import { siteConfig } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, organizationSchema } from "@/lib/seo";

const pageTitle = "О компании — ремонт квартир и домов под ключ";
const pageDescription =
  "Подход к ремонту: прозрачная смета, контроль качества, договор, гарантия и понятная коммуникация.";
const pagePath = "/about";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  organizationSchema(),
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl(pagePath),
    about: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: siteConfig.serviceArea,
      address: siteConfig.address,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Подход к ремонту",
      itemListElement: aboutApproach.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    },
  },
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "О компании", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <AboutPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
