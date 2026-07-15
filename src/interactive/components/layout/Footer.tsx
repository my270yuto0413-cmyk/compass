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
          <a href={links.demo}>デモを体験</a>
          <a href="#students">学生向け</a>
          <a href="#ai-support">AI機能</a>
          <a href="#examples">講義例</a>
          <a href="#teachers">教員向け</a>
          <a href="#developers">開発者向け</a>
          <a href={links.compassHome}>COMPASSへ戻る</a>
        </nav>
        <div className="footer-meta">
          <p className="footer-note">AIとリアルタイム技術で、講義を次の次元へ。</p>
          <p className="footer-copy">© 2026 COMPASS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
