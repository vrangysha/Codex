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

# 21 — Изображения, ассеты, генерация и лицензии

## Цель этапа

Подготовить визуалы для сайта: hero, портфолио, услуги, процесс, CTA, иконки. Всё должно быть легально, оптимизировано и документировано.

## Правила

Запрещено:

- брать случайные картинки из Google Images;
- использовать изображения без лицензии;
- выдавать сгенерированные фото за реальные работы;
- использовать логотипы чужих брендов без необходимости;
- оставлять изображения без alt.

Разрешено:

- использовать легальные бесплатные стоки;
- использовать собственную генерацию изображений, если доступна;
- использовать CSS/SVG placeholders;
- создавать абстрактные architectural visuals;
- использовать публичные open-source иконки с лицензией.

## ASSETS.md

Для каждого ассета запиши:

- filename;
- где используется;
- источник;
- лицензия/условие;
- author, если нужен credit;
- alt text;
- status: real / generated / placeholder;
- TODO для замены.

## Нужный набор изображений

### 1. Hero

- светлая современная гостиная после ремонта;
- 16:9;
- без людей;
- без текста;
- без логотипов;
- warm neutral palette.

### 2. Services

- квартира;
- частный дом;
- косметический ремонт;
- капитальный ремонт;
- дизайн-проект;
- инженерные работы.

### 3. Portfolio

Минимум 6 изображений:

- кухня-гостиная;
- спальня;
- ванная;
- прихожая;
- загородный дом;
- детали отделки.

### 4. Process

Можно сделать не фото, а SVG/illustration:

- замер;
- смета;
- договор;
- ремонт;
- контроль;
- сдача.

### 5. Abstract backgrounds

- architectural lines;
- soft beige shapes;
- subtle shadows;
- no text.

## Промпты для генерации изображений

Если доступен image generation tool, используй эти промпты.

### Hero living room

```text
Modern renovated apartment living room, warm minimal interior, natural daylight, premium but realistic home renovation, light beige and stone palette, clean walls, wooden floor, elegant furniture, no people, no logos, no text, editorial architecture photography, 16:9, high detail, realistic.
```

### Private house interior

```text
Modern private house interior after renovation, bright open-plan space, warm neutral palette, natural materials, clean construction finish, premium realistic home improvement photography, no people, no logos, no text, 16:9.
```

### Bathroom renovation

```text
Modern renovated bathroom interior, warm stone tiles, clean lines, soft daylight, premium realistic home renovation photography, no people, no logos, no text, 4:3.
```

### Finish detail

```text
Close-up of premium renovation details, smooth painted wall, wooden floor transition, elegant baseboard, warm daylight, minimal clean aesthetic, realistic architectural photography, no people, no text.
```

### Process illustration

```text
Minimal architectural illustration of a renovation planning process, measuring tools, floor plan, material samples, warm beige and stone palette, clean vector style, no text, no logos.
```

## Оптимизация

- использовать Next Image, если Next.js;
- задавать sizes;
- lazy load для неhero;
- hero priority;
- WebP/AVIF, если возможно;
- не использовать слишком большие файлы.

## Alt text

Alt должен описывать изображение:

- “Светлая гостиная после ремонта с деревянным полом и нейтральной отделкой”;
- “Современная ванная комната с плиткой под камень”;
- “Деталь стыка напольного покрытия и плинтуса после отделки”.

## Проверки

- нет битых изображений;
- все изображения оптимизированы;
- `ASSETS.md` заполнен;
- generated/demo отмечены;
- нет нелицензированных ассетов.

## Критерии готовности

- сайт визуально цельный;
- изображения легальны или помечены как generated/placeholder;
- портфолио не вводит в заблуждение.
