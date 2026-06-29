const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const toast = document.querySelector("[data-toast]");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav] a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-faq-item]").forEach((item, index) => {
  const button = item.querySelector("button");
  if (!button) return;
  if (index === 0) item.classList.add("is-open");
  button.addEventListener("click", () => {
    item.classList.toggle("is-open");
  });
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = tabs.querySelectorAll("[data-tab]");
  const panels = document.querySelectorAll("[data-tab-panel]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === target));
    });
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-gallery-item]").forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.galleryItem === filter;
      item.style.display = shouldShow ? "" : "none";
    });
  });
});

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = '<img alt="">';
document.body.appendChild(lightbox);

document.querySelectorAll("[data-lightbox]").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (!img) return;
    lightbox.querySelector("img").src = img.currentSrc || img.src;
    lightbox.querySelector("img").alt = img.alt;
    lightbox.classList.add("is-open");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
});

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Заявка принята. Администратор свяжется с вами в ближайшее время.");
    form.reset();
  });
});

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = String(new Date().getFullYear());
});
