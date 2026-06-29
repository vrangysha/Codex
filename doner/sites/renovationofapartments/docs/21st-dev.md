# 21st.dev Setup

This project is prepared for 21st.dev and shadcn-style component workflows.

## Installed Pieces

- React + Vite + TypeScript
- Tailwind CSS via `@tailwindcss/vite`
- shadcn CLI and shadcn-compatible local primitives
- `@21st-dev/magic` for Magic MCP
- `@21st-dev/registry` for library/private component workflows

## Add A Public Component

```bash
pnpm exec shadcn add https://21st.dev/r/<author>/<component>
```

If a registry URL returns `Authentication required`, sign in to 21st.dev or use an API key flow for that component/library.

## Private Or Team Library

The registry CLI uses `API_KEY_21ST`.

```bash
$env:API_KEY_21ST="your_21st_registry_api_key"
pnpm exec 21st-registry add @team/component
```

## 21st Magic MCP

Magic MCP needs a 21st API key. Keep it in the environment, not in source files.

Project-local command after the key is available:

```bash
$env:API_KEY="your_21st_api_key"
pnpm exec magic
```

For Codex, add the server after the key is available:

```bash
codex mcp add 21st_magic --env API_KEY="your_21st_magic_api_key" -- pnpm exec magic
```

Equivalent TOML shape in the user-level Codex config:

```toml
[mcp_servers."21st_magic"]
command = "pnpm"
args = ["exec", "magic"]
startup_timeout_sec = 20
tool_timeout_sec = 120

[mcp_servers."21st_magic".env]
API_KEY = "your_21st_magic_api_key"
```

After editing Codex MCP config, restart Codex so the server list is reloaded.

## Verify

```bash
pnpm lint
pnpm build
```
