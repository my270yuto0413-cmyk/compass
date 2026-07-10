export const links = {
  join: "https://compass-interactive.pages.dev",
  compassHome: "../"
};

export const hero = {
  eyebrow: "COMPASS Interactive",
  title: "わからないが、動き出す。",
  lead: "リアルタイム × AI が、講義を変える。",
  chips: ["リアルタイム掲示板", "ライブ講義", "AI講義要約", "自動字幕・翻訳", "リアルタイムクイズ"]
};

export const heroLectureMock = {
  title: "Live Lecture",
  course: "分子生物学 II",
  participants: 218,
  questions: [
    "多くのRNAが一本鎖として機能するのはなぜですか？",
    "この実験系、RT-qPCRで検証できますか？",
    "KmとKdの違いをもう一度確認したいです。"
  ],
  quiz: {
    question: "正しい記述を2つ選んでください。",
    options: [
      { label: "A", text: "Ct値が低いほど初期鋳型量は多い", value: 44 },
      { label: "B", text: "Ct値が低いほど発現量は必ず低い", value: 11 },
      { label: "C", text: "ΔΔCt法では基準遺伝子で補正する", value: 39 },
      { label: "D", text: "PCR効率は常に100%である", value: 6 }
    ]
  },
  summary: [
    "本日の課題は、17時までに実験デザインを提出。",
    "ΔΔCt法の考え方を復習してください。",
    "質問が多かった概念: Ct値 / 内在性コントロール"
  ]
};

export const lectureReality = {
  eyebrow: "LECTURE REALITY",
  title: "200人の講義室で、わからないは声にならない。",
  body: [
    "説明は進んでいる。でも、自分の理解は少し前で止まっている。",
    "作用機序、反応機構、実験デザイン。一つつまずくと、その先の説明が急に遠くなる。",
    "質問したい。友達とつながりたい。でも、大人数講義では発言しづらい。",
    "COMPASS Interactive は、その小さな「わからない」を、講義の中で動かし始めるためのシステムです。"
  ],
  floatingWords: [
    "作用機序がつながらない",
    "反応機構で止まった",
    "RT-qPCRの対照がわからない",
    "KmとVmaxが曖昧",
    "薬物動態が式だけに見える",
    "周りに聞きづらい"
  ]
};

export const studentCards = [
  {
    title: "聞けなかった疑問を、その場で送れる。",
    body: "大人数講義で手を挙げるのは難しい。でも、コメントなら送れる。作用機序、反応機構、実験デザインの疑問を、講義中にそのまま共有できます。",
    feature: "リアルタイム掲示板",
    phoneTitle: "Realtime Board",
    items: [
      "この実験系、RT-qPCRで検証できますか？",
      "基質濃度が60%まで低下したのに、反応速度があまり変わらないのはなぜですか？",
      "GPCRとチロシンキナーゼ型受容体の違いをもう一度確認したいです。"
    ],
    reaction: "同じところで迷いました"
  },
  {
    title: "わかったつもりを、その場で確認できる。",
    body: "聞いているときは理解した気がする。でも、選択肢を見た瞬間に迷う。リアルタイムクイズなら、講義中に自分の理解を確認できます。",
    feature: "リアルタイムクイズ",
    phoneTitle: "Biochemistry Quiz",
    quiz: {
      question: "Michaelis-Menten型酵素反応について、正しい記述を2つ選んでください。",
      options: [
        { label: "A", text: "Vmaxは酵素濃度に依存する", value: 41 },
        { label: "B", text: "Kmは反応速度がVmax/2となる基質濃度である", value: 62 },
        { label: "C", text: "Kmが大きいほど、常に基質親和性は高い", value: 18 },
        { label: "D", text: "競合阻害ではVmaxが低下する", value: 9 }
      ]
    }
  },
  {
    title: "友達と同じところで迷っているとわかる。",
    body: "自分だけがわかっていないと思っていた部分に、実は多くの学生がつまずいていることがあります。",
    feature: "リアクション",
    phoneTitle: "Shared Questions",
    items: [
      "ΔΔCt法でなぜハウスキーピング遺伝子が必要なんですか？",
      "ACE阻害薬で空咳が出る理由がまだ曖昧です。"
    ],
    reaction: "24人が同じ疑問を持っています"
  },
  {
    title: "聞き逃しても、復習の入口が残る。",
    body: "AI講義要約が、講義の要点、出題されたクイズ、学生の疑問を整理し、復習の入口をつくります。",
    feature: "AI講義要約",
    phoneTitle: "AI Summary",
    summary: [
      "競合阻害では見かけのKmが上昇し、Vmaxは大きく変化しない。",
      "RT-qPCRでは、発現量比較のために内在性コントロールが必要。",
      "ACE阻害薬の副作用はブラジキニン分解抑制と関連する。"
    ]
  },
  {
    title: "英語の専門用語で、理解を止めない。",
    body: "英語スライド、英語論文、専門用語が講義中に出てきても、自動字幕・翻訳で講義への参加ハードルを下げます。",
    feature: "自動字幕・翻訳",
    phoneTitle: "Caption",
    caption: "The rate-limiting step is the dissociation of the leaving group.",
    translation: "律速段階は、脱離基が解離する過程です。"
  }
];

export const scienceTopics = [
  {
    id: "pharmacology",
    label: "薬理学",
    title: "作用機序を、その場で確認する。",
    lead: "受容体、作用機序、副作用、薬物相互作用の理解確認に。",
    comments: [
      "ACE阻害薬で空咳が起こる理由が、ブラジキニンとどう関係するのかわかりません。",
      "部分作動薬と競合拮抗薬の違いをもう一度整理したいです。"
    ],
    quiz: {
      question: "β1受容体遮断薬の作用として正しいものを2つ選んでください。",
      options: [
        { label: "A", text: "心拍数を低下させる", value: 69 },
        { label: "B", text: "レニン分泌を抑制する", value: 58 },
        { label: "C", text: "気管支平滑筋を弛緩させる", value: 19 },
        { label: "D", text: "ヒスタミンH1受容体を遮断する", value: 8 }
      ]
    }
  },
  {
    id: "molecular",
    label: "分子生物学",
    title: "セントラルドグマを、実験とつなげる。",
    lead: "遺伝子発現解析、RT-qPCR、Western blotの理解確認に。",
    comments: [
      "mRNA量が増えても、タンパク質量が増えるとは限らないのはなぜですか？",
      "RT-qPCRとWestern blotのどちらで検証すべきですか？"
    ],
    quiz: {
      question: "RT-qPCRでmRNA発現量を比較するとき、必要な設計を2つ選んでください。",
      options: [
        { label: "A", text: "内在性コントロール遺伝子を設定する", value: 74 },
        { label: "B", text: "逆転写を行わずにPCRする", value: 10 },
        { label: "C", text: "生物学的反復を設定する", value: 61 },
        { label: "D", text: "Ct値が低いほど発現量が低いと判断する", value: 14 }
      ]
    }
  },
  {
    id: "biochemistry",
    label: "生化学",
    title: "式ではなく、意味で理解する。",
    lead: "酵素反応、Km / Vmax、競合阻害を講義中に確認。",
    comments: [
      "Kmが小さいと、なぜ親和性が高いと言えるのですか？",
      "Lineweaver-Burkプロットで切片を見る理由がわかりません。"
    ],
    quiz: {
      question: "競合阻害について正しい記述を選んでください。",
      options: [
        { label: "A", text: "見かけのKmは増加する", value: 66 },
        { label: "B", text: "Vmaxは理論上変化しない", value: 59 },
        { label: "C", text: "阻害薬は基質結合部位と競合する", value: 72 },
        { label: "D", text: "酵素量は必ず減少する", value: 12 }
      ]
    }
  },
  {
    id: "organic",
    label: "有機化学",
    title: "反応機構の矢印を、理解につなげる。",
    lead: "SN1 / SN2、pKa、立体化学、構造活性相関の確認に。",
    comments: [
      "この求核攻撃は、なぜこの炭素に起こるのですか？",
      "pKaが変わると、薬物の膜透過性はどう変わりますか？"
    ],
    quiz: {
      question: "tert-ブチルハライドのSN1反応で律速段階となるのはどれですか？",
      options: [
        { label: "A", text: "求核剤の攻撃", value: 18 },
        { label: "B", text: "脱離基の解離によるカルボカチオン形成", value: 62 },
        { label: "C", text: "生成物の脱プロトン化", value: 14 },
        { label: "D", text: "生成物の再結晶化", value: 6 }
      ]
    }
  },
  {
    id: "experiment",
    label: "実験デザイン",
    title: "この実験で本当に言えることを考える。",
    lead: "対照群、再現性、解釈の妥当性を講義中に扱う。",
    comments: [
      "この実験系、RT-qPCRだけで結論できますか？",
      "ノックダウン効率はmRNAとタンパク質の両方で確認すべきですか？"
    ],
    quiz: {
      question: "siRNAによる遺伝子ノックダウン実験で確認すべき項目を2つ選んでください。",
      options: [
        { label: "A", text: "標的遺伝子のmRNA発現低下", value: 70 },
        { label: "B", text: "標的タンパク質の発現低下", value: 64 },
        { label: "C", text: "目的と無関係な遺伝子の過剰発現", value: 7 },
        { label: "D", text: "ネガティブコントロールとの比較", value: 76 }
      ]
    }
  }
];

export const studentFlow = [
  {
    step: "01",
    title: "講義ページに入る",
    body: "QRコードまたは参加リンクから、スマートフォンでもPCでも講義画面を開けます。",
    mockTitle: "Join Lecture",
    mockLines: ["薬理学 II", "参加者 218人", "今日のテーマ: 酵素阻害と薬物相互作用"]
  },
  {
    step: "02",
    title: "聞きながらコメントする",
    body: "疑問、気づき、もう一度聞きたいポイントを投稿。声に出さなくても、講義に参加できます。",
    mockTitle: "Realtime Board",
    mockLines: ["この阻害様式は競合阻害ですか？", "いまの式変形をもう一度見たいです。", "同じ疑問: 18人"]
  },
  {
    step: "03",
    title: "クイズで理解を確認する",
    body: "薬理、分子生物学、生化学、薬化学などの理解度チェックに回答します。",
    mockTitle: "理解度チェック",
    mockLines: ["正しい記述を2つ選択", "回答率 82%", "クラス全体の傾向を表示"]
  },
  {
    step: "04",
    title: "AI要約で振り返る",
    body: "講義後はAI要約で、重要ポイント、質問、課題を整理できます。",
    mockTitle: "AI Summary",
    mockLines: ["重要語句: Km / Vmax / 競合阻害", "課題: 実験デザインの妥当性を提出", "復習入口を自動整理"]
  }
];

export const features = [
  {
    eyebrow: "Realtime Board",
    title: "リアルタイム掲示板",
    headline: "声に出せない疑問も、講義の一部に。",
    body: "学生の質問、コメント、気づきをリアルタイムに共有。専門講義で生まれる小さな疑問を、その場で教員とクラス全体に届けます。",
    tags: ["質問", "コメント", "リアクション", "共有"]
  },
  {
    eyebrow: "Live Lecture",
    title: "ライブ講義",
    headline: "教室でも、オンラインでも、同じ講義体験へ。",
    body: "対面講義、オンライン講義、ハイブリッド授業に対応。コメント、クイズ、字幕、要約を同じ画面で扱えます。",
    tags: ["対面", "オンライン", "ハイブリッド"]
  },
  {
    eyebrow: "Realtime Quiz",
    title: "リアルタイムクイズ",
    headline: "理解度が、その場で見える。",
    body: "作用機序、反応機構、実験デザインなどの理解度を即時に確認。学生は自分の理解を、教員はクラス全体のつまずきを把握できます。",
    tags: ["投票", "理解度チェック", "集計"]
  },
  {
    eyebrow: "AI Summary",
    title: "AI講義要約",
    headline: "講義後、何を復習すべきかが見える。",
    body: "講義内容、コメント、クイズ結果をもとに、重要ポイントを整理。薬理学、分子生物学、生化学などの専門講義を復習しやすい形にまとめます。",
    tags: ["要点整理", "課題確認", "復習支援"]
  },
  {
    eyebrow: "Auto Caption & Translation",
    title: "自動字幕・翻訳",
    headline: "専門用語と英語で、学びを止めない。",
    body: "英語スライド、英語論文、専門用語を含む講義を字幕・翻訳で支援。多言語環境での参加にも対応しやすくなります。",
    tags: ["字幕", "翻訳", "多言語支援"]
  }
];

export const beforeAfter = {
  before: [
    "200〜300人の講義で、誰も質問しない。",
    "わからない学生は、そのまま置いていかれる。",
    "教員には学生の理解度が見えない。",
    "講義後までクイズや課題の反応がわからない。",
    "復習すべきポイントが曖昧なまま残る。"
  ],
  after: [
    "疑問がリアルタイム掲示板に届く。",
    "同じ疑問を持つ学生が可視化される。",
    "クイズで理解度の分布が見える。",
    "AIが重要ポイントと課題を整理する。",
    "講義後の復習につながるログが残る。"
  ]
};

export const teacherCards = [
  {
    title: "理解度を、その場で把握できる。",
    body: "リアルタイムクイズにより、学生がどの概念で迷っているかを講義中に確認できます。"
  },
  {
    title: "質問が出ない講義でも、疑問を集められる。",
    body: "学生が手を挙げなくても、掲示板に疑問を投稿できます。似た質問をまとめて扱うことで、大人数講義でも効率的に補足説明できます。"
  },
  {
    title: "学生が離れた瞬間に気づける。",
    body: "コメント数、クイズ回答率、リアクションの変化から、講義中の集中度や参加状況の変化を把握できます。"
  },
  {
    title: "講義後の振り返りが、次回設計につながる。",
    body: "AI要約と講義ログにより、次回講義の冒頭で補足する内容や課題に入れる確認問題を見つけやすくなります。"
  }
];

export const teacherDashboard = {
  responseRate: 82,
  signals: ["コメント急増: 酵素阻害の説明後", "理解度低下: Km / Vmax の比較問題", "質問集中: RT-qPCRの内在性コントロール"],
  keywords: ["Km", "競合阻害", "Vmax", "Lineweaver-Burk", "ΔΔCt法"]
};

export const useCases = [
  {
    title: "200〜300人の大人数講義",
    body: "質問が出にくい講義でも、コメントとクイズで学生の反応を拾えます。"
  },
  {
    title: "薬理学・薬物治療学",
    body: "作用機序、副作用、薬物相互作用、PK/PDの理解確認に活用できます。"
  },
  {
    title: "分子生物学・生化学",
    body: "セントラルドグマ、酵素反応、遺伝子発現解析、実験手法の理解確認に。"
  },
  {
    title: "薬化学・有機化学",
    body: "反応機構、pKa、立体化学、構造活性相関など、途中で置いていかれやすい内容を確認できます。"
  },
  {
    title: "研究セミナー・卒業研究指導",
    body: "実験デザイン、対照群、再現性、解釈の妥当性について、コメントしながら考える場をつくれます。"
  }
];

export const architecturePrinciples = [
  {
    title: "Realtime-first",
    body: "コメント、クイズ回答、講義状態をリアルタイムに同期。学生の反応を講義中に扱うため、画面更新を待たない体験を重視します。",
    tags: ["Supabase Realtime", "PostgreSQL", "Realtime Sync"]
  },
  {
    title: "Mobile-first UI",
    body: "学生の主な利用端末をスマートフォンと想定し、片手で参加できるUI、短い導線、読みやすいカード設計を優先します。",
    tags: ["React", "TypeScript", "Vite", "Responsive Components"]
  },
  {
    title: "RLS-first Security",
    body: "講義、ユーザー、ロールごとにデータアクセスを制御。必要な範囲の情報だけを扱える設計を重視します。",
    tags: ["Row Level Security", "Role-based Access Control", "Lecture-scoped Data Access"]
  },
  {
    title: "AI-assisted Learning",
    body: "AIは講義を置き換えるものではなく、理解と復習を補助するレイヤーとして設計します。",
    tags: ["OpenAI API", "Google Workspace API", "Google Apps Script"]
  },
  {
    title: "Edge Deploy",
    body: "Cloudflare Pages と GitHub を用いた軽量なデプロイ構成により、改善をすばやく反映できる開発フローを重視します。",
    tags: ["Cloudflare Pages", "GitHub", "CI/CD-ready Workflow"]
  }
];

export const technologyCards = [
  ["Frontend", "React / TypeScript"],
  ["Application Logic", "Python"],
  ["Version Control", "Git"],
  ["AI-assisted Development", "OpenAI Codex"]
];

export const securityCards = [
  {
    title: "講義ごとのデータ分離",
    body: "コメントやクイズは講義単位で管理し、他の講義からアクセスできない設計です。"
  },
  {
    title: "権限に応じたアクセス管理",
    body: "学生・教員・管理者ごとに、利用できる機能を適切に制御します。"
  },
  {
    title: "必要最小限のデータ設計",
    body: "講義に不要な個人情報は扱わず、必要な情報のみを管理します。"
  },
  {
    title: "安全なコミュニティ運営",
    body: "投稿管理や通報機能を備え、安心して参加できる環境を目指します。"
  },
  {
    title: "AIの透明な活用",
    body: "AIは学習支援の補助として利用し、最終的な判断は利用者・教員が行います。"
  }
];
