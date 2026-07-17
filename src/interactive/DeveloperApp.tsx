import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CTAButton } from "./components/ui/CTAButton";
import { Reveal } from "./components/ui/Reveal";
import { Section } from "./components/ui/Section";
import { SectionHeader } from "./components/ui/SectionHeader";
import {
  codebaseStats,
  designDecisions,
  directoryGroups,
  educationalPrinciples,
  productSurfaces,
  qualityInProgress,
  stackGroups,
  technicalDetails,
  verifiedProductionFacts
} from "./content/developerContent";
import { links } from "./content/interactiveContent";
import { DeveloperProfile } from "./sections/DeveloperProfile";

export function DeveloperApp() {
  return (
    <div className="developer-page">
      <a className="skip-link" href="#developer-main">本文へスキップ</a>
      <Header variant="developer" />
      <main id="developer-main">
        <section id="developer-top" className="developer-hero" aria-labelledby="developer-title">
          <div className="developer-hero__grid" aria-hidden="true" />
          <div className="section__inner developer-hero__inner">
            <div className="developer-hero__layout">
              <div className="developer-hero__copy">
                <p className="eyebrow">FOR DEVELOPERS</p>
                <h1 id="developer-title" aria-label="学びの熱を、設計で途切れさせない。">
                  <span className="developer-hero__title-line">学びの熱を、</span>
                  <span className="developer-hero__title-line developer-hero__title-line--desktop">設計で途切れさせない。</span>
                  <span className="developer-hero__title-line developer-hero__title-line--mobile">設計で、</span>
                  <span className="developer-hero__title-line developer-hero__title-line--mobile">途切れさせない。</span>
                </h1>
                <p className="developer-hero__lead">
                  匿名参加、5秒差分同期、根拠をたどれるAI。教室の一瞬を取りこぼさないために、UX、セキュリティ、負荷、APIコストを一つのアーキテクチャで設計しました。
                </p>
                <div className="developer-hero__actions">
                  <CTAButton href="#decisions">設計判断を読む <span aria-hidden="true">↓</span></CTAButton>
                  <a href="/INTRO_Interactive/">学生・教員の体験へ</a>
                </div>
                <p className="developer-hero__date">Phase 0–6.6 本番反映確認 · 2026-07-17</p>
              </div>
              <figure className="developer-architecture" aria-labelledby="developer-architecture-title">
                <figcaption className="developer-architecture__header">
                  <span id="developer-architecture-title">SYSTEM RESPONSIBILITY MAP</span>
                  <small>COMPASS Interactive</small>
                </figcaption>
                <div className="developer-architecture__surface">
                  <small>EXPERIENCE SURFACE</small>
                  <ul><li>Student</li><li>Teacher</li><li>Classroom Display</li></ul>
                </div>
                <ol className="developer-architecture__lanes">
                  <li>
                    <div className="developer-architecture__lane-head"><span>01</span><strong>LIVE STATE</strong></div>
                    <div className="developer-architecture__route">
                      <b>Student / Display browser</b><i aria-hidden="true">→</i><b>5秒差分 snapshot RPC</b><i aria-hidden="true">→</i><b>Supabase PostgreSQL</b>
                    </div>
                    <p>auth.uid() / scoped credential / RLS / section version</p>
                  </li>
                  <li>
                    <div className="developer-architecture__lane-head"><span>02</span><strong>PRIVILEGED &amp; AI</strong></div>
                    <div className="developer-architecture__route">
                      <b>Teacher Admin</b><i aria-hidden="true">→</i><b>Supabase Edge</b><i aria-hidden="true">→</i><span className="developer-architecture__destinations"><b>PostgreSQL</b><b>OpenAI API</b></span>
                    </div>
                    <p>authorized RPC / scoped start grant / hard limits</p>
                  </li>
                  <li>
                    <div className="developer-architecture__lane-head"><span>03</span><strong>PDF &amp; ARCHIVE</strong></div>
                    <div className="developer-architecture__route">
                      <b>Student browser</b><i aria-hidden="true">→</i><b>Cloudflare Worker</b><i aria-hidden="true">→</i><b>Private R2</b>
                    </div>
                    <p>short-lived ticket / Range delivery / sanitized payload</p>
                  </li>
                </ol>
                <div className="developer-architecture__footer">
                  <span><i aria-hidden="true" /> PHASE 6.6 LIVE</span><span>18 MIGRATIONS</span><span>21 EDGE FUNCTIONS</span>
                </div>
              </figure>
            </div>
          </div>
        </section>

        <Section id="codebase" className="developer-codebase section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="CODEBASE"
              title="ディレクトリ構造"
              lead="COMPASS Interactiveは、プロダクトUI、データベース、PDF配信、検証コードを一つのリポジトリで管理しています。"
              align="center"
            />
          </Reveal>
          <dl className="developer-codebase__stats">
            {codebaseStats.map((stat, index) => (
              <Reveal delay={index * 45} key={stat.label}>
                <div><dt>{stat.value}</dt><dd>{stat.label}</dd></div>
              </Reveal>
            ))}
          </dl>
          <Reveal>
            <figure className="developer-directory">
              <figcaption><span>COMPASS Interactive/</span><small>主要な実装ディレクトリ</small></figcaption>
              <ul>
                {directoryGroups.map((group) => (
                  <li key={group.path}>
                    <div><code>{group.path}</code><span>{group.description}</span></div>
                    {group.children.length > 0 && (
                      <ul>{group.children.map((child) => <li key={child}>{child}</li>)}</ul>
                    )}
                  </li>
                ))}
              </ul>
              <p>コード規模は2026-07-17の評価レポート基準。生成物・ローカル資格情報は掲載対象外です。</p>
            </figure>
          </Reveal>
        </Section>

        <Section id="product" className="developer-product section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="PRODUCT"
              title="プロダクト構成"
              lead="学生、教員、教室表示、終了後の閲覧を別画面に分け、一つの講義状態を共有します。"
              align="center"
            />
          </Reveal>
          <div className="developer-product__surfaces">
            {productSurfaces.map((surface, index) => (
              <Reveal delay={index * 45} key={surface.route}>
                <article>
                  <div><small>{surface.label}</small><code>{surface.route}</code></div>
                  <h3>{surface.title}</h3>
                  <p>{surface.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="stack" className="developer-stack section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="TECHNOLOGY STACK"
              title="ひとつの体験を、役割の違う技術で支える。"
              align="center"
            />
          </Reveal>
          <div className="developer-stack__flow">
            {stackGroups.map((group, index) => (
              <Reveal delay={index * 45} key={group.label}>
                <article>
                  <small>STACK {String(index + 1).padStart(2, "0")}</small>
                  <h3>{group.label}</h3>
                  <strong>{group.technologies}</strong>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="decisions" className="design-decisions section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="ENGINEERING DECISIONS"
              title="実装で解いた、6つの課題。"
              lead="講義環境で起こる具体的な問題と、それに対して採用した実装を対応づけて示します。"
              align="center"
            />
          </Reveal>
          <div className="design-decisions__list">
            {designDecisions.map((decision, index) => (
              <Reveal delay={index * 45} key={decision.number}>
                <article>
                  <header>
                    <span>{decision.number}</span>
                    <div><small>{decision.domain}</small><h3>{decision.title}</h3></div>
                  </header>
                  <div className="decision-case">
                    <div className="decision-case__constraint"><small>課題</small><p>{decision.constraint}</p></div>
                    <div className="decision-case__implementation"><small>実装</small><p>{decision.implementation}</p></div>
                    <div className="decision-case__behavior">
                      <small>結果</small><p>{decision.behavior}</p>
                      <strong>{decision.evidence}</strong>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="education" className="educational-ai section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="EDUCATIONAL DESIGN"
              title="講義中の気づきを、振り返りまでつなぐ。"
              lead="コメント、Poll、字幕、要約を個別の機能で終わらせず、気づく、伝える、講義が応答する、あとで振り返るという一続きの体験として設計しています。"
              align="center"
            />
          </Reveal>
          <div className="educational-ai__pipeline">
            {educationalPrinciples.map((item, index) => (
              <Reveal delay={index * 45} key={item.number}>
                <article>
                  <div><span>{item.number}</span><small>{item.label}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="quality" className="developer-quality section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="QUALITY & EVIDENCE"
              title="検証済みと実装中を分けて示す。"
              lead="本番で確認した構成、ローカルゲートの検証結果、現在構築している自動テスト基盤を同じ状態として扱いません。"
              align="center"
            />
          </Reveal>
          <Reveal className="production-evidence">
            <div className="production-evidence__heading">
              <p className="eyebrow">VERIFIED PRODUCTION STATE</p>
              <h3>本番にあるものだけを、数字で示す。</h3>
              <small>2026-07-17時点の読み取り専用確認</small>
            </div>
            <dl>
              {verifiedProductionFacts.map((fact) => (
                <div key={fact.label}><dt>{fact.value}</dt><dd>{fact.label}</dd></div>
              ))}
            </dl>
            <p className="production-evidence__note">約300人は実講義の実測値ではなく、負荷モデル上の設計条件です。</p>
          </Reveal>
          <div className="developer-quality__progress">
            {qualityInProgress.map((item, index) => (
              <Reveal delay={index * 55} key={item.title}>
                <article>
                  <header><h3>{item.title}</h3><span>{item.status}</span></header>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="technical-details" className="technical-details section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="TECHNICAL DETAILS"
              title="実装の詳細"
              lead="同期、認可、PDF配信、AI利用、講義終了処理の詳細をまとめています。"
              align="center"
            />
          </Reveal>
          <div className="technical-details__list">
            {technicalDetails.map((item) => (
              <details key={item.title}>
                <summary>{item.title}<span aria-hidden="true">＋</span></summary>
                <p>{item.body}</p>
              </details>
            ))}
          </div>
        </Section>

        <DeveloperProfile />

        <Section className="developer-closing section--dark">
          <Reveal className="developer-return-cta">
            <p>設計の先にある、学生と教員の体験へ。</p>
            <div><CTAButton href={links.demo}>3分で講義を体験 <span aria-hidden="true">→</span></CTAButton><a href="/INTRO_Interactive/">紹介ページへ戻る</a></div>
          </Reveal>
        </Section>
      </main>
      <Footer variant="developer" />
    </div>
  );
}
