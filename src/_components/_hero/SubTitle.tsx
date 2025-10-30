"use client";
import { motion } from "framer-motion";
interface SubTitleProps {
  className?: string;
  variants?: any;
}
export function SubTitle({ className = "", variants }: SubTitleProps) {
  return (
    <motion.h2
      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-50 drop-shadow-md mb-6 sm:mb-8 font-medium px-2 sm:px-0 ${className}`}
      variants={variants}
    >
      Desenvolvedor Full Stack & Designer UI/UX
    </motion.h2>
  );
}
