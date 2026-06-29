# Renovation Of Apartments

React/Vite workspace prepared for Tailwind, shadcn-compatible UI primitives, and 21st.dev component workflows.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

## 21st.dev

Add public registry components with:

```bash
pnpm exec shadcn add https://21st.dev/r/<author>/<component>
```

Private/team library components use the 21st registry CLI:

```bash
pnpm exec 21st-registry add @team/component
```

Magic MCP is installed as `@21st-dev/magic`, but it needs a 21st API key before it can be added to Codex. See `docs/21st-dev.md`.
