import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CTAButton } from "./components/ui/CTAButton";
import { Reveal } from "./components/ui/Reveal";
import { Section } from "./components/ui/Section";
import { SectionHeader } from "./components/ui/SectionHeader";
import {
  aiSafeguards,
  automationGates,
  codebaseStats,
  databaseDomains,
  developerMessagePages,
  directoryGroups,
  educationalDesignPrinciples,
  engineeringDecisions,
  lifecycleSteps,
  pdfResponsibilities,
  stackGroups,
  syncCadences,
  technicalDetails
} from "./content/developerContent";
import { links } from "./content/interactiveContent";
import { DeveloperMessageReader } from "./sections/DeveloperMessageReader";
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
                <p className="developer-hero__audience">
                  <span>開発者向け情報</span>
                  情報教育、教育工学、情報セキュリティ、ソフトウェア開発の観点から、実装構成と設計判断を紹介します。
                </p>
                <div className="developer-hero__actions">
                  <a href="/INTRO_Interactive/">学生・教員向けページ</a>
                </div>
                <p className="developer-hero__date">Repository snapshot · 2026-07-19</p>
              </div>
            </div>
          </div>
        </section>

        <Section id="educational-design" className="developer-product-thesis section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="EDUCATIONAL DESIGN"
              title="現場の課題を、分野横断の設計によって一つの教育体験へ"
              align="center"
            />
          </Reveal>
          <div className="developer-product-thesis__grid">
            {educationalDesignPrinciples.map((item, index) => (
              <Reveal delay={index * 55} key={item.number}>
                <article><div><span>{item.number}</span><small>{item.label}</small></div><h3>{item.title}</h3><p>{item.body}</p></article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="developer-message" className="developer-message section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="DEVELOPER MESSAGE"
              title="AI時代に、専門性を「実装」するということ"
              align="center"
            />
          </Reveal>
          <Reveal className="developer-message__reader-reveal">
            <DeveloperMessageReader pages={developerMessagePages} />
          </Reveal>
        </Section>

        <Section id="stack" className="developer-stack section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="TECHNOLOGY STACK"
              title="主要技術と担当領域"
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

        <Section id="codebase" className="developer-codebase section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="CODEBASE"
              title="ディレクトリ構造"
              lead="フロントエンド、PostgreSQL migration、Edge Functions、PDF Publisher、Cloudflare Worker、CI/E2E、設計文書を同一リポジトリで管理しています。"
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
              <p>2026-07-19時点のローカルリポジトリを集計。未コミットの実装を含み、生成物、依存パッケージ、ローカル資格情報を除外しています。</p>
            </figure>
          </Reveal>
        </Section>

        <Section id="technology-overview" className="developer-overview section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="TECHNOLOGY OVERVIEW"
              title="システム構成"
              lead="画面、データ、同期、講義Lifecycle、PDF配信、AI利用制御を、それぞれ独立した責務として構成しています。"
              align="center"
            />
          </Reveal>

          <div className="developer-overview__foundation">
            <Reveal>
              <article className="developer-foundation-card">
                <header><small>01 / FRONTEND</small><h3>React SPAと画面構成</h3></header>
                <p>React 19、TypeScript 6、Vite 8、React Router 7によるSPAです。学生、教員、教室表示、Archiveをroute単位で構成し、共通のlecture snapshotを参照します。</p>
                <dl className="developer-surface-profile">
                  <div>
                    <dt>STUDENT UI</dt>
                    <dd><strong>Desktop / Mobile optimized</strong>DesktopとMobileの双方で、画面特性に合わせたUIを設計しています。</dd>
                  </div>
                  <div>
                    <dt>TEACHER UI</dt>
                    <dd><strong>Desktop First</strong>講義制御と状態監視を同一画面で行うDesktop構成です。</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article className="developer-foundation-card developer-foundation-card--backend">
                <header><small>02 / BACKEND</small><h3>バックエンドの責務分担</h3></header>
                <p>PostgreSQLを講義状態と所有権の正本とし、Supabase Authで参加主体を識別します。Edge Functionsは管理操作、AI処理、外部サービス連携など、秘密情報を必要とする処理を担当します。</p>
                <ul className="developer-trust-zones">
                  <li><span>BROWSER</span><p>publishable keyと公開設定だけ</p></li>
                  <li><span>POSTGRESQL</span><p>所有権・Lifecycle・監査・metadata</p></li>
                  <li><span>EDGE</span><p>Admin・AI・machine-authenticated処理</p></li>
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal className="developer-overview-block">
            <div className="developer-overview-block__heading">
              <p className="eyebrow">DATA RESPONSIBILITIES</p>
              <h3>Supabaseのデータ領域</h3>
              <p>講義中の役割と保持条件に基づき、Supabase上のデータを九つの領域へ分類しています。</p>
            </div>
            <div className="developer-domain-grid">
              {databaseDomains.map((domain) => (
                <article key={domain.label}>
                  <small>{domain.label}</small>
                  <h4>{domain.title}</h4>
                  <code>{domain.code}</code>
                  <p>{domain.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="developer-authorization-note">
            <div><small>AUTHORIZATION BOUNDARY</small><h3>認可モデル</h3></div>
            <p>Anonymous Authの<code>auth.uid()</code>、participant所有権、講義状態を、明示的なGRANTとRLS（行単位アクセス制御）で検証します。特権関数はprivate schema、固定<code>search_path</code>、最小限のEXECUTE権限に限定しています。</p>
          </Reveal>

          <div className="developer-overview__systems">
            <Reveal>
              <article className="developer-system-panel">
                <header><small>03 / SYNCHRONIZATION &amp; LOAD</small><h3>version付きsnapshot同期</h3></header>
                <p>クライアントは既知のsection versionをsnapshot RPCへ送信し、更新されたsectionだけを受け取ります。前景では5秒間隔、背景タブでは30秒間隔で同期します。</p>
                <dl className="developer-cadence-grid">
                  {syncCadences.map((item) => <div key={item.label}><dt>{item.value}</dt><dd>{item.label}</dd></div>)}
                </dl>
                <p className="developer-system-panel__note">コメント履歴は明示的に開いた場合だけ取得し、PDF本体はSupabaseを通しません。</p>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article className="developer-system-panel developer-system-panel--lifecycle">
                <header><small>04 / LECTURE LIFECYCLE</small><h3>サーバー主導の講義Lifecycle</h3></header>
                <p>講義開始時に<code>hard_stop_at</code>をサーバー時刻で確定します。手動終了、毎分Cron、各RPCの期限判定は、同じ冪等な終了処理を使用します。</p>
                <ol className="developer-lifecycle-flow">
                  {lifecycleSteps.map((step) => (
                    <li key={step.number}><span>{step.number}</span><div><small>{step.label}</small><h4>{step.title}</h4><p>{step.body}</p></div></li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>

          <div className="developer-overview__systems developer-overview__systems--delivery">
            <Reveal>
              <article className="developer-system-panel">
                <header><small>05 / PDF &amp; CLOUDFLARE</small><h3>Private R2によるPDF配信</h3></header>
                <p>PDFの検証、保存、配信をLocal Publisher、Private R2、Cloudflare Workerが担当し、Supabaseは資料ID、version、現在ページなどの参照情報を保持します。</p>
                <div className="developer-responsibility-list">
                  {pdfResponsibilities.map((item) => <section key={item.label}><small>{item.label}</small><h4>{item.title}</h4><p>{item.body}</p></section>)}
                </div>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article className="developer-system-panel developer-system-panel--ai">
                <header><small>06 / AI, COST &amp; HUMAN REVIEW</small><h3>AI実行・利用量・公開状態</h3></header>
                <p>AI処理の開始許可、利用量予約、実績確定、品質検査、教員による公開判断を、独立したサーバー状態として管理します。</p>
                <div className="developer-responsibility-list">
                  {aiSafeguards.map((item) => <section key={item.label}><small>{item.label}</small><h4>{item.title}</h4><p>{item.body}</p></section>)}
                </div>
              </article>
            </Reveal>
          </div>
        </Section>

        <Section id="engineering-details" className="developer-engineering section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="ENGINEERING DECISIONS"
              title="設計判断と検証方法"
              lead="各設計について、要件、実装、失敗時動作、検証方法を記載します。"
              align="center"
            />
          </Reveal>
          <div className="developer-engineering__list">
            {engineeringDecisions.map((decision, index) => (
              <Reveal delay={index * 45} key={decision.number}>
                <details>
                  <summary>
                    <span>{decision.number}</span>
                    <div><small>{decision.domain}</small><h3>{decision.title}</h3><p>{decision.summary}</p></div>
                    <i aria-hidden="true">＋</i>
                  </summary>
                  <div className="developer-engineering__detail-grid">
                    <section><small>REQUIREMENT</small><p>{decision.requirement}</p></section>
                    <section><small>IMPLEMENTATION</small><p>{decision.mechanism}</p></section>
                    <section><small>FAILURE BEHAVIOR</small><p>{decision.failure}</p></section>
                    <section><small>VERIFICATION</small><p>{decision.evidence}</p></section>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="automation" className="developer-automation section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="GITHUB ACTIONS CI / PLAYWRIGHT E2E"
              title="CI / E2Eの検証構成"
              lead="GitHub Actionsで型検査、Lint、production build、secret scan、CodeQL、pgTAP、Playwright E2Eを段階実行します。"
              align="center"
            />
          </Reveal>
          <Reveal className="developer-automation__boundary">
            <div><span>IMPLEMENTATION IN PROGRESS</span><strong>Production環境と分離したCI</strong></div>
            <p>Local Supabaseとsynthetic credentialsを使用し、アプリケーションのrouteとrepositoryを検証します。production環境、OpenAI API、Cloudflare deploymentには接続しません。</p>
          </Reveal>
          <div className="developer-automation__grid">
            {automationGates.map((gate, index) => (
              <Reveal delay={index * 55} key={gate.number}>
                <article>
                  <header><span>{gate.number}</span><small>{gate.status}</small></header>
                  <p>{gate.label}</p>
                  <h3>{gate.title}</h3>
                  <ul>{gate.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="developer-automation__speed">
            <div><small>FAST FEEDBACK</small><h3>Workflow並列制御と失敗時artifact</h3></div>
            <p>同一branchの旧workflowをcancelし、独立したsecurity jobを並列実行します。失敗時にはPlaywright trace、動画、スクリーンショット、HTML report、Local Edge logを保存します。</p>
          </Reveal>
        </Section>

        <Section id="technical-reference" className="technical-details section--dark">
          <Reveal>
            <SectionHeader
              eyebrow="IMPLEMENTATION DETAILS"
              title="実装条件とセキュリティ境界"
              lead="認可、snapshot同期、講義Lifecycle、PDF配信、AI利用制御、CIの実装条件と検証範囲を記載します。"
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
            <p>学生・教員向けの紹介とデモ</p>
            <div><CTAButton href={links.demo}>デモを開く <span aria-hidden="true">→</span></CTAButton><a href="/INTRO_Interactive/">紹介ページへ戻る</a></div>
          </Reveal>
        </Section>
      </main>
      <Footer variant="developer" />
    </div>
  );
}
