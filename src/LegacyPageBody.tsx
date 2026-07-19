import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { SiteFooter } from "./components/SiteFooter";
import { VisionSection } from "./sections/VisionSection";
import { OrbitsSection } from "./sections/OrbitsSection";
import { TechnologySection } from "./sections/TechnologySection";
import { ResourcesSection } from "./sections/ResourcesSection";
import { EducationSection } from "./sections/EducationSection";
import { CommunitySection } from "./sections/CommunitySection";
import { MessageSection } from "./sections/MessageSection";
import { FounderSection } from "./sections/FounderSection";
import { ContactSection } from "./sections/ContactSection";

export function LegacyPageBody() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <VisionSection />
        <OrbitsSection />
        <TechnologySection />
        <ResourcesSection />
        <EducationSection />
        <CommunitySection />
        <div className="explore-chapter">
          <MessageSection />
        </div>
        <div className="trust-chapter">
          <FounderSection />
          <ContactSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
