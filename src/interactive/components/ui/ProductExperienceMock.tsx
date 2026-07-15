type ProductExperienceMockProps = {
  className?: string;
  compact?: boolean;
};

export function ProductExperienceMock({ className = "", compact = false }: ProductExperienceMockProps) {
  return (
    <div
      className={`product-experience-mock ${compact ? "is-compact" : ""} ${className}`.trim()}
      aria-label="COMPASS Interactiveの実際の講義体験プレビュー"
    >
      <div className="product-experience-mock__bar">
        <div className="product-experience-mock__brand">
          <span className="product-experience-mock__mark" aria-hidden="true" />
          <strong>COMPASS</strong>
        </div>
        <span className="product-experience-mock__live"><i /> LIVE</span>
        <span className="product-experience-mock__people">221人参加</span>
      </div>

      <div className="product-experience-mock__title">
        <span>今日のテーマ</span>
        <strong>翻訳できる時代に、なぜ英語を学ぶのか。</strong>
      </div>

      <div className="product-experience-mock__grid">
        <section className="product-slide" aria-label="講義資料">
          <div className="product-card-heading">
            <span>LECTURE MATERIAL</span>
            <small>3 / 15</small>
          </div>
          <div className="product-slide__canvas">
            <small>FROM INFORMATION TO CONNECTION</small>
            <span className="product-slide__orbit" aria-hidden="true" />
            <strong>
              英語は、情報だけでなく
              <br />
              人とつながるための言葉。
            </strong>
          </div>
          <div className="product-caption">
            <span className="product-caption__wave" aria-hidden="true"><i /><i /><i /><i /></span>
            <p><small>LIVE CAPTION</small>AIが講義の言葉を、理解へつないでいます。</p>
          </div>
        </section>

        <div className="product-experience-mock__rail">
          <section className="product-poll" aria-label="ライブ投票">
            <div className="product-card-heading">
              <span>LIVE POLL</span>
              <small>回答受付中</small>
            </div>
            <strong>英語を学ぶ価値は、どこに残る？</strong>
            <div className="product-poll__choices" aria-hidden="true">
              <span><i />世界の仲間と挑戦する</span>
              <span className="is-selected"><i />人と直接つながる</span>
              <span><i />異なる文化に触れる</span>
            </div>
          </section>

          <section className="product-voice" aria-label="学生の声">
            <div>
              <span>?</span>
              <small>みんなの声</small>
            </div>
            <p>翻訳を確かめるためにも、自分の理解が必要だと思いました。</p>
            <strong>♡ 27</strong>
          </section>
        </div>
      </div>

      <div className="product-ai-recap">
        <span className="product-ai-recap__icon" aria-hidden="true">✦</span>
        <p><small>5 MINUTE AI RECAP</small><strong>いま生まれた気づきが、次の問いにつながる。</strong></p>
        <span className="product-ai-recap__status">AI LIVE</span>
      </div>
    </div>
  );
}
