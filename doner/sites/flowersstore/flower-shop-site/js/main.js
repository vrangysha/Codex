(() => {
  const currency = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  const products = [
    {
      id: "velvet-roses",
      name: "Бархатные розы",
      price: 5490,
      oldPrice: 6290,
      badge: "хит",
      image: "assets/images/bouquets/bouquet-velvet-roses-card.webp",
      category: "Розы",
      colors: ["pink", "red"],
      occasions: ["birthday", "date", "anniversary"],
      type: "mono",
      size: "45 см, 25 роз",
      composition: "Пионовидные розы, кустовая роза, эвкалипт, дизайнерская бумага",
      description: "Плотный премиальный букет с выразительным розовым акцентом и мягкой зеленью. Подходит для свидания, годовщины и красивого признания без лишних слов.",
      rating: "4.9",
    },
    {
      id: "morning-cream",
      name: "Кремовое утро",
      price: 4290,
      oldPrice: 0,
      badge: "нежный",
      image: "assets/images/bouquets/bouquet-morning-cream-card.webp",
      category: "Светлые букеты",
      colors: ["white", "cream"],
      occasions: ["birthday", "mother", "wedding"],
      type: "mixed",
      size: "40 см, 19 стеблей",
      composition: "Белые розы, эустома, маттиола, эвкалипт, лента",
      description: "Лёгкая композиция в кремово-белой гамме для тех случаев, когда хочется подарить спокойствие, заботу и свежесть.",
      rating: "4.8",
    },
    {
      id: "lavender-cloud",
      name: "Лавандовое облако",
      price: 4890,
      oldPrice: 5590,
      badge: "новинка",
      image: "assets/images/bouquets/bouquet-lavender-cloud-card.webp",
      category: "Авторские",
      colors: ["lavender", "white"],
      occasions: ["date", "birthday", "just"],
      type: "author",
      size: "42 см, 23 стебля",
      composition: "Гортензия, диантус, кустовая роза, лимониум, зелень",
      description: "Воздушный букет с лавандовыми оттенками и мягкой фактурой. Хорошо смотрится в интерьере и на фотографиях.",
      rating: "4.9",
    },
    {
      id: "apricot-light",
      name: "Абрикосовый свет",
      price: 3790,
      oldPrice: 0,
      badge: "до 2 часов",
      image: "assets/images/bouquets/bouquet-apricot-light-card.webp",
      category: "Сезонные",
      colors: ["peach", "cream"],
      occasions: ["birthday", "just", "corporate"],
      type: "mixed",
      size: "38 см, 17 стеблей",
      composition: "Ранункулюсы, кустовая роза, матрикария, эвкалипт",
      description: "Тёплый сезонный букет в персиковых тонах. Универсальный подарок для коллеги, подруги или близкого человека.",
      rating: "4.7",
    },
    {
      id: "ruby-date",
      name: "Рубиновое свидание",
      price: 6190,
      oldPrice: 6990,
      badge: "романтика",
      image: "assets/images/bouquets/bouquet-ruby-date-card.webp",
      category: "Романтика",
      colors: ["red", "pink"],
      occasions: ["date", "anniversary"],
      type: "mono",
      size: "50 см, 31 роза",
      composition: "Красные и малиновые розы, эвкалипт, матовая упаковка",
      description: "Эффектный букет для признания, годовщины и тех моментов, когда подарок должен говорить громче открытки.",
      rating: "5.0",
    },
    {
      id: "white-garden",
      name: "Белый сад",
      price: 5790,
      oldPrice: 0,
      badge: "свадьба",
      image: "assets/images/bouquets/bouquet-white-garden-card.webp",
      category: "Свадебные",
      colors: ["white", "green"],
      occasions: ["wedding", "mother", "corporate"],
      type: "author",
      size: "46 см, 27 стеблей",
      composition: "Белая роза, эустома, гвоздика, эвкалипт, декоративная зелень",
      description: "Чистая бело-зелёная композиция для свадьбы, важного события или сдержанного премиального подарка.",
      rating: "4.8",
    },
    {
      id: "pink-peonies",
      name: "Розовые пионы",
      price: 6890,
      oldPrice: 7490,
      badge: "сезон",
      image: "assets/images/bouquets/bouquet-pink-peonies-card.webp",
      category: "Пионы",
      colors: ["pink"],
      occasions: ["birthday", "date", "mother"],
      type: "mono",
      size: "43 см, 15 пионов",
      composition: "Пионы, пионовидная роза, эвкалипт, крафтовая бумага",
      description: "Объёмный сезонный букет с мягкими розовыми бутонами. Особенно хорош для дней рождения и тёплых признаний.",
      rating: "4.9",
    },
    {
      id: "soft-mix",
      name: "Нежный микс",
      price: 4590,
      oldPrice: 0,
      badge: "универсальный",
      image: "assets/images/bouquets/bouquet-soft-mix-card.webp",
      category: "Микс",
      colors: ["pink", "lavender", "cream"],
      occasions: ["birthday", "just", "mother"],
      type: "mixed",
      size: "40 см, 21 стебель",
      composition: "Роза, эустома, диантус, статица, сезонная зелень",
      description: "Композиция для любого повода: мягкая, свежая и достаточно выразительная, чтобы выглядеть празднично.",
      rating: "4.7",
    },
    {
      id: "sunrise",
      name: "Тёплый рассвет",
      price: 3990,
      oldPrice: 4690,
      badge: "акция",
      image: "assets/images/bouquets/bouquet-sunrise-card.webp",
      category: "Сезонные",
      colors: ["peach", "cream"],
      occasions: ["birthday", "corporate", "just"],
      type: "mixed",
      size: "39 см, 18 стеблей",
      composition: "Гербера, роза, матрикария, альстромерия, зелень",
      description: "Солнечный букет для доброго утра, благодарности или поздравления без формальности.",
      rating: "4.6",
    },
    {
      id: "eucalyptus",
      name: "Эвкалиптовая свежесть",
      price: 5190,
      oldPrice: 0,
      badge: "стойкий",
      image: "assets/images/bouquets/bouquet-eucalyptus-card.webp",
      category: "Зелёные букеты",
      colors: ["white", "green"],
      occasions: ["corporate", "just", "mother"],
      type: "author",
      size: "48 см, 24 стебля",
      composition: "Эвкалипт, белая роза, скиммия, гвоздика, декоративная зелень",
      description: "Свежая зелёная композиция с деликатными белыми цветами. Хорошо подходит для интерьера и деловых подарков.",
      rating: "4.8",
    },
    {
      id: "classic-red",
      name: "Классика красных роз",
      price: 7490,
      oldPrice: 8290,
      badge: "премиум",
      image: "assets/images/bouquets/bouquet-classic-red-card.webp",
      category: "Розы",
      colors: ["red"],
      occasions: ["date", "anniversary", "wedding"],
      type: "mono",
      size: "60 см, 51 роза",
      composition: "Красные розы сорта Explorer, атласная лента, премиальная упаковка",
      description: "Большой классический букет, который держит форму и выглядит торжественно при вручении.",
      rating: "4.9",
    },
    {
      id: "lilac-dream",
      name: "Сиреневая мечта",
      price: 5390,
      oldPrice: 0,
      badge: "ароматный",
      image: "assets/images/bouquets/bouquet-lilac-dream-card.webp",
      category: "Авторские",
      colors: ["lavender", "pink"],
      occasions: ["birthday", "date", "just"],
      type: "author",
      size: "44 см, 22 стебля",
      composition: "Лизиантус, диантус, роза, лимониум, эвкалипт",
      description: "Лёгкая авторская композиция в сиренево-розовой гамме с деликатным ароматом и нежной упаковкой.",
      rating: "4.8",
    },
  ];

  const categories = [
    {
      title: "День рождения",
      text: "Яркие букеты, которые легко выбрать даже в последний момент.",
      image: "assets/images/catalog/category-birthday.webp",
      href: "catalog.html?occasion=birthday",
    },
    {
      title: "Свадьба",
      text: "Светлые композиции, букеты невесты и оформление камерных торжеств.",
      image: "assets/images/catalog/category-wedding.webp",
      href: "catalog.html?occasion=wedding",
    },
    {
      title: "Свидание",
      text: "Романтичные букеты с красивой упаковкой и открыткой.",
      image: "assets/images/catalog/category-date.webp",
      href: "catalog.html?occasion=date",
    },
    {
      title: "Монобукеты",
      text: "Розы, пионы, тюльпаны и сезонные цветы в чистой подаче.",
      image: "assets/images/catalog/category-mono.webp",
      href: "catalog.html?type=mono",
    },
    {
      title: "Подарки",
      text: "Цветы, свечи, открытки и сладкие наборы в одном заказе.",
      image: "assets/images/catalog/category-gifts.webp",
      href: "promotions.html",
    },
    {
      title: "Корпоративные",
      text: "Букеты для клиентов, партнёров, офисов и мероприятий.",
      image: "assets/images/catalog/category-corporate.webp",
      href: "catalog.html?occasion=corporate",
    },
  ];

  function formatPrice(value) {
    return currency.format(value).replace(/\s?₽/, " ₽");
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem("lioraCart")) || [];
    } catch {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem("lioraCart", JSON.stringify(cart));
    updateCartCount();
  }

  function getProduct(id) {
    return products.find((product) => product.id === id);
  }

  function addToCart(id, qty = 1, options = {}) {
    const product = getProduct(id);
    if (!product) return;
    const cart = getCart();
    const key = JSON.stringify({ id, wrap: options.wrap || "Фирменная матовая", date: options.date || "", time: options.time || "" });
    const existing = cart.find((item) => item.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ key, id, qty, options });
    }
    saveCart(cart);
    showToast(`${product.name} добавлен в корзину`);
  }

  function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
      node.textContent = String(count);
      node.setAttribute("aria-label", `${count} товаров в корзине`);
    });
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function productCard(product) {
    return `
      <article class="product-card">
        <a class="product-media" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="Открыть ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="badge product-badge">${product.badge}</span>
        </a>
        <div class="product-body">
          <h3><a href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></h3>
          <p>${product.composition}</p>
          <div class="product-meta">
            <div>
              <span class="price">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
            </div>
            <span aria-label="Рейтинг">★ ${product.rating}</span>
          </div>
          <div class="card-actions">
            <button class="btn small" type="button" data-add-to-cart="${product.id}">В корзину</button>
            <a class="icon-button" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="Подробнее о ${product.name}">→</a>
          </div>
        </div>
      </article>`;
  }

  function renderProducts(target, list, limit) {
    const node = typeof target === "string" ? document.querySelector(target) : target;
    if (!node) return;
    const items = limit ? list.slice(0, limit) : list;
    node.innerHTML = items.map(productCard).join("");
  }

  function renderHomeCategories() {
    const node = document.querySelector("[data-category-grid]");
    if (!node) return;
    node.innerHTML = categories.map((category) => `
      <a class="category-card" href="${category.href}">
        <img src="${category.image}" alt="${category.title}" loading="lazy">
        <div>
          <h3>${category.title}</h3>
          <p>${category.text}</p>
        </div>
      </a>`).join("");
  }

  function initHeader() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector("[data-nav-toggle]");
    if (!header || !toggle) return;
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function initFaq() {
    document.querySelectorAll(".faq-question").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
        const sign = button.querySelector("span:last-child");
        if (sign) sign.textContent = isOpen ? "−" : "+";
      });
    });
  }

  function initNewsletter() {
    document.querySelectorAll("[data-simple-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.reset();
        showToast("Спасибо! Мы свяжемся с вами в ближайшее время.");
      });
    });
  }

  function initProductPage() {
    const mount = document.querySelector("[data-product-detail]");
    if (!mount) return;
    const params = new URLSearchParams(window.location.search);
    const product = getProduct(params.get("id")) || products[0];
    document.title = `${product.name} — Лиора`;
    const breadcrumb = document.querySelector("[data-product-name]");
    if (breadcrumb) breadcrumb.textContent = product.name;

    mount.innerHTML = `
      <div class="product-detail-media">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <span class="badge">${product.badge}</span>
        <h1>${product.name}</h1>
        <div class="detail-price">
          <span class="price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
        </div>
        <p>${product.description}</p>
        <div class="detail-meta">
          <div class="meta-box"><span>Состав</span><strong>${product.composition}</strong></div>
          <div class="meta-box"><span>Размер</span><strong>${product.size}</strong></div>
          <div class="meta-box"><span>Доставка</span><strong>Сегодня от 2 часов по Москве</strong></div>
          <div class="meta-box"><span>Гарантия</span><strong>Замена букета, если что-то не так</strong></div>
        </div>
        <div class="product-options">
          <label class="field">
            <span>Упаковка</span>
            <select data-product-wrap>
              <option>Фирменная матовая</option>
              <option>Крафтовая с лентой</option>
              <option>Премиальная коробка</option>
            </select>
          </label>
          <div class="form-row">
            <label class="field">
              <span>Дата доставки</span>
              <input type="date" data-product-date>
            </label>
            <label class="field">
              <span>Время</span>
              <select data-product-time>
                <option>Ближайшие 2 часа</option>
                <option>10:00–13:00</option>
                <option>13:00–16:00</option>
                <option>16:00–19:00</option>
                <option>19:00–22:00</option>
              </select>
            </label>
          </div>
        </div>
        <div class="hero-actions">
          <button class="btn rose" type="button" data-product-add="${product.id}">Купить букет</button>
          <a class="btn secondary" href="catalog.html">Вернуться в каталог</a>
        </div>
      </div>`;

    const dateInput = mount.querySelector("[data-product-date]");
    if (dateInput) dateInput.valueAsDate = new Date();

    mount.querySelector("[data-product-add]").addEventListener("click", () => {
      addToCart(product.id, 1, {
        wrap: mount.querySelector("[data-product-wrap]").value,
        date: mount.querySelector("[data-product-date]").value,
        time: mount.querySelector("[data-product-time]").value,
      });
    });

    const related = products.filter((item) => item.id !== product.id && item.occasions.some((occasion) => product.occasions.includes(occasion)));
    renderProducts("[data-related-products]", related, 4);
  }

  function initAddButtons() {
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-add-to-cart]");
      if (!button) return;
      addToCart(button.dataset.addToCart);
    });
  }

  function initHomeProducts() {
    document.querySelectorAll("[data-products]").forEach((node) => {
      const mode = node.dataset.products;
      const list = mode === "sale"
        ? products.filter((product) => product.oldPrice)
        : products.filter((product) => ["velvet-roses", "lavender-cloud", "white-garden", "pink-peonies"].includes(product.id));
      renderProducts(node, list, Number(node.dataset.limit || 4));
    });
  }

  window.LioraStore = {
    products,
    categories,
    formatPrice,
    getCart,
    saveCart,
    getProduct,
    addToCart,
    renderProducts,
    productCard,
    updateCartCount,
    showToast,
  };

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initFaq();
    initNewsletter();
    initAddButtons();
    initHomeProducts();
    renderHomeCategories();
    initProductPage();
    updateCartCount();
  });
})();
