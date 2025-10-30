"use client";

import { motion } from "framer-motion";
import { Greeting } from "./Greeting";
import { MainTitle } from "./MainTitle";
import { SubTitle } from "./SubTitle";
import { Description } from "./Description";
import { CtaButtons } from "./CtaButtons";
import { SocialLinks } from "./SocialLinks";
import { AnimatedScrollButton } from "./AnimatedScrollButton";

export default function HeroSection() {
  const cardBg = "bg-black/75";
  const borderColor = "border-white/50";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToProjects = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`backdrop-blur-md ${cardBg} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 ${borderColor} shadow-2xl`}
        variants={itemVariants}
      >
        <Greeting variants={itemVariants} />
        <MainTitle variants={itemVariants} />
        <SubTitle variants={itemVariants} />
        <Description variants={itemVariants} />
        <CtaButtons
          variants={itemVariants}
          scrollToProjects={scrollToProjects}
        />
        <SocialLinks variants={itemVariants} />
      </motion.div>

      <AnimatedScrollButton
        variants={itemVariants}
        onClick={scrollToProjects}
      />
    </motion.div>
  );
}
