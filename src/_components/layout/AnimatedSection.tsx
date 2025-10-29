"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  sectionKey: string;
}

const AnimatedSection = ({ children, sectionKey }: AnimatedSectionProps) => {
  return (
    <motion.div
      key={sectionKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
