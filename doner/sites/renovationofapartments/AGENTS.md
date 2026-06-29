# UI Workflow

- Prefer existing project components first, then shadcn/ui-compatible components, then 21st.dev registry components when they fit the requested UI.
- Add public 21st.dev components with `pnpm exec shadcn add <registry-url>`.
- Add private or team library components only after the relevant 21st API key is available in the environment. Use `API_KEY` for Magic MCP and `API_KEY_21ST` for the registry CLI. Do not commit API keys.
- Treat every imported component as source code: inspect the diff, adapt tokens to this project, and run `pnpm lint` plus `pnpm build`.
- Keep UI primitives in `src/components/ui` and shared helpers in `src/lib`.
- Use lucide-react icons for common UI actions unless an imported component already provides its own icon system.
