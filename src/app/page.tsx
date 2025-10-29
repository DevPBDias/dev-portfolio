"use client";

import MainContentHero from "@/_components/_hero/MainContentHero";
import AboutSection from "@/_components/about/AboutSection";
import ProjectsSection from "@/_components/projects/ProjectsSection";
import ContactSection from "@/_components/contact/ContactSection";

export default function MainPage() {
  return (
    <main className="w-full">
      <div className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
        <section className="snap-start scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center justify-center">
          <MainContentHero />
        </section>
        <section className="snap-start scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center justify-center">
          <AboutSection />
        </section>
        <section className="snap-start scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center justify-center">
          <ProjectsSection />
        </section>
        <section className="snap-start scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center justify-center">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
