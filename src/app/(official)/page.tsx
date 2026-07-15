import { App } from "../../App";
import { LegacyInteractions } from "../../components/LegacyInteractions";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "COMPASS",
  alternateName: ["コンパス", "COMPASS 北里大学", "コンパス 北里大学", "COMPASS 北里薬学部"],
  url: "https://compass-official.pages.dev/",
  logo: "https://compass-official.pages.dev/images/compass-mark.svg",
  image: "https://compass-official.pages.dev/images/hero.desktop.highlight.png",
  description:
    "COMPASS（コンパス）は、北里大学・北里薬学部・生命科学系学生に向けて、英語、AI、生命科学、研究、キャリアを横断的につなぐ学生支援団体・教育支援プラットフォームです。",
  founder: { "@type": "Person", name: "松井優知", alternateName: "Yuto Matsui" },
  keywords:
    "COMPASS, コンパス, 北里大学, 北里薬学部, COMPASS 松井, 松井優知, 薬学生, 生命科学, 英語教育, AI活用教育",
  sameAs: ["https://compass-official.pages.dev/future-strategy-library/"]
};

export default function OfficialPage() {
  return (
    <>
      <App />
      <LegacyInteractions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
