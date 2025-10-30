"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project, projects as allProjects } from "@/constants/projects-data";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface OtherProjectsGridProps {
  textColor: string;
  secondaryButton: string;
  variants?: any;
}

export default function OtherProjectsGrid({
  textColor,
  secondaryButton,
  variants,
}: OtherProjectsGridProps) {
  const otherProjects = allProjects.filter(
    (project: Project) => !project.featured
  );

  return (
    <motion.div variants={variants}>
      <h3
        className={`text-xl sm:text-2xl font-bold ${textColor} mb-6 sm:mb-8 bg-black/75 w-fit py-2 px-6 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/50`}
      >
        Mais Projetos
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            textColor={textColor}
            secondaryButton={secondaryButton}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
