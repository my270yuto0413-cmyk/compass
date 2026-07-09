import { useState } from "react";
import { studentCards } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";
import { PhoneFrame } from "../components/ui/PhoneFrame";
import { QuizBars } from "../components/ui/QuizBars";

export function Students() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = studentCards[activeIndex];

  return (
    <Section id="students" className="section--light students-section">
      <div className="split-grid">
        <Reveal>
          <SectionHeader
            eyebrow="FOR STUDENTS"
            title="もう、ひとりで黙って置いていかれない。"
            lead="質問、掲示板、クイズ、字幕、翻訳、AI要約を通じて、講義中のつまずきをその場で拾い、理解へつなげます。"
          />
          <div className="student-card-list" role="list">
            {studentCards.map((card, index) => (
              <button
                type="button"
                className={`student-card-button ${activeIndex === index ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                key={card.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{card.title}</strong>
                <small>{card.feature}</small>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="phone-sticky" delay={120}>
          <PhoneFrame title={activeCard.phoneTitle}>
            {"quiz" in activeCard && activeCard.quiz ? (
              <QuizBars question={activeCard.quiz.question} options={activeCard.quiz.options} compact />
            ) : "summary" in activeCard && activeCard.summary ? (
              <div className="phone-summary">
                {activeCard.summary.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : "caption" in activeCard && activeCard.caption ? (
              <div className="caption-card">
                <span>Caption</span>
                <p>{activeCard.caption}</p>
                <span>Translation</span>
                <p>{activeCard.translation}</p>
              </div>
            ) : (
              <div className="comment-feed">
                {activeCard.items?.map((item, index) => (
                  <p className="comment-bubble" style={{ animationDelay: `${index * 120}ms` }} key={item}>
                    {item}
                  </p>
                ))}
                <p className="reaction-bubble">{activeCard.reaction}</p>
              </div>
            )}
          </PhoneFrame>
        </Reveal>
      </div>
    </Section>
  );
}
