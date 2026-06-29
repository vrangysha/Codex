# NovaDent Website Plan

## Goal
Create a responsive multi-page dentistry website with a polished conversion-focused experience, generated visual assets, clear navigation, functional interactive elements, and production-ready Next.js build output.

## Implemented Pages
- Home: full-bleed hero, trust stats, partner logos, benefits, featured products, pricing, reviews, FAQ preview, final CTA.
- Products: treatment product catalog, product workflow, pricing packages, product FAQ.
- Consultation: consultation hero, functional request form, appointment process, pre-visit reassurance content.
- Cabinet: patient portal concept, treatment progress, appointments, files, documents, and plan status.
- Doctors: team hero, specialist cards, expertise highlights, appointment CTAs.
- FAQ: full accordion with common pre-visit, payment, anxiety, and patient portal questions.
- Reviews: patient testimonials, trust metrics, and consultation CTA.

## Shared UI
- Sticky responsive navigation with active route state, mobile menu, phone link, and dark mode toggle.
- Footer with section links, contact details, and functional newsletter signup state.
- Reusable section headings, buttons, image panels, service cards, pricing cards, testimonial cards, FAQ accordion, and consultation form.
- Subtle Framer Motion scroll reveals with reduced-motion support.

## Visual Assets
- Generated and saved project-local images under `public/images`:
  - `hero-clinic.png`
  - `consultation.png`
  - `cabinet-suite.png`
  - `products-care.png`
  - `doctors-team.png`

## Design System
- Light-first healthcare palette with cyan primary, green CTA accent, deep teal text, white surfaces, and balanced warm highlights.
- Dark mode support through Tailwind `dark` classes.
- 8px card radius, consistent touch targets, visible focus states, semantic labels, and no emoji icons.

## Verification
- Run dependency install.
- Run `npm run build`.
- Fix any compile, lint, import, or Tailwind generation issues found by the build.
