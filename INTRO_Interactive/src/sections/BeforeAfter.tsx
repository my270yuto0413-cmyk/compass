import { beforeAfter } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function BeforeAfter() {
  return (
    <Section id="before-after" className="before-after section--light">
      <Reveal>
        <SectionHeader eyebrow="BEFORE / AFTER" title="沈黙していた講義が、反応しはじめる。" align="center" />
      </Reveal>
      <div className="before-after-grid">
        <Reveal>
          <article className="compare-card compare-card--before">
            <p>Before</p>
            {beforeAfter.before.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
        </Reveal>
        <Reveal className="compare-center" delay={100}>
          <p>
            講義は、話して終わるものから、
            <br />
            理解を一緒につくるものへ。
          </p>
        </Reveal>
        <Reveal delay={160}>
          <article className="compare-card compare-card--after">
            <p>After</p>
            {beforeAfter.after.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
