"use client";
import { motion } from "framer-motion";

interface AboutSectionHeaderProps {
  textColor: string;
  subtextColor: string;
  variants?: any;
}

export default function AboutSectionHeader({
  textColor,
  subtextColor,
  variants,
}: AboutSectionHeaderProps) {
  return (
    <motion.div className="text-center mb-12 sm:mb-16" variants={variants}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold ${textColor} mb-4 sm:mb-6`}
      >
        Sobre Mim
      </h2>
      <p
        className={`text-base sm:text-lg md:text-xl ${subtextColor} max-w-4xl mx-auto leading-relaxed px-4 sm:px-0`}
      >
        Sou um desenvolvedor apaixonado que adora criar experiências digitais
        que fazem a diferença. Com experiência em desenvolvimento e design,
        trago uma perspectiva única para cada projeto.
      </p>
    </motion.div>
  );
}
