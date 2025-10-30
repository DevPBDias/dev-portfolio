"use client";
import { motion } from "framer-motion";
interface MainTitleProps {
  className?: string;
  variants?: any;
}
export function MainTitle({ className = "", variants }: MainTitleProps) {
  return (
    <motion.h1
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg mb-4 sm:mb-6 leading-tight ${className}`}
      variants={variants}
    >
      Paulo Bruno
    </motion.h1>
  );
}
