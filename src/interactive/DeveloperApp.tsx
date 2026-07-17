import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CTAButton } from "./components/ui/CTAButton";
import { Reveal } from "./components/ui/Reveal";
import { Section } from "./components/ui/Section";
import { SectionHeader } from "./components/ui/SectionHeader";
import {
  designDecisions,
  educationalAIContracts,
  educationalAISteps,
  loadAndCostLanes,
  reliabilityPractices,
  securityBoundaries,
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
              eyebrow="DESIGN DECISIONS"
              title="教室の制約を、実装契約に変える。"
              lead="5秒同期、匿名参加、PDF配信、AI課金を「配慮」で終わらせず、section version、RLS、冪等性、hard limitとしてコードとデータベースへ落とし込みました。"
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
                    <em>{decision.status}</em>
                  </header>
                  <div className="decision-case">
                    <div className="decision-case__constraint"><small>CONSTRAINT</small><p>{decision.constraint}</p></div>
                    <div className="decision-case__implementation"><small>IMPLEMENTATION CONTRACT</small><p>{decision.implementation}</p></div>
                    <div className="decision-case__behavior">
                      <small>SYSTEM BEHAVIOR</small><p>{decision.behavior}</p>
                      <strong>{decision.evidence}</strong>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="ai-design" className="educational-ai section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="EDUCATIONAL AI DESIGN"
              title="AIの答えより、検証できる学びを。"
              lead="モデル出力を完成品として扱いません。入力を限定し、Strict JSON Schemaとevidence IDを要求し、サーバーの決定論的ゲートと機能別の公開契約を通して学生へ届けます。"
              align="center"
            />
          </Reveal>
          <div className="educational-ai__pipeline">
            {educationalAISteps.map((item, index) => (
              <Reveal delay={index * 45} key={item.step}>
                <article>
                  <div><span>{item.step}</span><small>{item.label}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="educational-ai__contracts">
            {educationalAIContracts.map((item, index) => (
              <Reveal delay={index * 55} key={item.label}>
                <article><small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p></article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="security-design" className="security-architecture section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="SECURITY ARCHITECTURE"
              title="匿名性は、認可の省略ではつくらない。"
              lead="氏名を求めない参加体験と、講義・所有者単位のアクセス制御を両立するため、Browser、Edge、PostgreSQL、外部サービスの信頼境界を分けています。"
              align="center"
            />
          </Reveal>
          <div className="security-architecture__diagram" aria-label="BrowserからTrusted Edgeへ接続し、DatabaseとExternal AIへ責任を分岐する境界">
            <div><small>CLIENT</small><strong>Browser</strong><span>Anonymous Auth / server secretなし</span></div>
            <i aria-hidden="true">→</i>
            <div><small>TRUSTED</small><strong>Edge</strong><span>actor・権限・開始許可を検証</span></div>
            <i aria-hidden="true">→</i>
            <div className="security-architecture__targets">
              <div><small>DATA</small><strong>PostgreSQL</strong><span>RLS・所有権・server time</span></div>
              <div><small>EXTERNAL</small><strong>AI</strong><span>明示された機能の限定入力のみ</span></div>
            </div>
          </div>
          <div className="security-architecture__points">
            {securityBoundaries.map((item, index) => (
              <Reveal delay={index * 45} key={item.title}>
                <article><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="cost-design" className="load-cost section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="LOAD & API COST"
              title="呼ばない。送らない。重ねない。"
              lead="APIコストは、安価なモデルを選ぶだけでは制御できません。呼び出し前のskip、入力範囲、同時実行、再試行、実績確定までを一つの契約として設計しています。"
              align="center"
            />
          </Reveal>
          <div className="load-cost__lanes">
            {loadAndCostLanes.map((lane, laneIndex) => (
              <Reveal delay={laneIndex * 70} key={lane.label}>
                <section>
                  <header><small>{lane.label}</small><h3>{lane.title}</h3></header>
                  <div>
                    {lane.items.map((item) => (
                      <article key={item.tag}><small>{item.tag}</small><h4>{item.title}</h4><p>{item.body}</p></article>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="operations" className="reliability section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="OPERATIONS & RELIABILITY"
              title="本番で、壊れ方まで設計する。"
              lead="正常系だけでなく、旧クライアント、応答消失、Cron停止、provider遅延、rollbackまでを実装契約に含めています。"
              align="center"
            />
          </Reveal>
          <div className="reliability__practices">
            {reliabilityPractices.map((item) => (
              <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}
          </div>
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
        </Section>

        <Section id="technical-details" className="technical-details section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="TECHNICAL DETAILS"
              title="設計判断まで、たどれる。"
              lead="上位の判断から実装契約へ、必要な深さまで段階的に読み進められます。"
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
