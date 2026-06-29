import { JsonLd } from "@/components/seo/json-ld";
import { ContactsPage } from "@/components/sections/contacts-page";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  localBusinessSchema,
  siteUrl,
} from "@/lib/seo";

const pageTitle = "Контакты компании по ремонту квартир и домов";
const pageDescription =
  "Оставьте заявку на ремонт, замер или консультацию. Телефон, эл. почта, мессенджеры и зона обслуживания.";
const pagePath = "/contacts";
const businessId = `${absoluteUrl(pagePath)}#localbusiness`;

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl(pagePath),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: `${siteUrl}/`,
    },
    mainEntity: {
      "@id": businessId,
    },
  },
  localBusinessSchema(businessId),
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Контакты", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <ContactsPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
