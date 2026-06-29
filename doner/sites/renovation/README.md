# Renovation Landing

Современный многостраничный сайт на русском языке для бизнеса ремонта квартир и домов под ключ. Проект построен как маркетинговый сайт с SEO-структурой, заявками, формами, портфолио, отзывами, юридическими страницами и прозрачной документацией по placeholder-данным.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint flat config
- shadcn/ui-compatible структура компонентов
- Zod для валидации заявок
- Lucide React для иконок

## Install

```bash
npm install
```

В PowerShell на этой машине используйте `npm.cmd`, если выполнение `npm.ps1` заблокировано политикой:

```powershell
npm.cmd install
```

## Development

```bash
npm run dev
```

PowerShell:

```powershell
npm.cmd run dev
```

По умолчанию dev-сервер Next.js стартует на `http://localhost:3000`. Если порт занят, Next предложит другой порт.

## Production Build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

PowerShell:

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

В проекте нет отдельного `test` script. Основные обязательные проверки сейчас: lint, typecheck, production build, браузерный smoke-QA, проверка ссылок, форм, SEO, ассетов и audit.

## Content

Основной бизнес-контент находится в [src/data/site.ts](./src/data/site.ts):

- `siteConfig` - название, tagline, город, юридические и контактные placeholder-данные.
- `navigation` - главное меню, footer-навигация и footer CTA.
- `contacts` - телефон, email, мессенджеры, часы работы, адрес и примечание к карте.
- `services` и `servicePages` - услуги, маршруты, CTA, сроки, цены и FAQ-связки.
- `portfolioProjects` - структура будущих кейсов; текущие элементы demo/placeholder.
- `testimonials` - demo-отзывы, которые нельзя выдавать за реальные.
- `pricingPackages` - ориентиры цен, все placeholder-значения требуют подтверждения.
- `faqGroups` - видимые FAQ и источник для FAQ JSON-LD.
- `seoPages` - SEO title/description/keywords по маршрутам.
- `legalPlaceholders` - статус юридических страниц.

Маршруты для sitemap/robots перечислены в [src/data/site-map.ts](./src/data/site-map.ts).

## Pages And Components

- Routes: [src/app](./src/app)
- Shared UI: [src/components/ui](./src/components/ui)
- Layout: [src/components/layout](./src/components/layout)
- Page sections: [src/components/sections](./src/components/sections)
- Lead forms: [src/components/forms](./src/components/forms)
- SEO helpers: [src/lib/seo.ts](./src/lib/seo.ts)
- Lead validation/API contract: [src/lib/lead.ts](./src/lib/lead.ts)
- Lead API stub: [src/app/api/lead/route.ts](./src/app/api/lead/route.ts)

## Images And Assets

Изображения лежат в [public/images](./public/images):

- `public/images/generated` - AI-generated illustrative assets and WebP derivatives.
- `public/images/placeholders` - SVG placeholders for portfolio slots.

All asset source, license, disclosure, and replacement rules are tracked in [ASSETS.md](./ASSETS.md). Do not present generated, stock, placeholder, or demo visuals as real renovation projects. Real project photos require owner/client permission and documented usage rights before launch.

## Forms And CRM

All public lead forms submit to `/api/lead`. The current endpoint is an honest stub:

- validates payload on the server with Zod;
- returns structured success/error JSON;
- handles honeypot submissions neutrally;
- does not store, log, email, forward, or send personal data to external services;
- returns `mode: "stub"` so the UI does not imply real delivery.

Connect real lead routing in [src/app/api/lead/route.ts](./src/app/api/lead/route.ts) only after confirming:

- CRM/email/webhook/Telegram destination;
- environment variable names and deployment secret storage;
- payload contract and consent timestamp policy;
- retention/deletion rules;
- privacy-policy wording;
- rate limiting and abuse handling.

Never hard-code CRM tokens, webhook URLs, bot tokens, SMTP credentials, or analytics secrets.

## Contacts And Legal Data

Replace placeholder contacts in [src/data/site.ts](./src/data/site.ts):

- phone;
- email;
- Telegram and WhatsApp links;
- city/service area;
- public address or showroom note;
- working hours;
- legal name, INN, OGRN.

Legal pages live at `/privacy` and `/terms`. They are templates and remain documented as requiring owner/lawyer review in [CONTENT_TODO.md](./CONTENT_TODO.md). Keep placeholder legal/business values out of production SEO until they are confirmed.

## SEO

SEO metadata, canonical URLs, Open Graph, schema helpers, robots, and sitemap are configured through:

- [src/lib/seo.ts](./src/lib/seo.ts)
- [src/app/sitemap.ts](./src/app/sitemap.ts)
- [src/app/robots.ts](./src/app/robots.ts)
- page-level `metadata` exports under [src/app](./src/app)

`siteUrl` currently uses `https://example.com`. Replace it with the production domain before public launch, then validate sitemap, robots, canonical URLs, Open Graph URLs, and JSON-LD in production tools.

## Documentation

- [PRODUCT.md](./PRODUCT.md) - product goal and positioning.
- [DESIGN.md](./DESIGN.md) - visual system, typography, colors, spacing, components, accessibility.
- [ASSETS.md](./ASSETS.md) - source/license/status for every image/media asset.
- [CONTENT_TODO.md](./CONTENT_TODO.md) - all owner/legal/content follow-ups.
- [QA_REPORT.md](./QA_REPORT.md) - stage-by-stage checks, findings, limitations.
- [WORKLOG.md](./WORKLOG.md) - implementation log by prompt stage.

## Prompt Workflow

Prompt files must be executed strictly in order. Before every stage, read `AGENTS.md`, then the current prompt file, then update `WORKLOG.md`, `QA_REPORT.md`, and `CONTENT_TODO.md` before ending the stage. Do not commit unless explicitly requested.
