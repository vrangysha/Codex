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

# 25 — QA, polish, performance, финальная сборка

## Цель этапа

Довести сайт до состояния, которое можно показывать клиенту: убрать визуальные шероховатости, проверить производительность, ссылки, формы, SEO, ассеты и документацию.

## 1. Visual polish

Проверь:

- одинаковый ритм секций;
- нет случайных размеров карточек;
- CTA consistent;
- тексты не висят одиноко;
- изображения имеют одинаковый стиль;
- spacing не хаотичный;
- footer не выглядит как afterthought;
- header работает на всех страницах;
- active states корректны.

Если доступно:

```text
/impeccable critique full renovation landing
/impeccable polish full website
/impeccable normalize visual inconsistencies
```

## 2. Performance

Оптимизируй:

- images;
- fonts;
- client components;
- imports;
- icons;
- animation;
- bundle size.

Проверь, что:

- hero image priority только там, где нужно;
- остальные изображения lazy;
- нет тяжёлых libraries без причины;
- нет лишних client boundaries;
- metadata не заставляет страницу быть client-side.

Если доступно:

```text
/impeccable optimize performance and loading behavior
```

## 3. Link check

Проверь все ссылки:

- main navigation;
- footer;
- service links;
- CTA;
- breadcrumbs;
- privacy links;
- phone `tel:`;
- email `mailto:`;
- messenger placeholders.

## 4. Form check

Для каждой формы:

- пустой submit;
- валидный submit;
- invalid phone;
- no consent;
- server success;
- server error;
- keyboard-only.

## 5. SEO check

Проверь:

- metadata unique;
- H1 unique;
- schema valid JSON;
- sitemap;
- robots;
- alt;
- canonical/base URL placeholder documented;
- no keyword spam.

## 6. Content check

Проверь:

- нет Lorem Ipsum;
- нет английского текста в UI, кроме технических атрибутов;
- нет фейковых “реальных” отзывов;
- нет фейковых реальных кейсов;
- placeholder данные перечислены в `CONTENT_TODO.md`;
- юридические тексты помечены как шаблон.

## 7. Assets check

Проверь:

- все images существуют;
- sources записаны;
- generated/placeholder отмечены;
- no broken image paths;
- alt есть.

## 8. Build commands

Запусти всё доступное:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Если какой-то команды нет — отметь в `QA_REPORT.md`.

## 9. QA_REPORT.md

Заполни:

- дата проверки;
- commit/diff state, если уместно;
- команды;
- результат;
- найденные проблемы;
- исправленные проблемы;
- оставшиеся ограничения;
- рекомендации.

## 10. README.md

Обнови:

- как установить зависимости;
- как запустить dev;
- как собрать build;
- где менять контент;
- где менять изображения;
- где подключить CRM;
- где заменить контакты.

## Критерии готовности

- build проходит;
- основные проверки пройдены;
- сайт визуально цельный;
- формы работают на stub/API уровне;
- документация полная;
- ограничения прозрачны.
