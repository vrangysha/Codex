(() => {
  function checkedValues(form, name) {
    return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
  }

  function applyUrlFilters(form) {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of params.entries()) {
      const input = form.querySelector(`input[name="${key}"][value="${value}"]`);
      if (input) input.checked = true;
    }
  }

  function sortProducts(list, sortBy) {
    const sorted = [...list];
    if (sortBy === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sortBy === "popular") sorted.sort((a, b) => Number(b.rating) - Number(a.rating));
    if (sortBy === "sale") sorted.sort((a, b) => Number(Boolean(b.oldPrice)) - Number(Boolean(a.oldPrice)));
    return sorted;
  }

  function initCatalog() {
    const form = document.querySelector("[data-catalog-filters]");
    const grid = document.querySelector("[data-catalog-grid]");
    const count = document.querySelector("[data-catalog-count]");
    const sort = document.querySelector("[data-catalog-sort]");
    const empty = document.querySelector("[data-catalog-empty]");
    if (!form || !grid || !window.LioraStore) return;

    applyUrlFilters(form);

    const render = () => {
      const min = Number(form.querySelector("[name='minPrice']").value || 0);
      const max = Number(form.querySelector("[name='maxPrice']").value || 100000);
      const colors = checkedValues(form, "color");
      const occasions = checkedValues(form, "occasion");
      const types = checkedValues(form, "type");
      const sortBy = sort ? sort.value : "popular";

      const filtered = window.LioraStore.products.filter((product) => {
        const priceOk = product.price >= min && product.price <= max;
        const colorOk = colors.length === 0 || colors.some((color) => product.colors.includes(color));
        const occasionOk = occasions.length === 0 || occasions.some((occasion) => product.occasions.includes(occasion));
        const typeOk = types.length === 0 || types.includes(product.type);
        return priceOk && colorOk && occasionOk && typeOk;
      });

      const result = sortProducts(filtered, sortBy);
      window.LioraStore.renderProducts(grid, result);
      if (count) count.textContent = `${result.length} товаров`;
      if (empty) empty.style.display = result.length ? "none" : "block";
    };

    form.addEventListener("input", render);
    form.addEventListener("change", render);
    if (sort) sort.addEventListener("change", render);
    form.querySelector("[data-clear-filters]")?.addEventListener("click", () => {
      form.reset();
      render();
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", initCatalog);
})();
