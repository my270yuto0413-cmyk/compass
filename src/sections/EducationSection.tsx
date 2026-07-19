export function EducationSection() {
  return (
    <>
<section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-heading narrow" data-reveal>
          <p className="section-label">Education</p>
          <h2 id="education-title"><span className="education-title-part">英語、AI、</span><span className="education-title-part">生命科学を、</span><span className="education-title-part">未来を選ぶ力へ。</span></h2>
          <p className="education-intro">
            Educationは、資料を渡すだけでなく、問い、対話、実践、振り返りを設計する領域です。英語、AIリテラシー、生命科学の3分野を軸に、講義・講演・ワークショップを展開し、TechnologyとResourcesを実際の学習体験へ結び付けます。
          </p>
        </div>

        <div className="education-grid">
          <article id="english-education" className="education-card" data-reveal>
            <h3>English Education / 英語教育</h3>
            <p>
              英語を資格取得で終わらせず、研究、国際学会、論文読解、留学など、
              専門性を世界へ接続するための英語教育を設計します。
              学生が将来の進路や研究に活かせる、実践的な英語学習講義・講演・教育プログラムを設計します。
            </p>
            <div className="education-keywords" aria-label="English Education keywords">
              <span>Keywords</span>
              <ul>
                <li>TOEIC</li>
                <li>TOEFL</li>
                <li>IELTS</li>
                <li>生命科学英語</li>
                <li>論文読解</li>
                <li>国際学会発表</li>
                <li>英語プレゼンテーション</li>
                <li>発音・アクセント</li>
              </ul>
            </div>
          </article>
          <article id="ai-literacy-education" className="education-card" data-reveal>
            <h3>AI Literacy Education / AI活用教育</h3>
            <p>
  生成AIを「使う技術」だけではなく、情報の信頼性を評価し、自ら考え、成果に責任を持つためのAIリテラシーを育成します。
  システム設計、講演、教材開発を通じて、学生がAIを主体的かつ責任を持って活用できる教育プログラムを設計します。
            </p>
            <div className="education-keywords" aria-label="AI Literacy Education keywords">
              <span>Keywords</span>
              <ul>
                <li>AIリテラシー</li>
                <li>プロンプト設計</li>
                <li>ChatGPT</li>
                <li>Gemini</li>
                <li>Claude</li>
                <li>NotebookLM</li>
                <li>Perplexity</li>
                <li>OpenAI Codex</li>
                <li>AI時代の学習設計</li>
              </ul>
            </div>
          </article>
          <article id="life-science-education" className="education-card" data-reveal>
            <h3>Life Science Education / 生命科学教育</h3>
            <p>
              薬学・生命科学の学びを、研究、医療、製薬、データサイエンス、社会実装へとつながるキャリア形成へ結び付けます。
              研究経験を基盤とした教育活動を通じて、専門知識と将来設計を結び付ける学習機会を提供します。
            </p>
            <div className="education-keywords" aria-label="Life Science Education keywords">
              <span>Keywords</span>
              <ul>
                <li>基礎生物学</li>
                <li>分子生物学</li>
                <li>細胞生物学</li>
                <li>生化学</li>
                <li>実験科学</li>
                <li>生命科学研究入門</li>
                <li>論文読解</li>
                <li>バイオインフォマティクス</li>
                <li>研究室選択</li>
                <li>大学院進学</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
    </>
  );
}
