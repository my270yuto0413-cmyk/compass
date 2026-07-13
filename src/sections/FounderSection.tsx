export function FounderSection() {
  return (
    <section id="founder" className="section founder-section" aria-labelledby="founder-title">
      <div className="container founder-profile" data-reveal>
        <figure className="founder-portrait">
          <picture>
            <source
              media="(min-width: 901px)"
              type="image/webp"
              srcSet="/images/founder/yuto-matsui-desktop-480.webp 480w, /images/founder/yuto-matsui-desktop-800.webp 800w, /images/founder/yuto-matsui-desktop-1200.webp 1200w"
              sizes="400px"
            />
            <source
              media="(min-width: 901px)"
              type="image/jpeg"
              srcSet="/images/founder/yuto-matsui-desktop-480.jpg 480w, /images/founder/yuto-matsui-desktop-800.jpg 800w, /images/founder/yuto-matsui-desktop-1200.jpg 1200w"
              sizes="400px"
            />
            <source
              media="(max-width: 900px)"
              type="image/webp"
              srcSet="/images/founder/yuto-matsui-portrait-480.webp 480w, /images/founder/yuto-matsui-portrait-800.webp 800w, /images/founder/yuto-matsui-portrait-1200.webp 1200w"
              sizes="calc(100vw - 28px)"
            />
            <img
              src="/images/founder/yuto-matsui-portrait-800.jpg"
              srcSet="/images/founder/yuto-matsui-portrait-480.jpg 480w, /images/founder/yuto-matsui-portrait-800.jpg 800w, /images/founder/yuto-matsui-portrait-1200.jpg 1200w"
              sizes="(min-width: 901px) 400px, calc(100vw - 28px)"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
              alt="COMPASS創設者・代表 松井優知"
            />
          </picture>
        </figure>

        <div className="founder-profile__body">
          <p className="section-label">Founder &amp; Representative</p>
          <p className="founder-subcopy">創設者・代表</p>
          <h2 id="founder-title">
            <span className="founder-name-native">松井 優知</span>
            <span className="founder-name-latin">Yuto Matsui</span>
          </h2>

          <div className="founder-profile__copy">
            <p>
              COMPASSは、学生がより良い未来を選択できる環境の実現を目指して創設しました。
              研究、英語学習、教育活動を通して得た経験を基盤に、教育資源の提供とコミュニティづくりに取り組んでいます。
            </p>

            <p>
              国内での独学により英語を習得し、英検1級、TOEIC 965点を取得。
              教育・研究・Web開発を横断し、学びと技術を結び付ける活動を続けています。
            </p>
          </div>

          <dl className="founder-experience" aria-label="主な経験と実績">
            <div>
              <dt>English</dt>
              <dd>英検1級 / TOEIC 965</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>集団指導 約3年</dd>
            </div>
            <div>
              <dt>Research</dt>
              <dd>分子生物学 2年以上</dd>
            </div>
            <div>
              <dt>Development</dt>
              <dd>Web開発 3年</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
