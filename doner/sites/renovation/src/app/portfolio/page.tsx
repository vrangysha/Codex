import { JsonLd } from "@/components/seo/json-ld";
import {
  getFilteredPortfolioProjects,
  normalizePortfolioFilter,
  PortfolioPage,
} from "@/components/sections/portfolio-page";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, siteUrl } from "@/lib/seo";

type PageProps = {
  searchParams?: Promise<{
    filter?: string;
  }>;
};

const pageTitle = "Портфолио ремонтов квартир и домов";
const pageDescription =
  "Примеры ремонтов квартир и домов: площади, сроки, состав работ и решения для разных объектов.";
const pagePath = "/portfolio";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const activeFilter = normalizePortfolioFilter(params?.filter);
  const visibleProjects = getFilteredPortfolioProjects(activeFilter);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: pageTitle,
      description: pageDescription,
      url: absoluteUrl(pagePath),
      mainEntity: {
        "@type": "ItemList",
        name: "Примеры оформления кейсов ремонта",
        itemListElement: visibleProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.isDemo
            ? `${project.description} Demo-данные, не реальный опубликованный кейс.`
            : project.description,
          url: `${absoluteUrl(pagePath)}#${project.slug}`,
        })),
      },
      isPartOf: {
        "@type": "WebSite",
        name: "Ремонт под ключ",
        url: `${siteUrl}/`,
      },
    },
    breadcrumbSchema([
      { name: "Главная", path: "/" },
      { name: "Портфолио", path: pagePath },
    ]),
  ];

  return (
    <>
      <PortfolioPage activeFilter={activeFilter} />
      <JsonLd data={jsonLd} />
    </>
  );
}
