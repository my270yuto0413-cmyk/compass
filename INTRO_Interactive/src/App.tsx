import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { LectureMoment } from "./sections/LectureMoment";
import { Students } from "./sections/Students";
import { ScienceLectureExperience } from "./sections/ScienceLectureExperience";
import { StudentFlow } from "./sections/StudentFlow";
import { Features } from "./sections/Features";
import { BeforeAfter } from "./sections/BeforeAfter";
import { Teachers } from "./sections/Teachers";
import { TeachingUseCases } from "./sections/TeachingUseCases";
import { Technology } from "./sections/Technology";
import { EngineeringPhilosophy } from "./sections/EngineeringPhilosophy";
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
        <LectureMoment />
        <Students />
        <ScienceLectureExperience />
        <StudentFlow />
        <Features />
        <BeforeAfter />
        <Teachers />
        <TeachingUseCases />
        <Technology />
        <EngineeringPhilosophy />
        <SecurityGovernance />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
