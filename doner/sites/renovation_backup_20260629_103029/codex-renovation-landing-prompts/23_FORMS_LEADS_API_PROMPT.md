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

# 23 — Формы, лиды, валидация и API/stub

## Цель этапа

Сделать формы заявок рабочими на уровне frontend/backend stub: валидация, состояния, accessibility, безопасная обработка данных. Если реального backend/CRM нет — не имитировать настоящую отправку.

## Формы на сайте

Минимум:

1. Главная — quick estimate.
2. Contacts — полная форма.
3. Service pages — контекстная форма.
4. Pricing — форма расчёта сметы.
5. Final CTA reusable form.

## Поля

Базовые:

- name;
- phone;
- email optional;
- objectType;
- area;
- renovationType;
- startTime;
- budgetRange optional;
- message;
- consent.

## Валидация

Используй Zod или аналог.

Правила:

- имя: минимум 2 символа;
- телефон: обязательный, допустимый формат;
- площадь: число или диапазон;
- тип объекта: обязательный;
- тип ремонта: обязательный;
- consent: true;
- message: ограничить длину;
- honeypot field для простейшей защиты от спама.

## UI states

- idle;
- typing;
- validation error;
- submitting;
- success;
- server error;
- network error;
- disabled.

Каждая ошибка должна быть понятной:

- “Введите телефон, чтобы мы могли связаться”;
- “Укажите примерную площадь”;
- “Подтвердите согласие с политикой конфиденциальности”.

## API/stub

Если Next.js App Router:

- создай `/app/api/lead/route.ts` или server action;
- валидируй payload на сервере;
- не логируй персональные данные лишний раз;
- возвращай structured response;
- не отправляй данные в сторонние сервисы без ключей.

Если backend не нужен:

- сделай stub, который возвращает success в dev;
- в `CONTENT_TODO.md` напиши, куда подключить CRM/email/Telegram/webhook.

## Privacy

- checkbox должен ссылаться на `/privacy`;
- текст: “Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности”.

## Analytics placeholders

Если нет аналитики:

- не добавляй случайные scripts;
- создай TODO:
  - goal: lead_submit;
  - call_click;
  - messenger_click;
  - pricing_cta_click.

## Accessibility

- label для каждого поля;
- aria-invalid;
- error message linked to field;
- keyboard-friendly;
- focus after success/error по необходимости;
- button disabled только когда это не ломает UX.

## Проверки

- submit с пустыми полями показывает ошибки;
- submit с валидными данными показывает success;
- API возвращает expected response;
- TypeScript types работают;
- нет секретов;
- нет реальной отправки без настройки.

## Критерии готовности

- формы выглядят и работают профессионально;
- валидация есть на клиенте и сервере;
- privacy consent есть;
- backend интеграции отмечены как TODO.
