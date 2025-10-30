"use client";
import { motion } from "framer-motion";
interface DescriptionProps {
  className?: string;
  variants?: any;
}
export function Description({ className = "", variants }: DescriptionProps) {
  return (
    <motion.p
      className={`text-sm sm:text-base md:text-lg text-gray-50 drop-shadow-md mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 ${className}`}
      variants={variants}
    >
      Eu crio experiências digitais bonitas, funcionais e centradas no usuário.
      Apaixonado por código limpo, design inovador e dar vida às ideias através
      da tecnologia.
    </motion.p>
  );
}
