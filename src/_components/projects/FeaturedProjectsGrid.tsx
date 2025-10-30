"use client";
import { motion } from "framer-motion";
import ProjectCardFeatured from "./ProjectCardFeatured";
import { Project, projects as allProjects } from "@/constants/projects-data";

interface FeaturedProjectsGridProps {
  textColor: string;
  primaryButton: string;
  secondaryButton: string;
  variants?: any;
}

export default function FeaturedProjectsGrid({
  textColor,
  primaryButton,
  secondaryButton,
  variants,
}: FeaturedProjectsGridProps) {
  const featuredProjects = allProjects.filter(
    (project: Project) => project.featured
  );

  return (
    <motion.div className="mb-16 sm:mb-20" variants={variants}>
      <h3
        className={`text-xl sm:text-2xl font-bold ${textColor} mb-6 sm:mb-8 bg-black/75 w-fit py-2 px-6 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/50`}
      >
        Trabalhos em Destaque
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8">
        {featuredProjects.map((project) => (
          <ProjectCardFeatured
            key={project.id}
            project={project}
            textColor={textColor}
            primaryButton={primaryButton}
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
