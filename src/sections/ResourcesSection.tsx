export function ResourcesSection() {
  return (
    <>
<section id="resources" className="section resources-section" aria-labelledby="resources-title">
      <div className="container feature-layout">
        <div className="section-heading" data-reveal>
          <p className="section-label">Resources</p>
          <h2 id="resources-title">COMPASSの資料ライブラリ</h2>
          <p>
            Resourcesは、学生が自分の未来を考えるための資料と判断軸への入口です。
          </p>
        </div>
        <div className="feature-cards" data-reveal>
          <article className="feature-card">
            <h3>未来戦略ライブラリ</h3>
            <p>
              北里大学薬学部生を主な対象に、試験対策、英語、AI、研究室選択、大学院進学、キャリア形成を支援する中核プロジェクトです。資料内容や登録方法は、公式サイトから確認できます。
            </p>
            <a href="https://compass-official.pages.dev/future-strategy-library/" target="_blank" rel="noopener noreferrer">
              公式サイトを見る
            </a>
          </article>
          <article className="feature-card feature-card-interactive">
            <span className="feature-card-kicker">Interactive Lecture System</span>
            <h3>COMPASS Interactive、ついに実装。</h3>
            <p>
              先進的な技術を駆使したリアルタイム講義支援システムです。リアルタイムコメント、投票、AI要約を通じて、学生一人ひとりの声を講義に届けます。紹介ページでは、学生目線のメリット、講義中の使い方、主要機能を確認できます。
            </p>
            <a href="INTRO_Interactive/">
              紹介ページを見る
            </a>
          </article>
          <article className="feature-card">
            <h3>COMPASS Essentials</h3>
            <p>
              英語とAIを中心に、未来戦略ライブラリの一部資料を学部・所属を問わず公開しています。他学部生、他大学の学生、教育関係者の方も無料で閲覧可能です。
            </p>
            <p>
              アクセスには、大学アカウントでのログインが必要です。
            </p>
            <a href="https://forms.gle/sW49M329Dcets8ga9" target="_blank" rel="noopener noreferrer">
              Access Form
            </a>
          </article>
        </div>
      </div>
    </section>
    </>
  );
}
