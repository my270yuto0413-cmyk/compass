import { lectureReality } from "../content/interactiveContent";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";

export function LectureMoment() {
  return (
    <Section id="reality" className="lecture-reality section--dark">
      <div className="lecture-hall-backdrop" aria-hidden="true">
        <div className="lecture-hall-backdrop__screen" />
        <div className="lecture-hall-backdrop__rows">
          {Array.from({ length: 56 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="lecture-hall-backdrop__silence lecture-hall-backdrop__silence--one" />
        <div className="lecture-hall-backdrop__silence lecture-hall-backdrop__silence--two" />
        <div className="lecture-hall-backdrop__silence lecture-hall-backdrop__silence--three" />
      </div>
      <div className="floating-words" aria-hidden="true">
        {lectureReality.floatingWords.map((word, index) => (
          <span className={`floating-word floating-word--${index + 1}`} key={word}>
            {word}
          </span>
        ))}
      </div>
      <Reveal className="lecture-reality__content">
        <p className="eyebrow">{lectureReality.eyebrow}</p>
        <h2>
          200人の講義室で、<br />
          <span className="lecture-title__keyphrase">「わからない」は</span>
          <br className="lecture-title__compact-break" />
          声にならない。
        </h2>
        <div className="prose-block">
          {lectureReality.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
