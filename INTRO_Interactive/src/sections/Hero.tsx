import { hero, links } from "../content/interactiveContent";
import { CTAButton } from "../components/ui/CTAButton";
import { FeatureChip } from "../components/ui/FeatureChip";
import { ProductExperienceMock } from "../components/ui/ProductExperienceMock";
import { Reveal } from "../components/ui/Reveal";

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-visual" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-theater" aria-hidden="true">
        <div className="hero-theater__screen" />
        <div className="hero-theater__beam hero-theater__beam--left" />
        <div className="hero-theater__beam hero-theater__beam--right" />
        <div className="hero-theater__seats">
          {Array.from({ length: 48 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="hero-data-ribbon hero-data-ribbon--one" />
        <div className="hero-data-ribbon hero-data-ribbon--two" />
      </div>
      <div className="hero-grid section__inner">
        <Reveal className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <div className="mobile-hero-brand-card" aria-label="COMPASS Interactive Live Lecture Experience">
            <span className="mobile-hero-brand-card__status" aria-hidden="true" />
            <strong>COMPASS Interactive</strong>
            <small>NEXT LECTURE</small>
          </div>
          <h1 id="hero-title" className="hero-title" aria-label={hero.title}>
            <span className="hero-title__line hero-title__line--quiet">
              <span className="hero-title__desktop">わからないが、</span>
              <span className="hero-title__mobile">わからないが</span>
            </span>
            <span className="hero-title__line hero-title__line--active">動き出す。</span>
          </h1>
          <p className="hero-lead">
            <span className="hero-lead__desktop">リアルタイム×AIが、講義を変える。</span>
            <span className="hero-lead__mobile">
              リアルタイム×AIが
              <br />
              講義を変える
            </span>
          </p>
          <div className="hero-chips" aria-label="主要機能">
            {hero.chips.map((chip) => (
              <FeatureChip key={chip}>{chip}</FeatureChip>
            ))}
          </div>
          <div className="hero-ai-badge">
            <span aria-hidden="true" />
            <strong>AIが講義をリアルタイム理解</strong>
            <small>OpenAI API × Lecture Data</small>
          </div>
          <div className="hero-actions">
            <CTAButton id="hero-primary-cta" className="hero-cta" href={links.demo}>
              未来を体験する <span aria-hidden="true">→</span>
            </CTAButton>
            <a className="hero-secondary-cta" data-cta-location="hero-code-join" href={links.join}>講義コードで参加する</a>
          </div>
          <p className="hero-cta-note">登録不要・デモデータ・約3分</p>
        </Reveal>

        <Reveal className="hero-mock" delay={120}>
          <div className="hero-mock-stage">
            <div className="hero-orbit hero-orbit--question" aria-hidden="true">
              <span />
              <strong>Student Voice</strong>
            </div>
            <div className="hero-orbit hero-orbit--quiz" aria-hidden="true">
              <span />
              <strong>Live Poll</strong>
            </div>
            <div className="hero-orbit hero-orbit--ai" aria-hidden="true">
              <span />
              <strong>AI Recap</strong>
            </div>
            <ProductExperienceMock />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
