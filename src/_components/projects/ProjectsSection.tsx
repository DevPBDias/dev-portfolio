"use client";

import { motion } from "framer-motion";
import ProjectsHeader from "./ProjectsHeader";
import FeaturedProjectsGrid from "./FeaturedProjectsGrid";
import OtherProjectsGrid from "./OtherProjectsGrid";
import ProjectsCTA from "./ProjectsCTA";
import { projects, Project } from "@/constants/projects-data";

export default function ProjectsSection() {
  const textColor = "text-white drop-shadow-lg";
  const subtextColor = "text-gray-50 drop-shadow-md";
  const cardBg = "bg-black/75";
  const cardHover = "hover:bg-black/85";
  const borderColor = "border-white/50";
  const primaryButton = "bg-blue-600 hover:bg-blue-700";
  const secondaryButton = "bg-gray-700 hover:bg-gray-600";
  const tagBg = "bg-black/60";
  const tagBorder = "border-white/40";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const featuredProjects = projects.filter(
    (project: Project) => project.featured
  );
  const otherProjects = projects.filter(
    (project: Project) => !project.featured
  );

  return (
    <section
      id="projetos"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectsHeader
          textColor={textColor}
          subtextColor={subtextColor}
          variants={itemVariants}
        />

        <FeaturedProjectsGrid
          projects={featuredProjects}
          textColor={textColor}
          subtextColor={subtextColor}
          cardBg={cardBg}
          cardHover={cardHover}
          borderColor={borderColor}
          tagBg={tagBg}
          tagBorder={tagBorder}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
          variants={itemVariants}
        />

        <OtherProjectsGrid
          projects={otherProjects}
          textColor={textColor}
          subtextColor={subtextColor}
          cardBg={cardBg}
          cardHover={cardHover}
          borderColor={borderColor}
          tagBg={tagBg}
          tagBorder={tagBorder}
          secondaryButton={secondaryButton}
          variants={itemVariants}
        />

        <ProjectsCTA
          subtextColor={subtextColor}
          buttonClass={secondaryButton}
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}
