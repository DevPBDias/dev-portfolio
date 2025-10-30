"use client";
import { motion } from "framer-motion";
import ProjectCardFeatured from "./ProjectCardFeatured";
import type { StaticImageData } from "next/image";

interface FeaturedProject {
  id: number;
  title: string;
  longDescription: string;
  image: string | StaticImageData;
  technologies: string[];
  category: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface FeaturedProjectsGridProps {
  projects: FeaturedProject[];
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardHover: string;
  borderColor: string;
  tagBg: string;
  tagBorder: string;
  primaryButton: string;
  secondaryButton: string;
  variants?: any;
}

export default function FeaturedProjectsGrid({
  projects,
  textColor,
  subtextColor,
  cardBg,
  cardHover,
  borderColor,
  tagBg,
  tagBorder,
  primaryButton,
  secondaryButton,
  variants,
}: FeaturedProjectsGridProps) {
  return (
    <motion.div className="mb-16 sm:mb-20" variants={variants}>
      <h3 className={`text-xl sm:text-2xl font-bold ${textColor} mb-6 sm:mb-8`}>
        Trabalhos em Destaque
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <ProjectCardFeatured
            key={project.id}
            project={project}
            textColor={textColor}
            subtextColor={subtextColor}
            cardBg={cardBg}
            cardHover={cardHover}
            borderColor={borderColor}
            tagBg={tagBg}
            tagBorder={tagBorder}
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
