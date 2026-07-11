import { links } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { CTAButton } from "../components/ui/CTAButton";
import { Reveal } from "../components/ui/Reveal";

export function FinalCTA() {
  return (
    <Section id="start" className="final-cta section--dark">
      <Reveal className="final-cta__panel">
        <p className="eyebrow">START</p>
        <h2>今日の講義から、理解を動かそう。</h2>
        <p>
          COMPASS Interactiveは、薬学・生命科学の大人数講義で生まれる疑問を、質問、クイズ、字幕、翻訳、AI要約によって、講義中の理解と講義後の復習へつなげる。
        </p>
        <div className="final-cta__actions">
          <CTAButton href={links.join}>今すぐ講義に参加する</CTAButton>
          <a href={links.compassHome}>COMPASSへ戻る</a>
        </div>
      </Reveal>
    </Section>
  );
}
