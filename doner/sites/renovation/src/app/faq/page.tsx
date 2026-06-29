import { JsonLd } from "@/components/seo/json-ld";
import { FaqPage, faqPageGroups } from "@/components/sections/faq-page";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, createPageMetadata, faqPageSchema, siteUrl } from "@/lib/seo";

const pageTitle = "FAQ по ремонту квартир и домов";
const pageDescription =
  "Ответы на вопросы о стоимости, сроках, договоре, материалах, гарантии и этапах ремонта.";
const pagePath = "/faq";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    ...faqPageSchema(
      faqPageGroups.flatMap((group) => group.items),
      { title: pageTitle, description: pageDescription, path: pagePath },
    ),
    name: pageTitle,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: `${siteUrl}/`,
    },
  },
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "FAQ", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <FaqPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
