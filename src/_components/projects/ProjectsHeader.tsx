"use client";
import { motion } from "framer-motion";

interface ProjectsHeaderProps {
  textColor: string;
  variants?: any;
}

export default function ProjectsHeader({
  textColor,
  variants,
}: ProjectsHeaderProps) {
  return (
    <motion.div
      id="projects"
      className="text-center mb-12 sm:mb-16 bg-black/75 w-full p-6 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/50"
      variants={variants}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold ${textColor} mb-4 sm:mb-6 `}
      >
        Projetos em Destaque
      </h2>
      <p
        className={`text-base sm:text-lg md:text-xl text-gray-50 drop-shadow-md max-w-4xl mx-auto leading-relaxed px-4 sm:px-0`}
      >
        Aqui estão alguns dos meus projetos favoritos que mostram minhas
        habilidades em desenvolvimento web, design e resolução de problemas.
        Cada projeto representa um desafio único e experiência de aprendizado.
      </p>
    </motion.div>
  );
}
