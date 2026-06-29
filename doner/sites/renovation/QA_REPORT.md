# QA Report

## 2026-06-28 - Stage 01 Project Bootstrap

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`

### Environment Notes

- `node --version`: `v24.16.0`.
- `python --version`: `Python 3.11.15`.
- PowerShell blocks `npm.ps1`; use `npm.cmd` for npm commands.

### Results

- `npm.cmd install`: completed. npm reports two moderate audit findings.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed.
- `node .../detect-csp.mjs`: `{ "shape": null, "signals": [] }`; no CSP patch needed for Impeccable live mode.
- Dev server: started on `http://localhost:3001`.
- HTTP smoke test: `Invoke-WebRequest http://localhost:3001` returned `200`; bootstrap home content was present.

### Issues And Decisions

- Initial `npm run lint` failed because PowerShell blocks `npm.ps1`; all npm commands are run through `npm.cmd`.
- Initial ESLint config using `FlatCompat` failed against `eslint-config-next@16.2.9`; replaced it with direct flat config imports from `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- Initial build warned that Next inferred `C:\Users\mystery` as workspace root due to another lockfile. Added `turbopack.root` to `next.config.mjs`; repeated build passed without the warning.
- `npm audit --audit-level=moderate` still reports `postcss <8.5.10` nested inside `next@16.2.9`. The available npm fix requires `--force` and downgrades Next to `9.3.3`, which is a breaking change and was intentionally not applied.

## 2026-06-28 - Stage 02 AGENTS.md And Global Rules

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`

### Results

- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed.

### Issues And Decisions

- `AGENTS.md` is documentation-only and should not change runtime output.
- The visual rules intentionally avoid generic beige/cream page styling while preserving a warm, premium, trustworthy direction.

## 2026-06-28 - Stage 03 Design System

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- HTTP smoke test against local dev server

### Results

- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed.
- `Invoke-WebRequest http://localhost:3001`: returned `200`; Stage 03 content marker was present.

### Contrast Verification

- Text primary on background: `18.72:1`.
- Text secondary on background: `9.48:1`.
- Text primary on surface-alt: `15.70:1`.
- Text secondary on surface-alt: `7.95:1`.
- Primary foreground on primary: `8.90:1`.
- Accent foreground on accent: `5.17:1`.
- Warning foreground on warning: `6.43:1`.

### Issues And Decisions

- UI UX Pro Max suggested an AI-purple/pink palette in one generated recommendation. It was rejected because it conflicts with the project anti-references and Impeccable brand guidance.
- The design system uses a near-white background instead of generic ivory/beige body color to avoid a saturated renovation-template look while preserving warmth in accents and panels.
- `format:write` touched prompt pack files; they were restored from the original archive before final checks.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it is still not applied.

## 2026-06-28 - Stage 04 Content Data Model

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source content checks for forbidden placeholder patterns and demo marking

### Results

- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed.
- `rg "Lorem|lorem|ipsum" src/data/site.ts`: no matches.
- Demo/placeholder marker check: `isDemo: true` present for 9 portfolio projects and 3 testimonials; `isDemo: false` absent.
- Placeholder checks: placeholder price markers, placeholder stats, placeholder company/contact details, and legal placeholders are present.
- Placeholder asset check: all `/images/placeholders/...` paths referenced from `src/data/site.ts` exist under `public/images/placeholders/`.
- Prettier note: TS/Markdown files formatted directly; SVG placeholders formatted with explicit `--parser html`.

### Issues And Decisions

- `src/data/site.ts` intentionally includes placeholder company details, prices, timelines, legal details, demo cases, and demo testimonials because real business data is not available yet.
- Demo project SVGs are local placeholders and are not real project photography.
- Prices are stored as placeholder strings and must not be presented as a public offer.

## 2026-06-28 - Stage 05 Shared Components, Layout, Header, Footer

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- HTTP smoke test against local dev server
- Browser smoke test for layout landmarks, mobile menu, mobile CTA, and lead form states

### Results

- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed.
- `Invoke-WebRequest http://localhost:3001`: returned `200`; Stage 05 content marker and skip-link marker were present.
- Browser desktop DOM check: `header`, `main#main-content`, `footer`, skip link, and form were present.
- Browser lead form check: empty submit showed six inline errors and error status; filled test data produced the success stub message and cleared alerts.
- Browser mobile menu check at `375x812`: hamburger button existed, `aria-expanded` changed from `false` to `true`, URL stayed `/`, and mobile nav content was present.
- Browser mobile sticky CTA check at `375x812`: bottom panel was visible with `Позвонить`, `Заявка`, and `Telegram` actions.

### Issues And Decisions

- Initial lint failed because `SiteHeader` closed the mobile menu via synchronous `setState` inside `useEffect`. Replaced it with explicit close handlers on mobile links and CTA actions; repeated lint passed.
- A browser QA attempt accidentally followed a reserved `/faq` link while the mobile menu was open. The reserved route correctly rendered the project 404; the isolated mobile menu retest on `/` passed.
- `LeadForm` still uses a local stub submit. Real POST handling, validation schema, anti-spam, CRM/email routing, and privacy consent wording remain for Stage 23.
- Header/footer links point to the planned route map. Most route pages are intentionally reserved until later prompt stages.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it is still not applied.

## 2026-06-28 - Stage 06 Home Page

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- HTTP smoke test against local dev server
- Browser smoke test for homepage content, image rendering, CTA/form paths, and mobile layout
- Source checks for Lorem Ipsum and unmarked real-proof claims

### Results

- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed after adding the generated hero image.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://127.0.0.1:3001`: returned `200`; homepage markers `Ремонт без хаоса`, `AI-иллюстрация`, `Получите предварительный расчёт`, and `application/ld+json` were present.
- Static hero image smoke: `/images/generated/home-hero-renovation-ai.png` returned `200` as `image/png`.
- Browser desktop smoke at `1280x720`: one `h1`, estimate form, JSON-LD, and loaded hero image were present; no horizontal overflow and no console errors.
- Browser mobile smoke at `390x844`: hero content, estimate form marker, AI label, and loaded hero image were present; hero image fit within viewport width, no horizontal overflow, and no console errors.

### Issues And Decisions

- `imagegen` was explicitly invoked by the user. The generated hero image is saved under `public/images/generated/home-hero-renovation-ai.png`, labeled as `AI-иллюстрация`, and must not be treated as real portfolio photography.
- Homepage JSON-LD uses placeholder business data from `src/data/site.ts`; it must be updated before launch.
- Most destination routes linked from homepage are still reserved for later prompt stages and render the project 404 until implemented.
- The lead form remains a local stub pending Stage 23 `/api/lead`.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it is still not applied.

## 2026-06-28 - Stage 07 Services Index Page

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/services`, generated image, and all service routes
- Browser smoke for services page content, image rendering, mobile layout, and form validation

### Results

- `npm.cmd run lint`: failed once because `PackageCheck` was imported but unused in `services-page.tsx`; passed after removing the import.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; Next prerendered `/services` and 10 `/services/[slug]` paths.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://127.0.0.1:3001/services`: returned `200`; markers `Услуги по ремонту квартир и домов`, `Выберите направление работ`, `Сравните основные форматы`, `Не знаете, какой ремонт нужен?`, `AI-иллюстрация`, and `application/ld+json` were present.
- Service route smoke: all 10 service routes returned `200`.
- Static services image smoke: `/images/generated/services-index-ai.png` returned `200` as `image/png`.
- Browser desktop smoke at `http://localhost:3001/services`: one `h1`, services grid, comparison, chooser, service form, JSON-LD, 10 unique service links, and loaded hero image were present; no horizontal overflow and no console errors.
- Browser mobile smoke at `390x844`: hero, services grid, form marker, and loaded hero image were present; image fit within viewport width, no horizontal overflow, and no console errors.
- Browser form smoke: empty submit on `ServiceChoiceForm` produced 5 inline alerts plus the error status message.

### Issues And Decisions

- `imagegen` was explicitly invoked by the user. The generated services image is saved under `public/images/generated/services-index-ai.png`, labeled as `AI-иллюстрация`, and must not be treated as real project photography.
- Added `/services/[slug]` as a temporary fallback so all service links work during Stage 07. Later service-specific prompt stages should replace the main detail pages with full content.
- Browser QA must use `http://localhost:3001` rather than `http://127.0.0.1:3001`; Next dev blocks cross-origin dev resources from `127.0.0.1`, which prevents reliable client-component hydration checks.
- Service prices, timelines, warranty language, and business details remain placeholders pending owner confirmation.
- The service-choice form remains a local stub pending Stage 23 `/api/lead`.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it is still not applied.

## 2026-06-28 - Stage 08 Apartment Renovation Service Page

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/services/apartment-renovation` and generated hero image
- Browser smoke for desktop/mobile layout, image rendering, CTA anchors, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/services/apartment-renovation` is a dedicated static route and no longer generated by the fallback `[slug]` params.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://localhost:3001/services/apartment-renovation`: returned `200`; markers `Ремонт квартир под ключ`, `Для каких квартир`, `Что входит в ремонт квартиры`, `Что часто идёт не так`, `Получить предварительную смету по квартире`, `AI-иллюстрация`, and `application/ld+json` were present.
- Static apartment hero image smoke: `/images/generated/apartment-renovation-hero-ai.png` returned `200` as `image/png`.
- Browser desktop smoke at `http://localhost:3001/services/apartment-renovation`: one `h1`, 5 CTA anchors to `#apartment-estimate`, loaded hero image, AI label, final form marker, and JSON-LD types `Service`, `FAQPage`, and `BreadcrumbList` were present; no horizontal overflow and no console errors.
- Browser mobile smoke at `390x844`: one `h1`, loaded hero image, AI label, final CTA/form marker, and 5 CTA anchors were present; no horizontal overflow and no console errors.
- Browser form smoke: empty submit on the apartment estimate form produced 7 inline validation alerts plus the error status message.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was explicitly invoked by the user. The generated apartment hero is saved under `public/images/generated/apartment-renovation-hero-ai.png`, labeled as `AI-иллюстрация, не реальный объект`, and must not be treated as real project photography.
- The optional Impeccable project context helper path referenced by the skill was unavailable in this repository; Impeccable guidance was applied through the readable skill references instead.
- Apartment package prices, timelines, related portfolio cards, warranty wording, legal wording, and material-handling details remain placeholders pending owner confirmation.
- Apartment JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- `LeadForm` remains a local stub pending Stage 23 `/api/lead`.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it is still not applied.

## 2026-06-29 - Stage 09 House Renovation Service Page

### Planned Checks

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/services/house-renovation` and generated hero image
- Browser smoke for desktop/mobile layout, image rendering, CTA anchors, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX files.
- `npm.cmd run lint`: failed once on unused icon imports, then passed after removing them.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/services/house-renovation` is a dedicated static route and no longer generated by the fallback `[slug]` params.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://localhost:3001/services/house-renovation`: returned `200`; markers `Ремонт домов под ключ`, `Особенности ремонта дома`, `Что входит в ремонт дома`, `Инженерия без сюрпризов`, `Материалы и логистика`, `Получить план ремонта дома`, `AI-иллюстрация`, and `application/ld+json` were present.
- Static house hero image smoke: `/images/generated/house-renovation-hero-ai.png` returned `200` as `image/png`.
- Browser desktop smoke at `http://localhost:3001/services/house-renovation`: one `h1`, 6 CTA anchors to `#house-plan`, loaded hero image, AI label, engineering marker, final form marker, and JSON-LD types `Service`, `FAQPage`, and `BreadcrumbList` were present; no horizontal overflow and no console errors.
- Browser mobile smoke at `390x844`: one `h1`, loaded hero image, AI label, engineering marker, final CTA/form marker, and 6 CTA anchors were present; no horizontal overflow and no console errors.
- Browser form smoke: empty submit on the house plan form produced 7 inline validation alerts plus the error status message.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was explicitly invoked by the user. The generated house hero is saved under `public/images/generated/house-renovation-hero-ai.png`, labeled as `AI-иллюстрация, не реальный объект`, and must not be treated as real project photography.
- The optional Impeccable project context helper path referenced by the skill was unavailable in this repository; Impeccable guidance was applied through the readable skill references instead.
- UI UX Pro Max recommended a trust/conversion pattern, which was used. Its suggested amber/block visual system was not adopted because it conflicts with the existing restrained sage/wood brand system.
- House package prices, timelines, related portfolio cards, winter-work feasibility, engineering responsibility, material storage, warranty wording, and legal wording remain placeholders pending owner confirmation.
- House JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- `LeadForm` remains a local stub pending Stage 23 `/api/lead`.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it is still not applied.

## 2026-06-29 - Stage 10 Cosmetic Renovation Service Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/services/cosmetic-renovation` and generated hero image
- Browser smoke for desktop/mobile layout, image rendering, CTA anchors, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/services/cosmetic-renovation` is a dedicated static route and no longer generated by the fallback `[slug]` params.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://localhost:3001/services/cosmetic-renovation`: returned `200`; required markers, AI label, before/after placeholder text, and JSON-LD were present.
- Static cosmetic hero image smoke: `/images/generated/cosmetic-renovation-hero-ai.png` returned `200` as `image/png`.
- Browser desktop smoke at `http://localhost:3001/services/cosmetic-renovation`: one `h1`, 6 CTA anchors to `#cosmetic-estimate`, 1 CTA anchor to `#cosmetic-prices`, loaded hero image, AI label, before/after placeholder marker, final form marker, and JSON-LD types `Service`, `FAQPage`, and `BreadcrumbList` were present; no horizontal overflow and no console errors.
- Browser mobile smoke at `390x844`: one `h1`, loaded hero image, AI label, honest limitations marker, before/after placeholder marker, final CTA/form marker, and CTA anchors were present; no horizontal overflow and no console errors.
- Browser form smoke: empty submit on the cosmetic estimate form produced 7 inline validation alerts plus the error status message.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was explicitly mentioned by the user as optional. It was used for one generated cosmetic hero image because service pages already use visual hero assets. The image is saved under `public/images/generated/cosmetic-renovation-hero-ai.png`, labeled as `AI-иллюстрация, не реальный объект`, and must not be treated as real project photography.
- The before/after section intentionally uses the existing code-native placeholder instead of generated fake before/after imagery. Real photos and publication permission are required before launch.
- The optional Impeccable project context helper path referenced by the skill was unavailable in this repository; Impeccable guidance was applied manually.
- Cosmetic price examples, timelines, furniture rules, room-by-room feasibility, and the exact boundary with capital renovation remain placeholders pending owner confirmation.
- Cosmetic JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- `LeadForm` remains a local stub pending Stage 23 `/api/lead`.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it was not applied.

## 2026-06-29 - Stage 11 Capital Renovation Service Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/services/capital-renovation` and generated hero image
- Browser smoke for desktop/mobile layout, image rendering, CTA anchors, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX files.
- `npm.cmd run lint`: failed once on an unused `Sparkles` icon import, then passed after removing it.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/services/capital-renovation` is a dedicated static route and no longer generated by the fallback `[slug]` params.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://localhost:3001/services/capital-renovation`: returned `200`; required markers, AI label, and JSON-LD were present.
- Static capital hero image smoke: `/images/generated/capital-renovation-hero-ai.png` returned `200` as `image/png`.
- Browser desktop smoke at `http://localhost:3001/services/capital-renovation`: one `h1`, 5 CTA anchors to `#capital-estimate`, 1 CTA anchor to `#capital-timeline`, loaded hero image, AI label, hidden-works marker, staged-payment marker, pricing disclaimer, demo portfolio marker, final form marker, and JSON-LD types `Service`, `FAQPage`, and `BreadcrumbList` were present; no horizontal overflow and no console errors.
- Browser mobile smoke at `390x844`: one `h1`, loaded hero image, AI label, hidden-works marker, staged-payment marker, pricing disclaimer, demo portfolio marker, final CTA/form marker, and CTA anchors were present; no horizontal overflow and no console errors.
- Browser form smoke: empty submit on the capital estimate form produced 7 inline validation alerts plus the error status message.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was explicitly mentioned by the user as optional. It was used for one generated capital-renovation hero image for consistency with the service-detail pages. The image is saved under `public/images/generated/capital-renovation-hero-ai.png`, labeled as `AI-иллюстрация, не реальный объект`, and must not be treated as real project photography.
- Related portfolio cards use demo project data and remain visibly marked as needing real data. No fake real capital-renovation cases were added.
- Staged payment is shown without fixed percentages because business-approved percentages are not available.
- The optional Impeccable project context helper path referenced by the skill remains unavailable; Impeccable guidance was applied manually.
- UI UX Pro Max recommended a trust/conversion pattern, which was used. Its suggested palette and typography were not adopted because they conflict with the established sage/wood design system.
- Capital price examples, timelines, staged-payment terms, hidden-work control procedure, warranty wording, and living/furniture rules remain placeholders pending owner confirmation.
- Capital JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- `LeadForm` remains a local stub pending Stage 23 `/api/lead`.
- Existing unresolved npm audit finding remains: `postcss <8.5.10` nested inside `next@16.2.9`; npm's available force fix downgrades Next to `9.3.3`, so it was not applied.

## 2026-06-29 - Stage 12 Design Project Service Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/services/design-project` and generated hero image
- Browser smoke for desktop/mobile layout, image rendering, CTA anchors, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/services/design-project` is a dedicated static route and no longer generated by the fallback `[slug]` params.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://localhost:3001/services/design-project`: returned `200`; required markers, AI label, placeholder marker, final CTA/form marker, and JSON-LD were present.
- Static design-project hero image smoke: `/images/generated/design-project-hero-ai.png` returned `200` as `image/png`.
- Browser desktop smoke at `http://localhost:3001/services/design-project`: one `h1`, 5 CTA anchors to `#design-project-consult`, 1 CTA anchor to `#design-project-included`, loaded hero image, AI label, 5 placeholder mentions, final form marker, and JSON-LD types `Service`, `FAQPage`, and `BreadcrumbList` were present; no horizontal overflow and no console errors.
- Browser mobile smoke at `390x844`: one `h1`, loaded hero image, AI label, explicit placeholder marker, final CTA/form marker, and no horizontal overflow; no console errors.
- Browser form smoke: empty submit on the design-project consultation form produced 7 inline validation alerts plus the error status message and focused `lead-name`.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was used for one generated design-project hero image for consistency with the service-detail pages. The image is saved under `public/images/generated/design-project-hero-ai.png`, labeled as `AI-иллюстрация, не реальный объект`, and must not be treated as real project work.
- The examples section intentionally uses code-native visual placeholders for moodboard, layout, visualization, and specification. Real design files or licensed excerpts are required before launch.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through the existing design system and browser QA.
- UI UX Pro Max recommended a lead-magnet/form conversion pattern. Its suggested purple/pink palette and alternate typography were not adopted because they conflict with the established sage/wood design system.
- Design-project package prices, timeline assumptions, revision count, material-selection scope, author-supervision terms, and repair-integration rules remain placeholders pending owner confirmation.
- Design-project JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- `LeadForm` remains a local stub pending Stage 23 `/api/lead`.

## 2026-06-29 - Stage 13 Portfolio Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/portfolio`, `/portfolio?filter=bathrooms`, and reused SVG placeholder assets
- Browser smoke for desktop/mobile layout, filters, image alt/rendering, demo-safe labels, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX and markdown files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/portfolio` is intentionally rendered on demand because it reads `searchParams` for server-side filter links.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://localhost:3001/portfolio`: returned `200`; required hero, filter, featured-case, before/after placeholder, final CTA/form, and JSON-LD markers were present.
- HTTP smoke against `http://localhost:3001/portfolio?filter=bathrooms`: returned `200`; active bathroom filter copy, filtered bathroom project content, and placeholder imagery were present.
- Static SVG asset smoke confirmed the reused Stage 04 portfolio placeholders return `200` as `image/svg+xml`.
- Browser desktop smoke at `http://localhost:3001/portfolio`: one `h1`, 8 filter links, 9 portfolio cards, rendered placeholder images, demo/example markers, before/after placeholder, final form, JSON-LD types `CollectionPage` and `BreadcrumbList`, no horizontal overflow, and no console errors.
- Browser filter smoke confirmed one active `aria-current` filter link, filtered bathroom content, and accessible disclosure content.
- Browser mobile smoke at `390x844`: one `h1`, 8 filter links, rendered images, demo/example marker, before/after placeholder, final form, no horizontal overflow, and no console errors.
- Browser form smoke: empty submit on the portfolio estimate form produced 5 inline validation alerts and focused `portfolio-name`.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 13 because generated portfolio imagery could look like fake real work; the page reuses existing SVG placeholders and labels them as examples/placeholders.
- The before/after section intentionally uses a code-native placeholder. Real before/after photos and publication consent are required before launch.
- All portfolio entries remain demo data from `src/data/site.ts` with visible example/demo language; no claims of real completed projects were added.
- A desktop browser smoke initially found horizontal overflow in the portfolio hero. The hero grid sizing was tightened and the final smoke passed without overflow.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through the existing design system and browser QA.
- UI UX Pro Max recommended a lead-magnet/form conversion pattern. Its suggested alternate palette and typography were not adopted because they conflict with the established sage/wood design system.
- Portfolio budget ranges, durations, categories, featured case, gallery, and filters remain placeholders pending owner-approved real project data.
- Portfolio JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The portfolio estimate form is a local stub pending Stage 23 `/api/lead`, server validation, anti-spam, file/photo handling, CRM/email routing, and final privacy wording.

## 2026-06-29 - Stage 14 Pricing Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/pricing`
- Browser smoke for desktop/mobile layout, pricing table containment, CTA anchors, form validation, legal-risk copy, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX and markdown files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/pricing` prerendered as a static route and total generated static pages increased to 16.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- HTTP smoke against `http://localhost:3001/pricing`: returned `200`; hero, exact subtitle meaning, public-offer disclaimer, packages, factors, examples, comparison table, payment stages, estimate form, FAQ, and JSON-LD markers were present.
- Browser desktop smoke at `http://localhost:3001/pricing`: one `h1`, 4 package cards, 10 price-factor cards, 3 example scenarios, 7 form fields, CTA anchors, mobile-contained comparison table, `Service`, `FAQPage`, and `BreadcrumbList` schema, no exact-price risk phrases, no horizontal overflow, and no console errors.
- Browser mobile smoke at `390x844`: one `h1`, all package/factor/example/form markers present, comparison table contained in its own horizontal scroller, no page-level horizontal overflow, and no console errors.
- Browser form smoke: empty submit on the pricing estimate form produced 7 inline validation alerts, focused `pricing-objectType`, and showed the error status text.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 14 because the pricing page does not need raster imagery; code-native cards, tables, and Lucide icons are clearer and avoid implying real proof.
- All prices and example calculations are visibly framed as orienting placeholders and not a public offer.
- Exact payment percentages were intentionally omitted because business-approved payment terms are unavailable.
- The comparison table uses an internal horizontal scroller on mobile so the page itself does not overflow.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through the existing design system and browser QA.
- UI UX Pro Max recommended a pricing page + CTA pattern and mobile table handling. Its suggested navy/gold palette and alternate typography were not adopted because they conflict with the established sage/wood design system.
- Pricing package boundaries, example ranges, material model, installment terms, payment-stage terms, and legal offer wording remain placeholders pending owner confirmation.
- Pricing JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The pricing estimate form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, and final privacy wording.

## 2026-06-29 - Stage 15 Process Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/process`
- Browser smoke for desktop/mobile layout, timeline readability, CTA anchors, document placeholders, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX and markdown files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/process` prerendered as a static route and total generated static pages increased to 17.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.
- HTTP smoke against `http://localhost:3001/process`: returned `200`; hero, `13 этапов`, final plan form, and JSON-LD markers were present.
- Browser desktop smoke at `http://localhost:3001/process`: one `h1`, 13 timeline step cards, 5 document placeholders, required communication/quality/document/change markers, CTA links, form fields, `WebPage` and `BreadcrumbList` schema, no horizontal overflow, and no console errors.
- Browser mobile smoke at a phone viewport: 13 timeline step cards, documents, changes section, final form, no page-level horizontal overflow, and no console errors.
- Browser form smoke: empty submit on the process plan form produced 7 inline validation alerts, focused `lead-name`, and showed the error status text.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 15 because the process page is clearer as code-native timeline, control, document, and form UI; generated construction photos or document images could imply fake proof.
- No generated, stock, external image, or 21st.dev assets were added.
- The process is shown as a managed 13-step route, but exact responsibilities, durations, artifacts, communication SLA, and warranty workflow need owner confirmation.
- Document blocks are explicit placeholders, not real templates.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through structure, visual hierarchy, accessibility, and browser QA.
- UI UX Pro Max recommended a Trust & Authority / lead-magnet pattern. Its suggested purple/pink palette and alternate typography were rejected in favor of the established sage/wood design system.
- Process JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The process plan form reuses the local `LeadForm` stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, and final privacy wording.

## 2026-06-29 - Stage 16 About Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- HTTP smoke for `/about`
- Browser smoke for desktop/mobile layout, CTA anchors, role cards, placeholder numbers, no fake claims, form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX and markdown files.
- `npm.cmd run lint`: initially failed on unused `House` and `Users` imports in `about-page.tsx`; passed after removing them.
- `npm.cmd run typecheck`: passed after rerun. The first run failed transiently because it ran in parallel with `next build` and read stale `.next/types` before `/about` was regenerated.
- `npm.cmd run build`: passed; `/about` prerendered as a static route and total generated static pages increased to 18.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.
- HTTP smoke against `http://localhost:3001/about`: returned `200`; hero, exact subtitle, placeholder statistics, final form, and JSON-LD markers were present.
- Browser desktop smoke at `http://localhost:3001/about`: one `h1`, required mission/approach/standards/team/number/document/final CTA markers, 5 neutral role cards, 4 placeholder number cards, CTA anchors, form fields, `AboutPage` and `BreadcrumbList` schema, no fake-claim risk phrases, no horizontal overflow, and no console errors.
- Browser mobile smoke at a phone viewport: one `h1`, all team roles, all placeholder numbers, final form, no page-level horizontal overflow, and no console errors.
- Browser form smoke: empty submit on the about consultation form produced 7 inline validation alerts, focused `lead-name`, and showed the error status text.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 16 because generated team/company photos could imply fake people or fake business proof.
- No generated, stock, external image, team photo, or 21st.dev assets were added.
- The page uses role cards instead of names/photos because real team data is unavailable.
- All numerical proof is shown as explicit `X ...` placeholder statistics and tracked in `CONTENT_TODO.md`.
- Document and warranty descriptions are generic placeholders pending legal/business approval.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through hierarchy, truthful proof, accessibility, and browser QA.
- UI UX Pro Max recommended a Trust & Authority / lead-magnet pattern. Its suggested red palette and alternate typography were rejected in favor of the established sage/wood design system.
- About JSON-LD still uses `https://example.com` and placeholder organization data; replace with real production values before launch.
- The about consultation form reuses the local `LeadForm` stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, and final privacy wording.

## 2026-06-29 - Stage 17 Reviews Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- Source check that `/reviews` does not add `Review` or `AggregateRating` schema for demo reviews
- HTTP smoke for `/reviews`
- Browser smoke for desktop/mobile layout, demo labels, media placeholders, short form validation, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX and markdown files.
- `npm.cmd run lint`: initially failed on three unused icon imports in `reviews-page.tsx`; passed after removing them.
- `npm.cmd run typecheck`: passed after rerun. The first run failed transiently because it ran in parallel with `next build` and read stale `.next/types` before `/reviews` was regenerated.
- `npm.cmd run build`: passed; `/reviews` prerendered as a static route and total generated static pages increased to 19.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- Source-only schema risk check found no `Review`, `AggregateRating`, `reviewRating`, `bestRating`, or `worstRating` usage on the reviews route/data.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.
- HTTP smoke against `http://localhost:3001/reviews`: returned `200`; hero H1, demo badge, and `CollectionPage` JSON-LD marker were present.
- Browser desktop smoke at `http://localhost:3001/reviews`: one `h1`, required hero subtitle, 6 review cards, 6 demo badges, media placeholders, short form, `CollectionPage` schema, no `Review`/`AggregateRating` schema, no horizontal overflow, and no console errors.
- Browser mobile smoke at a phone viewport: one `h1`, 6 review cards, 6 demo badges, 3 media placeholder cards, final form, no page-level horizontal overflow, and no console errors.
- Browser form smoke: empty submit on the reviews trust form produced 3 inline validation alerts, focused `reviews-phone`, and showed the error status text.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 17 because generated customer photos, videos, or interior review media could imply fake real social proof.
- No generated, stock, external image, video, review media, or 21st.dev assets were added.
- All review entries in `src/data/site.ts` remain `isDemo: true` and are visibly labeled as `Демо-отзыв`.
- Video/photo review blocks are code-native placeholders and explicitly say they are not real media.
- Reviews JSON-LD uses `CollectionPage` and `BreadcrumbList`, not `Review`, `AggregateRating`, or rating schema, because the reviews are demo content.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through truthful proof, hierarchy, mobile layout, accessibility, and browser QA.
- UI UX Pro Max recommended a Hero + Testimonials + CTA pattern. Its suggested rose/blue palette and alternate typography were rejected in favor of the established sage/wood design system.
- Real review sources, permissions, media, display rules, client-contact consent, and moderation workflow remain pending.
- Reviews JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The reviews trust form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, and final privacy wording.

## 2026-06-29 - Stage 18 FAQ Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- Source check for risky exact warranty/cost promises
- HTTP smoke for `/faq`
- Browser smoke for desktop/mobile layout, accordion count, anchor groups, FAQPage schema, schema/text parity, form validation, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX and markdown files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/faq` prerendered as a static route and total generated static pages increased to 20.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- Source-only legal-risk check for exact numerical warranty/cost promises found no matches.
- FAQ data check confirmed 8 groups and 50 questions: Стоимость, Сроки, Договор и оплата, Материалы, Процесс ремонта, Гарантия, Дизайн-проект, Портфолио и отзывы.
- HTTP smoke against `http://localhost:3001/faq`: returned `200`; hero H1, FAQPage schema marker, BreadcrumbList schema marker, and `Портфолио и отзывы` were present.
- Browser desktop smoke at `http://localhost:3001/faq`: one `h1`, required hero subtitle, 8 group-nav links, 50 accordion items, mid-page CTA, final question form, `FAQPage` and `BreadcrumbList` schema, schema questions matching visible accordion questions, no horizontal overflow, and no console errors.
- Browser mobile smoke at a phone viewport: one `h1`, 8 group-nav links, 50 accordion items, mid-page CTA, final form, no page-level horizontal overflow, and no console errors.
- Browser form smoke: empty submit on the FAQ question form produced 3 inline validation alerts, focused `faq-question`, and showed the error status text.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 18 because FAQ is clearer as text, anchors, accordion, and form UI; raster imagery would not improve the task.
- No generated, stock, external image, or 21st.dev assets were added.
- A full JS search/filter was intentionally not added; category anchors provide fast navigation without extra client state or complexity.
- FAQ groups were normalized in `src/data/site.ts` to match the required eight groups. Existing references to separate `contract`/`payment` groups were updated to `contract-payment`.
- FAQ answers avoid exact legal/warranty promises and keep placeholder-dependent terms explicitly conditional.
- FAQPage JSON-LD is generated from the same `faqGroups` data rendered by the accordions; browser QA confirmed schema questions match visible questions.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through information architecture, hierarchy, mobile layout, accessibility, and browser QA.
- UI UX Pro Max recommended a documentation-style FAQ page with category navigation and contact escalation. Its suggested gold/purple dark palette and alternate typography were rejected in favor of the established sage/wood design system.
- FAQ JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The FAQ question form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, and final privacy wording.

## 2026-06-29 - Stage 19 Contacts Page

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- Source check that `/contacts` does not add random coordinates, map iframes, or map provider scripts
- HTTP smoke for `/contacts`
- Browser smoke for desktop/mobile layout, contact links, map placeholder, form validation/success, JSON-LD, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/contacts` prerendered as a static route and total generated static pages increased to 21.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- Source-only map-risk check for `Яндекс`, `Google Maps`, `iframe`, `mapbox`, `leaflet`, and common coordinate fragments on the contacts route/components: no matches.
- HTTP smoke against `http://localhost:3001/contacts`: returned `200`; hero/contact marker, contact form marker, and schema markers were present.
- Browser desktop smoke at `http://localhost:3001/contacts`: one `h1`, all 10 contact form fields, tel/mail/messenger links, map placeholder, service-area copy, `ContactPage`, `LocalBusiness`, and `BreadcrumbList` schema, no horizontal overflow, and no console errors.
- Browser form validation smoke: empty submit on the contact form produced 8 inline validation alerts, focused `contact-name`, and showed the error status text.
- Browser mobile smoke at a phone viewport: one `h1`, contact form, map placeholder, quick-contact CTA, mobile sticky CTA actions, 52px submit button, no page-level horizontal overflow, and no console errors.
- Browser form success smoke: filled test data produced the local stub success message, cleared alerts, unchecked privacy consent after reset, and emptied the name field.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 19 because the contacts page is clearer and safer with code-native contact, form, service-area, and map-placeholder UI.
- No generated, stock, external image, map tile, map iframe, or 21st.dev asset was added.
- Random maps and coordinates were intentionally avoided because no real public address was supplied.
- Contact links use placeholder phone/email/messenger data from `src/data/site.ts`; they are syntactically valid but must be replaced before public launch.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through hierarchy, truthful placeholder handling, accessibility, and browser QA.
- UI UX Pro Max recommended a lead-form/contact conversion pattern. Its suggested blue palette and alternate typography were rejected in favor of the established sage/wood design system.
- `/contacts` JSON-LD still uses `https://example.com` and placeholder organization/contact data; replace with the production domain and real business values before launch.
- The contact lead form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, privacy wording, and consent storage.

## 2026-06-29 - Stage 20 Legal, 404, Static States

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source check for forbidden placeholder text
- Source check for legally risky promises
- HTTP smoke for `/privacy`, `/terms`, and a missing route
- Browser smoke for desktop/mobile legal pages, footer links, noindex metadata, 404 CTAs, loading/error route compilation, and horizontal overflow

### Results

- `npx.cmd prettier --write`: passed for changed TS/TSX files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; `/privacy`, `/terms`, and `_not-found` prerendered, with 23 generated static pages total.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- Source-only legal-risk check found public-offer wording only in safe negative form: “не является публичной офертой”; no “юридически проверен”, “гарантируем”, or free-measurement promise was added.
- HTTP smoke against `/privacy` and `/terms`: both returned `200`, included “Текст является шаблоном”, included `noindex`, and exposed footer legal links.
- Browser desktop smoke at `/privacy`, `/terms`, and a missing route: one `h1` per page, template note on legal pages, noindex on legal pages, “Страница не найдена” on 404, home/services/contact actions, footer privacy/terms links, no horizontal overflow, and no console errors.
- Browser mobile smoke at a phone viewport: one `h1` per checked page, no horizontal overflow, 404 CTAs visible, and visible relevant action/footer targets at least 44px high after footer touch-target adjustment.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used for Stage 20 because legal pages, 404, loading, and error states are clearer as deterministic code-native UI.
- No generated, stock, external image, legal illustration, or 21st.dev asset was added.
- The legal pages are intentionally `noindex` because they are placeholder templates requiring owner/legal review.
- The 404 route inherits noindex behavior from Next/static missing-route handling; this is acceptable for the missing-route surface.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through hierarchy, accessibility, and QA.
- UI UX Pro Max recommended a legal trust pattern. Its suggested navy/serif palette and alternate typography were rejected to preserve the established sage/wood design system.
- Footer link touch targets were raised to 44px while working on this stage.
- Legal text remains placeholder content and must be replaced or approved by a qualified lawyer before launch.

## 2026-06-29 - Stage 21 Images, Assets, Generation, Licenses

### Planned Checks

- `npx.cmd prettier --write`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source checks for Lorem Ipsum, external image URLs, generated PNG references, missing local image files, and missing `<Image alt>`
- Asset checks for WebP dimensions/size, SVG parse validity, at least 6 unique portfolio placeholder visuals, and direct HTTP asset responses
- HTTP smoke for pages with generated/service/portfolio imagery
- Browser smoke for desktop/mobile visible image loading, alt presence, generated/demo labels, no horizontal overflow, and console errors
- `npm.cmd audit --audit-level=moderate`

### Results

- `npx.cmd prettier --write` initially returned a parser error for `.svg` files because the current Prettier setup does not infer an SVG parser. The supported code/Markdown files were formatted, then `npx.cmd prettier --write --ignore-unknown ...` passed for the changed files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; Next.js 16.2.9 compiled successfully and generated 23 static/SSG pages plus dynamic `/portfolio`.
- Source-only `rg "Lorem|lorem|ipsum" src public`: no matches.
- Source-only external image check for common stock/CDN/image URL patterns and `<img>` tags: no matches.
- Asset-reference script found 15 local `/images/...` references in `src`; every referenced file exists and no `src` code references generated `.png` files after Stage 21.
- WebP check confirmed 7 generated site-facing `.webp` images, each under 200 KB: roughly 99 KB to 157 KB while preserving original dimensions.
- SVG parse check passed for all placeholder SVG files under `public/images/placeholders`.
- Portfolio data check confirmed 9 portfolio cover references and 6 unique Stage 21 portfolio SVG placeholder visuals.
- Image component check found 12 `<Image>` components and no missing `alt` prop.
- HTTP smoke against `/`, `/services`, five dedicated service pages, and `/portfolio`: all returned `200`; pages with generated visuals included `.webp` references and generated/demo/placeholder disclosure markers as expected.
- Direct HTTP asset smoke confirmed all 7 WebP files return `200 image/webp`; all 6 new portfolio SVG files return `200 image/svg+xml`.
- Browser desktop smoke for `/`, `/portfolio`, and `/services/design-project`: visible images loaded, no missing alt text, generated/demo labels present where relevant, no horizontal overflow, and no console errors.
- Browser mobile smoke at a 390px viewport for `/`, `/portfolio`, and `/services/design-project`: visible images loaded, no missing alt text, no horizontal overflow, portfolio still exposes 6 unique placeholder SVG slots, and no console errors.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used in Stage 21 because the site already had generated hero/service visuals, and new realistic generated portfolio photos could be mistaken for real proof.
- No external stock images, Google Images, third-party brand logos, paid/closed 21st.dev components, or unverified media were added.
- Existing generated PNG images are retained as source archives; the site now consumes optimized WebP derivatives and keeps visible AI-disclosure labels.
- Portfolio now has six distinct non-photographic SVG placeholder visuals for required visual categories. They remain placeholders and are visibly labeled as needing real data.
- Below-fold lazy images can report `complete=false` before scrolling in browser inspection. Direct HTTP checks and visible-image browser checks passed, so this is expected lazy-loading behavior rather than broken media.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through asset truthfulness, visual hierarchy, responsive checks, and browser QA.
- UI UX Pro Max recommended a portfolio-grid/image-first pattern. Its blue accent and alternate fonts were rejected in favor of the established sage/wood design system and existing typography.
- Real project photos, owner/client permissions, source URLs, stock licenses, logo/favicon/OG assets, and publication constraints remain pending before launch.

## 2026-06-29 - Stage 22 SEO, Metadata, Schema, Sitemap

### Planned Checks

- `prettier --write` for changed SEO/page files
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Source checks for centralized JSON-LD and forbidden review/rating schema
- HTTP SEO smoke for metadata, canonical links, OG tags, JSON-LD validity, one `h1`, FAQ schema visibility, sitemap, robots, legal noindex, internal links, and keyword-stuffing risk
- `npm.cmd audit --audit-level=moderate`

### Results

- `.\node_modules\.bin\prettier.cmd --write ...`: passed for changed TS/TSX files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed; Next.js 16.2.9 compiled successfully and generated `/sitemap.xml`, `/robots.txt`, all required pages, and routeMap service paths.
- Source-only JSON-LD check: only `src/components/seo/json-ld.tsx` contains `application/ld+json` and `dangerouslySetInnerHTML`.
- Source-only review schema check: no `AggregateRating`, `reviewRating`, `bestRating`, or `worstRating` schema usage found.
- HTTP SEO-QA against `http://localhost:3002`: passed for 21 routeMap pages, including 16 prompt-required metadata routes. It verified unique titles/descriptions for prompt pages, descriptions, canonical links, `og:title`, `og:description`, `og:image`, JSON-LD parse validity, expected schema types, visible FAQ question parity, one `h1` per page, legal `noindex`, sitemap contents, robots allow/sitemap rules, and 20 internal links.
- Keyword-stuffing smoke: no warnings at the configured repeated-target-phrase threshold.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used in Stage 22 because SEO/schema work did not require new raster imagery.
- No generated image, stock image, external media, paid/closed 21st.dev asset, or fake proof asset was added.
- `siteUrl` remains `https://example.com`; sitemap, robots, canonical URLs, schema IDs, and OG URLs must be switched to the production domain before launch.
- `LocalBusiness`/`HomeAndConstructionBusiness` schema uses placeholder phone, email, address, city, opening hours, area served, and sameAs data from the current placeholder data model. Replace with owner-confirmed values before indexing.
- `/privacy` and `/terms` remain `noindex` because legal content is still a template requiring owner/legal review.
- Reviews schema intentionally avoids rating/review structured data until real permission-backed reviews are supplied.
- The optional Impeccable project context helper path remains unavailable; Impeccable guidance was applied manually through SEO truthfulness, heading checks, accessibility-oriented structure, and QA.
- UI UX Pro Max recommended trust/authority SEO patterns. Its suggested visual palette and typography were rejected to preserve the established sage/wood design system.

## 2026-06-29 - Stage 23 Forms, Leads, Validation, API Stub

### Planned Checks

- `prettier --write` for changed form/API files
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- Direct `/api/lead` smoke for valid, invalid, honeypot, and invalid JSON payloads
- Static HTTP scan for consent, honeypot, privacy links, and legacy field names across form-bearing routes
- Browser smoke for empty submit, valid submit, focus management, success/reset, console errors, and mobile overflow/touch target behavior
- Source checks for secrets, PII logging, old local stub code, and old field names
- `npm.cmd audit --audit-level=moderate`

### Results

- `.\node_modules\.bin\prettier.cmd --write ...`: passed for changed TS/TSX files.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: initially failed on `z.SafeParseReturnType` because installed Zod v4 does not export that type; after removing the unused export, it passed.
- `npm.cmd run build`: passed; Next.js 16.2.9 compiled successfully and generated `/api/lead` as a dynamic route.
- Direct API smoke against `http://localhost:3003/api/lead`: passed for empty JSON (`400`), valid contact payload (`200` stub success), invalid email (`400` field error), honeypot payload (`200` neutral stub success), and invalid JSON (`400 INVALID_JSON`).
- Static HTTP form scan: passed across 14 routes with public forms. Each form had `company` honeypot, `consent` checkbox, `/privacy` link, and no legacy `privacy`, `comment`, or `question` names.
- Browser homepage form smoke: empty submit showed 7 inline errors, `aria-invalid` fields, focus on `lead-name`, validation status text; valid dummy submit returned stub success, reset values/consent, kept one honeypot field, and produced no console errors.
- Browser contacts full form smoke: empty submit showed 8 inline errors, focus on `contact-name`; valid dummy submit returned stub success, reset values/consent, kept one honeypot field, and produced no console errors.
- Browser mobile smoke at 390px on `/contacts#contact-form`: no horizontal overflow, submit target 52px high, consent label 56px high, and the form fit the viewport.
- Source checks found no `console.*`, `process.env`, API key, secret, token, webhook URL, CRM URL, or Telegram bot token usage in lead API/forms/lib.
- Source checks found no remaining Stage 23 form TODO, local `setTimeout` form stub, or old form field names in form code.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` dependency nested under `next`; the available `--force` fix would downgrade Next to `9.3.3`, so it was not applied.

### Issues And Decisions

- `imagegen` was mentioned by the user as optional. It was not used in Stage 23 because forms and API validation are code-native.
- No generated image, stock image, external media, paid/closed 21st.dev asset, analytics script, CRM SDK, or webhook integration was added.
- `/api/lead` intentionally returns `mode: "stub"` and `accepted: false` so the UI does not pretend that a real lead was delivered.
- The API does not log PII. Real storage, retention, operator details, consent logging, and processor list must be confirmed before production.
- Honeypot is only a lightweight anti-spam measure. Production still needs rate limiting, monitoring, and possibly a CAPTCHA or server-side abuse guard depending on traffic.
- UI UX Pro Max recommended a compact lead-magnet form pattern. The compactness recommendation was balanced against the project need for qualified renovation leads, so full forms keep object details while shorter forms remain contextual.
- Impeccable guidance was applied manually through form hierarchy, copy clarity, accessible error placement, focus management, and responsive checks.

## 2026-06-29 - Stage 24 Responsive, Accessibility, Edge Cases

### Required Page Matrix

| Page                                          | Mobile                                                                                        | Tablet                                                 | Desktop                                                               | Accessibility                                                                                                 | Issues                                                                                                               | Status                |
| --------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `/`                                           | Passed at `360`, `390`, `430`; no horizontal overflow; sticky CTA did not cover footer links. | Passed at `768`; header/content stack stayed readable. | Passed at `1024`, `1280`, `1440`; navigation and hero fit.            | One `h1`, one `main`, skip-link contract present, image alt text and form labels present.                     | None found in automated pass.                                                                                        | Passed                |
| `/services`, `/services/apartment-renovation` | Passed at mobile widths; breadcrumbs and CTAs wrap safely.                                    | Passed at `768`; service grids stay readable.          | Passed at desktop widths; generated-image disclosure remains visible. | One `h1`, labels/alt present, heading order valid.                                                            | Existing generated visuals remain illustrative and disclosed.                                                        | Passed                |
| `/pricing`                                    | Passed at mobile widths; comparison table is horizontally scrollable without page overflow.   | Passed at `768`; cards and table fit.                  | Passed at desktop widths.                                             | Pricing table wrapper is a named focusable region with visible focus style.                                   | None found.                                                                                                          | Passed                |
| `/portfolio`                                  | Passed at mobile widths; cards and details summaries fit.                                     | Passed at `768`; filter/results layout remains stable. | Passed at desktop widths.                                             | Image alt text present, details use native summary controls, empty state added for no matching projects.      | Real portfolio content still pending.                                                                                | Passed                |
| `/reviews`                                    | Passed at mobile widths; review cards and form fit.                                           | Passed at `768`.                                       | Passed at desktop widths.                                             | Form labels/errors present, demo-review disclosure remains; empty state added for missing testimonials.       | Demo testimonials still require replacement before launch.                                                           | Passed                |
| `/faq`                                        | Passed at mobile widths; accordions fit and do not overflow.                                  | Passed at `768`.                                       | Passed at desktop widths.                                             | Native `<details>/<summary>` accordions, one `h1`, labels present.                                            | Browser automation used click fallback after Space did not toggle in that runtime; verify keyboard on real browsers. | Passed with follow-up |
| `/contacts`                                   | Passed at mobile widths; full form fits and sticky CTA does not hide footer links.            | Passed at `768`.                                       | Passed at desktop widths.                                             | Empty submit focuses `contact-name`, shows 8 alerts/invalid fields, one `main` after nested landmark removal. | Real contact data and production lead routing still pending.                                                         | Passed                |
| `/privacy`, `/terms`                          | Passed at mobile widths after long-text/min-width hardening.                                  | Passed at `768`.                                       | Passed at desktop widths.                                             | One `main`, one `h1`, legal side-nav links meet touch target expectations.                                    | Legal text remains placeholder and noindexed.                                                                        | Passed                |
| Global shell/header/footer                    | Mobile menu closed links are hidden from tab order; Escape closes menu and restores focus.    | Header/footer remain readable.                         | Desktop nav target size improved.                                     | Skip link exists and targets `main#main-content`; footer/header landmarks remain intact.                      | First-Tab skip-link behavior could not be reliably simulated by the browser runtime; static contract passed.         | Passed with follow-up |

### Automated Checks

- `npx.cmd prettier --write ...`: passed.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed.
- Browser responsive QA against `http://localhost:3005`: 70 route/viewport combinations checked, 0 failures.
- Static landmark check: only `src/components/layout/site-shell.tsx` contains `<main>`.
- Static ARIA check: no `role="button"` usage found.
- Static content placeholder check: no `Lorem`, `lorem`, `ipsum`, or `TODO` matches found in `src` or `public`.
- `npm.cmd audit --audit-level=moderate`: failed on existing `next -> postcss <8.5.10` moderate advisory. `npm audit fix --force` would downgrade Next to `9.3.3`, so it was not applied.

### Manual/Browser Notes

- Mobile menu Escape behavior passed: menu returns to `aria-expanded="false"`, panel becomes hidden, and focus returns to the menu button.
- Contact form keyboard/error behavior passed: empty submit focuses the first invalid field and announces validation state through inline alerts/status text.
- Pricing comparison table has keyboard focus (`tabIndex={0}`) and an accessible region label for horizontal scrolling.
- Sticky mobile CTA was checked against footer overlap across tested mobile widths.
- `prefers-reduced-motion` support remains provided through existing CSS animation reduction; no new motion-heavy interaction was added in this stage.
- Impeccable was applied manually because the optional helper script path was unavailable. UI UX Pro Max guidance was used for touch targets, contrast/focus, and responsive/accessibility QA; its alternate palette/type suggestions were rejected to keep the established visual system.

## 2026-06-29 - Stage 25 QA, Polish, Performance

### Automated Checks

- `npx.cmd prettier --write README.md ASSETS.md package.json package-lock.json "src/**/*.ts" "src/**/*.tsx"`: passed.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed with Next.js 16.2.9; production output includes 26 generated app routes/pages and `/api/lead`.
- `npm.cmd run test`: failed because `package.json` has no `test` script.
- `npm.cmd audit --audit-level=moderate`: failed on existing `next -> postcss <8.5.10` moderate advisory. `npm audit fix --force` would install `next@9.3.3`, so it was not applied.

### Static QA

- Source hygiene scan for `console.*`, `@ts-ignore`, `@ts-expect-error`, `any`, `TODO`, `Lorem`, `lorem`, and `ipsum`: no matches in `src` or `public`.
- Encoding/damage scan for `???`, mojibake markers, and accidental replacement damage: no matches in `src`.
- Stock/external image scan for `<img`, `unsplash`, `pexels`, `pixabay`, `cdn`, `cloudinary`, `shutterstock`, `istock`, and stock image URLs: no matches in `src` or `public`.
- Asset reference scan: 15 `/images`/`/favicon` references, 0 missing; 17 local SVG/WebP/ICO assets checked, 0 over 250 KB; 9 SVG files have `<svg>` and closing tags.
- `public/favicon.ico`: exists, 484 bytes, generated locally, served with HTTP `200`.

### Browser Route QA

- Target: production server `http://localhost:3006` using Playwright with system Chrome.
- Coverage: 21 canonical `routeMap` routes plus `/portfolio?filter=apartment#portfolio-grid`, widths `390` and `1440`.
- Result: 44 viewport checks, 0 failures.
- Verified: HTTP `200`, one `h1`, title and meta description present, 21 unique canonical titles, 21 unique canonical descriptions, no horizontal overflow, no visible encoding damage, no visible user-facing `placeholder/stub/fallback/Timeline/JavaScript/SLA/Email/webhook`, no local links opening in a new tab, no JSON-LD `Placeholder/stub/fallback` wording.
- Browser errors: 0 console errors, 0 page errors, 0 actionable request failures.
- Ignored: 76 expected `net::ERR_ABORTED` `_rsc` requests from Next navigation/filter transitions.
- Resource max observed in browser run: 72 resources, about 256 KB script transfer, about 3.2 KB local image/icon transfer.

### Browser Form QA

- Form census: 19 forms across 19 routes.
- Scenario coverage: empty submit, invalid phone, missing consent, valid submit for every form, plus `/contacts` server-error handling.
- Result: all scenarios passed after retrying one Playwright-only checkbox click flake on `/services/capital-renovation`; the retry confirmed invalid phone shows an inline error and does not accept the form.
- Valid submit checks confirmed `/api/lead` returns `200` and success text appears. Empty submit checks confirmed inline alerts and focus management on the first invalid field.

### Notes

- `imagegen` was read because the user mentioned it, but it was not used. The favicon was generated locally with Pillow and simple geometric shapes, not as AI/stock/third-party media.
- Impeccable helper script was attempted but unavailable at `.claude/skills/impeccable/scripts/context.mjs`; Impeccable guidance was applied manually.
- UI UX Pro Max was used for QA/polish guidance. Its alternate visual system recommendations were rejected to preserve the current brand system.
- Remaining launch risk is content/operations, not current build validity: real business data, real legal text, real portfolio/reviews, production domain, CRM/email/webhook routing, rate limiting, analytics consent, Lighthouse/axe, and real-device checks.

## 2026-06-29 - Stage 26 Final Delivery Report

### Planned Checks

- `npx.cmd prettier --write FINAL_REPORT.md WORKLOG.md QA_REPORT.md CONTENT_TODO.md ASSETS.md`
- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- `npm.cmd run test`
- `npm.cmd audit --audit-level=moderate`
- Static scan for source hygiene and hard-coded secrets in `src`/`public`

### Results

- `npx.cmd prettier --write FINAL_REPORT.md WORKLOG.md QA_REPORT.md CONTENT_TODO.md ASSETS.md`: passed.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed with Next.js 16.2.9; production output generated 26 app routes/pages including `/api/lead`, `/robots.txt`, `/sitemap.xml`, static routes, and SSG service fallback routes.
- `npm.cmd run test`: failed because `package.json` has no `test` script.
- `npm.cmd audit --audit-level=moderate`: failed on the existing `postcss <8.5.10` advisory nested under `next`; `npm audit fix --force` would install `next@9.3.3`, so it was not applied.
- Static source hygiene scan for `console.*`, `@ts-ignore`, `@ts-expect-error`, `any`, `TODO`, `Lorem`, `lorem`, and `ipsum` in `src`/`public`: no matches.
- Static secret scan for hard-coded `process.env`, API key, secret, token, webhook, CRM secret, or bot token in `src`/`public`: no matches.
- Archive created at `outputs/renovation-landing-stage-26.zip`; verification found 165 entries and 0 matches for excluded `node_modules`, `.next`, `.git`, logs, `tsconfig.tsbuildinfo`, or `.dev-server-port`.

### Notes

- Stage 26 is documentation-only. It adds no app code, no dependency, no asset, no external component, no form behavior change, and no production integration.
- Browser responsive/form/route QA from Stage 25 remains applicable because the runtime code has not changed.
- `imagegen` was read due to the user mention but was not used.
- Impeccable helper remains unavailable at `.claude/skills/impeccable/scripts/context.mjs`; manual checklist application is documented in `FINAL_REPORT.md`.
- UI UX Pro Max design-system output was used for QA discipline, not copied into the visual system because it conflicted with the established `DESIGN.md` direction.

## 2026-06-29 - Full Site QA And Fixes

### Automated Checks

- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd audit --audit-level=moderate`: passed; 0 vulnerabilities after `postcss@8.5.16` override.
- `npm.cmd run build`: passed with Next.js 16.2.9; production output generated 26 app routes/pages.
- Production server: restarted and verified at `http://localhost:3007`.

### Browser QA

- Browser engine: system Chrome through temporary `playwright-core`, pruned after QA.
- Route coverage: 21 canonical routes at widths `360`, `390`, `768`, and `1440`; 84 route/viewport checks total.
- Verified per route/viewport: HTTP `200`, title, meta description, one `h1`, one `main`, `html lang="ru"`, no horizontal overflow, no visible `undefined`/`NaN`/`Lorem`/`ipsum`/`TODO`, image `alt` attributes, no internal links opening in a new tab, mobile menu open/Escape-close behavior, no console errors, no page errors, and no actionable request failures.
- Form coverage: 19 public forms checked at mobile width. Empty submit produced inline alerts; valid submit produced success state; consent checkbox and `/api/lead` path worked.
- Link coverage: 97 unique local links returned acceptable status.
- Asset coverage: 21 unique image URLs returned HTTP `200` with image content type.
- API/SEO coverage: valid `/api/lead` returned `200`, invalid `/api/lead` returned `400`, `robots.txt` included sitemap, and `sitemap.xml` returned a valid URL set.
- Accessibility coverage: axe WCAG 2 A/AA and 2.1 A/AA checks passed on `/`, `/services`, `/portfolio`, `/pricing`, `/contacts`, and `/privacy` with 0 critical/serious/moderate violations after the heading color fix.
- Reduced-motion smoke: home page had no horizontal overflow with reduced motion emulation.

### Fixed Issues

- Closed the prior moderate `next -> postcss <8.5.10` audit advisory with a package override to `postcss@8.5.16`.
- Fixed highlighted pricing card heading contrast by allowing global headings to inherit container text color.

### Remaining QA Gaps

- `npm.cmd run test` still cannot run because `package.json` has no `test` script.
- Real iOS Safari, Android Chrome, tablet hardware, screen-reader, Lighthouse, Search Console/Rich Results, real CRM/email/webhook delivery, and production-domain checks should still be run after real business data and integrations are added.

## 2026-06-29 - Project Transfer To GitHub Sites Folder

### Results

- Target path: `C:\github\codex\sites\renovation`.
- Existing target contents were preserved at `C:\github\codex\sites\renovation_backup_20260629_103029`.
- Transfer command completed successfully with `robocopy` exit code `1`, meaning files were copied.
- `npm.cmd install`: passed in the target folder.
- `npm.cmd run lint`: passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd audit --audit-level=moderate`: passed with 0 vulnerabilities.
- `npm.cmd run build`: passed; Next.js 16.2.9 generated 26 app routes/pages.

### Notes

- The first transfer intentionally excluded `node_modules` and `.next`; both were recreated in the target folder by `npm.cmd install` and `npm.cmd run build`.
- No production content, CRM integration, analytics, or legal data was changed during the transfer.
