"use client";
import { motion } from "framer-motion";

interface ProjectsHeaderProps {
  textColor: string;
  subtextColor: string;
  variants?: any;
}

export default function ProjectsHeader({
  textColor,
  subtextColor,
  variants,
}: ProjectsHeaderProps) {
  return (
    <motion.div className="text-center mb-12 sm:mb-16" variants={variants}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold ${textColor} mb-4 sm:mb-6`}
      >
        Projetos em Destaque
      </h2>
      <p
        className={`text-base sm:text-lg md:text-xl ${subtextColor} max-w-4xl mx-auto leading-relaxed px-4 sm:px-0`}
      >
        Aqui estão alguns dos meus projetos favoritos que mostram minhas
        habilidades em desenvolvimento web, design e resolução de problemas.
        Cada projeto representa um desafio único e experiência de aprendizado.
      </p>
    </motion.div>
  );
}
