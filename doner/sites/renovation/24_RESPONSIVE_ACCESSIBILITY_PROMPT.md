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

# 24 — Адаптив, accessibility, edge cases

## Цель этапа

Проверить весь сайт как реальный пользователь: mobile, tablet, desktop, клавиатура, длинные тексты, ошибки, пустые состояния, изображения, формы.

## Breakpoints

Проверь вручную или инструментами:

- 360px;
- 390px;
- 430px;
- 768px;
- 1024px;
- 1280px;
- 1440px.

## Mobile checks

- header не занимает слишком много места;
- mobile menu доступен;
- sticky CTA не перекрывает footer/form;
- hero не обрезает изображение;
- cards идут в понятном порядке;
- tables имеют mobile-friendly layout;
- pricing не ломается;
- FAQ удобно раскрывать;
- forms не слишком длинные без логики;
- tap targets минимум 44px.

## Tablet checks

- grid не выглядит пустым;
- изображения не растягиваются;
- секции не создают странные промежутки;
- navigation остаётся понятной.

## Desktop checks

- max-width не слишком широкий;
- текстовые строки не слишком длинные;
- hero сбалансирован;
- карточки выровнены;
- CTA заметны.

## Accessibility checks

Проверь:

- один H1 на страницу;
- heading order;
- landmark roles;
- skip link;
- focus visible;
- keyboard navigation;
- no keyboard trap;
- contrast WCAG AA;
- alt text;
- forms labels;
- aria-invalid/errors;
- accordion accessibility;
- reduced motion;
- no clickable div without role;
- no icon-only buttons without aria-label.

## Edge cases

Проверь с:

- длинным названием компании;
- длинными service titles;
- большим количеством FAQ;
- отсутствующими изображениями;
- пустым портфолио;
- отсутствующими отзывами;
- маленькой площадью;
- большим комментарием в форме;
- очень длинным телефоном/email.

Если портфолио/отзывы пустые:

- показать аккуратное empty state;
- не ломать layout.

## Impeccable

Если доступно:

```text
/impeccable adapt full website responsive behavior
/impeccable harden forms portfolio pricing and navigation
/impeccable audit accessibility and edge cases
```

## Документация

Обнови `QA_REPORT.md` таблицей:

- страница;
- mobile;
- tablet;
- desktop;
- accessibility;
- проблемы;
- статус.

## Проверки

- lint;
- typecheck;
- build;
- manual responsive check;
- form keyboard check.

## Критерии готовности

- сайт удобно использовать на mobile;
- accessibility issues устранены или задокументированы;
- edge cases не ломают UI;
- build проходит.
