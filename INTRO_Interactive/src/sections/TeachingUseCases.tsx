import { useCases } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function TeachingUseCases() {
  return (
    <Section id="use-cases" className="use-cases section--light">
      <Reveal>
        <SectionHeader eyebrow="CLASSROOM USE CASES" title="薬学・生命科学教育の現場で使える。" align="center" />
      </Reveal>
      <div className="use-case-grid">
        {useCases.map((item, index) => (
          <Reveal delay={index * 80} key={item.title}>
            <article className="use-case-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
