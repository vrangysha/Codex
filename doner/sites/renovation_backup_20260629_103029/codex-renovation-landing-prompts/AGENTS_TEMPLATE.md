# AGENTS.md — шаблон проектных инструкций для Codex

## Product goal

Build a modern multi-page Russian landing website for a home and apartment renovation business. The website must generate qualified leads for renovation estimates, build trust, explain services clearly, and look premium, calm, bright, and credible.

## Audience

- Apartment owners planning turnkey renovation.
- Home owners planning renovation or finishing works.
- Families worried about budget overruns and delays.
- Clients who need transparent estimates, contract, guarantee, and controlled process.

## Visual direction

- Light theme only as the main experience.
- Warm white, stone, ivory, sand, muted wood, graphite text.
- Calm premium home-services aesthetic.
- Spacious layout, strong hierarchy, no visual noise.
- CTA must be visible but not aggressive.
- No generic AI purple-blue gradients.
- No neon, random glassmorphism, or overdecorated cards.

## Tech rules

- Use the existing project stack if present.
- Prefer Next.js App Router + TypeScript + Tailwind CSS if creating from scratch.
- Use semantic HTML.
- Prefer server components when possible.
- Do not add heavy dependencies unless needed.
- Keep reusable data in `data/site.ts` or equivalent.

## 21st.dev rules

- Use only free public components/templates.
- Do not use paid, private, or Pro components.
- Prefer components for navigation, hero, features, pricing, testimonials, FAQ, forms, footer.
- After installing any component, inspect diff and dependencies.
- Adapt all components to the unified design system.
- Remove demo data.

## Impeccable rules

If available, use Impeccable commands during design and QA:

- `/impeccable init`
- `/impeccable shape`
- `/impeccable typeset`
- `/impeccable layout`
- `/impeccable adapt`
- `/impeccable critique`
- `/impeccable audit`
- `/impeccable polish`
- `/impeccable optimize`

If unavailable, apply the same process manually and document it.

## UI UX Pro Max rules

Use the skill, if available, for product type, UI style, UX patterns, palette, typography, accessibility, and responsive checks. If unavailable, manually apply professional UI/UX reasoning.

## Content rules

- Language: Russian.
- Tone: calm, professional, specific, trustworthy.
- No Lorem Ipsum.
- No fake real reviews or fake real projects.
- Placeholder content must be documented in `CONTENT_TODO.md`.

## Asset rules

- Use licensed public images or generated images.
- Record every source in `ASSETS.md`.
- Add alt text.
- Optimize images.
- Do not present generated portfolio as real work.

## QA rules

Before final delivery:

- lint;
- typecheck;
- build;
- responsive check;
- accessibility check;
- metadata check;
- links check;
- form validation check;
- image/license check;
- no secrets check.

Update `QA_REPORT.md` after every major stage.
