"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users, Coffee } from "lucide-react";
import AboutSectionHeader from "./AboutSectionHeader";
import PersonalStoryCard from "./PersonalStoryCard";
import ValuesCard from "./ValuesCard";
import SkillsGrid from "./SkillsGrid";
import StatsCard from "./StatsCard";

export default function AboutSection() {
  const textColor = "text-white drop-shadow-lg";
  const subtextColor = "text-gray-50 drop-shadow-md";
  const cardBg = "bg-black/75";
  const cardHover = "hover:bg-black/85";
  const borderColor = "border-white/50";
  const tagBg = "bg-black/60";
  const tagBorder = "border-white/40";

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

  const skills = [
    {
      category: "Frontend",
      icon: Code,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      color: "#3b82f6",
    },
    {
      category: "Backend",
      icon: Rocket,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "#10b981",
    },
    {
      category: "Design",
      icon: Palette,
      technologies: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Prototyping"],
      color: "#f59e0b",
    },
    {
      category: "Ferramentas",
      icon: Coffee,
      technologies: ["Git", "Docker", "AWS", "Vercel", "VS Code"],
      color: "#ef4444",
    },
  ];

  const stats = [
    { number: "50+", label: "Projetos Concluídos" },
    { number: "3+", label: "Anos de Experiência" },
    { number: "20+", label: "Clientes Satisfeitos" },
    { number: "∞", label: "Xícaras de Café" },
  ];

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
        <AboutSectionHeader
          textColor={textColor}
          subtextColor={subtextColor}
          variants={itemVariants}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <PersonalStoryCard
            textColor={textColor}
            subtextColor={subtextColor}
            cardBg={cardBg}
            cardHover={cardHover}
            borderColor={borderColor}
            variants={itemVariants}
          />
          <ValuesCard
            textColor={textColor}
            subtextColor={subtextColor}
            cardBg={cardBg}
            cardHover={cardHover}
            borderColor={borderColor}
            variants={itemVariants}
          />
        </div>

        <SkillsGrid
          skills={skills}
          textColor={textColor}
          subtextColor={subtextColor}
          cardBg={cardBg}
          cardHover={cardHover}
          borderColor={borderColor}
          tagBg={tagBg}
          tagBorder={tagBorder}
          variants={itemVariants}
        />

        <StatsCard
          stats={stats}
          textColor={textColor}
          subtextColor={subtextColor}
          cardBg={cardBg}
          borderColor={borderColor}
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}
