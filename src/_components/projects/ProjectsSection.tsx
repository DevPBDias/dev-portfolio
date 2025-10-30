"use client";

import { motion } from "framer-motion";
import ProjectsHeader from "./ProjectsHeader";
import FeaturedProjectsGrid from "./FeaturedProjectsGrid";
import OtherProjectsGrid from "./OtherProjectsGrid";
import { useTheme } from "@/context/ThemeContext";

export default function ProjectsSection() {
  const { currentTheme } = useTheme();
  const textColor =
    currentTheme === "forest-moon"
      ? "text-green-500 drop-shadow-lg"
      : currentTheme === "anime-sky"
      ? "text-blue-500 drop-shadow-lg"
      : "text-orange-500 drop-shadow-lg";
  const primaryButton =
    currentTheme === "forest-moon"
      ? "bg-green-500 hover:bg-green-600"
      : currentTheme === "anime-sky"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-orange-500 hover:bg-orange-600";
  const secondaryButton =
    currentTheme === "forest-moon"
      ? "bg-green-800 hover:bg-green-900"
      : currentTheme === "anime-sky"
      ? "bg-blue-800 hover:bg-blue-900"
      : "bg-orange-800 hover:bg-orange-900";

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
        <ProjectsHeader textColor={textColor} variants={itemVariants} />

        <FeaturedProjectsGrid
          textColor={textColor}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
          variants={itemVariants}
        />

        <OtherProjectsGrid
          textColor={textColor}
          secondaryButton={secondaryButton}
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}
