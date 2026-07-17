import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { MobileLectureStatus } from "./sections/MobileLectureStatus";
import { FinalCTA } from "./sections/FinalCTA";
import { StickyCTA } from "./components/ui/StickyCTA";
import {
  AILearningJourney,
  DeveloperGateway,
  LearningTrust,
  LearningUseScenes,
  LectureExperienceTimeline,
  TeacherLectureJourney
} from "./sections/MainExperienceSections";

export function App() {
  return (
    <div className="intro-redesign">
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <Header variant="main" />
      <main id="main">
        <Hero />
        <div id="students">
          <MobileLectureStatus />
        </div>
        <LectureExperienceTimeline />
        <AILearningJourney />
        <TeacherLectureJourney />
        <LearningUseScenes />
        <LearningTrust />
        <DeveloperGateway />
        <FinalCTA />
      </main>
      <StickyCTA />
      <Footer variant="main" />
    </div>
  );
}
