import { JsonLd } from "@/components/seo/json-ld";
import { ProcessPage, processTimelineSteps } from "@/components/sections/process-page";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  serviceProviderSchema,
} from "@/lib/seo";

const pageTitle = "Этапы ремонта квартир и домов — от замера до сдачи";
const pageDescription =
  "Понятный процесс ремонта: консультация, замер, смета, договор, работы, контроль качества и гарантия.";
const pagePath = "/process";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl(pagePath),
    publisher: serviceProviderSchema(),
    mainEntity: {
      "@type": "ItemList",
      name: "Этапы ремонта от заявки до гарантии",
      itemListElement: processTimelineSteps.map((step) => ({
        "@type": "ListItem",
        position: step.number,
        name: step.title,
        description: `${step.description} Результат: ${step.result}. Артефакт: ${step.artifact}.`,
      })),
    },
  },
  breadcrumbSchema([
    { name: "Главная", path: "/" },
    { name: "Процесс", path: pagePath },
  ]),
];

export default function Page() {
  return (
    <>
      <ProcessPage />
      <JsonLd data={jsonLd} />
    </>
  );
}
