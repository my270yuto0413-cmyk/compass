import { links } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { CTAButton } from "../components/ui/CTAButton";
import { Reveal } from "../components/ui/Reveal";

export function FinalCTA() {
  return (
    <Section id="start" className="final-cta section--dark">
      <Reveal className="final-cta__panel">
        <p className="eyebrow">ENTER THE NEXT LECTURE</p>
        <h2>次の講義を、<br />ここから始めよう。</h2>
        <p>
          学生の疑問が届き、教員の次のひと言につながる講義を、3分のデモで体験できます。
        </p>
        <div className="final-cta__proof"><span>登録不要</span><span>デモデータ</span><span>約3分</span></div>
        <div className="final-cta__actions">
          <CTAButton href={links.demo}>講義を体験する <span aria-hidden="true">→</span></CTAButton>
          <a data-cta-location="final-code-join" href={links.join}>講義コードで参加する</a>
        </div>
      </Reveal>
    </Section>
  );
}
