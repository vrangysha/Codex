import type { MetadataRoute } from "next";
import { routeMap } from "@/data/site-map";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-06-29T00:00:00+03:00");

const priorityByRoute: Record<string, number> = {
  "/": 1,
  "/services": 0.95,
  "/portfolio": 0.85,
  "/pricing": 0.85,
  "/contacts": 0.85,
  "/process": 0.8,
  "/about": 0.75,
  "/faq": 0.75,
  "/reviews": 0.65,
  "/privacy": 0.2,
  "/terms": 0.2,
};

function changeFrequencyForRoute(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/privacy" || route === "/terms") {
    return "yearly";
  }

  if (route.startsWith("/services") || route === "/pricing" || route === "/contacts") {
    return "weekly";
  }

  return "monthly";
}

function priorityForRoute(route: string) {
  if (priorityByRoute[route] !== undefined) {
    return priorityByRoute[route];
  }

  if (route.startsWith("/services/")) {
    return 0.8;
  }

  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routeMap.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: changeFrequencyForRoute(route),
    priority: priorityForRoute(route),
  }));
}
