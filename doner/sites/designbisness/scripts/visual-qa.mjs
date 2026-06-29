import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outDir = path.join(root, "artifacts", "screenshots");

const routes = ["/", "/portfolio/", "/services/", "/process/", "/supervision/", "/quiz/", "/brief/"];
const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 }
];

fs.mkdirSync(outDir, { recursive: true });

async function loadLazyContent(page) {
  await page.evaluate(async () => {
    const step = Math.max(320, Math.floor(window.innerHeight * 0.75));
    const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

    for (let y = 0; y < max; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 90));
    }

    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(images.map((image) => {
      if (image.complete && image.naturalWidth > 0) return Promise.resolve();
      return new Promise((resolve) => {
        const done = () => resolve();
        image.addEventListener("load", done, { once: true });
        image.addEventListener("error", done, { once: true });
        setTimeout(done, 1500);
      });
    }));
  });
  await page.waitForTimeout(150);
}

const browser = await chromium.launch({ headless: true });
const report = [];

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1
  });

  for (const route of routes) {
    const page = await context.newPage();
    const consoleErrors = [];

    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });

    const response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: "networkidle",
      timeout: 60000
    });

    await loadLazyContent(page);

    const metrics = await page.evaluate(async () => {
      const imageUrls = Array.from(new Set(Array.from(document.images)
        .map((image) => image.currentSrc || image.src)
        .filter(Boolean)));

      const brokenImages = (await Promise.all(imageUrls.map(async (url) => {
        try {
          const response = await fetch(url, { method: "HEAD" });
          return response.ok ? null : url;
        } catch {
          return url;
        }
      }))).filter(Boolean);

      const horizontalOverflow = document.documentElement.scrollWidth > window.innerWidth + 1;

      const overflowingText = Array.from(
        document.querySelectorAll("h1,h2,h3,p,a,button,label,span,strong,td,th,input,select,textarea")
      )
        .filter((element) => {
          const hasScrollableAncestor = (node) => {
            let parent = node.parentElement;
            while (parent) {
              const parentStyle = getComputedStyle(parent);
              const scrollable = (parentStyle.overflowX === "auto" || parentStyle.overflowX === "scroll") && parent.scrollWidth > parent.clientWidth;
              if (scrollable) return true;
              parent = parent.parentElement;
            }
            return false;
          };

          if (hasScrollableAncestor(element)) return false;

          const style = getComputedStyle(element);
          if (style.display === "none" || style.visibility === "hidden") return false;
          const rect = element.getBoundingClientRect();
          if (rect.width < 1 || rect.height < 1) return false;
          const leavesViewport = rect.right > window.innerWidth + 2 || rect.left < -2;
          const clippedNowrap = element.scrollWidth > element.clientWidth + 2 && style.whiteSpace.includes("nowrap");
          return leavesViewport || clippedNowrap;
        })
        .slice(0, 12)
        .map((element) => ({
          tag: element.tagName,
          text: (element.textContent || element.getAttribute("placeholder") || "").trim().slice(0, 80),
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth
        }));

      return {
        title: document.title,
        brokenImages,
        horizontalOverflow,
        overflowingText,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth
      };
    });

    const safeName = route === "/" ? "home" : route.replace(/^\//, "").replace(/\/$/, "").replaceAll("/", "-");
    const screenshot = path.join(outDir, `${safeName}-${viewport.name}.png`);
    await page.screenshot({ path: screenshot, fullPage: true });

    report.push({
      route,
      viewport: viewport.name,
      status: response?.status(),
      screenshot,
      consoleErrors,
      ...metrics
    });

    await page.close();
  }

  await context.close();
}

const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 1
});
const page = await context.newPage();

await page.goto(`${baseUrl}/quiz/`, { waitUntil: "networkidle", timeout: 60000 });
for (let index = 0; index < 6; index += 1) {
  await page.locator("[data-quiz-step]:not([hidden]) .choice-card").first().click();
  await page.locator("[data-quiz-step]:not([hidden]) [data-quiz-next]").click();
}
const quizResultVisible = await page.locator("[data-quiz-result]:not([hidden])").count();

await page.goto(`${baseUrl}/services/`, { waitUntil: "networkidle", timeout: 60000 });
await page.locator("[data-accordion-trigger]").first().click();
const faqExpanded = await page.locator("[data-accordion-trigger]").first().getAttribute("aria-expanded");

await page.goto(`${baseUrl}/brief/`, { waitUntil: "networkidle", timeout: 60000 });
await page.locator("[data-brief-form] button[type='submit']").click();
const briefStatus = await page.locator("[data-form-status]").first().textContent();

await context.close();
await browser.close();

const result = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  report,
  interactions: {
    quizResultVisible,
    faqExpanded,
    briefStatus
  }
};

const reportPath = path.join(outDir, "visual-qa-report.json");
fs.writeFileSync(reportPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
console.log(JSON.stringify(result, null, 2));
