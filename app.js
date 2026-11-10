(() => {
  const heroImage = document.querySelector("#hero-image");
  const mobileSource = document.querySelector("#hero-mobile-source");
  const mobileQuery = window.matchMedia("(max-width: 760px)");
  const header = document.querySelector("#site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const storageFallbacks = {
    mobile: "/manus-storage/cover-mobile_cc8c34b8.webp",
    desktop: "/manus-storage/cover-desktop_937b0add.webp",
  };

  if (heroImage) {
    heroImage.addEventListener("error", () => {
      if (heroImage.dataset.fallbackUsed === "true") return;
      heroImage.dataset.fallbackUsed = "true";
      const format = mobileQuery.matches ? "mobile" : "desktop";
      mobileSource?.removeAttribute("srcset");
      heroImage.src = storageFallbacks[format];
    });
  }

  const setMenuOpen = (open) => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    navigation.classList.toggle("site-nav--open", open);
    header?.classList.toggle("nav-is-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  menuButton?.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    document.documentElement.classList.add("has-motion");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }
})();
