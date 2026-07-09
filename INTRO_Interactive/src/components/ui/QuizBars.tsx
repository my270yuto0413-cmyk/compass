import type { CSSProperties } from "react";

export type QuizOption = {
  label: string;
  text: string;
  value: number;
};

type QuizBarsProps = {
  question: string;
  options: QuizOption[];
  compact?: boolean;
};

export function QuizBars({ question, options, compact = false }: QuizBarsProps) {
  return (
    <div className={`quiz-card ${compact ? "quiz-card--compact" : ""}`}>
      <p className="quiz-card__question">{question}</p>
      <div className="quiz-card__options">
        {options.map((option) => (
          <div className="quiz-row" key={`${option.label}-${option.text}`}>
            <div className="quiz-row__label">
              <span>{option.label}</span>
              <span>{option.value}%</span>
            </div>
            <div className="quiz-row__track" aria-hidden="true">
              <div className="quiz-row__bar" style={{ "--bar-width": `${option.value}%` } as CSSProperties} />
            </div>
            <p>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
