"use client";

import { heroLectureMock } from "../../content/interactiveContent";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useRotatingMock } from "../../hooks/useRotatingMock";
import { QuizBars } from "./QuizBars";

export function LiveLectureMock() {
  const questionIndex = useRotatingMock(heroLectureMock.questions.length, 3300);
  const reducedMotion = useReducedMotion();
  const participantBump = reducedMotion ? 0 : questionIndex % 3;

  return (
    <div className="live-mock" aria-label="講義画面のデモ">
      <div className="live-mock__top">
        <span className="live-dot" aria-hidden="true" />
        <span>{heroLectureMock.title}</span>
      </div>
      <div className="live-mock__heading">
        <div>
          <p>{heroLectureMock.course}</p>
          <h3>Lecture room 3B</h3>
        </div>
        <span>参加者 {heroLectureMock.participants + participantBump}人</span>
      </div>

      <div className="mock-panel mock-panel--question">
        <span>質問</span>
        <p key={questionIndex}>{heroLectureMock.questions[questionIndex]}</p>
      </div>

      <QuizBars question={heroLectureMock.quiz.question} options={heroLectureMock.quiz.options} compact />

      <div className="mock-panel">
        <span>AI Summary</span>
        {heroLectureMock.summary.map((line, index) => (
          <p className="summary-line" style={{ animationDelay: `${index * 160}ms` }} key={line}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
