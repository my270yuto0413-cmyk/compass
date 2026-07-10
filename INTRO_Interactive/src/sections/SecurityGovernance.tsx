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
          title="教育データを、安全に。"
          lead="講義データは、学生の学習支援と授業改善のために、安全かつ適切に管理します。"
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
        <p>すべては、より良い学習体験のために。</p>
      </Reveal>
    </Section>
  );
}
