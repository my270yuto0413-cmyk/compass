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
          title="安心して質問できる、信頼の学習環境。"
          lead="講義ごとのアクセス管理、AIモデレーション、明確な回答表示を通じて、すべての参加者が学びに集中できる環境を提供する。"
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
        <p>安全性と透明性が、より深い学びを支えます。</p>
      </Reveal>
    </Section>
  );
}
