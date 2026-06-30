(function () {
  const root = document.documentElement;
  const header = document.querySelector("[data-site-header]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobileQuery = window.matchMedia("(max-width: 900px)");

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

  document.addEventListener("click", closeAllNavGroups);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllNavGroups();
      closeMobileMenu();
    }
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
    menuToggle.setAttribute("aria-label", "メニューを開く");
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
    menuToggle.setAttribute("aria-label", "メニューを閉じる");
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


  const communityDetailsToggle = document.querySelector("[data-community-details-toggle]");
  if (communityDetailsToggle) {
    const detailsId = communityDetailsToggle.getAttribute("aria-controls");
    const detailsBody = detailsId ? document.getElementById(detailsId) : null;
    const detailsLabel = communityDetailsToggle.querySelector("strong");

    communityDetailsToggle.addEventListener("click", () => {
      if (!detailsBody) return;
      const isOpen = communityDetailsToggle.getAttribute("aria-expanded") === "true";
      communityDetailsToggle.setAttribute("aria-expanded", String(!isOpen));
      detailsBody.hidden = isOpen;
      if (detailsLabel) detailsLabel.textContent = isOpen ? "詳細を見る" : "閉じる";
    });
  }

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

  const hero = document.querySelector(".hero");
  if (hero && !reduceMotion) {
    let pointerFrame = null;
    hero.addEventListener("pointermove", (event) => {
      if (mobileQuery.matches) return;
      if (pointerFrame) return;

      pointerFrame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 22;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
        root.style.setProperty("--hero-gaze-x", `${x.toFixed(2)}px`);
        root.style.setProperty("--hero-gaze-y", `${y.toFixed(2)}px`);
        pointerFrame = null;
      });
    }, { passive: true });

    hero.addEventListener("pointerleave", () => {
      root.style.setProperty("--hero-gaze-x", "0px");
      root.style.setProperty("--hero-gaze-y", "0px");
    });

    let scrollFrame = null;
    const updateHeroScroll = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / Math.max(window.innerHeight, 1)));
      root.style.setProperty("--hero-scroll", `${(progress * 42).toFixed(2)}px`);
      scrollFrame = null;
    };

    window.addEventListener("scroll", () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(updateHeroScroll);
    }, { passive: true });
    updateHeroScroll();
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      closeAllNavGroups();
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  });

  const canvas = document.querySelector(".hero-particles");
  if (!canvas) return;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let animationId = null;

  const particleCount = () => {
    if (mobileQuery.matches) return 34;
    return Math.min(96, Math.floor((window.innerWidth * window.innerHeight) / 14500));
  };

  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    particles = Array.from({ length: particleCount() }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      radius: Math.random() * 1.8 + 0.4,
      warmth: Math.random()
    }));
  };

  const drawStaticParticles = () => {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = particle.warmth > 0.86
        ? "rgba(214, 164, 58, 0.58)"
        : "rgba(115, 231, 255, 0.58)";
      context.fill();
    });
  };

  const renderParticles = () => {
    context.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = particle.warmth > 0.86
        ? "rgba(214, 164, 58, 0.64)"
        : "rgba(115, 231, 255, 0.66)";
      context.fill();

      for (let j = i + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 132) continue;

        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(other.x, other.y);
        context.strokeStyle = `rgba(115, 231, 255, ${0.11 * (1 - distance / 132)})`;
        context.lineWidth = 1;
        context.stroke();
      }
    }

    animationId = requestAnimationFrame(renderParticles);
  };

  resizeCanvas();

  if (reduceMotion) {
    drawStaticParticles();
  } else {
    renderParticles();
  }

  window.addEventListener("resize", () => {
    if (animationId) cancelAnimationFrame(animationId);
    resizeCanvas();
    if (reduceMotion) {
      drawStaticParticles();
    } else {
      renderParticles();
    }
  });
})();
