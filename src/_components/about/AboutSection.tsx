"use client";

import { motion } from "framer-motion";
import AboutSectionHeader from "./AboutSectionHeader";
import PersonalStoryCard from "./PersonalStoryCard";
import ValuesCard from "./ValuesCard";
import SkillsGrid from "./SkillsGrid";
import { useTheme } from "@/context/ThemeContext";

export default function AboutSection() {
  const { currentTheme } = useTheme();
  const textColor =
    currentTheme === "forest-moon"
      ? "text-green-500 drop-shadow-lg"
      : currentTheme === "anime-sky"
      ? "text-blue-500 drop-shadow-lg"
      : "text-orange-500 drop-shadow-lg";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="sobre"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSectionHeader textColor={textColor} variants={itemVariants} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <PersonalStoryCard textColor={textColor} variants={itemVariants} />
          <ValuesCard textColor={textColor} variants={itemVariants} />
        </div>

        <SkillsGrid textColor={textColor} variants={itemVariants} />
      </motion.div>
    </section>
  );
}
