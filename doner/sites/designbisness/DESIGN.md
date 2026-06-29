# Design

## Identity

AURUM is a premium interior studio site in the brand register. The visual system follows the provided page mockups: split hero compositions, generous white-stone surfaces, refined serif display type, pragmatic sans body copy, thin dividers, warm material photography, and black primary actions.

## Color Tokens

All project color tokens are authored in OKLCH.

```css
--color-bg: oklch(0.982 0.012 108);
--color-surface: oklch(0.955 0.014 105);
--color-surface-strong: oklch(0.925 0.018 102);
--color-ink: oklch(0.185 0.012 92);
--color-muted: oklch(0.455 0.018 92);
--color-line: oklch(0.835 0.018 92);
--color-primary: oklch(0.300 0.071 120);
--color-accent: oklch(0.610 0.082 72);
--color-dark: oklch(0.120 0.006 80);
--color-white: oklch(1 0 0);
```

Color strategy is restrained with material accents. The site keeps primary actions dark, uses olive as a quiet brand signal, and reserves bronze for section markers, badges, focus rings, and subtle dividers.

## Typography

Display: `Prata`, serif, used for hero and section headings.

Body/UI: `Manrope`, sans-serif, used for navigation, forms, cards, labels, and long copy.

Rules:

- H1/H2 use fluid `clamp()` with max size under 6rem.
- Body copy stays fixed and readable.
- Body line length should stay below 75ch.
- Letter spacing is only used on short labels and logo text.

## Layout

The layout uses a 12-column page grid on desktop, two columns on tablet, and one column on mobile. Sections are separated by thin horizontal rules and varied vertical rhythm rather than decorative cards. Repeated cards are used only for projects, packages, testimonials, and compact feature groups.

## Components

- Header: sticky, logo left, center navigation, dark CTA right, mobile drawer.
- HeroSplit: text and image composition used across top-level pages.
- PackageCard: service package with included items, timing, price, and action.
- ProjectCard: portfolio item with image, name, size, and location.
- CTASection: split image/text conversion block.
- Quiz: progressive six-step style selection with local result state.
- Brief form: multi-section consultation brief with validation and success state.

## Motion

Motion is subtle and functional: hero image reveal, CTA hover lift, mobile menu, FAQ expand/collapse, quiz step transitions, and form status feedback. Reduced-motion users get near-instant transitions.

## Imagery

Project-bound generated images live in `public/assets/generated/`. Original mockups are preserved in `public/assets/references/` for future comparison. Content images must be realistic interiors or material/process photography, never abstract placeholders.
