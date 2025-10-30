"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

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
  projects: ProjectItem[];
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardHover: string;
  borderColor: string;
  tagBg: string;
  tagBorder: string;
  secondaryButton: string;
  variants?: any;
}

export default function OtherProjectsGrid({
  projects,
  textColor,
  subtextColor,
  cardBg,
  cardHover,
  borderColor,
  tagBg,
  tagBorder,
  secondaryButton,
  variants,
}: OtherProjectsGridProps) {
  return (
    <motion.div variants={variants}>
      <h3 className={`text-xl sm:text-2xl font-bold ${textColor} mb-6 sm:mb-8`}>
        Mais Projetos
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            textColor={textColor}
            subtextColor={subtextColor}
            cardBg={cardBg}
            cardHover={cardHover}
            borderColor={borderColor}
            tagBg={tagBg}
            tagBorder={tagBorder}
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
