import type { Metadata } from "next";
import { DeveloperApp } from "../../../../interactive/DeveloperApp";

export const metadata: Metadata = {
  title: "設計・技術 | COMPASS Interactive",
  description:
    "COMPASS Interactiveの技術スタック、5秒差分同期、匿名参加、AI教育設計、情報セキュリティ、負荷・費用制御、本番運用の設計判断を紹介します。",
  alternates: { canonical: "/INTRO_Interactive/developers/" },
  openGraph: {
    locale: "ja_JP",
    type: "website",
    siteName: "COMPASS Interactive",
    title: "学びの熱を、設計で途切れさせない。 | COMPASS Interactive",
    description: "匿名参加、5秒差分同期、根拠をたどれるAI。教育体験から逆算した実装契約を公開します。",
    url: "/INTRO_Interactive/developers/",
    images: ["/images/hero.desktop.highlight.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "学びの熱を、設計で途切れさせない。 | COMPASS Interactive",
    description: "教育体験から逆算した技術・情報セキュリティ・負荷・費用・運用設計。",
    images: ["/images/hero.desktop.highlight.png"]
  }
};

export default function DevelopersPage() {
  return <DeveloperApp />;
}
