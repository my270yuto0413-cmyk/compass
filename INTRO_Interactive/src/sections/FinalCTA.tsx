import { links } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { CTAButton } from "../components/ui/CTAButton";
import { Reveal } from "../components/ui/Reveal";

export function FinalCTA() {
  return (
    <Section id="start" className="final-cta section--dark">
      <Reveal className="final-cta__panel">
        <p className="eyebrow">ENTER THE NEXT LECTURE</p>
        <h2>未来の講義は、<br />もう始まっている。</h2>
        <p>
          資料、投票、質問、字幕、AI。すべてがリアルタイムにつながる講義を、まずは3分で体験してください。
        </p>
        <div className="final-cta__proof"><span>登録不要</span><span>デモデータ</span><span>約3分</span></div>
        <div className="final-cta__actions">
          <CTAButton href={links.demo}>未来を体験する <span aria-hidden="true">→</span></CTAButton>
          <a data-cta-location="final-code-join" href={links.join}>講義コードで参加する</a>
        </div>
      </Reveal>
    </Section>
  );
}
