(() => {
  let promoActive = localStorage.getItem("lioraPromo") === "LIORA10";

  function money(value) {
    return window.LioraStore.formatPrice(Math.max(0, value));
  }

  function getLines() {
    return window.LioraStore.getCart()
      .map((item) => ({ ...item, product: window.LioraStore.getProduct(item.id) }))
      .filter((item) => item.product);
  }

  function totals() {
    const subtotal = getLines().reduce((sum, item) => sum + item.product.price * item.qty, 0);
    const delivery = subtotal === 0 || subtotal >= 5000 ? 0 : 390;
    const discount = promoActive ? Math.round(subtotal * 0.1) : 0;
    return { subtotal, delivery, discount, total: subtotal + delivery - discount };
  }

  function renderSummary() {
    const total = totals();
    document.querySelectorAll("[data-summary-subtotal]").forEach((node) => { node.textContent = money(total.subtotal); });
    document.querySelectorAll("[data-summary-delivery]").forEach((node) => { node.textContent = total.delivery ? money(total.delivery) : "Бесплатно"; });
    document.querySelectorAll("[data-summary-discount]").forEach((node) => { node.textContent = total.discount ? `−${money(total.discount)}` : "0 ₽"; });
    document.querySelectorAll("[data-summary-total]").forEach((node) => { node.textContent = money(total.total); });
  }

  function saveLines(lines) {
    window.LioraStore.saveCart(lines.map(({ product, ...line }) => line));
  }

  function renderCart() {
    const mount = document.querySelector("[data-cart-list]");
    if (!mount) return;
    const lines = getLines();
    const empty = document.querySelector("[data-cart-empty]");
    const checkoutLink = document.querySelector("[data-checkout-link]");

    if (empty) empty.style.display = lines.length ? "none" : "block";
    if (checkoutLink) checkoutLink.classList.toggle("secondary", lines.length === 0);
    if (!lines.length) {
      mount.innerHTML = "";
      renderSummary();
      return;
    }

    mount.innerHTML = lines.map((item) => `
      <article class="cart-item" data-cart-key="${item.key}">
        <img src="${item.product.image}" alt="${item.product.name}">
        <div>
          <h3>${item.product.name}</h3>
          <p>${item.options?.wrap || "Фирменная матовая"}${item.options?.time ? ` · ${item.options.time}` : ""}</p>
          <strong>${money(item.product.price)}</strong>
        </div>
        <div class="cart-line-actions">
          <div class="qty-control" aria-label="Количество ${item.product.name}">
            <button type="button" data-qty="-1" aria-label="Уменьшить">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="1" aria-label="Увеличить">+</button>
          </div>
          <button class="remove-button" type="button" data-remove>Удалить</button>
        </div>
      </article>`).join("");

    renderSummary();
  }

  function initCartPage() {
    const mount = document.querySelector("[data-cart-list]");
    if (!mount) return;

    mount.addEventListener("click", (event) => {
      const itemNode = event.target.closest("[data-cart-key]");
      if (!itemNode) return;
      const key = itemNode.dataset.cartKey;
      const lines = getLines();
      const line = lines.find((item) => item.key === key);
      if (!line) return;

      if (event.target.closest("[data-remove]")) {
        saveLines(lines.filter((item) => item.key !== key));
        window.LioraStore.showToast("Позиция удалена из корзины");
        renderCart();
        return;
      }

      const qtyButton = event.target.closest("[data-qty]");
      if (qtyButton) {
        line.qty += Number(qtyButton.dataset.qty);
        const next = line.qty <= 0 ? lines.filter((item) => item.key !== key) : lines;
        saveLines(next);
        renderCart();
      }
    });

    document.querySelector("[data-apply-promo]")?.addEventListener("click", () => {
      const input = document.querySelector("[data-promo-input]");
      const value = (input?.value || "").trim().toUpperCase();
      promoActive = value === "LIORA10" || value === "FIRST10";
      if (promoActive) {
        localStorage.setItem("lioraPromo", "LIORA10");
        window.LioraStore.showToast("Промокод применён: скидка 10%");
      } else {
        localStorage.removeItem("lioraPromo");
        window.LioraStore.showToast("Промокод не найден");
      }
      renderSummary();
    });

    renderCart();
  }

  function renderCheckoutItems() {
    const mount = document.querySelector("[data-checkout-items]");
    if (!mount) return;
    const lines = getLines();
    if (!lines.length) {
      mount.innerHTML = `<p>Корзина пуста. Добавьте букет из каталога, чтобы оформить заказ.</p>`;
      return;
    }
    mount.innerHTML = lines.map((item) => `
      <div class="summary-row">
        <span>${item.product.name} × ${item.qty}</span>
        <strong>${money(item.product.price * item.qty)}</strong>
      </div>`).join("");
  }

  function initCheckoutPage() {
    const form = document.querySelector("[data-checkout-form]");
    if (!form) return;
    renderCheckoutItems();
    renderSummary();

    const dateInput = form.querySelector("[name='deliveryDate']");
    if (dateInput) dateInput.valueAsDate = new Date();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!getLines().length) {
        window.LioraStore.showToast("Корзина пуста");
        return;
      }
      localStorage.removeItem("lioraCart");
      localStorage.removeItem("lioraPromo");
      window.LioraStore.updateCartCount();
      renderCheckoutItems();
      renderSummary();
      form.reset();
      document.querySelector("[data-order-success]").style.display = "block";
      window.LioraStore.showToast("Заказ принят. Менеджер скоро подтвердит детали.");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initCartPage();
    initCheckoutPage();
    renderSummary();
  });
})();
