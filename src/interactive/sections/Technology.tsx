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
          <summary>技術スタックを見る</summary>
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
          <p>生命科学・教育・AIを横断し、研究・教育現場で自ら見いだした課題を、実装可能なプロダクトへ変換する。</p>
          <div className="developer-credit__grid">
            <div>
              <h3>得意領域</h3>
              <ul>
                <li>生命科学・分子生物学研究</li>
                <li>フルスタックWebアプリケーション開発</li>
                <li>研究データ解析パイプラインの構築</li>
                <li>独自バックエンド基盤による業務自動化・効率化</li>
                <li>AI統合型システムの設計・検証</li>
              </ul>
            </div>
            <details className="developer-expertise">
              <summary>
                <span>Technical Expertise</span>
                <small>技術領域を表示</small>
              </summary>
              <dl>
                <div>
                  <dt>主要言語</dt>
                  <dd>TypeScript / Python</dd>
                </div>
                <div>
                  <dt>フロントエンド</dt>
                  <dd>React / Next.js / Vite</dd>
                </div>
                <div>
                  <dt>バックエンド・データ基盤</dt>
                  <dd>FastAPI / Supabase / PostgreSQL</dd>
                </div>
                <div>
                  <dt>開発・運用基盤</dt>
                  <dd>Git / Docker / Linux / Cloudflare</dd>
                </div>
                <div>
                  <dt>AIエージェント</dt>
                  <dd>OpenAI Codex / Claude Code</dd>
                </div>
              </dl>
            </details>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
