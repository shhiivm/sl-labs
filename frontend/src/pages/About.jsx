import {
  AboutCTA,
  AboutHero,
  FounderSection,
  FutureVision,
  HairGlowStory,
  IngredientsShowcase,
  JourneyTimeline,
  OurApproach,
  OurValues,
  Testimonials,
  WhoWeAre,
  WhyWeStarted,
} from "../components/about/AboutSections";

function About() {
  return (
    <main className="min-h-screen bg-[#F8F8F5] pt-20 text-[#222222]">
      <AboutHero />
      <WhoWeAre />
      <WhyWeStarted />
      <JourneyTimeline />
      <HairGlowStory />
      <OurApproach />
      <IngredientsShowcase />
      <OurValues />
      <Testimonials />
      <FounderSection />
      <FutureVision />
      <AboutCTA />
    </main>
  );
}

export default About;