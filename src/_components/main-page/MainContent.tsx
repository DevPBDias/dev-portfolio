"use client";
import PortfolioHero from "@/_components/_hero/HeroSection";
import AboutSection from "@/_components/about/AboutSection";
import ContactSection from "@/_components/contact/ContactSection";
import ProjectsSection from "@/_components/projects/ProjectsSection";

export default function MainContent() {
  return (
    <div className="relative z-10">
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <PortfolioHero />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
