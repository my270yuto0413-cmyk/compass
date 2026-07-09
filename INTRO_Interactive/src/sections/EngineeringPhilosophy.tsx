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
          title="すべての設計は、より良い講義体験のために。"
          lead="COMPASS Interactiveは、リアルタイム同期、モバイルファーストUI、RLSによるアクセス制御、AI連携、継続改善を軸に設計された講義支援Webアプリケーションです。"
          align="center"
        />
        <p className="engineering-subcopy">
          講義中の反応・質問・理解度を可視化し、教員と学生のあいだに、自然な双方向性を生み出します。
        </p>
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
