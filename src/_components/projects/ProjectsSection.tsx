import { CarouselProjects } from "@projects/CarouselProjects";
import TitleSection from "../layout/TitleSection";
import GlassContainer from "../layout/GlassContainer";

const ProjectsSection = () => {
  return (
    <GlassContainer>
      <div
        id="projetos"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <TitleSection
          titleName="Meus projetos"
          subtitle="Uma seleção de soluções que desenvolvi para me aprimorar como desenvolvedor."
        />
        <CarouselProjects />
      </div>
    </GlassContainer>
  );
};

export default ProjectsSection;
