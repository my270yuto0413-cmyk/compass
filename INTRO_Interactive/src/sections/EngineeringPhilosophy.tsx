import { architecturePrinciples } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function EngineeringPhilosophy() {
  return (
    <Section id="engineering" className="engineering-section">
      <Reveal>
        <SectionHeader
          eyebrow="ENGINEERING PHILOSOPHY"
          title="講義の現場課題から、設計原則を決める。"
          lead="静的LPでありながら、実アプリの設計思想が伝わるように、リアルタイム、モバイル、RLS、AI、継続改善の軸で構成します。"
          align="center"
        />
      </Reveal>
      <div className="principle-grid">
        {architecturePrinciples.map((principle, index) => (
          <Reveal delay={index * 70} key={principle.title}>
            <article className="principle-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
              <div className="mini-tags">
                {principle.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
