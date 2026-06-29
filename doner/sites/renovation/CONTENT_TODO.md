# Content TODO

Owner-supplied data needed before launch:

- Business name, legal name, service regions, phone, email, messenger links, and office/showroom address if public.
- Real licenses, guarantees, insurance details, certificates, and partner brands if applicable.
- Real service scope, exclusions, price ranges, minimum project budget, and timeline assumptions.
- Real portfolio projects with permission to publish photos, locations generalized if needed, scope, dates, and budgets.
- Real customer reviews with permission, source, date, and reviewer display rules.
- Lead form destination, consent wording, privacy policy details, and CRM/email integration requirements.

Current placeholders:

- Brand label `Ремонт под ключ`.
- Metadata URL `https://example.com`.
- Bootstrap home copy describing technical status.
- Future route pages are mapped but not populated with business content yet.
- Contact CTA currently points to a reserved `/contacts` route that will be implemented in a later stage.

Stage 02 confirms these real data requirements for future content stages:

- Confirm exact company positioning, service geography, warranty terms, measurement/estimate process, and response-time promises.
- Provide real proof sources before publishing reviews, portfolio, certificates, guarantees, partner brands, or project metrics.
- Confirm legal/privacy wording for lead forms, analytics, data handling, and user consent.

Stage 03 design-system follow-up:

- Confirm final public brand name, logo, and whether `Ремонт под ключ` stays as a placeholder label or becomes the real brand name.
- Confirm whether the moss/sage primary and warm wood accent fit the business positioning before final page production.
- Provide real visual assets or approve the future use of clearly labeled illustrative stock imagery.

Stage 04 content model placeholders:

- `siteConfig.name`, `city`, `serviceArea`, `phone`, `email`, messengers, address, working hours, legal name, INN, and OGRN are placeholders.
- All `priceFrom`, package prices, budget ranges, durations, service timelines, and warranty durations are approximate placeholders and not a public offer.
- Demo portfolio data has `isDemo: true`.
- Demonstration testimonials have `isDemo: true` and must not be presented as real reviews.
- Demo stats have `isPlaceholder: true` and must not be presented as real company proof.
- Legal pages `/privacy` and `/terms` are placeholders and need owner/legal review.
- Lead form options need confirmation against real CRM, qualification process, and consent wording.
- Placeholder SVG files in `public/images/placeholders/` are not real project photos.

Stage 05 shared layout and form follow-up:

- Header, footer, contact card, and mobile sticky CTA currently use placeholder phone, email, messenger links, address, hours, legal name, and service region from `src/data/site.ts`.
- Confirm whether Telegram and WhatsApp links should be public, and replace `https://t.me/placeholder` / `https://wa.me/70000000000` before launch.
- `LeadForm` uses a local stub submit. Stage 23 must connect `/api/lead`, server validation, anti-spam, CRM/email routing, and failure handling.
- Confirm final privacy consent wording and make `/privacy` real before public traffic.
- Footer legal links `/privacy` and `/terms`, plus main navigation routes, are reserved until later page stages and should not be treated as finished content.
- The Stage 05 home page is a component showcase, not final homepage copy.
- `BeforeAfterPlaceholder` and `ImageFrame` remain explicitly non-real placeholders until licensed project photos or approved illustrative assets are supplied.

Stage 06 homepage follow-up:

- Replace homepage placeholder business data before launch: real region, phone, email, messengers, office/showroom, legal entity, guarantee terms, and response expectations.
- Replace demo portfolio cards with real projects, licensed photos, dates, scope, generalized locations, and permission to publish.
- Replace demo testimonials with real reviews, source, date, reviewer display rule, and permission.
- Confirm all homepage pricing packages, price units, assumptions, exclusions, and public-offer wording.
- Replace or approve `public/images/generated/home-hero-renovation-ai.png`; it is an AI-generated illustrative hero image, not real work.
- Confirm whether homepage JSON-LD should remain LocalBusiness/Service and replace `https://example.com` metadata before launch.
- Quick estimate form still requires Stage 23 backend, CRM/email routing, anti-spam, server validation, and final privacy wording.
- Демонстрационные кейсы нужно заменить реальными фото и данными.

Stage 07 services page follow-up:

- Confirm the final service taxonomy: whether all 10 services stay public, which services need dedicated detail pages, and which should stay as consultation-only directions.
- Replace placeholder service prices, units, timelines, exclusions, warranty promises, and offer wording with owner-approved data.
- Replace fallback service detail routes with full content in the later service-page stages; current `/services/[slug]` pages are safe placeholders so links do not 404.
- Replace or approve `public/images/generated/services-index-ai.png`; it is an AI-generated illustrative services image, not real project photography.
- Confirm Service list schema and replace `https://example.com` before launch.
- The service-choice form still requires Stage 23 backend, CRM/email routing, anti-spam, server validation, and final privacy wording.

Stage 08 apartment renovation page follow-up:

- Confirm the real apartment renovation scope for new builds, rough finish, secondary housing, studios, family apartments, and rental apartments.
- Replace placeholder package prices, units, timeline ranges, exclusions, and public-offer wording with owner-approved data.
- Confirm how materials are handled: client-supplied materials, contractor procurement, markups, delivery responsibility, substitutions, and separate rough/finish material accounting.
- Confirm apartment-specific operating constraints: noisy-work hours, management-company rules, elevator protection, debris removal, and access requirements.
- Confirm real warranty term, warranty exclusions, hidden-work acceptance process, and final handoff document set.
- Replace demo apartment portfolio cards with real apartment projects, licensed photos, generalized locations, dates, scope, budgets, and permission to publish.
- Replace or approve `public/images/generated/apartment-renovation-hero-ai.png`; it is an AI-generated illustrative apartment image, not real project photography.
- Replace `https://example.com` in apartment JSON-LD with the production domain before launch.
- The final apartment estimate form still requires Stage 23 backend, CRM/email routing, anti-spam, server validation, and final privacy wording.

Stage 09 house renovation page follow-up:

- Confirm the real house renovation scope for private homes, cottages, townhouses, technical rooms, staircases, wet zones, and high-ceiling spaces.
- Replace placeholder house package prices, units, timeline ranges, exclusions, and public-offer wording with owner-approved data.
- Confirm technical inspection process: what is checked during house walkthrough, whether thermal/engineering diagnostics are offered, and what documents are produced.
- Confirm who is responsible for engineering systems, subcontractors, acceptance checkpoints, hidden works, warranty terms, and final handoff documents.
- Confirm winter-work rules: which internal works are possible, temperature/humidity requirements, and which materials or stages are blocked by seasonality.
- Confirm materials logistics: procurement model, storage rules on site, delivery responsibility, unloading, protection, substitutions, and how delays affect the schedule.
- Replace demo home/large-zone portfolio cards with real house projects, licensed photos, generalized locations, dates, scope, budgets, and permission to publish.
- Replace or approve `public/images/generated/house-renovation-hero-ai.png`; it is an AI-generated illustrative house interior image, not real project photography.
- Replace `https://example.com` in house JSON-LD with the production domain before launch.
- The final house plan form still requires Stage 23 backend, CRM/email routing, anti-spam, server validation, and final privacy wording.

Stage 10 cosmetic renovation page follow-up:

- Confirm the real cosmetic renovation scope for apartments, rooms, studios, rental-prep objects, sale-prep objects, and local room refreshes.
- Replace placeholder price examples for room, studio, one-room apartment, two-room apartment, and house/part-house scenarios with owner-approved pricing, assumptions, exclusions, and public-offer wording.
- Confirm realistic timeline ranges, whether residents can stay during work, how room-by-room sequencing is handled, and what furniture protection/moving rules apply.
- Confirm the boundary between cosmetic and capital renovation: when full communication replacement, replanning, complex rough work, full engineering replacement, or serious levelling should move the client to a capital-renovation estimate.
- Provide real before/after photos for cosmetic projects with permission to publish; the current block is an explicit placeholder and must not be treated as portfolio proof.
- Replace or approve `public/images/generated/cosmetic-renovation-hero-ai.png`; it is an AI-generated illustrative interior image, not real project photography.
- Replace `https://example.com` in cosmetic JSON-LD with the production domain before launch.
- The final cosmetic estimate form still requires Stage 23 backend, CRM/email routing, anti-spam, server validation, and final privacy wording.

Stage 11 capital renovation page follow-up:

- Confirm the real capital renovation scope for apartments, private houses, old housing stock, partial zones, replanning, engineering replacement, demolition, rough works, and final finishing.
- Replace placeholder price examples for apartment, house, separate zones, and complex object scenarios with owner-approved ranges, assumptions, exclusions, and public-offer wording.
- Confirm realistic timeline ranges by object type, demolition rules, debris removal responsibility, noisy-work constraints, furniture/storage rules, and whether living on site is ever allowed.
- Confirm staged-payment terms: start payment, rough-stage acceptance, engineering acceptance, finishing-stage acceptance, final payment, and whether any percentages can be published.
- Confirm hidden-work control process: photo reports, intermediate acceptance, act templates, who signs them, how changes are approved, and how material substitutions are recorded.
- Replace demo capital-renovation portfolio cards with real projects, licensed photos, generalized locations, dates, scope, budget ranges, and permission to publish.
- Replace or approve `public/images/generated/capital-renovation-hero-ai.png`; it is an AI-generated illustrative rough-stage image, not real project photography.
- Replace `https://example.com` in capital JSON-LD with the production domain before launch.
- The final capital estimate form still requires Stage 23 backend, CRM/email routing, anti-spam, server validation, and final privacy wording.

Stage 12 design-project page follow-up:

- Confirm the real design-project service scope: what is included in planning-only, basic project, full project, and author supervision.
- Replace placeholder package prices, per-m² rates, per-object minimums, author-supervision monthly pricing, assumptions, exclusions, and public-offer wording with owner-approved data.
- Confirm realistic design-project timelines, revision counts, approval stages, measurement rules, and handoff format.
- Confirm whether material selection includes only specification, showroom visits, procurement help, substitutions, delivery coordination, or contractor-managed purchasing.
- Provide real project files or licensed excerpts for moodboard, layout, visualization, and specification examples; the current examples are explicit UI placeholders and must not be treated as portfolio proof.
- Confirm how design-project work connects to turnkey renovation: whether project cost is credited toward renovation, whether the repair team can work from third-party projects, and how changes during construction are approved.
- Replace or approve `public/images/generated/design-project-hero-ai.png`; it is an AI-generated illustrative planning image, not a real design-project file or project photo.
- Replace `https://example.com` in design-project JSON-LD with the production domain before launch.
- The final design-project consultation form still requires Stage 23 backend, CRM/email routing, anti-spam, server validation, and final privacy wording.

Stage 13 portfolio page follow-up:

- Replace all demo portfolio entries in `src/data/site.ts` with real projects, licensed photos, generalized locations, areas, dates, duration, scope, budget ranges, and owner permission to publish.
- Provide real before/after photo pairs with rights and consent before replacing the placeholder component.
- Confirm final portfolio categories and filters: apartments, houses, cosmetic, capital, design-project, bathrooms, kitchens, and any business-specific segments.
- Provide real featured case content: task, what was done, result, timeline, area, budget range, gallery, and publication constraints.
- Confirm whether portfolio case detail pages are needed later; Stage 13 cards currently use in-page disclosures.
- Replace placeholder budget ranges and timeline assumptions with owner-approved data and public-offer wording.
- Confirm whether form users can upload or send photos in Stage 23, and how files should be routed, stored, consented, and deleted.
- Portfolio JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The portfolio estimate form is a local stub pending Stage 23 backend/CRM/email routing, anti-spam, server validation, file handling, and final privacy wording.

Stage 14 pricing page follow-up:

- Replace all `pricingPackages` prices, package boundaries, timelines, exclusions, and units with owner-approved values and legal/public-offer wording.
- Confirm whether the "Под ключ" package should use the apartment-renovation baseline price or a separate business price for both apartments and homes.
- Confirm whether the "С дизайн-проектом" package price should include design-project cost, author supervision, materials selection, or only renovation execution with a supplied project.
- Replace example calculation ranges for studio 32 m², apartment 65 m², and house 120 m² with approved scenarios, assumptions, materials model, exclusions, and publication-safe wording.
- Confirm final comparison-table wording for walls, floor, ceiling, electrical, plumbing, demolition, materials, design, and control.
- Confirm payment-stage terms, whether any prepayment or staged percentages can be published, and how material purchases are paid.
- Confirm whether installment payment exists; current FAQ treats it as placeholder.
- Pricing JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The pricing estimate form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, privacy wording, and consent storage.

Stage 15 process page follow-up:

- Confirm the real 13-step process and whether the same route applies to cosmetic, capital, turnkey, house, apartment, and design-project scenarios.
- Confirm actual roles and responsibility boundaries: manager, estimator, foreman, designer, procurement, subcontractors, and warranty contact.
- Confirm photo-report frequency, communication channels, response expectations, and who approves changes.
- Provide owner-approved document names/templates or safe generic descriptions for contract, estimate, schedule, stage acts, hidden-work acts, material lists, final checklist, and warranty terms.
- Confirm how hidden-work checks, geometry checks, engineering checks, protection of finished surfaces, and final checklist are performed and documented.
- Confirm how extra works are approved, how estimates are recalculated, how timeline impact is communicated, and what written format is legally acceptable.
- Replace placeholder durations, artifacts, and process wording with owner-approved language before launch.
- Process JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The process plan form reuses `LeadForm` and remains a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, and final privacy wording.

Stage 16 about page follow-up:

- Replace generic company positioning with owner-approved story, founding context, service geography, legal entity, and public brand name.
- Replace neutral role cards with real team data only after receiving names, roles, photos, credentials, publication consent, and display rules.
- Confirm whether the public site should show employees, subcontractors, or only role-based process ownership.
- Replace placeholder numbers `X объектов`, `X лет опыта`, `X специалистов`, and `X этапов контроля` with verified statistics and a clear counting method, or remove them before launch.
- Confirm mission wording, standards, and quality-control rules against the real operating process.
- Provide real document names/templates or legally approved descriptions for contract, warranty, estimate, and acts.
- Confirm warranty term, warranty exclusions, claim channel, response expectations, and who handles warranty communication.
- Confirm whether any certificates, partner brands, awards, registrations, insurance, licenses, or memberships can be shown; do not publish them without source proof.
- About JSON-LD still uses `https://example.com` and placeholder `siteConfig` values; replace with the production domain and real organization data before launch.
- The about-page consultation form reuses `LeadForm` and remains a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, privacy wording, and consent storage.

Stage 17 reviews page follow-up:

- Демонстрационные отзывы нужно заменить реальными отзывами с разрешением клиентов.
- For every real review, provide the source, date, reviewer display rule, project type, area, rating, tag, and publication permission.
- Confirm whether full names, initials, generalized locations, project dates, screenshots, links to external platforms, or video/photo reviews may be shown.
- Provide real video files, photos, screenshots, source links, consent records, and personal-data redaction rules before replacing media placeholders.
- Confirm whether clients may be contacted by prospects; do not offer client contact without explicit client consent and a safe handoff process.
- Confirm how new reviews are collected after handoff, who moderates them, and how corrections/removal requests are handled.
- Reviews JSON-LD intentionally avoids `Review` and `AggregateRating` while content is demo; switch schema only after real, permission-backed reviews are added.
- The reviews trust form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, privacy wording, and consent storage.

Stage 18 FAQ page follow-up:

- Confirm all FAQ answers against the real business process before launch: pricing, timelines, contract terms, payment model, materials, process, warranty, design-project scope, portfolio, and reviews.
- Replace placeholder warranty wording with owner/legal-approved warranty term, exclusions, document names, and claim channel.
- Confirm contract/payment details: legal entity, required documents, staged payment model, prepayment rules, accepted payment methods, and how changes are signed.
- Confirm material procurement policy: who buys, markup if any, delivery responsibility, substitutions, returns, storage, and how delays affect schedule.
- Confirm whether living on site is ever allowed during cosmetic/capital repairs and what safety/noise constraints apply.
- Confirm portfolio/review publication rules, consent wording, source requirements, client contact policy, and data redaction before public traffic.
- FAQ JSON-LD still uses `https://example.com`; replace it with the production domain before launch.
- The FAQ question form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, privacy wording, and consent storage.

Stage 19 contacts page follow-up:

- Replace placeholder phone, email, Telegram link, WhatsApp link, public address/showroom text, work hours, city, service area, districts, and nearby settlements with owner-confirmed values.
- Confirm whether public social media links exist and whether they should be shown as contact or proof channels; do not add placeholder social URLs as real.
- Confirm response-time SLA, callback hours, measurement booking rules, photo/plan transfer rules, and whether urgent consultations are offered.
- Confirm whether measurement is free or paid, where it is available, and what conditions or minimum project budget apply.
- Confirm the public office/showroom address, coordinates, map provider, license/embedding terms, cookie/privacy impact, and performance approach before adding a real map.
- Replace `https://example.com` and placeholder `LocalBusiness` JSON-LD values with the production domain and real organization data before launch.
- The contact lead form is a local stub pending Stage 23 `/api/lead`, server validation, CRM/email routing, anti-spam, privacy wording, consent storage, and optional file/photo handling.

Stage 20 legal/static follow-up:

- Replace placeholder privacy-policy text with lawyer-approved wording before launch.
- Confirm the real personal-data operator, legal name, INN, OGRN, public brand/legal relationship, and contact channel for data requests.
- Confirm exactly which data fields are collected by each form and whether file/photo uploads will be accepted at Stage 23.
- Confirm where leads are stored, who has access, retention periods, deletion rules, and whether CRM, email, telephony, analytics, hosting, or other third-party services process the data.
- Confirm cookie/analytics usage and whether a cookie banner or separate consent wording is required.
- Replace placeholder `/terms` text with owner/legal-approved terms of use.
- Confirm public-offer wording, price disclaimer, contract formation rules, intellectual-property policy, liability limits, and update dates.
- Keep `/privacy` and `/terms` noindex until final legal review is complete or the owner decides these pages should be indexable.

Stage 21 images/assets follow-up:

- Provide real project photography for portfolio before launch: kitchen-living room, bedroom, bathroom, hallway, private house, finish details, before/after pairs, gallery details, generalized location, scope, dates, budget range, and written publication permission.
- Replace or explicitly approve all current generated hero/service visuals before public traffic. They are AI illustrations and must keep generated disclosure while used.
- Confirm whether the owner wants to keep AI-generated illustrative hero images, replace them with real licensed photos, or use verified free stock with documented source/license/author.
- For every future stock image, record source URL, license terms, author/credit requirements, download date, usage location, and whether the image is illustrative or real proof.
- For every future real project image, confirm copyright holder, client/property owner consent, personal-data redaction rules, address/generalization policy, and whether faces, documents, screens, or brand logos must be hidden.
- Replace local SVG portfolio placeholders with licensed real photos or keep them visibly labeled as placeholders until real assets are supplied.
- Confirm final logo, favicon, Open Graph image, social preview image, and any certification/partner logos with official sources and usage rights.
- If real map tiles, videos, PDFs, certificates, review screenshots, or downloadable files are added later, document each file in `ASSETS.md` before launch.

Stage 22 SEO/schema follow-up:

- Replace `https://example.com` / `siteUrl` with the production domain before launch; this affects canonical URLs, sitemap host, robots sitemap URL, schema IDs, Open Graph URLs, and structured-data references.
- Confirm whether legal pages `/privacy` and `/terms` should remain `noindex` after lawyer/owner approval or become indexable.
- Replace placeholder `siteConfig` and `contacts` values in schema with verified public business data: legal/public name, phone, email, city, full or generalized address, service area, work hours, and contact channels.
- Confirm whether a public office/showroom address can be used in `LocalBusiness` schema; if not, use only safe service-area data and avoid fake coordinates.
- Provide verified social/profile URLs before adding real `sameAs` links. Do not publish placeholder social URLs as proof.
- Confirm final city/service-area targeting and any district/neighborhood pages before expanding local SEO copy.
- Provide or approve a real Open Graph/social preview image, favicon, logo, and image alt/license metadata. Current OG image is an existing generated illustrative WebP placeholder.
- Validate schema in Google Rich Results Test/Search Console or another production validator after replacing placeholder business/legal values.
- Decide whether fallback service routes (`/services/rough-finishing`, `/services/fine-finishing`, `/services/engineering`, `/services/materials`, `/services/author-supervision`) should remain indexable, get expanded unique content, or be noindexed/redirected later.

Stage 23 forms/leads/API follow-up:

- Choose the real lead destination before launch: CRM, email inbox, Telegram bot, webhook, spreadsheet, internal admin, or a combination with clear ownership.
- Add real integration secrets only through environment variables or the deployment secret manager; never hard-code webhook URLs, CRM tokens, mail credentials, or bot tokens.
- Define the production lead payload contract: required fields, optional fields, source labels, consent timestamp, source page, IP/user-agent policy, and whether files/photos are accepted.
- Confirm personal-data storage location, access roles, retention period, deletion request flow, backup policy, and processor list for the privacy policy.
- Confirm final consent wording with the lawyer/owner and update `/privacy` to describe `/api/lead`, CRM/email/webhook processors, retention, and contact channels.
- Add production anti-spam controls beyond the current honeypot: rate limiting, abuse monitoring, and CAPTCHA only if justified by real spam risk.
- Decide whether to store failed validation attempts or only successful leads; avoid collecting extra PII in logs.
- Add operational error handling for real integrations: retry policy, duplicate handling, notification on delivery failure, and a safe fallback destination.
- Configure analytics only after consent/legal review. Planned event names: `lead_submit`, `call_click`, `messenger_click`, and `pricing_cta_click`.
- Confirm whether users can send photos/plans later or upload files directly; if uploads are needed, define file size limits, allowed MIME types, storage, virus scanning, deletion, and consent.
- Replace all placeholder phone/email/messenger/contact data before relying on submitted lead routing.
- Add integration tests or E2E tests for the real lead destination after it exists; current `/api/lead` is an honest stub and does not deliver leads externally.

Stage 24 responsive/accessibility follow-up:

- Test the production build on real iOS Safari, Android Chrome, tablet Safari/Chrome, and at least one desktop screen reader/browser pairing before launch.
- Run axe, Lighthouse accessibility, and manual WCAG contrast/focus checks after the final domain, legal text, real reviews, and real portfolio assets are in place.
- Re-run responsive QA after replacing placeholder content with real business data, especially long legal names, long service areas, long project titles, real addresses, and real review text.
- Verify skip-link first-Tab behavior and FAQ `<details>/<summary>` keyboard toggling in real browsers. The static accessibility contract passed, but automation could not reliably simulate those two interactions in the current runtime.
- Confirm final empty-state policy for portfolio and reviews: either publish real permission-backed content or keep clear empty/demo messaging without presenting placeholders as proof.
- Re-test sticky CTA behavior after final phone/messenger labels, footer links, cookie/consent UI, analytics banners, or map embeds are added.
- Add screen-reader labels or descriptions for any future interactive map, carousel, video, modal, file upload, or before/after comparison before those features ship.
- Re-run all Stage 24 browser checks after any new 21st.dev component, third-party widget, analytics script, CRM embed, map iframe, or animation library is introduced.

Stage 25 QA/polish/performance follow-up:

- Add a real `npm test` script and focused tests for `/api/lead`, validation helpers, metadata generation, sitemap/robots, and critical form flows.
- Resolve the `next -> postcss <8.5.10` audit advisory when a safe Next/PostCSS upgrade path exists; do not use the current `npm audit fix --force` because it would downgrade Next to `9.3.3`.
- Replace `https://example.com` and all temporary business values before public launch: domain, public/legal name, phone, эл. почта, address/service area, work hours, Telegram/WhatsApp links, sameAs links, and schema IDs.
- Connect the real lead destination only after ownership and legal rules are confirmed: CRM, почта, webhook, Telegram bot, spreadsheet, or internal system.
- Define production lead operations: consent timestamp, storage location, access roles, retention, deletion requests, duplicate policy, delivery failure handling, rate limiting, abuse monitoring, and logging rules without PII leakage.
- Replace all demonstration portfolio cases, review cards, placeholder statistics, warranty wording, price ranges, and document descriptions with verified owner-provided data or remove them before launch.
- Run Lighthouse, axe, keyboard-only, screen-reader, iOS Safari, Android Chrome, tablet, and production-domain SEO/schema validation after real content and integrations are in place.
- Confirm final legal review for `/privacy` and `/terms`; decide whether they remain `noindex` or become indexable after approval.
- Re-run the Stage 25 route/form QA after adding real CRM/email/webhook integrations, analytics, maps, cookie banner, real images, or third-party widgets.

Stage 26 final delivery follow-up:

- Use `FINAL_REPORT.md` as the owner handoff checklist before publication.
- Replace the public brand name, legal name, city/service area, phone, email, messenger links, address/showroom text, work hours, and production domain/base URL.
- Replace all placeholder prices, package boundaries, durations, warranty wording, process/document descriptions, and public-offer wording with owner/legal-approved values.
- Replace demo portfolio cases, demo reviews, placeholder statistics, generated hero/service visuals, SVG portfolio placeholders, and any illustrative proof blocks with verified real content or remove them before launch.
- Connect the real `/api/lead` destination through environment variables/secrets: CRM, email, Telegram bot, webhook, spreadsheet, or another approved system.
- Confirm privacy/legal requirements for lead storage, consent timestamp, retention, deletion requests, CRM/email/webhook processors, analytics/cookies, and anti-spam controls.
- Add a real `npm test` script with focused coverage for `/api/lead`, validation helpers, forms, metadata, sitemap/robots, and critical routing.
- Keep the Next/PostCSS audit fix reproducible: the advisory is currently closed with `postcss@8.5.16` override, and future Next/PostCSS updates should be rechecked before removing it.
- Run Lighthouse, axe, screen-reader, iOS Safari, Android Chrome, tablet, and production-domain schema validation after real content and integrations are in place.

Full site QA follow-up:

- Keep the `postcss@8.5.16` override until Next ships a stable release that no longer depends on the vulnerable nested PostCSS version; re-check `npm audit` after future dependency updates.
- Add a real `npm test` script with automated unit/integration/e2e coverage. Browser QA passed, but there is still no persistent test suite in the repository.
- Re-run the full route/form/link/asset/axe QA after replacing placeholder business data, legal text, generated/placeholder visuals, demo cases/reviews, production domain, CRM/email/webhook integration, analytics, maps, cookie banner, or third-party widgets.
