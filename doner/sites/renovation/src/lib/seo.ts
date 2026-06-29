import type { Metadata } from "next";
import { contacts, siteConfig, type FaqItem } from "@/data/site";

export const siteUrl = "https://example.com";

export const defaultOpenGraphImage = {
  url: "/images/generated/home-hero-renovation-ai.webp",
  width: 1586,
  height: 992,
  alt: "AI-иллюстрация светлого интерьера после ремонта для превью сайта",
};

type PageMetadataInput = {
  description: string;
  noIndex?: boolean;
  path: string;
  title: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  description,
  noIndex = false,
  path,
  title,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOpenGraphImage.url],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "RU",
    },
    areaServed: siteConfig.serviceArea,
    sameAs: siteConfig.messengers.map((messenger) => messenger.href),
  };
}

export function localBusinessSchema(id = `${absoluteUrl("/contacts")}#localbusiness`) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": id,
    name: siteConfig.name,
    description:
      "Временная карточка компании по ремонту квартир и домов. Реальные реквизиты, адрес и зона обслуживания требуют подтверждения владельцем бизнеса.",
    url: absoluteUrl("/"),
    image: absoluteUrl(defaultOpenGraphImage.url),
    telephone: contacts.phone,
    email: contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contacts.address,
      addressLocality: siteConfig.city,
      addressCountry: "RU",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.serviceArea,
    },
    openingHours: contacts.workingHours,
    sameAs: siteConfig.messengers.map((messenger) => messenger.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: contacts.phone,
        email: contacts.email,
        areaServed: siteConfig.serviceArea,
        availableLanguage: ["ru"],
      },
    ],
  };
}

export function serviceProviderSchema() {
  return {
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: absoluteUrl("/"),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(
  items: FaqItem[],
  options?: { description?: string; path?: string; title?: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(options?.title ? { name: options.title } : {}),
    ...(options?.description ? { description: options.description } : {}),
    ...(options?.path ? { url: absoluteUrl(options.path) } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
