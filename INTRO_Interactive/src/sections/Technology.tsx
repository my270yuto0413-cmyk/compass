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
            lead="リアルタイム性、モバイルファースト設計、AI連携、アクセス制御を備えた、現代的なフルスタックWebアプリケーション。"
          />
          <div className="developer-credit">
            <span>開発者・プロダクト設計者</span>
            <strong>Yuto Matsui</strong>
            <p>
              生命科学・教育・AIを横断し、教育現場で自ら見いだした課題から、プロダクトを設計・実装する。
            </p>
            <div className="developer-credit__grid">
              <div>
                <h3>得意領域</h3>
                <ul>
                  <li>生命科学・分子生物学研究</li>
                  <li>フルスタックWebアプリケーション開発</li>
                  <li>AIを活用したシステム設計</li>
                  <li>教育・研究室DX</li>
                </ul>
              </div>
              <div>
                <h3>主要技術</h3>
                <p className="developer-credit__tools">React / TypeScript / Python / Git / OpenAI Codex</p>
              </div>
            </div>
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
