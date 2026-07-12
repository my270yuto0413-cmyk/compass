import { useEffect, useState } from "react";
import { links } from "../../content/interactiveContent";
import { CTAButton } from "../ui/CTAButton";

const navItems = [
  { href: "#students", label: "Students" },
  { href: "#examples", label: "Examples" },
  { href: "#teachers", label: "Teachers" },
  { href: "#developers", label: "For Developers" }
];

const mobileItems = [
  { href: "#reality", label: "学生向け" },
  { href: "#ai-support", label: "AI機能" },
  { href: "#examples", label: "講義例" },
  { href: "#teachers", label: "教員向け" },
  { href: "#developers", label: "開発者向け" },
  { href: "#developer-profile", label: "開発者紹介" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", open);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="site-logo" href="#top" aria-label="COMPASS Interactive">
          <span className="logo-mark" aria-hidden="true">
            <span />
          </span>
          <span className="logo-copy">
            <strong>COMPASS Interactive</strong>
            <small>Lecture Experience</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="ページ内ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions" aria-label="外部リンク">
          <a className="header-compass-link" href={links.compassHome}>
            COMPASS
          </a>
          <CTAButton className="header-join" href={links.join}>
            参加する
          </CTAButton>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-scrim ${open ? "is-open" : ""}`} hidden={!open} onClick={() => setOpen(false)} />
      <aside className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open} hidden={!open}>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-top">
            <a className="mobile-menu-brand" href={links.compassHome} onClick={() => setOpen(false)}>
              <span>COMPASS</span>
              <small>Interactive</small>
            </a>
            <button className="mobile-menu-close" type="button" aria-label="メニューを閉じる" onClick={() => setOpen(false)}>
              <span />
              <span />
            </button>
          </div>
          <a className="mobile-home-cta" href={links.compassHome} onClick={() => setOpen(false)}>
            COMPASS 公式サイトへ戻る
          </a>
          <nav className="mobile-nav" aria-label="モバイルナビゲーション">
            {mobileItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </header>
  );
}
