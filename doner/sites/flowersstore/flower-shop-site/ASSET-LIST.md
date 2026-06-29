# Лиора: asset list и промпты

Магазин: **Лиора**. Регион доставки: **Москва**. Визуальный стиль: современный, чистый, премиальный, живой; натуральные пастельные оттенки, зелёный для доверия, ягодный для CTA, тёплый кремовый фон.

Ассеты уже лежат в `assets/` и подключены в HTML/CSS/JS. Встроенный `image_gen` в этой сессии был недоступен, поэтому текущие файлы сгенерированы локально как SVG/WebP/JPG/PNG. Ниже оставлены промпты для последующей AI-перегенерации в фотореалистичном качестве.

## Структура папок

```text
assets/
  logo/
  icons/
  images/
    hero/
    catalog/
    bouquets/
    backgrounds/
    banners/
  svg/
  favicon/
  social/
```

## Логотип и favicon

| Файл | Формат | Размер | Где используется | Описание | Промпт |
|---|---:|---:|---|---|---|
| `assets/logo/logo-main.svg` | SVG | 420x360 | Брендинг, документы | Вертикальный знак Лиора | Vector-friendly premium flower shop logo for "Лиора", delicate flower mark, serif Cyrillic wordmark, sage green and soft rose, clean white background, no mockup. |
| `assets/logo/logo-main.png` | PNG | 420x360 | Запасной raster | PNG-версия основного логотипа | Same as logo-main, transparent-safe flat background, crisp edges, no shadows. |
| `assets/logo/logo-horizontal.svg` | SVG | 760x220 | Header/footer | Горизонтальная версия | Horizontal premium florist logo "Лиора Flowers Moscow", elegant flower icon left, refined serif typography, sage/rose palette. |
| `assets/logo/logo-horizontal.png` | PNG | 760x220 | Запасной raster | PNG-версия header logo | Same as horizontal logo, sharp readable typography. |
| `assets/logo/logo-icon.svg` | SVG | 220x220 | Иконка бренда | Цветочный знак | Minimal flower icon for premium florist brand, soft rose petals, sage leaf, vector-friendly, no text. |
| `assets/logo/logo-icon.png` | PNG | 220x220 | Соцсети/аватары | PNG-иконка | Same flower icon, centered, crisp. |
| `assets/favicon/favicon.svg` | SVG | 220x220 | Browser favicon | Векторный favicon | Minimal florist favicon based on the Лиора flower mark. |
| `assets/favicon/favicon-32.png` | PNG | 32x32 | Browser favicon | Малый favicon | Same icon, readable at 32px. |
| `assets/favicon/favicon-180.png` | PNG | 180x180 | Apple touch icon | Иконка для устройств | Same icon, clean rounded composition. |
| `assets/favicon/favicon.ico` | ICO | 32x32 | Browser favicon | ICO-обёртка | Same icon, ICO format. |

## Иконки

Все иконки используются в карточках преимуществ и служебных блоках. SVG: 80x80, PNG: 256x256. Качество: простые линии, понятный силуэт, без мелких деталей, одинаковая толщина stroke.

| Файлы | Назначение | Промпт |
|---|---|---|
| `assets/icons/icon-delivery.svg`, `.png` | Доставка | Minimal line icon for flower delivery, small van with bouquet, sage green stroke, warm cream tile, premium florist UI. |
| `assets/icons/icon-freshness.svg`, `.png` | Свежие цветы | Minimal line icon of fresh leaves and flower stem, sage green stroke, warm cream tile. |
| `assets/icons/icon-payment.svg`, `.png` | Оплата | Minimal line icon of payment card, sage green stroke, premium florist UI. |
| `assets/icons/icon-guarantee.svg`, `.png` | Гарантия | Minimal line icon shield with checkmark, sage green stroke, warm cream tile. |
| `assets/icons/icon-custom.svg`, `.png` | Индивидуальный букет | Minimal line icon of custom bouquet flower, sage green stroke. |
| `assets/icons/icon-urgent.svg`, `.png` | Срочный заказ | Minimal line icon clock for urgent order, sage green stroke. |
| `assets/icons/icon-support.svg`, `.png` | Поддержка | Minimal line icon headset support, sage green stroke. |
| `assets/icons/icon-pickup.svg`, `.png` | Самовывоз | Minimal line icon storefront pickup, sage green stroke. |

## Растровые изображения

| Файл | Формат | Размер | Где используется | Описание | Промпт |
|---|---:|---:|---|---|---|
| `assets/images/hero/hero-flower-bouquet.webp` | WebP | 1600x1024 | Главный экран | Премиальный hero bouquet | Elegant premium flower shop hero image, large fresh pastel bouquet on right side, warm cream studio background, natural daylight, clean commercial composition, usable negative space on left, no text, no watermark. |
| `assets/images/hero/hero-flower-bouquet.jpg` | JPG | 1600x1024 | Fallback | JPG hero | Same as hero image, high quality, soft natural shadows. |
| `assets/images/backgrounds/florist-studio.webp` | WebP | 1200x900 | О нас, SEO, блог | Флорист в студии | Editorial photo of florist arranging pastel bouquet in clean premium flower studio, warm daylight, natural textures, no readable text, no watermark. |
| `assets/images/backgrounds/delivery-courier.webp` | WebP | 1200x800 | Доставка | Доставка букета | Premium florist courier delivery image, bouquet transported carefully in branded neutral packaging, clean Moscow city mood, warm daylight, no text. |
| `assets/images/backgrounds/gift-set.webp` | WebP | 1100x800 | Акции/подарки | Подарочный набор | Premium floral gift set with bouquet, candle, card and sweets, warm cream background, elegant flat lay, no readable text. |
| `assets/images/backgrounds/petal-pattern.png` | PNG | 900x900 | Page hero backgrounds | Паттерн лепестков | Seamless soft petal pattern, pastel rose, sage, lavender, gold, very subtle, no text. |
| `assets/svg/petal-pattern.svg` | SVG | 900x900 | CSS background | SVG-паттерн | Same pattern in vector form. |
| `assets/social/og-image.webp` | WebP | 1200x630 | Open Graph | Социальный preview | Premium florist social sharing image for Лиора, pastel bouquet, clean commercial composition, no small text. |
| `assets/social/social-post.webp` | WebP | 1080x1080 | Соцсети | Квадратный пост | Premium square social media image, lush pastel bouquet and gift mood, clean background, no text. |

## Букеты каталога

Все карточки имеют пары WebP/JPG, 900x1080. Назначение: карточки каталога, страница товара, похожие товары. Оптимизация: WebP для сайта, JPG как резерв; lazy loading; alt с названием букета.

| Букет | Файлы | Промпт |
|---|---|---|
| Бархатные розы | `bouquet-velvet-roses-card.webp`, `.jpg` | Premium product photo of lush pink and red rose bouquet with eucalyptus, matte designer wrap, warm cream studio background, vertical catalog crop, no text. |
| Кремовое утро | `bouquet-morning-cream-card.webp`, `.jpg` | Premium product photo of white and cream rose and eustoma bouquet, elegant ribbon, airy fresh mood, vertical catalog crop, no text. |
| Лавандовое облако | `bouquet-lavender-cloud-card.webp`, `.jpg` | Premium product photo of lavender hydrangea, lisianthus and soft pink flowers bouquet, pastel wrap, clean studio light, no text. |
| Абрикосовый свет | `bouquet-apricot-light-card.webp`, `.jpg` | Warm peach and cream seasonal bouquet with ranunculus and spray roses, premium florist packaging, vertical crop, no text. |
| Рубиновое свидание | `bouquet-ruby-date-card.webp`, `.jpg` | Romantic ruby red rose bouquet with deep pink accents and eucalyptus, elegant matte wrap, premium studio product photography. |
| Белый сад | `bouquet-white-garden-card.webp`, `.jpg` | White garden bouquet with roses, eustoma, carnations and eucalyptus, wedding-ready clean premium style, no text. |
| Розовые пионы | `bouquet-pink-peonies-card.webp`, `.jpg` | Lush pink peony bouquet, soft rose tones, seasonal premium product photography, warm cream background, no text. |
| Нежный микс | `bouquet-soft-mix-card.webp`, `.jpg` | Soft mixed pastel bouquet, pink, cream and lavender flowers, airy composition, vertical catalog product image. |
| Тёплый рассвет | `bouquet-sunrise-card.webp`, `.jpg` | Warm sunrise bouquet with peach, cream and orange seasonal flowers, fresh friendly mood, premium packaging. |
| Эвкалиптовая свежесть | `bouquet-eucalyptus-card.webp`, `.jpg` | Green and white bouquet with eucalyptus and delicate white flowers, clean premium minimalist product photo. |
| Классика красных роз | `bouquet-classic-red-card.webp`, `.jpg` | Large classic red rose bouquet, premium matte wrapping, dramatic but clean studio light, no text. |
| Сиреневая мечта | `bouquet-lilac-dream-card.webp`, `.jpg` | Lilac and soft pink bouquet with lisianthus and roses, delicate premium florist style, vertical product crop. |

## Категории

Все файлы WebP, 900x700. Назначение: карточки категорий на главной и статьи.

| Файл | Назначение | Промпт |
|---|---|---|
| `category-birthday.webp` | День рождения | Fresh celebratory birthday bouquet, pastel pink and cream, premium florist catalog image, no text. |
| `category-wedding.webp` | Свадьба | Elegant white wedding flowers, clean premium composition, soft daylight, no text. |
| `category-date.webp` | Свидание | Romantic bouquet for a date, pink and ruby accents, warm cream background, no text. |
| `category-mono.webp` | Монобукеты | Clean mono bouquet of roses in elegant packaging, premium product style. |
| `category-gifts.webp` | Подарки | Floral gift box with bouquet and small premium gift items, soft warm palette. |
| `category-corporate.webp` | Корпоративные | Refined corporate bouquet, restrained premium palette, clean studio background. |

## Баннеры

Все баннеры имеют WebP/PNG, 1600x700. Назначение: акции, promo cards, social crops. Текст размещается HTML-слоем, поэтому в изображениях нет надписей.

| Файлы | Назначение | Промпт |
|---|---|---|
| `banner-spring-sale.webp`, `.png` | Сезонная акция | Wide premium spring flower sale banner background, lush pastel bouquet on right, clean negative space, no text. |
| `banner-first-order.webp`, `.png` | Скидка на первый заказ | Wide elegant florist promotion banner, soft peach and cream palette, bouquet and gift mood, no text. |
| `banner-wedding-bouquets.webp`, `.png` | Свадебные букеты | Wide wedding flowers banner, white and green florals, premium airy composition, no text. |
| `banner-two-hour-delivery.webp`, `.png` | Доставка за 2 часа | Wide express flower delivery banner background, fresh bouquet and clean dynamic composition, no text. |
| `banner-corporate-orders.webp`, `.png` | Корпоративные заказы | Wide corporate florist banner background, restrained premium bouquet, sage and cream palette, no text. |

## UX/UI-концепция

- Сетка: контейнер до 1180px, карточки 4/3/1 колонки по breakpoint, формы в 2 колонки на desktop и 1 колонку на mobile.
- Кнопки: основной CTA в ягодном или зелёном цвете, вторичные кнопки на светлой поверхности с тонкой рамкой.
- Мобильная версия: sticky header, hamburger menu, одноколоночные карточки, крупные CTA, фильтры над результатами/после адаптивной перестройки.
- Шрифты: системный sans-serif для интерфейса, Georgia для крупных эмоциональных заголовков.
- Цвета: `#fffaf4`, `#24352f`, `#587563`, `#d87991`, `#a94465`, `#c5b4de`, `#d7ae67`.
- Изображения: WebP как основной формат, JPG/PNG как fallback там, где нужен; без внешних ссылок; alt-тексты заполнены.
