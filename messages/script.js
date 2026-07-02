(function () {
  const header = document.querySelector("[data-site-header]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navGroups = Array.from(document.querySelectorAll("[data-nav-menu]"));

  const closeAllNavGroups = () => {
    navGroups.forEach((group) => {
      group.classList.remove("is-open");
      const trigger = group.querySelector(".nav-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  };

  navGroups.forEach((group) => {
    const trigger = group.querySelector(".nav-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = group.classList.contains("is-open");
      closeAllNavGroups();
      group.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      group.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      const firstLink = group.querySelector(".nav-panel a");
      if (firstLink) firstLink.focus();
    });
  });

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileScrim = document.querySelector(".mobile-scrim");
  const menuCloseControls = document.querySelectorAll("[data-menu-close]");
  let lastFocusedElement = null;

  const getFocusableMobileItems = () => {
    if (!mobileMenu) return [];
    return Array.from(mobileMenu.querySelectorAll("a, button"))
      .filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
  };

  function closeMobileMenu(options = {}) {
    const restoreFocus = options.restoreFocus !== false;
    if (!menuToggle || !mobileMenu || !mobileScrim) return;

    mobileMenu.classList.remove("is-open");
    mobileScrim.classList.remove("is-visible");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");

    window.setTimeout(() => {
      if (!mobileMenu.classList.contains("is-open")) {
        mobileMenu.hidden = true;
        mobileScrim.hidden = true;
      }
    }, reduceMotion ? 1 : 260);

    if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  const openMobileMenu = () => {
    if (!menuToggle || !mobileMenu || !mobileScrim) return;
    lastFocusedElement = document.activeElement;
    mobileMenu.hidden = false;
    mobileScrim.hidden = false;
    requestAnimationFrame(() => {
      mobileMenu.classList.add("is-open");
      mobileScrim.classList.add("is-visible");
    });
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");

    const focusable = getFocusableMobileItems();
    if (focusable.length) focusable[0].focus();
  };

  if (menuToggle && mobileMenu && mobileScrim) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu.classList.contains("is-open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    menuCloseControls.forEach((control) => {
      control.addEventListener("click", () => closeMobileMenu());
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMobileMenu({ restoreFocus: false }));
    });

    mobileMenu.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const focusable = getFocusableMobileItems();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  document.addEventListener("click", closeAllNavGroups);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllNavGroups();
      closeMobileMenu();
    }
  });

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

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
      target.style.transitionDelay = `${Math.min((index % 6) * 70, 280)}ms`;
      revealObserver.observe(target);
    });
  } else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }

  const messageBody = document.querySelector("[data-message-stagger]");
  if (messageBody) {
    const messageBlocks = Array.from(messageBody.children);
    messageBlocks.forEach((block, index) => {
      block.style.transitionDelay = reduceMotion ? "0ms" : `${Math.min(index * 70, 1260)}ms`;
    });

    requestAnimationFrame(() => {
      messageBody.classList.add("is-staggered");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      closeAllNavGroups();
      closeMobileMenu({ restoreFocus: false });
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  });
})();
