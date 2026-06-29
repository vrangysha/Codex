# Лиора — многостраничный сайт цветочного магазина

Готовая статическая основа e-commerce сайта: главная, каталог, карточка товара, корзина, оформление, доставка, о нас, контакты, акции и блог.

## Как открыть

Можно открыть `index.html` напрямую в браузере. Для проверки через локальный сервер из папки `flower-shop-site`:

```bash
python -m http.server 4173
```

После запуска сайт будет доступен по адресу `http://localhost:4173/`.

## Структура

```text
index.html
catalog.html
product.html
cart.html
checkout.html
delivery.html
about.html
contacts.html
promotions.html
blog.html
css/style.css
css/responsive.css
js/main.js
js/catalog.js
js/cart.js
assets/
ASSET-LIST.md
```

## Интерактивность

- Каталог фильтруется по цене, цвету, поводу и типу букета.
- Карточка товара открывается по `product.html?id=velvet-roses`.
- Корзина хранится в `localStorage`.
- Промокод `LIORA10` или `FIRST10` даёт скидку 10%.
- Оформление заказа очищает корзину и показывает подтверждение.
