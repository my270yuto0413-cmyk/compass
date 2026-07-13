import { useEffect, useRef, useState } from "react";
import { links } from "../../content/interactiveContent";
import { CTAButton } from "../ui/CTAButton";

const navItems = [
  { href: "#experience", label: "体験" },
  { href: "#students", label: "学生向け" },
  { href: "#features", label: "機能" },
  { href: "#ai-support", label: "AI" },
  { href: "#teachers", label: "教員向け" }
];

const mobileItems = [
  { href: "#experience", label: "3分でわかる講義体験", note: "Experience" },
  { href: "#students", label: "学生の体験", note: "For Students" },
  { href: "#features", label: "できること", note: "Features" },
  { href: "#ai-support", label: "AI学習サポート", note: "AI Intelligence" },
  { href: "#teachers", label: "教員の体験", note: "For Teachers" },
  { href: "#security", label: "安全性", note: "Trust & Security" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => toggleRef.current?.focus());
  };

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.body.classList.toggle("menu-open", open);
    document.addEventListener("keydown", handleKeyDown);
    if (open) window.requestAnimationFrame(() => menuRef.current?.querySelector<HTMLButtonElement>(".mobile-menu-close")?.focus());

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="site-logo" href="#top" aria-label="COMPASS Interactive トップへ">
          <span className="logo-mark" aria-hidden="true"><span /></span>
          <span className="logo-copy">
            <strong>COMPASS Interactive</strong>
            <small>Lecture Experience</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="ページ内ナビゲーション">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="header-actions" aria-label="体験へのリンク">
          <a className="header-compass-link" href={links.compassHome}>COMPASS</a>
          <CTAButton className="header-join" href={links.demo}>デモを体験 <span aria-hidden="true">→</span></CTAButton>
        </div>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </div>

      <div className={`mobile-scrim ${open ? "is-open" : ""}`} hidden={!open} onClick={() => closeMenu(true)} />
      <aside
        ref={menuRef}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
        aria-label="ナビゲーションメニュー"
        aria-modal="true"
        role="dialog"
        hidden={!open}
      >
        <div className="mobile-menu-panel">
          <div className="mobile-menu-top">
            <a className="mobile-menu-brand" href="#top" onClick={() => closeMenu()}>
              <span>COMPASS Interactive</span>
              <small>THE NEXT LECTURE EXPERIENCE</small>
            </a>
            <button className="mobile-menu-close" type="button" aria-label="メニューを閉じる" onClick={() => closeMenu(true)}>
              <span /><span />
            </button>
          </div>

          <div className="mobile-menu-hero">
            <span>登録不要・約3分</span>
            <strong>未来の講義を、いま体験。</strong>
            <CTAButton className="mobile-join" href={links.demo}>講義を体験する <span aria-hidden="true">→</span></CTAButton>
            <a className="mobile-code-join" data-cta-location="mobile-menu-code-join" href={links.join}>講義コードをお持ちの方</a>
          </div>

          <nav className="mobile-nav" aria-label="モバイルナビゲーション">
            {mobileItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => closeMenu()}>
                <span>{item.label}</span><small>{item.note}</small>
              </a>
            ))}
          </nav>

          <a className="mobile-home-cta" href={links.compassHome}>COMPASS 公式サイトへ戻る</a>
        </div>
      </aside>
    </header>
  );
}
