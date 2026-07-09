import { technologyCards } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function Technology() {
  return (
    <Section id="technology" className="technology-section section--dark">
      <div className="technology-layout">
        <Reveal>
          <SectionHeader
            eyebrow="TECHNOLOGY"
            title="リアルタイム講義を支える、現代的なWebアプリケーション設計。"
            lead="リアルタイム性、モバイルファーストUI、AI連携、アクセス制御を重視した講義支援アプリケーションとして見せます。"
          />
          <div className="developer-credit">
            <span>Developer / Product Architect</span>
            <strong>Yuto Matsui</strong>
            <p>Molecular Biology Research × Pharmacy Education × AI/Web Application</p>
          </div>
        </Reveal>
        <div className="tech-card-grid">
          {technologyCards.map(([label, value], index) => (
            <Reveal delay={index * 80} key={label}>
              <article className="tech-card">
                <p>{label}</p>
                <h3>{value}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
