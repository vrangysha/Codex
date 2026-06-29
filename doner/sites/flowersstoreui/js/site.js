(function () {
  const products = [
    {
      id: "red-roses",
      name: "Красные розы",
      category: "roses",
      categoryName: "Розы",
      price: 4590,
      oldPrice: 5290,
      tag: "Хит",
      image: "assets/generated/products/red-roses.webp",
      detail: "assets/generated/products/red-roses.webp",
      short: "Глубокий красный тон, сатиновая лента и плотная сборка для главного признания.",
      description: "Классический букет из красных роз с плотной спиральной сборкой, зеленью и мягкой дизайнерской упаковкой. Подходит для годовщины, свидания и яркого знака внимания.",
      stems: "15 роз",
      palette: "Красный, кремовый, зелень",
      time: "от 90 минут"
    },
    {
      id: "white-roses",
      name: "Белые розы",
      category: "roses",
      categoryName: "Розы",
      price: 4890,
      tag: "Нежный",
      image: "assets/generated/products/white-roses.webp",
      detail: "assets/generated/products/white-roses.webp",
      short: "Чистая белая гамма для свадеб, благодарности и спокойных премиальных подарков.",
      description: "Воздушный букет белых роз в молочной упаковке. Флористы сохраняют крупные бутоны открытыми наполовину, чтобы композиция выглядела мягко и дорого.",
      stems: "19 роз",
      palette: "Белый, молочный, зелень",
      time: "от 2 часов"
    },
    {
      id: "pink-peonies",
      name: "Розовые пионы",
      category: "peonies",
      categoryName: "Пионы",
      price: 5790,
      oldPrice: 6390,
      tag: "Сезон",
      image: "assets/generated/products/pink-peonies.webp",
      detail: "assets/generated/products/pink-peonies.webp",
      short: "Пышные пионы, кремовые розы и эвкалипт в мягкой пастельной гамме.",
      description: "Сезонная композиция с розовыми пионами, садовыми розами и фактурной зеленью. Букет выглядит объемно, но остается легким и романтичным.",
      stems: "9 пионов и микс",
      palette: "Розовый, кремовый, шалфей",
      time: "от 2 часов"
    },
    {
      id: "spring-tulips",
      name: "Весенние тюльпаны",
      category: "season",
      categoryName: "Сезонные",
      price: 3290,
      tag: "Свежий",
      image: "assets/generated/products/spring-tulips.webp",
      detail: "assets/generated/products/spring-tulips.webp",
      short: "Легкий букет тюльпанов для теплого поздравления без лишней торжественности.",
      description: "Собираем из свежих тюльпанов с упругими стеблями и аккуратной натуральной упаковкой. Хороший выбор для дня рождения, весеннего жеста или комплимента.",
      stems: "25 тюльпанов",
      palette: "Розовый, белый, зеленый",
      time: "от 90 минут"
    },
    {
      id: "blue-hydrangeas",
      name: "Лавандовые гортензии",
      category: "premium",
      categoryName: "Премиум",
      price: 6890,
      tag: "Премиум",
      image: "assets/generated/products/lavender-hydrangeas.webp",
      detail: "assets/generated/products/lavender-hydrangeas.webp",
      short: "Объемные гортензии с прохладной лавандовой нотой и белыми акцентами.",
      description: "Композиция для тех, кто любит выразительный объем без яркой пестроты. Гортензии дополняются нежными акцентными цветами и плотной влагостойкой упаковкой.",
      stems: "5 гортензий и микс",
      palette: "Лаванда, белый, зелень",
      time: "от 2 часов"
    },
    {
      id: "white-lilies",
      name: "Белые лилии",
      category: "premium",
      categoryName: "Премиум",
      price: 5490,
      tag: "Аромат",
      image: "assets/generated/products/white-lilies.webp",
      detail: "assets/generated/products/white-lilies.webp",
      short: "Торжественный букет с чистым ароматом и выразительными линиями лепестков.",
      description: "Белые лилии в спокойной зеленой поддержке. Букет подходит для официальных поздравлений, семейных праздников и интерьеров с большим пространством.",
      stems: "7 лилий и зелень",
      palette: "Белый, зеленый",
      time: "от 2 часов"
    },
    {
      id: "alstroemeria",
      name: "Альстромерия",
      category: "season",
      categoryName: "Сезонные",
      price: 3690,
      tag: "Долго стоит",
      image: "assets/generated/products/alstroemeria.webp",
      detail: "assets/generated/products/alstroemeria.webp",
      short: "Стойкая композиция с мягкими переходами цвета для ежедневного подарка.",
      description: "Альстромерия раскрывается постепенно и долго сохраняет свежий вид. Добавляем легкую зелень и упаковку в тон, чтобы букет выглядел собранно.",
      stems: "17 веток",
      palette: "Розовый, персиковый, белый",
      time: "от 90 минут"
    },
    {
      id: "orchid-box",
      name: "Орхидеи в коробке",
      category: "gifts",
      categoryName: "Подарочные наборы",
      price: 7490,
      tag: "Gift box",
      image: "assets/generated/products/orchid-box.webp",
      detail: "assets/generated/products/orchid-box.webp",
      short: "Премиальная коробка с орхидеями, открыткой и устойчивой влажной базой.",
      description: "Готовый подарок в фирменной коробке Lumi Fleur. Цветы стоят на флористической губке, поэтому композиция легко переносит доставку и не требует вазы.",
      stems: "Орхидеи и сезонный микс",
      palette: "Белый, розовый, золото",
      time: "от 2 часов"
    },
    {
      id: "daisies",
      name: "Романтичные ромашки",
      category: "season",
      categoryName: "Сезонные",
      price: 2990,
      tag: "Легкий",
      image: "assets/generated/products/romantic-daisies.webp",
      detail: "assets/generated/products/romantic-daisies.webp",
      short: "Светлая полевая композиция для теплого и непринужденного поздравления.",
      description: "Ромашки, мелкая зелень и мягкая упаковка создают ощущение летнего букета. Хорошо подходит для дружеских подарков и комплиментов без повода.",
      stems: "21 стебель",
      palette: "Белый, желтый, зеленый",
      time: "от 90 минут"
    },
    {
      id: "author-mix",
      name: "Авторский микс",
      category: "premium",
      categoryName: "Премиум",
      price: 8290,
      tag: "Флорист choice",
      image: "assets/generated/products/author-mix.webp",
      detail: "assets/generated/products/author-mix.webp",
      short: "Композиция дня из лучших свежих поставок, собранная ведущим флористом.",
      description: "Каждый авторский микс отличается деталями, но сохраняет общий стиль Lumi Fleur: объем, мягкая палитра, натуральная зелень и аккуратная подарочная подача.",
      stems: "Сезонный микс",
      palette: "Пастель, зелень, акцент",
      time: "от 2 часов"
    },
    {
      id: "flower-box-pink",
      name: "Розовая коробка",
      category: "gifts",
      categoryName: "Подарочные наборы",
      price: 6290,
      tag: "Без вазы",
      image: "assets/generated/products/pink-flower-box.webp",
      detail: "assets/generated/products/pink-flower-box.webp",
      short: "Композиция в коробке, которая сразу готова к вручению и хранению.",
      description: "Коробка с нежными цветами на влажной базе. Подходит для офиса, доставки в ресторан, поздравления коллеги или подарка с открыткой.",
      stems: "Пионы, розы, микс",
      palette: "Розовый, кремовый",
      time: "от 2 часов"
    },
    {
      id: "deluxe-bouquet",
      name: "Deluxe bouquet",
      category: "premium",
      categoryName: "Премиум",
      price: 9900,
      tag: "Limited",
      image: "assets/generated/products/deluxe-pastel.webp",
      detail: "assets/generated/products/deluxe-pastel.webp",
      short: "Большой праздничный букет с многослойной фактурой и премиальной упаковкой.",
      description: "Композиция для больших поводов: юбилей, предложение, свадебное утро или VIP-подарок. Флорист согласует палитру перед сборкой.",
      stems: "Крупный сезонный микс",
      palette: "Пастель, белый, зелень",
      time: "от 3 часов"
    }
  ];

  const categoryIds = ["all", "roses", "peonies", "season", "premium", "gifts"];

  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  });

  const storageKey = "lumi-fleur-cart";
  const byId = (id) => products.find((product) => product.id === id);

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (error) {
      return {};
    }
  }

  function setCart(cart) {
    localStorage.setItem(storageKey, JSON.stringify(cart));
    updateCartCount();
  }

  function cartQuantity() {
    return Object.values(getCart()).reduce((sum, item) => sum + item.quantity, 0);
  }

  function cartTotal() {
    return Object.entries(getCart()).reduce((sum, [id, item]) => {
      const product = byId(id);
      return product ? sum + product.price * item.quantity : sum;
    }, 0);
  }

  function updateCartCount() {
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
      node.textContent = String(cartQuantity());
    });
  }

  function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3200);
  }

  function addToCart(id, quantity = 1) {
    const product = byId(id);
    if (!product) return;
    const cart = getCart();
    cart[id] = {
      quantity: Math.max(1, (cart[id]?.quantity || 0) + quantity)
    };
    setCart(cart);
    showToast(`${product.name} добавлен в корзину`);
    renderCartPage();
  }

  function updateCartItem(id, quantity) {
    const cart = getCart();
    if (quantity <= 0) {
      delete cart[id];
    } else {
      cart[id] = { quantity };
    }
    setCart(cart);
    renderCartPage();
  }

  function productCard(product) {
    return `
      <article class="product-card">
        <a class="product-card__image" href="product.html?item=${product.id}" aria-label="${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="tag">${product.tag}</span>
        </a>
        <div class="product-card__body">
          <a class="product-card__title" href="product.html?item=${product.id}">${product.name}</a>
          <p class="product-card__meta">${product.short}</p>
          <div class="product-card__foot">
            <div>
              <span class="price">${formatter.format(product.price)}</span>
              ${product.oldPrice ? `<span class="old-price">${formatter.format(product.oldPrice)}</span>` : ""}
            </div>
            <button class="button button--primary button--small" type="button" data-add-to-cart="${product.id}">В корзину</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderHomeProducts() {
    document.querySelectorAll("[data-featured-grid]").forEach((grid) => {
      const featured = products.filter((product) => ["red-roses", "pink-peonies", "orchid-box", "author-mix"].includes(product.id));
      grid.innerHTML = featured.map(productCard).join("");
    });
  }

  function renderRelatedProducts(currentId) {
    document.querySelectorAll("[data-related-grid]").forEach((grid) => {
      const related = products.filter((product) => product.id !== currentId).slice(0, 4);
      grid.innerHTML = related.map(productCard).join("");
    });
  }

  function renderCatalog() {
    const grid = document.querySelector("[data-catalog-grid]");
    if (!grid) return;

    const note = document.querySelector("[data-result-note]");
    const search = document.querySelector("[data-search]");
    const sort = document.querySelector("[data-sort]");
    const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
    const initialCategory = new URLSearchParams(window.location.search).get("category");
    let activeCategory = categoryIds.includes(initialCategory) ? initialCategory : "all";

    function paint() {
      const query = (search?.value || "").trim().toLowerCase();
      let list = products.filter((product) => {
        const matchesCategory = activeCategory === "all" || product.category === activeCategory;
        const haystack = `${product.name} ${product.categoryName} ${product.short}`.toLowerCase();
        return matchesCategory && haystack.includes(query);
      });

      if (sort?.value === "price-asc") {
        list = list.sort((a, b) => a.price - b.price);
      }
      if (sort?.value === "price-desc") {
        list = list.sort((a, b) => b.price - a.price);
      }
      if (sort?.value === "popular") {
        const rank = ["pink-peonies", "red-roses", "author-mix", "orchid-box"];
        list = list.sort((a, b) => rank.indexOf(b.id) - rank.indexOf(a.id));
      }

      grid.innerHTML = list.length
        ? list.map(productCard).join("")
        : `<p class="result-note">По этому запросу букетов не найдено. Попробуйте другой цвет или повод.</p>`;

      if (note) {
        note.textContent = `${list.length} ${plural(list.length, ["букет", "букета", "букетов"])} в подборке`;
      }
    }

    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String((button.dataset.filter || "all") === activeCategory));
      button.addEventListener("click", () => {
        activeCategory = button.dataset.filter || "all";
        filterButtons.forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
        paint();
      });
    });

    search?.addEventListener("input", paint);
    sort?.addEventListener("change", paint);
    paint();
  }

  function renderProductDetail() {
    const root = document.querySelector("[data-product-detail]");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("item") || "pink-peonies";
    const product = byId(id) || products[0];
    let quantity = 1;

    document.title = `${product.name} - Lumi Fleur`;

    root.innerHTML = `
      <div class="product-detail__gallery">
        <img src="${product.detail}" alt="${product.name}">
      </div>
      <div class="product-detail__info">
        <span class="tag">${product.tag}</span>
        <h1>${product.name}</h1>
        <p class="product-detail__desc">${product.description}</p>
        <div class="product-detail__price">
          <span class="price">${formatter.format(product.price)}</span>
          ${product.oldPrice ? `<span class="old-price">${formatter.format(product.oldPrice)}</span>` : ""}
        </div>
        <div class="option-grid" aria-label="Параметры букета">
          <div class="option"><strong>Состав</strong><span>${product.stems}</span></div>
          <div class="option"><strong>Палитра</strong><span>${product.palette}</span></div>
          <div class="option"><strong>Готовность</strong><span>${product.time}</span></div>
        </div>
        <div class="product-actions">
          <div class="quantity" aria-label="Количество">
            <button type="button" data-qty-minus aria-label="Уменьшить количество">-</button>
            <span data-qty-value>1</span>
            <button type="button" data-qty-plus aria-label="Увеличить количество">+</button>
          </div>
          <button class="button button--primary" type="button" data-detail-add="${product.id}">Добавить в корзину</button>
        </div>
        <ul class="detail-list">
          <li>Перед сборкой флорист проверяет свежесть каждого стебля.</li>
          <li>В комплект входит открытка, инструкция по уходу и фирменная упаковка.</li>
          <li>Можно согласовать оттенок ленты и текст открытки после оформления заказа.</li>
        </ul>
      </div>
    `;

    const value = root.querySelector("[data-qty-value]");
    root.querySelector("[data-qty-minus]").addEventListener("click", () => {
      quantity = Math.max(1, quantity - 1);
      value.textContent = String(quantity);
    });
    root.querySelector("[data-qty-plus]").addEventListener("click", () => {
      quantity += 1;
      value.textContent = String(quantity);
    });
    root.querySelector("[data-detail-add]").addEventListener("click", () => {
      addToCart(product.id, quantity);
    });
    renderRelatedProducts(product.id);
  }

  function renderCartPage() {
    const list = document.querySelector("[data-cart-list]");
    const summary = document.querySelector("[data-cart-summary]");
    if (!list || !summary) return;

    const cart = getCart();
    const entries = Object.entries(cart)
      .map(([id, item]) => ({ product: byId(id), quantity: item.quantity }))
      .filter((item) => item.product);

    if (!entries.length) {
      list.innerHTML = `
        <div class="cart-empty">
          <div>
            <span class="eyebrow">Корзина</span>
            <h2>Пока пусто</h2>
            <p class="lead">Выберите букет из каталога, а мы сохраним состав заказа здесь.</p>
            <div class="hero__actions">
              <a class="button button--primary" href="catalog.html">Перейти в каталог</a>
            </div>
          </div>
          <div class="cart-empty__image">
            <img src="assets/generated/products/author-mix.webp" alt="Нежный букет Lumi Fleur для пустой корзины" loading="lazy">
          </div>
        </div>
      `;
    } else {
      list.innerHTML = entries.map(({ product, quantity }) => `
        <article class="cart-line">
          <a class="cart-line__image" href="product.html?item=${product.id}" aria-label="${product.name}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
          </a>
          <div class="cart-line__info">
            <h3>${product.name}</h3>
            <p>${product.categoryName} - ${formatter.format(product.price)}</p>
          </div>
          <div class="cart-line__actions">
            <div class="quantity" aria-label="Количество ${product.name}">
              <button type="button" data-cart-minus="${product.id}" aria-label="Уменьшить ${product.name}">-</button>
              <span>${quantity}</span>
              <button type="button" data-cart-plus="${product.id}" aria-label="Увеличить ${product.name}">+</button>
            </div>
            <button class="text-button" type="button" data-cart-remove="${product.id}">Удалить</button>
          </div>
        </article>
      `).join("");
    }

    const total = cartTotal();
    const delivery = total > 0 && total < 5000 ? 490 : 0;
    summary.innerHTML = `
      <h2>Итого</h2>
      <div class="summary-row"><span>Товары</span><strong>${formatter.format(total)}</strong></div>
      <div class="summary-row"><span>Доставка</span><strong>${delivery ? formatter.format(delivery) : "Бесплатно"}</strong></div>
      <div class="summary-row summary-total"><span>К оплате</span><strong>${formatter.format(total + delivery)}</strong></div>
      <p class="product-card__meta summary-note">Бесплатная доставка от 5 000 ₽. Менеджер подтвердит время и открытку после заявки.</p>
    `;

    const checkout = document.querySelector("[data-checkout-submit]");
    if (checkout) {
      checkout.disabled = !entries.length;
    }
  }

  function plural(number, words) {
    const abs = Math.abs(number) % 100;
    const last = abs % 10;
    if (abs > 10 && abs < 20) return words[2];
    if (last > 1 && last < 5) return words[1];
    if (last === 1) return words[0];
    return words[2];
  }

  function setActiveNav() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__links a").forEach((link) => {
      const target = link.getAttribute("href");
      if (target === current || (current === "" && target === "index.html")) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function bindMenu() {
    const button = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("#primary-menu");
    if (!button || !menu) return;
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("menu-open", !expanded);
    });
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        button.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  function bindCartEvents() {
    document.addEventListener("click", (event) => {
      const addButton = event.target.closest("[data-add-to-cart]");
      if (addButton) {
        addToCart(addButton.dataset.addToCart, 1);
      }

      const minus = event.target.closest("[data-cart-minus]");
      if (minus) {
        const cart = getCart();
        const id = minus.dataset.cartMinus;
        updateCartItem(id, (cart[id]?.quantity || 1) - 1);
      }

      const plus = event.target.closest("[data-cart-plus]");
      if (plus) {
        const cart = getCart();
        const id = plus.dataset.cartPlus;
        updateCartItem(id, (cart[id]?.quantity || 0) + 1);
      }

      const remove = event.target.closest("[data-cart-remove]");
      if (remove) {
        updateCartItem(remove.dataset.cartRemove, 0);
      }
    });
  }

  function bindForms() {
    document.querySelectorAll("[data-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const status = form.querySelector("[data-form-status]");
        if (!form.checkValidity()) {
          form.reportValidity();
          if (status) status.textContent = "Проверьте обязательные поля.";
          return;
        }

        if (form.matches("[data-checkout-form]")) {
          localStorage.removeItem(storageKey);
          updateCartCount();
          renderCartPage();
          showToast("Заказ отправлен. Мы свяжемся для подтверждения.");
        }

        if (status) {
          status.textContent = form.dataset.success || "Спасибо, заявка отправлена.";
        }
        form.reset();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    bindMenu();
    bindCartEvents();
    bindForms();
    updateCartCount();
    renderHomeProducts();
    renderCatalog();
    renderProductDetail();
    renderCartPage();
  });
})();
