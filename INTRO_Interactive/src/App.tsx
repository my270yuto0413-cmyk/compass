import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { MobileLectureStatus } from "./sections/MobileLectureStatus";
import { LectureMoment } from "./sections/LectureMoment";
import { Students } from "./sections/Students";
import { ScienceLectureExperience } from "./sections/ScienceLectureExperience";
import { Features } from "./sections/Features";
import { AILearningSupport } from "./sections/AILearningSupport";
import { Teachers } from "./sections/Teachers";
import { Technology } from "./sections/Technology";
import { SecurityGovernance } from "./sections/SecurityGovernance";
import { FinalCTA } from "./sections/FinalCTA";
import { StickyCTA } from "./components/ui/StickyCTA";

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
        <Students />
        <Features />
        <AILearningSupport />
        <ScienceLectureExperience />
        <Teachers />
        <SecurityGovernance />
        <Technology />
        <FinalCTA />
      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
