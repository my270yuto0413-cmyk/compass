import { architecturePrinciples, technologyCards, technologyGlossary } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function Technology() {
  return (
    <Section id="developers" className="technology-section section--dark">
      <Reveal>
        <SectionHeader
          eyebrow="FOR DEVELOPERS"
          title="教育体験を支える、現代的なフルスタック設計。"
          lead="リアルタイム同期、モバイルファーストUI、AI連携、講義単位のアクセス制御を統合した、薬学・生命科学の大人数講義に最適な設計である。"
          align="center"
        />
      </Reveal>

      <div className="developer-principle-grid">
        {architecturePrinciples.map((principle, index) => (
          <Reveal delay={index * 60} key={principle.title}>
            <article className="developer-principle">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <details className="technology-disclosure">
          <summary>技術構成を見る</summary>
          <div className="tech-card-grid">
            {technologyCards.map(([label, value]) => (
              <article className="tech-card" key={label}>
                <p>{label}</p>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </details>
      </Reveal>

      <Reveal>
        <details className="technology-disclosure technology-glossary">
          <summary>用語をわかりやすく見る</summary>
          <dl>
            {technologyGlossary.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </details>
      </Reveal>

      <Reveal>
        <div id="developer-profile" className="developer-credit developer-credit--wide">
          <span>開発者・プロダクト設計者</span>
          <strong>Yuto Matsui</strong>
          <p>生命科学・教育・AIを横断し、研究・教育現場で自ら見いだした課題から、プロダクトを設計・実装する。</p>
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
              <h3>開発基盤</h3>
              <p className="developer-credit__tools">React / TypeScript / Python / Git / OpenAI Codex</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
