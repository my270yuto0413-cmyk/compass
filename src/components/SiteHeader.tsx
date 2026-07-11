export function SiteHeader() {
  return (
    <>
<a className="skip-link" href="#main">本文へスキップ</a>

  <header className="site-header" data-site-header>
    <div className="header-inner">
      <a className="site-logo" href="#top" aria-label="COMPASS Home">
        <span className="logo-mark" aria-hidden="true">
          <span></span>
        </span>
        <span className="logo-copy">
          <strong>COMPASS</strong>
          <small>Better Decisions</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <div className="nav-group" data-nav-menu>
          <button className="nav-trigger" type="button" aria-expanded="false" aria-controls="resources-menu">
            Resources
          </button>
          <div id="resources-menu" className="nav-panel" role="menu">
            <a
              className="panel-link"
              href="https://compass-official.pages.dev/future-strategy-library/"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
            >
              <span>未来戦略ライブラリ</span>
              <small>判断軸を届けるCOMPASSの中枢事業</small>
            </a>
            <a className="panel-link panel-link-interactive" href="INTRO_Interactive/" role="menuitem">
              <span>COMPASS Interactive</span>
              <small>先進的な技術を駆使したリアルタイム講義支援システム</small>
            </a>
            <a
              className="panel-link"
              href="https://forms.gle/sW49M329Dcets8ga9"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
            >
              <span>COMPASS Essentials</span>
              <small>英語・AIを中心とした厳選資料集</small>
            </a>
          </div>
        </div>

        <div className="nav-group" data-nav-menu>
          <button className="nav-trigger" type="button" aria-expanded="false" aria-controls="education-menu">
            Education
          </button>
          <div id="education-menu" className="nav-panel" role="menu">
            <a className="panel-link" href="#english-education" role="menuitem">
              <span>English Education / 英語教育</span>
              <small>専門性を世界へ接続する力</small>
            </a>
            <a className="panel-link" href="#ai-literacy-education" role="menuitem">
              <span>AI Literacy Education / AI活用教育</span>
              <small>人間が主語のAI活用</small>
            </a>
            <a className="panel-link" href="#life-science-education" role="menuitem">
              <span>Life Science Education / 生命科学教育</span>
              <small>学びを研究と社会へつなげる</small>
            </a>
          </div>
        </div>

        <div className="nav-group" data-nav-menu>
          <button className="nav-trigger" type="button" aria-expanded="false" aria-controls="community-menu">
            Community
          </button>
          <div id="community-menu" className="nav-panel" role="menu">
            <a className="panel-link" href="#vision" role="menuitem">
              <span>About COMPASS</span>
              <small>学生支援の新しい羅針盤</small>
            </a>
            <a
              className="panel-link"
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe8Z0GkK9lmXKutLWO8lGezBoP5zPstNlkAnUEqVOx_IY7v7g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
            >
              <span>Join COMPASS</span>
              <small>学びを共につくる運営文化</small>
            </a>
            <a className="panel-link" href="#activities" role="menuitem">
              <span>Activities</span>
              <small>講演・交流・資料改善</small>
            </a>
            <a className="panel-link" href="#contact" role="menuitem">
              <span>Partners</span>
              <small>教員・研究者・外部協力者との連携</small>
            </a>
          </div>
        </div>

        <a className="nav-link" href="messages/index.html">Messages</a>
      </nav>

      <a
        className="header-cta"
        href="https://compass-official.pages.dev/future-strategy-library/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore Library
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="メニューを開く"
        aria-expanded="false"
        aria-controls="mobile-menu"
        data-menu-toggle
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  </header>

  <div className="mobile-scrim" data-menu-close hidden></div>
  <aside id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" aria-hidden="true" hidden>
    <div className="mobile-menu-panel">
      <div className="mobile-menu-top">
        <div>
          <p>任意学生支援団体 COMPASS</p>
          <span>Strategic Constellation Compass</span>
        </div>
        <button className="mobile-menu-close" type="button" aria-label="メニューを閉じる" data-menu-close>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <nav className="mobile-nav" aria-label="Mobile menu links">
        <section className="mobile-nav-group" aria-labelledby="mobile-resources-title">
          <h2 id="mobile-resources-title">Resources</h2>
          <a href="https://compass-official.pages.dev/future-strategy-library/" target="_blank" rel="noopener noreferrer">
            未来戦略ライブラリ
          </a>
          <a className="mobile-nav-highlight" href="INTRO_Interactive/">
            COMPASS Interactive
          </a>
          <a href="https://forms.gle/sW49M329Dcets8ga9" target="_blank" rel="noopener noreferrer">
            COMPASS Essentials
          </a>
        </section>

        <section className="mobile-nav-group" aria-labelledby="mobile-education-title">
          <h2 id="mobile-education-title">Education</h2>
          <a href="#english-education">English Education / 英語教育</a>
          <a href="#ai-literacy-education">AI Literacy Education / AI活用教育</a>
          <a href="#life-science-education">Life Science Education / 生命科学教育</a>
        </section>

        <section className="mobile-nav-group" aria-labelledby="mobile-community-title">
          <h2 id="mobile-community-title">Community</h2>
          <a href="#community">COMPASSについて</a>
          <a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe8Z0GkK9lmXKutLWO8lGezBoP5zPstNlkAnUEqVOx_IY7v7g/viewform" target="_blank" rel="noopener noreferrer">コミュニティに参加する</a>
          <a href="#activities">活動内容</a>
          <a href="#contact">Partners</a>
        </section>

        <section className="mobile-nav-group" aria-labelledby="mobile-messages-title">
          <h2 id="mobile-messages-title">Messages</h2>
          <a href="messages/index.html">後輩へのメッセージ</a>
        </section>
      </nav>
    </div>
  </aside>
    </>
  );
}
