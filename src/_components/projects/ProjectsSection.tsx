import { CarouselProjects } from "@projects/CarouselProjects";
import TitleSection from "../layout/TitleSection";

const ProjectsSection = () => {
  return (
    <section className="p-10 flex flex-col gap-10 items-start justify-start">
      <TitleSection
        titleName="Meus projetos"
        subtitle="Uma seleção de soluções que desenvolvi para gerar impacto real."
      />
      <CarouselProjects />
    </section>
  );
};

export default ProjectsSection;
