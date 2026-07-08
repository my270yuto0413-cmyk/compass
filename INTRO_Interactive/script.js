(function () {
  const header = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileScrim = document.querySelector(".mobile-scrim");
  const closeControls = document.querySelectorAll("[data-menu-close]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  function closeMobileMenu() {
    if (!menuToggle || !mobileMenu || !mobileScrim) return;
    mobileMenu.classList.remove("is-open");
    mobileScrim.hidden = true;
    mobileMenu.hidden = true;
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    document.body.classList.remove("menu-open");
  }

  function openMobileMenu() {
    if (!menuToggle || !mobileMenu || !mobileScrim) return;
    mobileMenu.hidden = false;
    mobileScrim.hidden = false;
    requestAnimationFrame(() => mobileMenu.classList.add("is-open"));
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "メニューを閉じる");
    document.body.classList.add("menu-open");
  }

  if (menuToggle && mobileMenu && mobileScrim) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu.classList.contains("is-open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    closeControls.forEach((control) => control.addEventListener("click", closeMobileMenu));
    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));
  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    revealTargets.forEach((target, index) => {
      target.style.transitionDelay = `${Math.min((index % 5) * 70, 280)}ms`;
      revealObserver.observe(target);
    });
  } else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }
})();
