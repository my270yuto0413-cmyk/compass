import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "../../styles/legacy.css";
import "../../styles/hero.css";
import "../../styles/desktop-system.css";
import "../../styles/official-immersive.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://compass-official.pages.dev"),
  title: "COMPASS | 北里大学・北里薬学部の学生支援団体",
  description:
    "COMPASS（コンパス）は、北里大学・北里薬学部・生命科学系学生が英語、AI、生命科学、研究、キャリアをつなげて学び、より良い意思決定を行うための学生主導型教育プラットフォームです。代表は松井優知。",
  keywords:
    "COMPASS, コンパス, 北里大学, 北里薬学部, COMPASS 北里大学, コンパス 北里大学, COMPASS 松井, 松井優知, COMPASS 北里薬学部, 薬学生, 生命科学, 英語教育, AI活用教育, 学生支援団体",
  authors: [{ name: "COMPASS / 松井優知" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  },
  icons: {
    icon: [{ url: "/images/compass-mark.svg?v=20260713", type: "image/svg+xml", sizes: "any" }]
  },
  openGraph: {
    locale: "ja_JP",
    type: "website",
    siteName: "COMPASS",
    title: "COMPASS | 北里大学・北里薬学部の学生支援団体",
    description:
      "COMPASS（コンパス）は、松井優知が代表を務める、北里大学・北里薬学部・生命科学系学生のための教育支援プラットフォームです。",
    url: "/",
    images: ["/images/hero.desktop.highlight.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "COMPASS | 北里大学・北里薬学部の学生支援団体",
    description:
      "COMPASS（コンパス）は、北里大学・北里薬学部・生命科学系学生のための学生主導型教育支援プラットフォームです。代表は松井優知。",
    images: ["/images/hero.desktop.highlight.png"]
  },
  formatDetection: { telephone: false }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(min-width: 1121px)", color: "#050A14" },
    { media: "(min-width: 901px) and (max-width: 1120px)", color: "#F5F6F2" },
    { media: "(max-width: 900px)", color: "#020812" }
  ]
};

export default function OfficialLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EHKJ8B8N0Y" strategy="afterInteractive" />
        <Script id="compass-official-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EHKJ8B8N0Y');`}
        </Script>
      </body>
    </html>
  );
}
