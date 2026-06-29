# Design

Design system for the Russian multi-page renovation landing site.

## Principles

- Trust through order: hierarchy, spacing, source labels, and predictable states should make the company feel accountable.
- Warmth through details, not page wash: keep the main background nearly pure white and use sage, mineral sand, wood/terracotta, photography, and copy for warmth.
- Premium without spectacle: avoid AI gradients, neon, glassmorphism, fake luxury, decorative motion, and generic badge/card clutter.
- Conversion without pressure: CTAs are visible and specific, forms are short, and users always know what happens after submission.
- Truthful proof only: portfolio, reviews, certifications, metrics, and imagery need real sources before being presented as real.

## Color Strategy

Strategy: restrained brand system with a moss/sage primary and a controlled warm wood accent.

Physical scene: a homeowner reviews renovation options at a kitchen table in daylight, comparing contractors calmly before requesting a consultation.

### CSS Tokens

All color tokens are OKLCH and live in `src/app/globals.css`.

| Role               | Token                  |             Value | Usage                                                       |
| ------------------ | ---------------------- | ----------------: | ----------------------------------------------------------- |
| Background         | `--background`         |           `1 0 0` | Main page background.                                       |
| Surface            | `--surface`            | `0.982 0.006 150` | Cards, quiet panels, header/footer surfaces.                |
| Surface alt        | `--surface-alt`        |   `0.94 0.018 85` | Warm mineral bands, selected panels, non-card contrast.     |
| Text primary       | `--foreground`         |  `0.18 0.022 155` | Main text and headings.                                     |
| Text secondary     | `--muted`              |  `0.39 0.028 145` | Body support copy, labels, meta text.                       |
| Border             | `--border`             |  `0.88 0.015 115` | Dividers and component borders.                             |
| Input              | `--input`              |  `0.93 0.012 115` | Form field borders.                                         |
| Primary            | `--primary`            |  `0.39 0.105 150` | Main CTA, active states, trust markers.                     |
| Primary foreground | `--primary-foreground` |        `0.99 0 0` | Text/icons on primary.                                      |
| Accent             | `--accent`             |    `0.54 0.12 42` | Warm wood emphasis, selected highlights, secondary accents. |
| Accent foreground  | `--accent-foreground`  |        `0.99 0 0` | Text/icons on accent.                                       |
| Success            | `--success`            |  `0.44 0.105 150` | Success states.                                             |
| Warning            | `--warning`            |    `0.68 0.13 78` | Warning states and placeholder/status notes.                |
| Error              | `--destructive`        |     `0.5 0.16 28` | Validation errors and destructive states.                   |
| Focus ring         | `--ring`               |    `0.62 0.14 82` | Keyboard focus outline.                                     |

### Contrast Checks

Measured WCAG contrast ratios:

- Text primary on background: `18.72:1`.
- Text secondary on background: `9.48:1`.
- Text primary on surface-alt: `15.70:1`.
- Text secondary on surface-alt: `7.95:1`.
- Primary foreground on primary: `8.90:1`.
- Accent foreground on accent: `5.17:1`.
- Warning foreground on warning: `6.43:1`.

## Typography

Brand voice words: measured, material, accountable.

Typeface pair:

- Display/headings: `Geologica` via `next/font/google`.
- Body/UI: `Onest` via `next/font/google`.
- Fallbacks: Segoe UI, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif.

Reasons:

- `Geologica` supports Russian and gives headings a precise, architectural feel without editorial serif styling.
- `Onest` supports Russian, reads well for UI/body, and keeps forms, navigation, and dense content clear.
- Inter, IBM Plex, Playfair, Newsreader, and other reflex defaults are intentionally avoided.

### Type Roles

Use fixed `rem` sizes and breakpoint steps instead of viewport-width font scaling.

| Role            |     Mobile |    Desktop | Weight | Line height |
| --------------- | ---------: | ---------: | -----: | ----------: |
| H1 / hero       |  `2.25rem` |   `4.5rem` |    650 |        1.08 |
| H2              | `1.875rem` |     `3rem` |    650 |        1.08 |
| H3              |   `1.5rem` | `1.875rem` |    650 |        1.15 |
| Body            |     `1rem` |     `1rem` |    400 |         1.6 |
| Lead/body large | `1.125rem` | `1.125rem` |    400 |        1.75 |
| Small           | `0.875rem` | `0.875rem` |    500 |         1.5 |

Rules:

- Keep body measure near `54-68ch`.
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for long copy.
- Letter spacing stays `0`; do not use negative tracking.
- Do not use all-caps body copy.

## Layout And Spacing

Container system:

- Default container max width: `76rem` / 1216px.
- Wide container max width: `80rem` / 1280px.
- Narrow container: `56rem` or less for long copy.
- Horizontal padding: `16px` mobile, `24px` small tablet, `32px` tablet, `40px` desktop.

Section spacing:

- Mobile: `72px`.
- Tablet: `96px`.
- Desktop: `120px`.

Component spacing:

- Tight related elements: `8-12px`.
- Component internal gaps: `16-24px`.
- Cards and panels: `24-32px`.
- Distinct section groups: `48-120px`.

Radii and elevation:

- Base radius: `16px`.
- Large radius: `24px`.
- Use subtle shadows only for meaningful elevation.
- Never nest cards inside cards.
- Avoid identical card grids as the default page structure.

## Components

Base components live in `src/components/ui`.

### Buttons

`Button` variants:

- `primary`: main CTA.
- `secondary`: quiet filled secondary action.
- `outline`: bordered action.
- `ghost`: low-emphasis action.
- `link`: inline navigation/action.
- `destructive`: destructive or error action only.

Sizes:

- `sm`, `md`, `lg`, `icon`.

States:

- Hover, focus-visible, active, disabled, and loading are supported.
- Loading state uses `aria-busy` and a spinner.
- Touch target minimum is `44px`.

### Content And Layout

- `Container`: width and responsive padding.
- `SectionHeading`: label, title, description, left/center alignment.
- `Badge`: neutral, primary, accent, success, warning, destructive.
- `Card`: base panel with header/title/description/content helpers.
- `StatCard`: real metrics only; use for route/system metrics now, business proof later only with source.
- `TrustBadge`: small trust statement with a meaningful Lucide icon.

### Forms

- `Input`, `Textarea`, `Select`, `Checkbox`.
- Visible labels must be supplied by the consuming form.
- Error states set `aria-invalid`.
- Helper/error text must be associated with the field.
- Do not rely on placeholder-only labels.

### Navigation And Disclosure

- `Breadcrumbs`: semantic `nav` with `aria-label`.
- `Accordion`: native `details/summary`, keyboard accessible without client JavaScript.

### Domain Cards

- `ServiceCard`: service summary, meaningful icon, bullet points, CTA link.
- `ProjectCard`: supports `real`, `placeholder`, and `illustrative` status so future portfolio content cannot be mistaken for real work.
- `PriceCard`: package/pricing presentation with clear features and CTA.

## States

Every interactive component should define:

- Default.
- Hover.
- Focus-visible.
- Active/pressed.
- Disabled.
- Loading where async work exists.
- Error for form fields and destructive contexts.
- Success for completed submission/validation states.

Focus rule:

- Keep `3px` visible focus outlines using `--ring`.
- Do not remove focus outlines for aesthetic reasons.

## Motion

Motion is restrained and functional:

- Transitions use `150-300ms`.
- Easing uses `--ease-out`.
- Hover lift is limited to actionable cards/buttons.
- Accordion transitions are subtle and should not block interaction.
- Section fade-up may be used later, but content must be visible by default.
- Respect `prefers-reduced-motion` globally.

Do not use:

- Bounce.
- Flashy parallax.
- Constant ambient movement.
- Heavy animation libraries without a specific need.

## Accessibility

- Target WCAG 2.2 AA.
- Body and muted text exceed AA contrast against main surfaces.
- Keep semantic landmarks and heading order.
- Form fields require visible labels and useful error text.
- Links and buttons must have descriptive text.
- Do not use color as the only signal.
- Images require useful Russian alt text when meaningful.
- Preserve browser zoom and mobile viewport behavior.

## Examples

Primary CTA:

```tsx
<LeadButton href="/contacts">Получить расчёт</LeadButton>
```

Section heading:

```tsx
<SectionHeading
  label="Процесс"
  title="Понятный ремонт без потери контроля"
  description="Показываем этапы, смету, сроки и ответственных до начала работ."
/>
```

Form field:

```tsx
<label htmlFor="phone">Телефон</label>
<Input id="phone" name="phone" type="tel" autoComplete="tel" />
```

Placeholder project:

```tsx
<ProjectCard
  status="placeholder"
  title="Проект будет добавлен после подтверждения"
  scope="Нужны реальные фото, сроки, состав работ и разрешение на публикацию."
/>
```

## External Guidance Used

- Impeccable: brand register, shape, typeset, and layout guidance.
- UI UX Pro Max: Home Services / Construction / Repair landing patterns, form accessibility, responsive behavior, and trust/authority checks.

## Do Not Use

- AI purple-blue gradients.
- Generic beige body background as the whole brand.
- Fake reviews, fake cases, fake metrics, or unlabeled stock/generative imagery.
- Decorative icons without meaning.
- Hidden forms or forms without submission feedback.
- Client Components without a concrete browser-side need.
