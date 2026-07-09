import { securityCards } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function SecurityGovernance() {
  return (
    <Section id="security" className="security-section section--light">
      <Reveal>
        <SectionHeader
          eyebrow="SECURITY & GOVERNANCE"
          title="講義データを、教育のために安全に扱う。"
          lead="講義中のコメント、クイズ回答、理解度データは、学生の学習を支援し、教員の授業改善に活用するための情報です。"
          align="center"
        />
      </Reveal>
      <div className="security-grid">
        {securityCards.map((card, index) => (
          <Reveal delay={index * 70} key={card.title}>
            <article className="security-card">
              <span aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="governance-note">
        <p>データは監視ではなく、教育改善のために扱います。</p>
      </Reveal>
    </Section>
  );
}
