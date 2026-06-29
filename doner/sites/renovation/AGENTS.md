# AGENTS.md

Project instructions for Codex agents working on this renovation landing site. Read this file before every prompt stage, then read `DESIGN.md`, `CONTENT_TODO.md`, `ASSETS.md`, `QA_REPORT.md`, `WORKLOG.md`, and inspect the current project structure.

## 1. Product Goal

- Build a modern multi-page Russian website for a turnkey apartment and house renovation business.
- Primary goal: generate qualified leads for cost estimates, consultations, and measurement visits.
- Secondary goal: build trust through portfolio, process clarity, guarantees, reviews, service explanations, and transparent contact paths.
- Site language: Russian.
- Brand register: marketing / brand website, not a dashboard or internal tool.
- Style: light, modern, concise, warm, premium, and trustworthy without ostentatious luxury.

## 2. Target Audience

- Owners of apartments in new residential buildings who need finishing or turnkey renovation.
- Owners of secondary-market apartments who need cosmetic or capital renovation.
- Families planning major renovation and worried about budget, timing, and disruption.
- House owners who need renovation, finishing, or coordinated contractor management.
- Clients who want a turnkey process instead of managing separate crews.
- Clients who distrust contractors because of missed deadlines, changing estimates, poor quality, hidden costs, or unclear guarantees.

## 3. Visual Direction

- Use a light interface as the main experience.
- Keep the base surface clean and readable; warmth should come from brand accents, materials, copy, photography, and detail, not from a generic beige page wash.
- Prefer warm neutral support colors, calibrated contrast, calm grids, and restrained section rhythm.
- Typography must feel precise, legible, and high quality; avoid generic “template” hierarchy.
- CTA buttons must be visible, specific, and confident, but not acidic or aggressive.
- No AI-gradient backgrounds, purple-blue gradient branding, neon styling, or decorative glassmorphism.
- Avoid random visual effects per page. Keep a unified design system across all routes.
- Use fewer decorative elements and more trust-building specificity: scope, sequence, constraints, guarantees, source labels, and clear forms.

## 4. Tech Stack Rules

- Use the existing stack: Next.js App Router, TypeScript, Tailwind CSS, ESLint flat config, and shadcn/ui-compatible structure.
- Keep routes under `src/app` and shared code under `src/components`, `src/lib`, and `src/data`.
- Prefer React Server Components by default. Add `"use client"` only for real browser interactivity, form state, or client-side effects.
- Use semantic HTML landmarks, headings, lists, buttons, links, forms, labels, and fieldsets where appropriate.
- Keep reusable business content in structured data files before duplicating text across pages.
- Use `lucide-react` for icons when icons add meaning. Do not use emoji as UI icons.
- Do not add heavy dependencies without a clear implementation reason.
- Keep CSS token-driven. Prefer Tailwind utilities backed by shared tokens over one-off raw values.
- Do not commit unless the user explicitly asks.

## 5. 21st.dev Usage Rules

- Use only free public 21st.dev components when they are appropriate.
- Do not use paid, private, Pro, closed, or access-restricted components.
- After adding any component, inspect the diff and dependency changes.
- Adapt every external component to this project’s design system, tokens, copy tone, accessibility rules, and responsive behavior.
- Remove all demo text, demo data, fake metrics, fake reviews, and generic sample content.
- Do not add heavy animation, UI, or utility dependencies just because a component includes them.
- If a component’s license, access status, or dependency footprint is unclear, do not use it.

## 6. Impeccable Usage Rules

If Impeccable is available, use it as a design and QA discipline during later stages:

- Use `/impeccable shape` before key pages or major sections.
- Use `/impeccable typeset` when defining or refining typography.
- Use `/impeccable layout` for grid, spacing, hierarchy, and section rhythm.
- Use `/impeccable adapt` for responsive behavior and mobile layout.
- Use `/impeccable critique` for UX critique before finalizing major pages.
- Use `/impeccable audit` for accessibility, performance, and responsive checks.
- Use `/impeccable polish` before final delivery.

If Impeccable is unavailable or a command cannot run, apply the same checks manually and record the limitation in `QA_REPORT.md`.

## 7. UI UX Pro Max Usage Rules

Use UI UX Pro Max as a decision source for:

- Home Services / Construction / Repair product patterns.
- Landing page structure and lead-generation UX.
- Trust and authority patterns that do not rely on fake proof.
- Color system, typography, spacing density, interaction states, and responsive behavior.
- Accessibility, forms, CTA clarity, mobile usability, and conversion friction.

Do not copy recommendations blindly. Reconcile them with `PRODUCT.md`, `DESIGN.md`, Impeccable constraints, and the project’s anti-references.

## 8. Accessibility Rules

- Target WCAG 2.2 AA.
- Maintain text contrast of at least 4.5:1 for normal text and 3:1 for large text and meaningful UI graphics.
- Preserve visible focus states. Never remove outlines without a strong replacement.
- All interactive controls need keyboard access and clear focus order.
- Use labels for form fields; placeholders are not labels.
- Show validation messages near the relevant field and make them screen-reader accessible.
- Respect `prefers-reduced-motion`.
- Use descriptive `alt` text for meaningful images and empty alt text for purely decorative imagery.
- Keep touch targets at least 44px high/wide on mobile.
- Do not communicate state or meaning by color alone.

## 9. SEO Rules

- Use one clear `h1` per page and logical heading hierarchy.
- Each route must have unique metadata: title, description, canonical intent, and relevant Open Graph fields when appropriate.
- Use semantic page structure that mirrors real user decisions: services, pricing, process, portfolio, reviews, FAQ, contacts, privacy, and terms.
- Add structured data only when the content is truthful and supported by page content.
- Do not keyword-stuff. Write for real homeowners first, search engines second.
- Keep internal links descriptive and avoid dead links.
- Ensure service pages can stand alone with clear scope, process, CTA, and FAQ paths.

## 10. Asset Rules

- Do not use unlicensed images, copied proprietary media, or unclear source assets.
- Record every future asset source, license, author/source URL, and usage decision in `ASSETS.md`.
- Do not present generated, stock, or placeholder images as real portfolio work.
- Do not present invented reviews, invented cases, or sample before/after images as real.
- Prefer owner-supplied real project photography when available and licensed for publication.
- Optimize images for web delivery and reserve dimensions/aspect ratios to avoid layout shift.
- Every meaningful image needs useful Russian alt text.

## 11. QA Rules

- After each prompt stage, update `WORKLOG.md`, `QA_REPORT.md`, and `CONTENT_TODO.md`.
- Run available checks before ending a stage:
  - `npm.cmd run lint`
  - `npm.cmd run typecheck`
  - `npm.cmd run build`
- Use `npm.cmd` in PowerShell because `npm.ps1` may be blocked by execution policy.
- If a check fails, fix the cause and rerun it.
- Document any unresolved warning, audit finding, blocked check, or manual QA gap in `QA_REPORT.md`.
- Before final delivery, also check responsive behavior, accessibility, metadata, links, form validation, image licensing, and absence of secrets.

## 12. Do Not Do

- Do not use Lorem Ipsum.
- Do not create fake “real” reviews.
- Do not create fake “real” portfolio cases.
- Do not use unlicensed images.
- Do not leave broken or placeholder links without recording them in `CONTENT_TODO.md`.
- Do not use decorative icons that do not clarify meaning.
- Do not create a different random style for each page.
- Do not hide forms or build forms without a clear submission result.
- Do not add Client Components without a real need.
- Do not leave untracked TODOs in code, content, or docs.
- Do not use paid or closed 21st.dev assets.
- Do not overuse cards, badges, tiny uppercase section labels, gradient text, or generic AI visual patterns.
