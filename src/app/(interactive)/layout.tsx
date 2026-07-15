import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "../../interactive/styles/tokens.css";
import "../../interactive/styles/global.css";
import "../../interactive/styles/layout.css";
import "../../interactive/styles/components.css";
import "../../interactive/styles/sections.css";
import "../../interactive/styles/animations.css";
import "../../interactive/styles/experience.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://compass-official.pages.dev"),
  title: "COMPASS Interactive | 参加型講義システム",
  description:
    "COMPASS Interactiveは、リアルタイム掲示板、ライブクイズ、字幕・翻訳、最新AIによる質問整理と講義要約で、薬学・生命科学の大人数講義を双方向化する参加型講義システムです。",
  alternates: { canonical: "/INTRO_Interactive/" },
  icons: {
    icon: [{ url: "/images/compass-mark.svg?v=20260713", type: "image/svg+xml", sizes: "any" }]
  },
  openGraph: {
    locale: "ja_JP",
    type: "website",
    siteName: "COMPASS Interactive",
    title: "COMPASS Interactive | わからないが、動き出す。",
    description: "リアルタイム × 最新AIが、薬学・生命科学の講義を変える。",
    url: "/INTRO_Interactive/",
    images: ["/images/hero.desktop.highlight.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "COMPASS Interactive | わからないが、動き出す。",
    description: "リアルタイム × 最新AIが、薬学・生命科学の講義を変える。",
    images: ["/images/hero.desktop.highlight.png"]
  },
  formatDetection: { telephone: false }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f"
};

export default function InteractiveLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body>
        {children}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7VT6Z59NE0" strategy="afterInteractive" />
        <Script id="compass-interactive-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7VT6Z59NE0');`}
        </Script>
      </body>
    </html>
  );
}
