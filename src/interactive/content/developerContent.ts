export const stackGroups = [
  { label: "紹介サイト", technologies: "Next.js / React / TypeScript" },
  { label: "プロダクトUI", technologies: "React / TypeScript / Vite" },
  { label: "データ・認証", technologies: "Supabase / PostgreSQL / Edge Functions" },
  { label: "配信・保存", technologies: "Cloudflare Pages / Workers / R2" },
  { label: "AI・音声", technologies: "OpenAI API / Realtime API" },
  { label: "CI・自動テスト", technologies: "GitHub Actions / Playwright / pgTAP / CodeQL" }
];

export const codebaseStats = [
  { value: "209", label: "TypeScript / TSX / MJS files" },
  { value: "37,693", label: "lines of code" },
  { value: "19", label: "database migrations" },
  { value: "23", label: "Edge Functions" },
  { value: "18", label: "pgTAP files" },
  { value: "4", label: "Playwright E2E specs" }
];

export const directoryGroups = [
  {
    path: "src/",
    description: "ReactプロダクトUI",
    children: [
      "pages/ — 学生・教員・教室表示・Archive",
      "components/ — PDF・Poll・コメント・AI関連UI",
      "context/ — 講義状態とversion付きsnapshot同期",
      "repositories/ — Mock／Supabaseデータアクセス",
      "caption/・pdf/・archive/・demo/"
    ]
  },
  {
    path: "supabase/",
    description: "PostgreSQL・認証・サーバー処理",
    children: ["migrations/ — append-only schema changes", "functions/ — Edge Functions＋共通処理", "tests/ — RLS・Lifecycle・所有権のpgTAP"]
  },
  { path: "publisher/", description: "教員PC用PDF Publisher", children: ["tests/ — PDF検証・公開・失敗動作"] },
  { path: "cloudflare/asset-worker/", description: "Private R2配信・講義Archive", children: ["src/ — ticket・Range・retention", "tests/ — Worker回帰テスト"] },
  { path: ".github/workflows/", description: "CI・セキュリティ検査・ブラウザE2E", children: [] },
  { path: "e2e/", description: "Demo・Local SupabaseのPlaywrightテスト", children: ["demo/ — Desktop／Mobile・Chromium／WebKit", "local/ — 教員と学生のlive lifecycle"] },
  { path: "scripts/ci/", description: "非Live回帰・秘密情報・DB型差分検査", children: [] },
  { path: "docs/", description: "Phase別設計記録・Gate・Runbook", children: [] },
  { path: "public/", description: "静的アセット", children: [] }
];

export const databaseDomains = [
  {
    label: "LECTURE & SYNC",
    title: "講義・同期",
    code: "lecture_sessions / live state / presence",
    body: "講義状態、section version、教室表示、参加者、presenceをlecture単位で管理します。"
  },
  {
    label: "COMMENTS",
    title: "コメント",
    code: "comments / likes / moderation audit",
    body: "投稿、いいね、集計、非表示・復元・固定に関するmoderation監査を管理します。"
  },
  {
    label: "POLL",
    title: "Poll",
    code: "polls / options / responses / totals",
    body: "設問と選択肢、participantが所有する回答、公開用集計を個別に管理します。"
  },
  {
    label: "LIFECYCLE",
    title: "講義Lifecycle",
    code: "hard stop / audit / 30-day archive",
    body: "90分の終了時刻、終了理由、監査、Archive export、retentionをサーバー時刻で管理します。"
  },
  {
    label: "PDF METADATA",
    title: "PDF参照情報",
    code: "document / version / page / R2 reference",
    body: "Supabaseには資料ID、version、現在ページ、R2参照を保存します。PDF本文と抽出textは保存しません。"
  },
  {
    label: "AI BILLING",
    title: "AI利用制御",
    code: "usage ledger / reservation / grant / rate limit",
    body: "実行許可、予算予約、確定利用量、再試行可否をprovider call単位で記録します。"
  },
  {
    label: "REALTIME",
    title: "字幕・provider制御",
    code: "caption window / token audit / call / hangup",
    body: "学生向けの完了字幕windowと、provider call、hangup、token監査を管理します。"
  },
  {
    label: "PHASE 5 / 6",
    title: "資料解析・5分要約",
    code: "analysis / proposal / run / revision / publication",
    body: "資料解析、Poll提案、5分要約、教員revision、公開状態を個別に保持します。"
  },
  {
    label: "OPERATIONS",
    title: "運用",
    code: "archive outbox / daily digest job",
    body: "Archive exportのoutboxと日次digest jobを管理します。job payloadには必要最小限の参照情報だけを保持します。"
  }
];

export const syncCadences = [
  { value: "5秒", label: "前景snapshot" },
  { value: "30秒", label: "背景タブ" },
  { value: "45秒", label: "presence書き込み上限" },
  { value: "90秒", label: "presence TTL" },
  { value: "15秒", label: "参加人数共有cache" },
  { value: "5件", label: "コメント初期取得" }
];

export const lifecycleSteps = [
  { number: "01", label: "DRAFT", title: "準備", body: "資料と講義設定を保持し、学生による書き込みを拒否します。" },
  { number: "02", label: "OPEN", title: "講義中", body: "開始時のサーバー時刻から、最大90分のhard_stop_atを設定します。" },
  { number: "03", label: "CLOSED", title: "終了", body: "手動終了と自動終了が同じ冪等な状態遷移を使用します。" },
  { number: "04", label: "ARCHIVE", title: "読み取り専用", body: "ライブ処理を停止し、サニタイズ済みの記録を読み取り専用で提供します。" },
  { number: "05", label: "EXPIRY", title: "保持期限", body: "期限判定後はfail closedとし、物理削除を段階的に実行します。" }
];

export const pdfResponsibilities = [
  { label: "LOCAL PUBLISHER", title: "PDF検証", body: "MIME、magic bytes、15MB、75ページ、20,000文字、暗号化、破損、画像のみPDFを検査します。OCRは実行しません。" },
  { label: "PRIVATE R2", title: "PDF object保存", body: "PDFをimmutable objectとして保存し、version付きmanifestから参照します。bucketはprivateです。" },
  { label: "CLOUDFLARE WORKER", title: "認可配信", body: "短寿命ticket、Origin、Range、rate limit、retentionを検証し、byte rangeを返します。" },
  { label: "SUPABASE", title: "講義metadata", body: "資料ID、version、現在ページ、R2参照など、PDF本文を含まないmetadataを同期します。" }
];

export const aiSafeguards = [
  { label: "ADMISSION", title: "実行認可", body: "教員操作、講義状態、feature flag、一回限りのgrant、予算、同時実行枠を検証します。" },
  { label: "RESERVATION", title: "利用量予約", body: "providerへの送信前に利用量を予約し、成功、失敗、不明応答をusage ledgerで確定します。" },
  { label: "QUALITY GATE", title: "出力検証", body: "根拠、重複、情報量、schemaを検証し、品質条件を満たさない出力を公開対象から除外します。" },
  { label: "HUMAN REVIEW", title: "教員確認状態", body: "AI Pollは教員向け下書きとして保持します。要約は確認、修正、非表示、固定の状態を持ちます。" }
];

export const productPrinciples = [
  {
    number: "01",
    label: "FIELD ORIGIN",
    title: "薬学教育や生命科学研究の現場で見出した課題から出発",
    body: "講義中の疑問が共有されにくいこと、学生の反応が講義の進行へ十分に戻らないこと、講義後の振り返りに必要な文脈が残りにくいことを、現場で観察した課題として定義しました。資料形式や特定分野の内容ではなく、教育体験そのものを設計対象としています。"
  },
  {
    number: "02",
    label: "BROAD APPLICABILITY",
    title: "授業から講演まで、同じ基盤で運用",
    body: "参加、コメント、投票、資料同期、字幕、振り返りを共通の講義Lifecycle上で扱います。学生・参加者向け画面と教員・登壇者向け画面を分離しているため、対象分野を問わず、専門授業、研究セミナー、研修、講演へ適用できます。"
  },
  {
    number: "03",
    label: "BRAND & STUDENT UX",
    title: "COMPASSの世界観を、使いやすさへつなぐ",
    body: "COMPASSシリーズの色、余白、タイポグラフィ、情報階層を全機能で統一し、独自の世界観を講義画面へ継承します。接続状態と操作feedbackを即時に示し、学生が「今つながっている」「楽しい」「使いやすい」と感じられるUIを構成しています。"
  }
];

export const engineeringDecisions = [
  {
    number: "01",
    domain: "OWNERSHIP & RLS",
    title: "participant所有権に基づく行単位認可",
    summary: "Anonymous Authの主体を講義参加状態とparticipant所有権に対応付けます。",
    requirement: "氏名を取得せずに参加を許可し、別participantの操作と講義横断アクセスを拒否すること。",
    mechanism: "明示的なGRANT、RLS、auth.uid()、participant所有権、講義状態を併用します。特権関数はprivate schema、固定search_path、最小限のEXECUTE権限に限定します。",
    failure: "クライアントが送信したparticipant IDだけでは認可せず、誤所有者、別講義、終了済み講義からの操作をサーバーで拒否します。",
    evidence: "二ユーザー、二講義、誤所有者、終了済み講義の組み合わせをpgTAPで検証します。"
  },
  {
    number: "02",
    domain: "VERSIONED SNAPSHOT",
    title: "version付きsnapshotによる差分同期",
    summary: "共有状態の取得を単一のsnapshot RPCへ集約し、section単位のversionを比較します。",
    requirement: "コメント、Poll、PDF参照、字幕に変更がない場合、同一payloadを再送しないこと。",
    mechanism: "クライアントが既知のsection versionを送信し、サーバーは更新されたsectionだけを返します。コメント履歴とPDF本体は別経路です。",
    failure: "背景タブでは30秒間隔へ移行した後に同期を停止します。通信失敗には上限付きbackoffを適用し、前景復帰時に即時同期します。",
    evidence: "presence書き込み45秒、参加人数cache 15秒、コメント初期取得5件の上限を個別に検証します。"
  },
  {
    number: "03",
    domain: "IDEMPOTENT LIFECYCLE",
    title: "冪等な講義終了処理",
    summary: "手動終了、server deadline、Cron、RPC guardが共通の終了処理を使用します。",
    requirement: "ブラウザまたはCronが停止した場合も、期限切れ講義をactiveとして扱わないこと。",
    mechanism: "開始時にhard_stop_atを設定し、手動終了と自動終了を再実行可能なcore transitionへ統合します。",
    failure: "各読み書きRPCが期限を独立して判定し、終了後のコメント、Poll回答、PDF更新、AI開始を拒否します。",
    evidence: "クライアントの終了検知、Cron回収、DB側拒否を個別の回帰テストで確認します。"
  },
  {
    number: "04",
    domain: "PRIVATE PDF DELIVERY",
    title: "Private R2を用いたPDF配信",
    summary: "PDFの検証、object保存、認可配信、同期metadataを独立した構成要素が担当します。",
    requirement: "PDF本体の保存と転送を、講義状態を保持するSupabaseの負荷および障害範囲から分離すること。",
    mechanism: "Publisherが検証とhash計算、R2がprivate object、WorkerがticketとRange、Supabaseがversionと現在ページを担当します。",
    failure: "R2への書き込み後にHEAD、Range、hashを照合します。lecture lock下でmanifestを原子的に更新し、不完全な公開状態を防止します。",
    evidence: "画像のみ、暗号化、破損、上限超過のPDFを拒否し、PDF byte転送がSupabaseを経由しないことを検証します。"
  },
  {
    number: "05",
    domain: "BOUNDED AI",
    title: "AI実行許可と利用量台帳",
    summary: "有料処理を一回限りのgrant、usage reservation、usage ledgerで制御します。",
    requirement: "複数タブ、再試行、応答消失、講義終了後の遅延結果による二重課金と誤公開を抑制すること。",
    mechanism: "actor、lecture、actionに限定したgrant、server time、budget、concurrency lane、idempotency keyを検証します。",
    failure: "応答状態が不明なリクエストを自動再試行しません。講義終了後に到着した結果は公開対象から除外します。",
    evidence: "RealtimeとBatchを別のlaneで管理し、reserved、finalized、discardedの各状態をusage ledgerへ記録します。"
  },
  {
    number: "06",
    domain: "ARCHIVE OUTBOX",
    title: "Outbox方式のArchive export",
    summary: "講義終了後の閲覧を、サニタイズ済みの読み取り専用Archiveへ移行します。",
    requirement: "終了済み講義で認証、participant生成、5秒同期、private dataへのライブアクセスを継続しないこと。",
    mechanism: "PostgreSQLがlease付きoutboxを作成し、Edge Functionsが上限付きbatchをclaimします。Workerがpayloadを再検証し、Private R2へ保存します。",
    failure: "exportは再実行可能です。期限切れArchiveは物理削除の完了前からfail closedとして扱います。",
    evidence: "Archive payloadからAuth UID、participant ID、PIN、secret、raw transcript、audioを除外します。"
  }
];

export const automationGates = [
  {
    number: "01",
    label: "QUALITY & BUILD",
    title: "静的解析とproduction build",
    status: "REPOSITORY IMPLEMENTATION",
    points: ["npm ciとlockfile固定", "secret scan・npm audit・CodeQL", "3系統の型検査・oxlint", "ライブ機能を除く回帰テスト・bundle検査・SBOM生成"]
  },
  {
    number: "02",
    label: "DEMO BROWSER E2E",
    title: "複数viewportのbrowser E2E",
    status: "PLAYWRIGHT",
    points: ["Desktop / Mobile 390px", "Chromium / WebKit", "アクセシビリティ・visual contract", "console error・横overflowを失敗条件として検出"]
  },
  {
    number: "03",
    label: "LOCAL SUPABASE E2E",
    title: "使い捨てSupabaseによるintegration test",
    status: "DISPOSABLE BACKEND",
    points: ["全migrationを初期状態から適用", "pgTAP・DB lint・型drift検査", "synthetic credentialsでEdgeを起動", "作成→開始→参加→投稿→終了を3回実行"]
  },
  {
    number: "04",
    label: "SAFE FAILURE EVIDENCE",
    title: "失敗時artifact",
    status: "NO PRODUCTION SECRET",
    points: ["Playwright trace・動画・スクリーンショット", "HTML report・Local Edge log", "ブラウザテストで外部通信を遮断", "CIからdeployment・OpenAI APIの有料リクエストを実行しない"]
  }
];

export const technicalDetails = [
  {
    title: "ブラウザに許可するデータ操作",
    body: "ブラウザから直接操作できる対象は、自分のコメント、いいね、Poll回答、participant自身の参照などに限定しています。Data APIでは明示的なGRANTとRLSの両方を適用し、authenticatedロールだけでは認可しません。"
  },
  {
    title: "version付きsnapshotの契約",
    body: "共有状態とparticipant固有状態を分離し、section versionが一致するpayloadを返しません。コメント履歴はcursor pagination、PDF byteはCloudflare Workerから取得します。前景復帰時には即時同期を実行します。"
  },
  {
    title: "講義LifecycleとArchive",
    body: "PostgreSQL server time、hard_stop_at、冪等なclose処理、毎分Cron、各RPCの期限判定を併用します。終了後はlive処理を停止し、サニタイズ済みの読み取り専用Archiveを30日間提供します。"
  },
  {
    title: "PDF検証とmanifest更新",
    body: "PublisherはPDF本文をlocalで検証・抽出し、content hashとtext hashを計算します。R2への書き込み後にHEAD、Range、hashを照合し、lecture lock下でmanifestを原子的に更新します。"
  },
  {
    title: "AI実行許可・利用量・公開状態",
    body: "有料処理は一回限りのgrant、usage reservation、usage ledger、idempotency keyを使用します。AI Pollと資料解析は教員向け下書きとして保持します。5分要約にはquality gateと公開状態を設定し、教員修正を別revisionとして保存します。"
  },
  {
    title: "CIのセキュリティ境界",
    body: "CIはproduction credentialを使用せず、Hosted Supabase、OpenAI API、Cloudflare deploymentへ接続しません。Local Supabaseとsynthetic credentialsでアプリケーションのrouteとrepositoryを検証し、失敗時のartifactを期限付きで保存します。"
  }
];
