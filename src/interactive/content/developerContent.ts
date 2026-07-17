export const stackGroups = [
  { label: "紹介サイト", technologies: "Next.js / React / TypeScript" },
  { label: "プロダクトUI", technologies: "React / TypeScript / Vite" },
  { label: "データ・認証", technologies: "Supabase / PostgreSQL / Edge Functions" },
  { label: "配信・保存", technologies: "Cloudflare Pages / Workers / R2" },
  { label: "AI・音声", technologies: "OpenAI API / Realtime API" },
  { label: "開発・品質", technologies: "GitHub / CI / OpenAI Codex" }
];

export const designDecisions = [
  {
    number: "01",
    domain: "SYNC PROTOCOL",
    status: "IMPLEMENTED",
    title: "324,000回の同期を、324,000回の全量取得にしない。",
    constraint:
      "300人が90分間、5秒ごとに取得するとsnapshotは324,000回。コメント、字幕、Poll、PDF、AI要約を毎回全量で返せば、変化のない時間にもDB処理とegressが積み上がります。",
    implementation:
      "クライアントがlecture、caption、comments、likes、polls、summaries、pdf、metricsの既知versionを一つの認証済みsnapshot RPCへ送信し、サーバーは変更されたsectionだけを返します。参加者固有状態は分離し、コメント履歴はcursor pagination、非表示タブの同期は低速化後に停止します。",
    behavior:
      "字幕だけが更新されたとき、コメントやPDFを再送しません。public Realtime tableは0件。presence書込みはブラウザごとに最大45秒に1回、参加者数集計は講義単位で15秒cacheします。",
    evidence: "300人・90分の負荷モデルでsnapshot 324,000回を前提に検証"
  },
  {
    number: "02",
    domain: "PDF DELIVERY",
    status: "IMPLEMENTED",
    title: "PDFを届けても、Supabaseへバイナリを流さない。",
    constraint:
      "PDF本体を講義状態やコメントと同じ経路へ通すと、Storage、egress、障害範囲が一つの基盤へ集中します。",
    implementation:
      "Local PublisherがMIME、magic bytes、暗号化・破損、テキストレイヤー、容量・ページ・文字数を検証し、SHA-256を算出。private R2へ不変objectとして保存し、version付きmanifestとWorkerの短寿命認可・Range requestで配信します。Supabaseには資料ID、版、現在ページなどの小さなmetadataだけを保持します。",
    behavior:
      "PDFバイナリ、Storage、配信egressはSupabaseを経由しません。PDF追加時にメインアプリを再deployせず、manifest更新に失敗しても直前の公開PDFを維持します。",
    evidence: "Publisher / Worker / private R2を独立した配信境界として実装"
  },
  {
    number: "03",
    domain: "IDENTITY & AUTHORIZATION",
    status: "IMPLEMENTED",
    title: "匿名参加を、無認証にしない。",
    constraint:
      "氏名入力をなくすだけでは、別の参加者IDを指定するなりすましや、講義をまたいだ読み書きを防げません。",
    implementation:
      "Supabase Anonymous Authのauth.uid()とparticipant所有権を結び付け、RLS、table GRANT、function EXECUTEを別々に制御します。ブラウザ向けRPCは原則SECURITY INVOKERとし、特権処理はEdgeとprivate関数でactor、lecture、状態を再検証します。",
    behavior:
      "氏名・学生番号・大学メールを参加条件にせず、行単位の所有権をサーバー側で確認します。表示上の匿名性と、認可に必要な匿名Auth識別子を両立する設計です。",
    evidence: "RLS、権限、RPCを講義横断・参加者横断のSQLテストで検証"
  },
  {
    number: "04",
    domain: "PAID OPERATIONS",
    status: "IMPLEMENTED",
    title: "課金機能を、ボタンのdisabledだけで守らない。",
    constraint:
      "複数タブ、再試行、応答消失、講義終了後の遅延結果は、二重API呼び出しや予算超過を引き起こし得ます。",
    implementation:
      "管理認証とAPI利用PINを分離し、actor・lecture・actionへscopeした短寿命・一回限りの開始許可を発行。provider呼び出し前に予算をreservationし、実績をusage ledgerで確定します。server time、hard stop、決定的idempotency key、独立したRealtime／Batch laneを使い、DB lockを保持したまま外部APIを呼びません。",
    behavior:
      "停止にはAPI利用PINを要求しません。時間、回数、token、予算を複合上限で制御し、講義終了後の結果は公開せずdiscardedとして扱います。曖昧なnetwork failureを無条件に自動再試行しません。",
    evidence: "開始許可、reservation、ledger、hard stopをサーバー権威で管理"
  },
  {
    number: "05",
    domain: "FAILURE ISOLATION",
    status: "IMPLEMENTED",
    title: "AIを止めても、講義は止めない。",
    constraint:
      "外部AIの遅延や障害がコメント、Poll、PDF、講義状態へ波及すれば、支援機能の失敗が講義そのものの停止になります。",
    implementation:
      "AI処理を講義の基本機能から分離し、失敗・停止・期限切れを機能単位の状態として記録します。要約失敗時は直前の有用な公開内容を、PDF公開失敗時は現在の資料を維持します。",
    behavior:
      "OpenAIが利用できない時間にも、参加、コメント、Poll、PDF、5秒同期は継続できます。課金機能はそれぞれ独立して停止できます。",
    evidence: "障害を機能単位へ閉じ込めるfail-safe契約"
  },
  {
    number: "06",
    domain: "CLOSED LECTURE ARCHIVE",
    status: "IMPLEMENTED",
    title: "講義終了を、ライブ接続の延長にしない。",
    constraint:
      "終了済み講義をSupabaseのlive loopで提供し続けると、不要な認証、participant生成、5秒通信、private dataの露出面が残ります。",
    implementation:
      "サニタイズ済みread-only payloadだけをoutbox経由でprivate R2へexport。WorkerがHMAC lookup、Turnstile、多層rate limit、短寿命memory tokenを検証し、PDFは別の短寿命ticketで認可します。",
    behavior:
      "終了済み講義では新しいAuth sessionやparticipantを作らず、継続pollingもしません。archiveへAuth ID、participant ID、PIN、secret、raw PDF text、raw transcript、audioを含めません。",
    evidence: "live joinとread-only archiveを異なる障害・認可境界へ分離"
  }
];

export const educationalAISteps = [
  {
    step: "01",
    label: "BOUNDED CONTEXT",
    title: "入力を、講義の現在地に限定する。",
    body:
      "5分要約へ渡すのは、直近5分のcompleted transcript、現在ページと前後1ページ、資料outline、公開コメント最大20件、DBで集計した活動量、前回要約です。PDFファイル、画像、全コメント、全文transcriptは送りません。"
  },
  {
    step: "02",
    label: "STRUCTURED OUTPUT",
    title: "出力を、検証できる構造にする。",
    body:
      "lecture recap、comment pulse、学術質問候補、display recommendation、evidence segment／page IDをStrict JSON Schemaで生成します。Poll候補にも学習目標、狙う誤概念、難易度、根拠ページ、根拠excerptを要求します。"
  },
  {
    step: "03",
    label: "DETERMINISTIC GATE",
    title: "モデルの自己評価で、公開を決めない。",
    body:
      "サーバーがevidence IDの実在、schema、入力情報量、重複、根拠不一致、小標本、教育的価値を再検証します。情報不足windowはAPI呼び出し前にskipし、低価値・根拠不足・高重複の出力は新しいカードとして表示しません。"
  },
  {
    step: "04",
    label: "PUBLICATION CONTRACT",
    title: "公開責任を、機能ごとに分ける。",
    body:
      "5分要約は決定論的quality gate通過時に「AI生成・教員未確認」として公開される場合があり、教員が確認、修正、非表示、固定できます。AI原文は上書きせず、修正を新しいrevisionとして保存します。"
  }
];

export const educationalAIContracts = [
  {
    label: "FIVE-MINUTE SUMMARY",
    title: "要約は、状態を明示して届ける。",
    body:
      "品質ゲートを通過した要約は「AI生成・教員未確認」として表示され得ます。教員確認済み／教員修正済みを別状態として管理し、原文とrevisionを追跡可能にします。"
  },
  {
    label: "AI POLL PROPOSAL",
    title: "Poll候補は、学生へ自動配信しない。",
    body:
      "資料要点とAI Poll候補はAdmin専用の下書きです。候補を採用しても通常Pollのdraftになるだけで、学生への配信には教員による別の開始操作が必要です。"
  }
];

export const securityBoundaries = [
  {
    title: "Anonymous Authで主体を持つ",
    body: "表示名ではなく、サーバーが検証できるauth.uid()を操作主体の基準にします。"
  },
  {
    title: "RLSと権限を重ねる",
    body: "RLS、table privilege、function EXECUTEを別々に制限し、認証済みであることだけを認可条件にしません。"
  },
  {
    title: "特権操作をEdgeへ閉じる",
    body: "Admin moderation、AI開始、archive exportなどはservice-backed Edgeを経由し、ブラウザへ直接の更新権限を渡しません。"
  },
  {
    title: "秘密とraw sourceを集約しない",
    body: "OpenAI keyやservice roleはサーバー側に保持。音声ファイルは保存せず、raw transcriptとPDF抽出本文もSupabaseへ永続化しません。"
  }
];

export const loadAndCostLanes = [
  {
    label: "SYNC LOAD",
    title: "変化だけを届ける。",
    items: [
      {
        tag: "SECTION VERSION",
        title: "全量再送をつくらない",
        body: "既知versionを送り、変更sectionだけを取得。Realtime subscriptionと全量再送を追加しません。"
      },
      {
        tag: "VISIBILITY CONTROL",
        title: "見ていない画面を動かし続けない",
        body: "hidden時は同期を30秒へ低速化し、60秒後に停止。復帰時だけ即時snapshotを取得します。"
      }
    ]
  },
  {
    label: "AI COST",
    title: "呼び出す前に止める。",
    items: [
      {
        tag: "CONTEXT",
        title: "必要な文脈だけ",
        body: "PDF全文や全コメントではなく、現在ページ周辺、直近window、DB集計値へ限定します。"
      },
      {
        tag: "ADMISSION",
        title: "provider前に予約する",
        body: "actor、講義状態、hard stop、実行回数、token、残予算を確認し、reservation確定後だけproviderを呼びます。"
      },
      {
        tag: "ACCOUNTING",
        title: "ledgerと冪等性へ収束させる",
        body: "予約額と実績額を分け、同一window・operationの重複要求は既存状態へ収束。失敗やdiscardも費用判断へ反映します。"
      }
    ]
  }
];

export const reliabilityPractices = [
  {
    title: "EXPAND FIRST",
    body: "additive migrationと旧RPCの互換期間により、Database、Edge、Worker、Pagesを順番に更新します。"
  },
  {
    title: "SERVER-SIDE DEADLINE",
    body: "Cronだけを停止装置にせず、RPC、Edge、DBが講義状態と期限を再確認します。"
  },
  {
    title: "IDEMPOTENT OPERATIONS",
    body: "講義終了、archive export、日次digest、provider hangupを再実行可能な処理として設計します。"
  },
  {
    title: "AUDITABLE STATE",
    body: "重要操作、AI usage、revision、archive outboxを後から追跡できる状態で保持します。"
  },
  {
    title: "FORWARD REPAIR",
    body: "incident時はfeature flagを先に停止し、audit、ledger、outboxを残したまま修復します。"
  }
];

export const verifiedProductionFacts = [
  { value: "0–6.6", label: "本番反映済みPhase" },
  { value: "18", label: "Hosted migrations" },
  { value: "21", label: "ACTIVE Edge Functions" },
  { value: "6", label: "scheduled jobs" },
  { value: "0", label: "public Realtime tables" },
  { value: "17 / 837", label: "ローカルSQL files / assertions" }
];

export const technicalDetails = [
  {
    title: "5秒差分同期の契約",
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
    title: "AI生成と公開の契約",
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
      "Phase 0〜6.6、18 migration、21 Edge Functions、6 scheduled jobsを本番で確認済みです。17 SQL files・837 assertionsはローカルゲートの証拠として区別して表示します。約300人は実講義の実測値ではなく、負荷モデル上の設計条件です。"
  }
];
