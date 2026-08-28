import {
  HeroSection,
  ApplicationsSection,
  AISection,
  IntegrationSection,
  CaseStudiesSection,
  ProcessSection,
  SecuritySection,
  FinalCTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ApplicationsSection />
      <AISection />
      <IntegrationSection />
      <CaseStudiesSection />
      <ProcessSection />
      <SecuritySection />
      <FinalCTASection />
    </main>
  );
}
