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

export const educationalDesignPrinciples = [
  {
    number: "01",
    label: "FIELD-LED DESIGN",
    title: "教育・研究現場の課題から出発",
    body: "薬学教育、生命科学研究、集団授業の現場で見いだした課題を起点に、学生の参加、理解、対話、振り返りを支える講義体験を設計している。"
  },
  {
    number: "02",
    label: "CROSS-DISCIPLINARY DEVELOPMENT",
    title: "設計から運用までを一貫して横断",
    body: "生命科学、教育、英語、AI、ソフトウェア開発の知見を統合し、課題発見、要件定義、UX、アーキテクチャ、検証、運用までを一貫した方針で設計している。"
  },
  {
    number: "03",
    label: "CONSISTENT BRAND EXPERIENCE",
    title: "COMPASSの世界観を、すべての画面へ",
    body: "COMPASSシリーズ共通の色彩、余白、タイポグラフィ、情報階層を継承し、知的な信頼性と、学生が自然に使える親しみやすさを両立している。"
  }
];

const developerMessageParagraphGroups = [
  {
    paragraphs: [
      "数年前まで、本格的なフルスタックアプリケーションを開発するには、複数の熟練したエンジニアが専門性を持ち寄り、長期間にわたって設計、実装、検証、修正を重ねる必要があった。",
      "しかし、2026年現在、ソフトウェア開発を取り巻く環境は大きく変わりつつある。AIコーディングエージェントは、もはやコードを生成するだけの道具ではない。要件整理や設計の支援、大規模なリファクタリング、テストの作成、エラーの分析、E2Eテストによる動作検証に至るまで、開発工程の広い範囲を一貫して支援できる存在になっている。",
      "この変化は、単にソフトウェアを速く作れるようになったことだけを意味しない。",
      "より本質的なのは、特定の領域に深い知識と経験を持つ人が、自らの専門性をソフトウェアとして実装できる可能性が大きく広がったことである。",
      "これまで、現場の課題を深く理解する専門家と、その課題をシステムとして実装する技術者は、別々の役割を担うことが多かった。もちろん、異なる専門家が協働する価値は今後も変わらない。しかし、AIの進化によって、一人の人間が課題の発見から設計、実装、検証までを横断し、自らの思想や専門性を、実際に動く仕組みとして社会へ提示できる時代が始まりつつある。",
      "私自身は生命科学を本来の専門としており、今後も生命科学を軸とした研究や活動から離れるつもりはない。言い換えれば、私は情報工学やソフトウェア開発を専攻し、体系的な教育を受けてきたわけではないということである。それでも現在、認証、データベース、リアルタイム通信、セキュリティ、テスト、運用設計を含むフルスタックアプリケーションの開発に取り組んでいる。"
    ]
  },
  {
    paragraphs: [
      "なぜ、そのようなことが可能になったのか。",
      "その背景には、大きく三つの要因があると考えている。",
      "第一に、AIコーディングエージェントの進化によって、実装と検証の速度が飛躍的に向上したことである。",
      "第二に、生命科学研究を通して培ってきた論理的思考と批判的思考が、AIとの対話や出力の検証に生かされたことである。",
      "研究では、仮説を立て、実験を設計し、得られた結果を疑い、別の解釈を検討することが求められる。期待した結果が出たとしても、それだけで仮説が正しいとは限らない。測定条件、交絡因子、再現性、代替仮説を一つずつ検討しなければならない。",
      "この姿勢は、AIが生成したコードや設計案に向き合う際にも、そのまま当てはまる。AIの出力を受け取るだけでは、信頼できるシステムは生まれない。その前提は正しいのか。例外条件に耐えられるのか。セキュリティ上の問題はないか。既存機能との整合性は保たれているか。表面的には動いていても、内部に矛盾を抱えていないか。",
      "AI時代の開発では、生成する能力以上に、疑い、検証し、修正する能力が重要になる。",
      "第三に、一見するとコーディングとは直接関係のない、生命科学、教育、英語、研究に関する経験が、課題発見とシステム設計の基盤になったことである。"
    ]
  },
  {
    paragraphs: [
      "私は高校時代にHTML、CSS、JavaScriptに触れた経験はあったものの、その後の数年間、本格的なソフトウェア開発から離れていた。大学受験を機にプログラミングから距離を置き、創薬研究を志して生命科学の道へ進んだ。学部に入学した当時は、自分が将来、教育や研究の課題を解決するためにフルスタック開発へ取り組むことになるとは、まったく想像していなかった。",
      "転機となったのは、2025年頃である。",
      "当時、私は生命科学研究に深く取り組む中で、統計解析を効率化する必要性を感じ、Pythonを用いた解析パイプラインの構築を始めた。久しぶりのプログラミングであり、当初は文法を思い出すだけでも苦労した。AIには、せいぜい文法の復習やエラーの解説を助けてもらう程度の役割を想定していた。",
      "しかし、その過程で、AIコーディングエージェントが自分の想像をはるかに超える水準まで進化していることを知った。",
      "AIは、単に質問に答えるだけではなかった。コードを書き、既存の構造を読み取り、修正案を提示し、テストを設計し、問題点を指摘する。適切に使えば、研究や教育のためのシステムを構築する協働手段になり得ると感じた。",
      "そこから、小さな解析支援を起点に試行錯誤を重ね、次第に開発の対象を広げていった。その延長線上で生まれたのが、講義支援システム「COMPASS Interactive」である。"
    ]
  },
  {
    paragraphs: [
      "ただし、COMPASS Interactiveの出発点は、技術そのものではない。",
      "AIを使いたかったからでも、Reactを書きたかったからでも、アプリケーションを作ること自体を目的としたからでもない。",
      "その原点にあったのは、私が学生、教育者、研究者として見てきた、教育と研究の現場に存在する具体的な課題である。",
      "薬学教育の中で感じた、学生によって異なる講義への向き合い方。集団授業を担当する中で考え続けてきた、理解度や参加意欲の差。研究室での議論を通して目にした、知識や意見を持ちながらも、発言の機会を得にくい人の存在。",
      "質問したくても手を挙げられない学生がいる。周囲の理解速度に追いつけず、分からないまま授業が進んでしまう学生もいる。活発な人の意見ばかりが可視化され、静かに考えている人の疑問や洞察が埋もれることもある。",
      "こうした差を、本人の意欲や性格だけの問題として処理してよいのだろうか。",
      "努力できる人だけが学びやすい環境ではなく、異なる性格、理解速度、発言のしやすさを持つ人が、それぞれの形で参加できる環境をつくれないか。個人の勇気や精神論に委ねるのではなく、仕組みの側から学びを支えることはできないか。",
      "その問いから、COMPASS Interactiveの構想は生まれた。"
    ]
  },
  {
    paragraphs: [
      "AIは、その構想を実装する速度と範囲を大きく広げてくれた。しかし、AIが自ら現場を観察し、課題を選び、何を守るべきかを判断したわけではない。",
      "どの課題を解くのか。",
      "誰のために作るのか。",
      "AIの提案をどこまで採用し、どこで疑い、どこを修正するのか。",
      "こうした判断には、現場への理解と、成果に対する責任が必要である。",
      "AIがなければ、現在のような速度と規模でシステムを実装することは難しかっただろう。一方で、AIがどれほど高性能になったとしても、現場への長期的な関与、教育や研究に対する問題意識、そして何度でも検証と修正を続ける姿勢がなければ、同じ目的と設計思想を持つシステムは生まれにくい。",
      "COMPASS Interactiveは、AIだけで作ったのでもなければ、自分一人の能力だけで作ったのでもない。",
      "現場で得た専門性と問題意識を、AIによって増幅し、実装可能な形へ変えたものである。",
      "ここに、AI時代における専門性の新しい価値があると考えている。",
      "AIは、人間の専門性を不要にするのではない。むしろ、自分の中にある知識や問題意識を、他者に届く形へ変える手段を広げる。",
      "これから先、プログラミング経験の少ない人でも、一定水準のソフトウェアを作れる時代が来るかもしれない。そのときに問われるのは、単にAIを使えるかどうかではない。",
      "何を課題として見つけるのか。",
      "誰のために、その力を使うのか。",
      "生み出したものに、どこまで責任を持てるのか。",
      "私は、その三つが今後ますます重要になると考えている。",
      "もちろん、私自身の技術力や設計能力は、まだ発展途上にある。実際に開発を進めるほど、自分に足りない知識や経験の多さを痛感する。システムを作ることと、信頼される形で運用することの間には、まだ大きな隔たりがある。",
      "それでも、専門外であることを理由に、目の前の課題から距離を置く必要はないと思う。",
      "AIによって、これまで一部の人に限られていた「つくる力」が、私たちの世代にも広く開かれ始めている。だからこそ、その力を、自分を大きく見せるためではなく、身近な誰かが抱えている困難を減らすために使いたい。",
      "私はこれからも生命科学を軸に研究を続けながら、教育、英語、AI、ソフトウェア開発を分断せず、自分にできる形で結び付けていきたい。",
      "その先に、まだ名前のついていない役割があるのかもしれない。既存の専門分野の境界に収まらないからこそ、見つけられる課題や、届けられる価値もあるはずである。",
      "AI時代に、私たち一人ひとりが持てる力は確実に大きくなっている。",
      "だからこそ私は、その力を何に使ったかによって評価される人間でありたい。",
      "それが、AI時代を生きる一人の学生として、私がこれから果たしていきたい責任である。"
    ]
  }
];

const developerMessageParagraphs = developerMessageParagraphGroups.flatMap((group) => group.paragraphs);
const developerMessagePageTitles = [
  "専門性を「実装」できる時代",
  "研究者の思考は、開発にどう生きるか",
  "遠回りした経験が、設計の基盤になる",
  "技術ではなく、現場の問いから始める",
  "つくる力を、何のために使うのか"
];
const developerMessagePageStarts = [0, 7, 13, 20, 36, developerMessageParagraphs.length];

export const developerMessagePages = developerMessagePageStarts.slice(0, -1).map((start, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: developerMessagePageTitles[index],
  paragraphs: developerMessageParagraphs.slice(start, developerMessagePageStarts[index + 1])
}));

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
