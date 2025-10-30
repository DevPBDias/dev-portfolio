"use client";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import Link from "next/link";
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
  const { currentTheme } = useTheme();
  const bgColor =
    currentTheme === "forest-moon"
      ? "bg-green-500 drop-shadow-lg"
      : currentTheme === "anime-sky"
      ? "bg-blue-500 drop-shadow-lg"
      : "bg-orange-500 drop-shadow-lg";
  const hoverColor =
    currentTheme === "forest-moon"
      ? "bg-green-600 drop-shadow-lg"
      : currentTheme === "anime-sky"
      ? "bg-blue-600 drop-shadow-lg"
      : "bg-orange-600 drop-shadow-lg";

  return (
    <motion.div
      className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2 sm:px-0 ${className}`}
      variants={variants}
    >
      <button
        onClick={scrollToProjects}
        className={`cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 ${bgColor} hover:${hoverColor} text-black drop-shadow-lg rounded-full backdrop-blur-sm transition-all duration-300 font-semibold flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base`}
      >
        Confira meus projetos
        <ExternalLink
          size={16}
          className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform"
        />
      </button>
      <Link
        href="/cv/PauloBruno_CV.pdf"
        download="PauloBruno_CV.pdf"
        className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black-600 hover:bg-gray-800 text-white rounded-full border-2 border-white/60 backdrop-blur-sm transition-all duration-300 font-semibold flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base"
      >
        <Download
          size={16}
          className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform"
        />
        Download CV
      </Link>
    </motion.div>
  );
}
