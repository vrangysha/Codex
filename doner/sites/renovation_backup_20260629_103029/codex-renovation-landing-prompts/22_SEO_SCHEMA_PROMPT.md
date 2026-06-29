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

# 22 — SEO, metadata, sitemap, robots, schema

## Цель этапа

Сделать базовую SEO-структуру для многостраничного сайта ремонта квартир и домов. Не заниматься “серым SEO”, не переспамливать ключами.

## 1. Metadata для всех страниц

Для каждой страницы создай уникальные:

- title;
- description;
- openGraph title;
- openGraph description;
- openGraph image placeholder;
- canonical, если проект поддерживает;
- alternates, если есть base URL.

Страницы:

- `/`;
- `/services`;
- `/services/apartment-renovation`;
- `/services/house-renovation`;
- `/services/cosmetic-renovation`;
- `/services/capital-renovation`;
- `/services/design-project`;
- `/portfolio`;
- `/pricing`;
- `/process`;
- `/about`;
- `/reviews`;
- `/faq`;
- `/contacts`;
- `/privacy`;
- `/terms`.

## 2. Sitemap

Создай `sitemap.ts` или аналог.

Включи все публичные страницы.

Укажи:

- url;
- lastModified;
- changeFrequency;
- priority.

Для юридических страниц priority ниже.

## 3. Robots

Создай `robots.ts` или `robots.txt`.

- Разреши индексацию основных страниц.
- Если юридические страницы placeholder, можно noindex через metadata или robots, если это соответствует проектной логике.
- Не блокируй важные страницы случайно.

## 4. JSON-LD

Создай reusable component `JsonLd`.

Добавь schema:

### LocalBusiness / HomeAndConstructionBusiness placeholder

Поля:

- name;
- description;
- telephone placeholder;
- email placeholder;
- areaServed placeholder;
- address placeholder;
- openingHours placeholder;
- url placeholder;
- sameAs placeholder.

Не придумывай реальные юридические данные.

### Service

Для страниц услуг:

- serviceType;
- provider;
- areaServed;
- description.

### FAQPage

Для FAQ и страниц с FAQ:

- вопросы должны совпадать с видимым текстом.

### BreadcrumbList

Для всех вложенных страниц.

### Organization

Для главной/about.

## 5. Heading structure

Проверь:

- один H1 на страницу;
- логичная иерархия H2/H3;
- нет пропуска ради визуального размера;
- CTA не должен быть heading без смысла.

## 6. Internal linking

Проверь ссылки:

- home → services;
- home → portfolio;
- services → service detail pages;
- pricing → contact form;
- process → services/contact;
- FAQ → contacts;
- footer → all major pages.

## 7. Local SEO content

Если город неизвестен:

- используй placeholder “ваш город” или siteConfig.city;
- занеси в `CONTENT_TODO.md`.

Не переспамливай “ремонт квартир [город]” в каждом абзаце.

## Проверки

- metadata уникальные;
- schema валидный JSON;
- no broken links;
- no keyword stuffing;
- sitemap строится;
- build проходит.

## Критерии готовности

- каждая страница имеет SEO metadata;
- schema добавлена аккуратно;
- sitemap/robots работают;
- placeholder local data отмечены.
