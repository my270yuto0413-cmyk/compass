import { links } from "../../content/interactiveContent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-logo" href="#top">
          <span className="logo-mark" aria-hidden="true">
            <span />
          </span>
          <span>
            <strong>COMPASS Interactive</strong>
            <small>薬学・生命科学の参加型講義システム</small>
          </span>
        </a>
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <a href="#students">Students</a>
          <a href="#examples">Examples</a>
          <a href="#teachers">Teachers</a>
          <a href="#technology">Technology</a>
          <a href={links.compassHome}>COMPASSへ戻る</a>
        </nav>
      </div>
    </footer>
  );
}
