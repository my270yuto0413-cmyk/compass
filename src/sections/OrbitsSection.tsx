export function OrbitsSection() {
  return (
    <>
<section id="directions" className="section orbits-section" aria-labelledby="directions-title">
  <div className="container">
    <div className="section-heading narrow" data-reveal>
      <p className="section-label">Four Directions</p>
      <h2 id="directions-title">
        <span className="directions-title-part">学びを動かす、</span>
        <span className="directions-title-part">4つの力。</span>
      </h2>
      <p>
        COMPASSは、Technology / Resources / Education / Community の4つの領域を通じて、教育・研究現場で見つけた課題を、実際に使える仕組みと学習機会へ変えていきます。
        4つの領域を横断しながら、学生の学びを理解、対話、行動、そしてより良い意思決定へつなげます。
      </p>
    </div>
    <div className="orbit-card-grid">
      <article className="orbit-card direction-card direction-card--technology" data-reveal>
        <span>01</span>
        <p className="direction-card__axis">North · Systems</p>
        <h3>Technology <small>教育システム</small></h3>
        <p className="direction-card__promise">課題を、仕組みに変える。</p>
        <p>
          教育・研究現場で見つけた課題を、学生と教員が実際に使える仕組みへ変えます。COMPASS InteractiveとCOMPASS System Infrastructure（未来戦略ライブラリの登録・権限管理基盤）を通じて、参加しやすく、安全で、学びに合わせて進化する教育環境をつくります。
        </p>
      </article>

      <article className="orbit-card direction-card direction-card--resources" data-reveal>
        <span>02</span>
        <p className="direction-card__axis">East · Knowledge</p>
        <h3>Resources <small>資料・知識基盤</small></h3>
        <p className="direction-card__promise">情報を、判断軸に変える。</p>
        <p>
          学習、英語、AI、研究室選択、大学院進学、キャリア形成に関する情報を、学生が実際に使える資料として体系化します。未来戦略ライブラリとCOMPASS Essentialsを中心に、目の前の課題に役立つ知識と、将来を考えるための選択肢・判断軸を届けます。
        </p>
      </article>

      <article className="orbit-card direction-card direction-card--education" data-reveal>
        <span>03</span>
        <p className="direction-card__axis">South · Learning</p>
        <h3>Education <small>教育実践</small></h3>
        <p className="direction-card__promise">知識を、学習体験に変える。</p>
        <p>
          英語、AIリテラシー、生命科学を中心に、講義、講演、ワークショップを企画・実施します。情報を一方向に伝えるだけでなく、問い、対話、実践、振り返りを設計し、学生が自ら考え、次の行動へ進める学習機会をつくります。
        </p>
      </article>

      <article className="orbit-card direction-card direction-card--community" data-reveal>
        <span>04</span>
        <p className="direction-card__axis">West · Connection</p>
        <h3>Community <small>学びの共同体</small></h3>
        <p>
          学年や所属を越えて、学生同士が学び合い、情報を共有できるコミュニティを育てます。
          英語学習、AI活用、研究室選択、大学院進学、キャリア設計などについて、講演・交流会・座談会を通じて継続的に対話できる場をつくります。
        </p>
      </article>
    </div>
      </div>
    </section>
    </>
  );
}
