"use client";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
interface CtaButtonsProps {
  className?: string;
  variants?: any;
  scrollToProjects: () => void;
}
export function CtaButtons({
  className = "",
  variants,
  scrollToProjects,
}: CtaButtonsProps) {
  return (
    <motion.div
      className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2 sm:px-0 ${className}`}
      variants={variants}
    >
      <button
        onClick={scrollToProjects}
        className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black/80 hover:bg-black/90 text-white drop-shadow-lg rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 font-semibold flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base"
      >
        Ver Meu Trabalho
        <ExternalLink
          size={16}
          className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform"
        />
      </button>
      <a
        href="mailto:paulo@example.com"
        className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full backdrop-blur-sm transition-all duration-300 font-semibold flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base"
      >
        Entre em Contato
        <Mail
          size={16}
          className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform"
        />
      </a>
    </motion.div>
  );
}
