"use client";

import { useState } from "react";
import { studentFlow } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";
import { PhoneFrame } from "../components/ui/PhoneFrame";

export function StudentFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const active = studentFlow[activeStep];

  return (
    <Section id="flow" className="student-flow section--light">
      <div className="split-grid split-grid--reverse">
        <Reveal>
          <PhoneFrame title={active.mockTitle} className="flow-phone">
            <div className="flow-phone-lines">
              {active.mockLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </PhoneFrame>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeader
            eyebrow="STUDENT FLOW"
            title="使い方は、いつもの講義に入るだけ。"
            lead="QRコードや参加リンクから入り、講義を聞きながら反応する。それだけで、大人数講義が少しずつ双方向になります。"
          />
          <div className="flow-steps">
            {studentFlow.map((step, index) => (
              <button
                type="button"
                className={`flow-step ${activeStep === index ? "is-active" : ""}`}
                aria-pressed={activeStep === index}
                onClick={() => setActiveStep(index)}
                key={step.step}
              >
                <span>{step.step}</span>
                <strong>{step.title}</strong>
                <small>{step.body}</small>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
