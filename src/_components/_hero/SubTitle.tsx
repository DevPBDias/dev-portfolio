"use client";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

interface SubTitleProps {
  className?: string;
  variants?: any;
}

export function SubTitle({ className = "", variants }: SubTitleProps) {
  const { currentTheme } = useTheme();
  const textColor =
    currentTheme === "forest-moon"
      ? "text-green-500 drop-shadow-lg"
      : currentTheme === "anime-sky"
      ? "text-blue-500 drop-shadow-lg"
      : "text-orange-500 drop-shadow-lg";

  return (
    <motion.h2
      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl  ${textColor} animate-pulse drop-shadow-md mb-6 sm:mb-8 font-medium px-2 sm:px-0 ${className}`}
      variants={variants}
    >
      Desenvolvedor Front-end & Web Designer
    </motion.h2>
  );
}
