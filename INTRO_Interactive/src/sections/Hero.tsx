import { hero, links } from "../content/interactiveContent";
import { CTAButton } from "../components/ui/CTAButton";
import { FeatureChip } from "../components/ui/FeatureChip";
import { LiveLectureMock } from "../components/ui/LiveLectureMock";
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
          <div className="hero-ai-badge">
            <span aria-hidden="true" />
            <strong>OpenAI API 最新モデル搭載</strong>
            <small>2026年7月現在</small>
          </div>
          <h1 id="hero-title" className="hero-title" aria-label={hero.title}>
            <span className="hero-title__line hero-title__line--quiet">
              <span className="hero-title__desktop">わからないが、</span>
              <span className="hero-title__mobile">わからないが</span>
            </span>
            <span className="hero-title__line hero-title__line--active">動き出す。</span>
          </h1>
          <p className="hero-lead">
            <span className="hero-lead__desktop">{hero.lead}</span>
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
          <CTAButton className="hero-cta" href={links.join}>
            今すぐ講義に参加する
          </CTAButton>
        </Reveal>

        <Reveal className="hero-mock" delay={120}>
          <div className="hero-mock-stage">
            <div className="hero-orbit hero-orbit--question" aria-hidden="true">
              <span />
              <strong>Question</strong>
            </div>
            <div className="hero-orbit hero-orbit--quiz" aria-hidden="true">
              <span />
              <strong>Quiz</strong>
            </div>
            <div className="hero-orbit hero-orbit--ai" aria-hidden="true">
              <span />
              <strong>AI</strong>
            </div>
            <LiveLectureMock />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
