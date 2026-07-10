import { LiveLectureMock } from "../components/ui/LiveLectureMock";

export function MobileLectureStatus() {
  return (
    <section className="mobile-lecture-status" aria-label="現在のライブ講義">
      <div className="section__inner mobile-lecture-status__inner">
        <div className="mobile-lecture-status__screen">
          <LiveLectureMock />
        </div>
      </div>
    </section>
  );
}
