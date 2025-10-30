"use client";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
interface MainTitleProps {
  className?: string;
  variants?: any;
}
export function MainTitle({ className = "", variants }: MainTitleProps) {
  const { currentTheme } = useTheme();
  const textColor =
    currentTheme === "forest-moon"
      ? "text-green-500 drop-shadow-lg"
      : currentTheme === "anime-sky"
      ? "text-blue-500 drop-shadow-lg"
      : "text-orange-500 drop-shadow-lg";

  return (
    <motion.h1
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${textColor} drop-shadow-lg mb-4 sm:mb-6 leading-tight ${className}`}
      variants={variants}
    >
      Paulo Bruno
    </motion.h1>
  );
}
