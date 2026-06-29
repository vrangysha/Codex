import { useEffect, useMemo, useState, type ReactElement } from "react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { cn } from "@/lib/utils";
import { AboutPage } from "@/pages/about-page";
import { HomePage } from "@/pages/home-page";
import { JournalPage } from "@/pages/journal-page";
import { ReachUsPage } from "@/pages/reach-us-page";
import { StudioPage } from "@/pages/studio-page";
import { getPageId, pageTitles, type PageId } from "@/site/navigation";
import type { NavigateHandler } from "@/site/routing";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const pages: Record<
  PageId,
  (props: { onNavigate: NavigateHandler }) => ReactElement
> = {
  home: HomePage,
  studio: StudioPage,
  about: AboutPage,
  journal: JournalPage,
  "reach-us": ReachUsPage,
};

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const activePage = useMemo(() => getPageId(pathname), [pathname]);
  const Page = pages[activePage];

  useEffect(() => {
    document.title = pageTitles[activePage];
  }, [activePage]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigate: NavigateHandler = (path) => (event) => {
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (isModifiedClick || event.button !== 0) {
      return;
    }

    event.preventDefault();

    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }

    setPathname(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className={cn(
        "relative min-h-dvh overflow-x-hidden bg-background text-foreground",
        activePage === "home" && "overflow-hidden",
      )}
    >
      <video
        className={cn(
          "inset-0 z-0 h-full w-full object-cover",
          activePage === "home" ? "absolute" : "fixed",
        )}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <SiteNav activePage={activePage} onNavigate={handleNavigate} />
      <Page onNavigate={handleNavigate} />
      {activePage === "home" ? null : (
        <SiteFooter onNavigate={handleNavigate} />
      )}
    </main>
  );
}

export default App;
