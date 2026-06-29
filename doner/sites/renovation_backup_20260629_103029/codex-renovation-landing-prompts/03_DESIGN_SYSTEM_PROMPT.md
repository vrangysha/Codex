# Codex Prompt Pack: многостраничный лендинг ремонта квартир и домов

Этот файл — отдельный этап работы для Codex. Запускай файлы строго по порядку. Перед началом каждого этапа попроси Codex прочитать уже созданные `AGENTS.md`, `DESIGN.md`, `CONTENT_TODO.md`, `ASSETS.md`, `QA_REPORT.md`, `WORKLOG.md` и текущую структуру проекта.

Общие правила для всех этапов:
- Не делай git commit без отдельного разрешения.
- Не используй платные или закрытые компоненты 21st.dev.
- Не копируй проприетарный код и изображения без лицензии.
- Если данных бизнеса нет, используй аккуратные placeholder-данные и заноси их в `CONTENT_TODO.md`.
- Не выдавай сгенерированные изображения, отзывы и кейсы за реальные.
- После каждого этапа обновляй `WORKLOG.md` и `QA_REPORT.md`.
- Если build/lint/typecheck падают — исправляй, затем запускай повторно.
- Сайт должен быть современным, лаконичным, светлым, доверительным, адаптивным и SEO-готовым.

---

# 03 — Дизайн-система лендинга

## Цель этапа

Создай цельную дизайн-систему для сайта ремонта квартир и домов: цвета, типографику, сетку, компоненты, состояния, анимации и правила использования. До создания страниц нужно определить визуальный язык.

## Дизайн-направление

Сайт должен выглядеть как современный сервис ремонта под ключ:

- светлый;
- тёплый;
- лаконичный;
- надёжный;
- визуально дорогой, но не кричащий;
- без шаблонного AI-глянца;
- с ощущением порядка, чистоты и контроля.

## Палитра

Создай CSS variables и Tailwind tokens.

Рекомендуемая палитра:

- `background`: warm white / ivory;
- `surface`: молочный / stone-50;
- `surface-alt`: warm beige / sand;
- `text-primary`: deep graphite;
- `text-secondary`: warm gray;
- `border`: soft stone;
- `accent`: muted terracotta, warm wood или sage;
- `accent-foreground`: ivory;
- `success`: muted green;
- `warning`: muted amber;
- `error`: controlled red.

Проверь контраст WCAG AA.

## Типографика

Выбери шрифтовую пару. Не используй бездумно Inter.

Подходящие варианты:

- `Manrope` для UI;
- `Onest` для UI;
- `Geologica` для modern Russian typography;
- `IBM Plex Sans` для строгого профессионального вида;
- аккуратный serif только для крупных editorial-акцентов, если он не ухудшает читаемость.

Задай:

- H1: крупный, плотный, 48–72 desktop, 36–44 mobile;
- H2: 36–52 desktop, 28–36 mobile;
- H3: 22–28;
- body: 16–18;
- small: 13–14;
- line-height комфортный;
- max-width для текста, чтобы строки не были длинными.

## Сетка и отступы

Определи:

- container max-width: 1120–1280px;
- horizontal padding mobile: 16–20px;
- tablet: 24–32px;
- desktop: 40px;
- section vertical spacing: 72–120px desktop, 48–72px mobile;
- card spacing: 20–32px;
- border radius: 16–28px;
- subtle shadows только там, где нужно.

## Базовые компоненты

Создай или настрой:

- `Button` variants: primary, secondary, ghost, link, outline;
- `Badge`;
- `Card`;
- `SectionHeading`;
- `Container`;
- `LeadButton`;
- `Input`, `Textarea`, `Select`, `Checkbox`;
- `Accordion`;
- `Breadcrumbs`;
- `StatCard`;
- `TrustBadge`;
- `ServiceCard`;
- `ProjectCard`;
- `PriceCard`.

## Состояния

Для всех интерактивных элементов:

- hover;
- focus-visible;
- active;
- disabled;
- loading;
- error;
- success.

Focus должен быть видимым и аккуратным.

## Анимации

Используй минимально:

- мягкий fade-up для секций;
- hover lift для карточек;
- плавные accordion transitions;
- уважай `prefers-reduced-motion`.

Запрещено:

- bounce;
- flashy parallax;
- постоянное движение;
- тяжёлые animation libraries без необходимости.

## Документация

Заполни `DESIGN.md`:

- принципы;
- палитра;
- типографика;
- spacing;
- компоненты;
- состояния;
- анимации;
- accessibility;
- примеры использования.

## Использование Impeccable/UI UX Pro Max

Если доступны:

```text
/impeccable shape дизайн-систему для лендинга ремонта квартир и домов
/impeccable typeset typography system
/impeccable layout spacing and grid
```

Используй UI UX Pro Max для Home Services / Renovation / Landing Page.

## Проверки

После изменений:

```bash
npm run lint
npm run typecheck
npm run build
```

## Критерии готовности

- дизайн-система создана;
- цвета и типографика применены глобально;
- нет хаотичных inline-стилей;
- есть `DESIGN.md`;
- контраст проверен;
- build проходит.
