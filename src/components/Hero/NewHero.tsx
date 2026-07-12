export function NewHero() {
  return (
    <section id="top" className="hero hero--editorial" aria-labelledby="hero-title">
      <canvas className="hero-particles" aria-hidden="true" />
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="hero-label">任意学生支援団体 COMPASS</p>
          <h1 id="hero-title">
            <span>Better Education.</span>
            <br />
            <span>Better Decisions.</span>
          </h1>
          <p className="hero-subcopy">
            北里大学・生命科学系学生のための<br className="hero-mobile-break" />教育支援プラットフォーム。
          </p>
          <p className="hero-support">
            <span className="hero-copy-desktop">
              英語、AI、生命科学、研究、キャリアをつなぎ、より良い未来の選択を支えます。
            </span>
            <span className="hero-copy-mobile">
              英語、AI、生命科学、研究、キャリアを横断的につなぎ、学生が自分らしい未来を選ぶための羅針盤。
            </span>
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary hero-action-desktop" href="#vision">
              COMPASSを知る
            </a>
            <a className="button button-primary hero-action-mobile" href="INTRO_Interactive/">
              未来を体験する
            </a>
            <a
              className="button button-secondary hero-library-link"
              href="https://compass-official.pages.dev/future-strategy-library/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ライブラリを見る <span aria-hidden="true">→</span>
            </a>
            <a
              className="button button-secondary hero-interactive-link hero-action-desktop"
              href="INTRO_Interactive/"
            >
              未来を体験する <span aria-hidden="true">→</span>
            </a>
          </div>
          <nav className="mobile-orbit-brief" aria-label="Mobile Three Orbits">
            <a className="mobile-orbit-link mobile-orbit-resources" href="#resources">
              <span>01</span>
              <strong>Resources</strong>
              <small>Library</small>
            </a>
            <a className="mobile-orbit-link mobile-orbit-education" href="#education">
              <span>02</span>
              <strong>Education</strong>
              <small>Learning</small>
            </a>
            <a className="mobile-orbit-link mobile-orbit-community" href="#community">
              <span>03</span>
              <strong>Community</strong>
              <small>Network</small>
            </a>
          </nav>
        </div>

        <div
          className="hero-visual hero-visual--editorial"
          data-reveal
          role="img"
          aria-label="COMPASSを中心にResources、Education、Communityの三つの軸を示す羅針盤"
        >
          <div className="precision-compass" aria-hidden="true">
            <div className="precision-compass__field" />
            <div className="precision-compass__ring precision-compass__ring--outer" />
            <div className="precision-compass__ring precision-compass__ring--inner" />
            <div className="precision-compass__crosshair" />
            <div className="precision-compass__needle" />
            <div className="precision-compass__core">
              <strong>COMPASS</strong>
              <span>Decision Core</span>
            </div>
            <div className="precision-compass__axis precision-compass__axis--resources">
              <span>01</span><strong>Resources</strong><small>KNOWLEDGE</small>
            </div>
            <div className="precision-compass__axis precision-compass__axis--education">
              <span>02</span><strong>Education</strong><small>LEARNING</small>
            </div>
            <div className="precision-compass__axis precision-compass__axis--community">
              <span>03</span><strong>Community</strong><small>CONNECTION</small>
            </div>
            <div className="precision-compass__coordinate precision-compass__coordinate--north">N</div>
            <div className="precision-compass__coordinate precision-compass__coordinate--east">E</div>
            <div className="precision-compass__coordinate precision-compass__coordinate--south">S</div>
            <div className="precision-compass__coordinate precision-compass__coordinate--west">W</div>
          </div>
        </div>
      </div>
    </section>
  );
}
