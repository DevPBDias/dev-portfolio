"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectsCTAProps {
  subtextColor: string;
  buttonClass: string;
  variants?: any;
}

export default function ProjectsCTA({
  subtextColor,
  buttonClass,
  variants,
}: ProjectsCTAProps) {
  return (
    <motion.div className="text-center mt-12 sm:mt-16" variants={variants}>
      <p
        className={`${subtextColor} mb-4 sm:mb-6 text-sm sm:text-base px-4 sm:px-0`}
      >
        Interessado em trabalhar junto ou quer ver mais do meu trabalho?
      </p>
      <a
        href="mailto:paulo@example.com"
        className={`cursor-pointer inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 ${buttonClass} text-white rounded-full transition-all duration-300 font-semibold group focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base`}
      >
        Vamos Conectar
        <ExternalLink
          size={16}
          className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform"
        />
      </a>
    </motion.div>
  );
}
