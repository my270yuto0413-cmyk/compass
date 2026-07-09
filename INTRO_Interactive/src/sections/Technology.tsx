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
            lead="リアルタイム性、モバイルファースト設計、AI連携、アクセス制御を備えた、現代的な講義支援Webアプリケーション。"
          />
          <div className="developer-credit">
            <span>開発者・プロダクト設計者</span>
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
