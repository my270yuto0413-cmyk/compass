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
      <div className="hero-grid section__inner">
        <Reveal className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title" aria-label={hero.title}>
            <span className="hero-title__line hero-title__line--quiet">わからないが、</span>
            <span className="hero-title__line hero-title__line--active">動き出す。</span>
          </h1>
          <div className="mobile-hero-signals" aria-hidden="true">
            <div className="mobile-signal-card mobile-signal-card--question">
              <span>質問</span>
              <p>RT-qPCRで検証できますか？</p>
            </div>
            <div className="mobile-signal-card mobile-signal-card--quiz">
              <span>Quiz</span>
              <p>回答率 82%</p>
            </div>
            <div className="mobile-signal-card mobile-signal-card--ai">
              <span>AI Summary</span>
              <p>重要語句を整理中</p>
            </div>
          </div>
          <p className="hero-lead">{hero.lead}</p>
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
          <LiveLectureMock />
        </Reveal>
      </div>
    </section>
  );
}
