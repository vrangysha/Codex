export type PageId = "home" | "studio" | "about" | "journal" | "reach-us";

export type NavItem = {
  id: PageId;
  label: string;
  path: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "studio", label: "Studio", path: "/studio" },
  { id: "about", label: "About", path: "/about" },
  { id: "journal", label: "Journal", path: "/journal" },
  { id: "reach-us", label: "Reach Us", path: "/reach-us" },
];

export const pageTitles: Record<PageId, string> = {
  home: "Velorah",
  studio: "Studio - Velorah",
  about: "About - Velorah",
  journal: "Journal - Velorah",
  "reach-us": "Reach Us - Velorah",
};

export function getPageId(pathname: string): PageId {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const match = navItems.find((item) => item.path === normalizedPath);

  return match?.id ?? "home";
}
