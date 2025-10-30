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
      Especializado em <strong>React</strong>, <strong>Next.js</strong> e{" "}
      <strong>UX/UI Design</strong>. Apaixonado em criar interfaces intuitivas e
      responsivas e que fazem diferença na vida das pessoas.
    </motion.p>
  );
}
