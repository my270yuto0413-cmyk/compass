import { beforeAfter } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function BeforeAfter() {
  return (
    <Section id="before-after" className="before-after section--light">
      <Reveal>
        <SectionHeader eyebrow="LECTURE TRANSFORMATION" title="講義が反応し、理解が動き出す。" align="center" />
      </Reveal>
      <div className="before-after-grid">
        <Reveal>
          <article className="compare-card compare-card--before">
            <p>Lecture</p>
            {beforeAfter.before.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
        </Reveal>
        <Reveal className="compare-center" delay={100}>
          <p>
            講義は、伝える時間から、
            <br />
            理解を一緒につくるものへ。
          </p>
        </Reveal>
        <Reveal delay={160}>
          <article className="compare-card compare-card--after">
            <p>COMPASS Interactive</p>
            {beforeAfter.after.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
