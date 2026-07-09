import { lectureReality } from "../content/interactiveContent";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function LectureMoment() {
  return (
    <Section id="reality" className="lecture-reality section--dark">
      <div className="floating-words" aria-hidden="true">
        {lectureReality.floatingWords.map((word, index) => (
          <span className={`floating-word floating-word--${index + 1}`} key={word}>
            {word}
          </span>
        ))}
      </div>
      <Reveal className="lecture-reality__content">
        <p className="eyebrow">{lectureReality.eyebrow}</p>
        <h2>{lectureReality.title}</h2>
        <div className="prose-block">
          {lectureReality.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
