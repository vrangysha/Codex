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

# 05 — Общие компоненты, layout, header, footer

## Цель этапа

Создай общий UI-фундамент: layout, header, footer, CTA, секционные компоненты, карточки, формы и reusable blocks. После этого отдельные страницы должны собираться быстро и единообразно.

## 1. Layout

Настрой:

- `app/layout.tsx`;
- global metadata defaults;
- font loading;
- body classes;
- main landmark;
- skip link;
- базовый background;
- provider, если нужен.

## 2. SiteHeader

Создай `components/layout/SiteHeader.tsx`.

Должен включать:

- логотип/название компании;
- desktop navigation;
- mobile menu;
- телефон;
- CTA “Рассчитать стоимость”;
- active link state;
- sticky behavior по необходимости;
- доступность клавиатурой;
- aria labels.

Состояния:

- desktop;
- tablet;
- mobile hamburger;
- menu open/close;
- focus visible.

Визуально:

- светлый header;
- subtle border или backdrop;
- не делать тяжёлый glassmorphism.

## 3. SiteFooter

Создай `components/layout/SiteFooter.tsx`.

Содержимое:

- логотип;
- короткое описание;
- услуги;
- навигация;
- контакты;
- часы работы;
- юридические ссылки;
- CTA;
- пометка о placeholder данных, если нужно.

## 4. Core components

Создай или настрой:

- `Container`;
- `Section`;
- `SectionHeading`;
- `Button`;
- `Badge`;
- `Card`;
- `TrustBar`;
- `FinalCta`;
- `Breadcrumbs`;
- `StatCard`;
- `ServiceCard`;
- `ProjectCard`;
- `PriceCard`;
- `ProcessTimeline`;
- `FaqAccordion`;
- `LeadForm`;
- `ContactCard`;
- `ImageFrame`;
- `BeforeAfterPlaceholder`.

## 5. 21st.dev

Перед созданием компонентов проверь, есть ли бесплатные публичные компоненты 21st.dev, которые уместно использовать для:

- header;
- hero;
- pricing;
- testimonial cards;
- FAQ accordion;
- forms;
- footer;
- feature cards.

Если используешь:

- установи через публичную команду, если доступна;
- проверь лицензию/условия;
- адаптируй стиль;
- удали демо-контент;
- запиши в `WORKLOG.md`, что именно использовано.

Если не используешь:

- создай компоненты вручную в shadcn-like стиле.

## 6. LeadForm базовая версия

Форма должна иметь:

- имя;
- телефон;
- тип объекта;
- площадь;
- тип ремонта;
- комментарий;
- согласие с политикой;
- кнопка submit;
- success state;
- error state;
- loading state;
- доступные labels.

Пока можно использовать stub submit, но оставь TODO для подключения `/api/lead` на этапе 23.

## 7. Mobile sticky CTA

Создай мобильную нижнюю CTA-панель:

- “Позвонить”;
- “Заявка”;
- “WhatsApp/Telegram” placeholder, если есть номер.

Панель должна быть аккуратной и не перекрывать контент.

## 8. Проверки

- header navigation works;
- mobile menu accessible;
- footer links работают;
- компоненты переиспользуемые;
- TypeScript types корректны;
- build проходит.

## Критерии готовности

- общий layout готов;
- header/footer готовы;
- reusable sections готовы;
- LeadForm базово работает;
- страницы могут собираться из компонентов;
- `WORKLOG.md` обновлён.
