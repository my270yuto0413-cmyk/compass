import { heroLectureMock } from "../content/interactiveContent";

export function MobileLectureStatus() {
  return (
    <section className="mobile-lecture-status" aria-label="現在のライブ講義">
      <div className="section__inner mobile-lecture-status__inner">
        <div className="mobile-lecture-status__top">
          <span className="live-dot" aria-hidden="true" />
          <span>{heroLectureMock.title}</span>
        </div>
        <p>{heroLectureMock.course}</p>
        <h2>Lecture room 3B</h2>
      </div>
    </section>
  );
}
