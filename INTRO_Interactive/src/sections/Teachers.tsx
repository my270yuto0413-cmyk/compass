import { teacherCards } from "../content/interactiveContent";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";
import { TeacherDashboardMock } from "../components/ui/TeacherDashboardMock";

export function Teachers() {
  return (
    <Section id="teachers" className="teachers-section section--dark">
      <div className="split-grid">
        <Reveal>
          <SectionHeader
            eyebrow="FOR TEACHERS"
            title="学生の沈黙を、授業改善の手がかりに。"
            lead="コメント、クイズ、リアクション、AI要約を通じて、講義中の反応を可視化し、次の説明や授業改善につなげます。"
          />
          <div className="teacher-card-grid">
            {teacherCards.map((card) => (
              <article className="teacher-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <TeacherDashboardMock />
        </Reveal>
      </div>
    </Section>
  );
}
