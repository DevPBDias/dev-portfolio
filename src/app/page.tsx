"use client";

import { useSection } from "@/context/SectionContext";
import GlassContainer from "@/_components/layout/GlassContainer";
import { AnimatePresence } from "framer-motion";
import AnimatedSection from "@/_components/layout/AnimatedSection";

import MainContentHero from "@/_components/_hero/MainContentHero";
import AboutSection from "@/_components/about/AboutSection";
import ProjectsSection from "@/_components/projects/ProjectsSection";
import ContactSection from "@/_components/contact/ContactSection";

const sections = [
  { key: "home", component: <MainContentHero /> },
  { key: "sobre", component: <AboutSection /> },
  { key: "projetos", component: <ProjectsSection /> },
  { key: "contato", component: <ContactSection /> },
];

export default function MainPage() {
  const { activeSection } = useSection();

  return (
    <GlassContainer>
      <AnimatePresence mode="wait">
        {sections
          .filter((section) => section.key === activeSection)
          .map((section) => (
            <AnimatedSection key={section.key} sectionKey={section.key}>
              {section.component}
            </AnimatedSection>
          ))}
      </AnimatePresence>
    </GlassContainer>
  );
}
