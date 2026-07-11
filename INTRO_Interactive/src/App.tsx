import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { MobileLectureStatus } from "./sections/MobileLectureStatus";
import { LectureMoment } from "./sections/LectureMoment";
import { Students } from "./sections/Students";
import { ScienceLectureExperience } from "./sections/ScienceLectureExperience";
import { Features } from "./sections/Features";
import { AILearningSupport } from "./sections/AILearningSupport";
import { BeforeAfter } from "./sections/BeforeAfter";
import { Teachers } from "./sections/Teachers";
import { TeachingUseCases } from "./sections/TeachingUseCases";
import { Technology } from "./sections/Technology";
import { SecurityGovernance } from "./sections/SecurityGovernance";
import { FinalCTA } from "./sections/FinalCTA";

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <Header />
      <main id="main">
        <Hero />
        <MobileLectureStatus />
        <LectureMoment />
        <Features />
        <AILearningSupport />
        <BeforeAfter />
        <Students />
        <ScienceLectureExperience />
        <Teachers />
        <TeachingUseCases />
        <SecurityGovernance />
        <Technology />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
