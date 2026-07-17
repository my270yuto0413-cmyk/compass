export const stackGroups = [
  { label: "紹介サイト", technologies: "Next.js / React / TypeScript" },
  { label: "プロダクトUI", technologies: "React / TypeScript / Vite" },
  { label: "データ・認証", technologies: "Supabase / PostgreSQL / Edge Functions" },
  { label: "配信・保存", technologies: "Cloudflare Pages / Workers / R2" },
  { label: "AI・音声", technologies: "OpenAI API / Realtime API" },
  { label: "開発・品質", technologies: "GitHub / CI / OpenAI Codex" }
];

export const codebaseStats = [
  { value: "173", label: "TypeScript / TSX / MJS files" },
  { value: "32,506", label: "lines of source and tests" },
  { value: "18", label: "database migrations" },
  { value: "21", label: "Edge Functions" }
];

export const directoryGroups = [
  {
    path: "src/",
    description: "ReactプロダクトUI",
    children: [
      "pages/ — 学生・教員・教室表示",
      "components/ — PDF・Poll・コメント・AI関連UI",
      "context/ — 講義状態と5秒同期",
      "repositories/ — Mock／Supabaseデータアクセス",
      "caption/・pdf/・archive/・demo/"
    ]
  },
  {
    path: "supabase/",
    description: "データベース・認証・サーバー処理",
    children: ["migrations/ — 18 migrations", "functions/ — 21 Edge Functions＋共通処理", "tests/ — 17 pgTAP files"]
  },
  { path: "publisher/", description: "教員PC用PDF Publisher", children: [] },
  { path: "cloudflare/asset-worker/", description: "Private R2配信・講義Archive", children: [] },
  { path: "scripts/", description: "回帰・負荷・セキュリティ・本番検査", children: [] },
  { path: "docs/", description: "Phase別設計記録・Gate・Runbook", children: [] },
  { path: "public/", description: "静的アセット", children: [] }
];

export const productSurfaces = [
  {
    label: "STUDENT ENTRY",
    route: "/join",
    title: "講義へ参加する",
    body: "講義コードを入力し、公開中の講義または終了後のArchiveへ進みます。"
  },
  {
    label: "LIVE LECTURE",
    route: "/lecture",
    title: "講義を受ける",
    body: "PDF、字幕、コメント、Poll、5分要約を一つの学生画面へまとめています。"
  },
  {
    label: "TEACHER CONTROL",
    route: "/admin",
    title: "講義を運営する",
    body: "講義開始・終了、資料、Poll、コメント、AI機能を教員が操作します。"
  },
  {
    label: "CLASSROOM DISPLAY",
    route: "/display",
    title: "教室へ共有する",
    body: "講義の進行と学生の反応を、投影用の表示へ分離して届けます。"
  },
  {
    label: "READ-ONLY ARCHIVE",
    route: "/lecture/archive",
    title: "終了後に振り返る",
    body: "ライブ接続を継続せず、サニタイズ済みの講義記録を読み取り専用で提供します。"
  },
  {
    label: "OFFLINE DEMO",
    route: "/demo",
    title: "接続なしで体験する",
    body: "Supabaseへ接続せず、主要な学生・教員体験を確認できるデモです。"
  }
];

export const designDecisions = [
  {
    number: "01",
    domain: "5秒同期",
    title: "変化のないデータは、送り直さない。",
    constraint:
      "300人が90分間、5秒ごとに状態を取得する設計モデルでは、snapshotは324,000回になります。字幕、コメント、Poll、PDFを毎回全量で返すと、変化のない時間にもDB処理と転送量が積み上がります。",
    implementation:
      "クライアントがsectionごとの既知versionを一つの認証済みsnapshot RPCへ送り、サーバーは更新されたsectionだけを返します。コメント履歴はcursor paginationへ分離し、非表示タブでは同期を低速化した後に停止します。",
    behavior:
      "字幕だけが更新されたとき、コメント、Poll、PDFを再送しません。presence書き込みはブラウザごとに最大45秒に1回、参加者数は講義単位で15秒cacheします。",
    evidence: "300人・90分は実測人数ではなく、負荷モデル上の設計条件です。"
  },
  {
    number: "02",
    domain: "匿名参加と認可",
    title: "匿名でも、操作主体は曖昧にしない。",
    constraint:
      "氏名入力をなくすだけでは、別の参加者IDを指定するなりすましや、講義をまたいだ読み書きを防げません。",
    implementation:
      "Supabase Anonymous Authのauth.uid()とparticipant所有権を結び付け、RLS、table GRANT、function EXECUTEを別々に制御します。特権処理ではactor、lecture、講義状態をサーバー側で再検証します。",
    behavior:
      "氏名、学生番号、大学メールを参加条件にせず、行単位の所有権をサーバーで確認します。認証済みであることだけを認可条件にはしません。",
    evidence: "講義横断・参加者横断のアクセスをpgTAPで検証しています。"
  },
  {
    number: "03",
    domain: "PDF配信",
    title: "PDFは、講義データと別の経路で届ける。",
    constraint:
      "PDF本体をコメントや講義状態と同じ経路へ通すと、保存容量、転送量、障害範囲がSupabaseへ集中します。",
    implementation:
      "Local PublisherがMIME、magic bytes、暗号化・破損、容量・ページ・文字数を検証し、private R2へ保存します。Workerが短寿命認可とRange requestを処理し、Supabaseには資料ID、版、現在ページなどのmetadataだけを保持します。",
    behavior:
      "PDFバイナリと配信egressはSupabaseを経由しません。新しいPDFを公開するときも、メインアプリの再deployは不要です。",
    evidence: "Publisher 10/10、Worker 11/11のローカルテストを通過しています。"
  },
  {
    number: "04",
    domain: "教育AI",
    title: "AIの出力に、公開条件を持たせる。",
    constraint:
      "モデル出力をそのまま教材として扱うと、根拠不足、重複、情報量の少ない要約が講義画面へ混入します。",
    implementation:
      "入力を直近の講義内容へ限定し、Strict JSON Schemaとevidence IDを要求します。サーバーが根拠、重複、情報量を検証し、低価値な結果は新しいカードとして表示しません。",
    behavior:
      "5分要約は『AI生成・教員未確認』などの状態を明示し、教員が確認、修正、非表示、固定できます。AI Poll候補は教員専用の下書きで、学生へ自動配信しません。",
    evidence: "AI原文と教員修正を別revisionとして保持します。"
  },
  {
    number: "05",
    domain: "APIコスト",
    title: "APIを呼ぶ前に、利用可否を決める。",
    constraint:
      "複数タブ、再試行、応答消失、講義終了後の遅延結果は、二重呼び出しや予算超過を引き起こし得ます。",
    implementation:
      "actor・lecture・actionへ限定した一回限りの開始許可を発行し、provider呼び出し前に予算をreservationします。実績はusage ledgerで確定し、server time、hard stop、idempotency keyで重複実行を防ぎます。",
    behavior:
      "時間、回数、token、予算を複合上限で制御します。講義終了後に届いた結果は公開せず、応答不明の要求を無条件に再試行しません。",
    evidence: "開始許可、reservation、ledgerをサーバー権威で管理します。"
  },
  {
    number: "06",
    domain: "講義終了とArchive",
    title: "講義が終わったら、ライブ接続も終える。",
    constraint:
      "終了済み講義をlive loopで提供し続けると、不要な認証、参加者生成、5秒通信、private dataの露出面が残ります。",
    implementation:
      "サーバー時刻のhard_stop_at、Cron、再実行可能な終了処理を組み合わせます。終了後はサニタイズ済みread-only payloadだけをprivate R2へexportし、Workerから配信します。",
    behavior:
      "終了済み講義では新しいAuth sessionやparticipantを作らず、継続pollingもしません。Archiveへ認証ID、PIN、secret、raw transcript、audioを含めません。",
    evidence: "ライブ講義と終了後閲覧を異なる認可・障害境界へ分離しています。"
  }
];

export const educationalPrinciples = [
  {
    number: "01",
    label: "参加",
    title: "発言より低い負担で、反応できる。",
    body: "氏名を必須にせず、任意のニックネーム、コメント、いいね、Pollを使って理解や疑問を伝えられるようにしています。"
  },
  {
    number: "02",
    label: "講義",
    title: "学生の反応を、講義へ戻す。",
    body: "コメント、Poll、参加人数、AI要約を教員操作と教室表示へ接続し、学生の反応をその場の説明や進行へ反映できるようにしています。"
  },
  {
    number: "03",
    label: "判断",
    title: "AIを、教育判断の代わりにしない。",
    body: "根拠と品質条件を満たさない出力を表示せず、Poll候補は教員の下書き、要約は確認状態付きの内容として扱います。"
  },
  {
    number: "04",
    label: "振り返り",
    title: "講義中の気づきを、終了後まで残す。",
    body: "ライブ講義を無期限に延長せず、終了後は30日間の読み取り専用Archiveへ移し、講義中の疑問と要点を振り返れるようにしています。"
  }
];

export const verifiedProductionFacts = [
  { value: "0–6.6", label: "本番反映済みPhase" },
  { value: "18", label: "Hosted migrations" },
  { value: "21", label: "ACTIVE Edge Functions" },
  { value: "38 / 38", label: "public tables with RLS" },
  { value: "6", label: "scheduled jobs" },
  { value: "17 / 837", label: "pgTAP files / assertions" }
];

export const qualityInProgress = [
  {
    title: "GitHub Actions CI",
    status: "実装中",
    body: "型検査、Lint、Production Build、既存のNode回帰テストとSQLテストを、変更時に同じ条件で再実行できる構成へ接続しています。"
  },
  {
    title: "Playwright E2E",
    status: "実装中",
    body: "学生参加、教員操作、教室表示、講義終了、Archive移行の主要導線を、ブラウザ上で再現・検証する自動E2E基盤を構築しています。"
  }
];

export const technicalDetails = [
  {
    title: "5秒差分同期",
    body:
      "クライアントはsectionごとの既知versionを認証済みsnapshot RPCへ送信します。versionが一致するsectionはpayloadへ含めず、字幕更新でコメント、Poll、PDFを再送しません。hidden時は低速化後に停止し、visible復帰時に即時同期します。"
  },
  {
    title: "PDFの責任境界",
    body:
      "Local Publisherが検証・hash計算・公開を担当し、private R2がPDF objectを保持、Workerがmanifest・短寿命認可・Range requestを処理します。Supabaseは資料参照と現在ページなどの同期metadataだけを保持します。"
  },
  {
    title: "Anonymous Authと行単位認可",
    body:
      "匿名参加でもauth.uid()を持ち、participant所有権、講義membership、教員操作を別々に検証します。RLSだけでなくGRANTとEXECUTEも最小化し、ブラウザ表示制御をセキュリティ境界として扱いません。"
  },
  {
    title: "AI生成と公開状態",
    body:
      "資料要点・Poll候補は教員確認前の非公開下書きです。5分要約はstrict schemaと決定論的quality gateを通過した場合のみAI未確認ラベルで公開され得ます。教員の確認・修正はreview stateとappend-only revisionとして保持します。"
  },
  {
    title: "課金・停止・再試行",
    body:
      "paid operationは一回限りの開始許可、reservation、usage ledger、idempotency keyを持ちます。停止はPIN不要で、講義終了後の結果は破棄します。timeoutや応答不明を無条件に再実行しません。"
  },
  {
    title: "本番反映と検証範囲",
    body:
      "Phase 0〜6.6、18 migrations、21 Edge Functions、6 scheduled jobsを本番で確認済みです。17 pgTAP files・837 assertionsはローカルゲートの証拠として区別しています。約300人は実講義の実測値ではなく、負荷モデル上の設計条件です。"
  }
];
