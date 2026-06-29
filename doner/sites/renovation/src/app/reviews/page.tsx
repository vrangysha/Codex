import { JsonLd } from "@/components/seo/json-ld";
import { ReviewsPage, reviewThemes } from "@/components/sections/reviews-page";
import { siteConfig } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, siteUrl } from "@/lib/seo";

const pageTitle = "Отзывы о ремонте квартир и домов";
const pageDescription =
  "Отзывы клиентов о ремонте под ключ, коммуникации, смете, сроках и качестве работ.";
const pagePath = "/reviews";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl(pagePath),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: `${siteUrl}/`,
    },
    about: "Отзывы и темы обратной связи по ремонту квартир и домов",
    mainEntity: {
      "@type": "ItemList",
      name: "Темы будущих отзывов",
      itemListElement: reviewThemes.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    },
  },
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Отзывы", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <ReviewsPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
