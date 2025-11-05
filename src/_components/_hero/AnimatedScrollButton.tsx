"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
interface AnimatedScrollButtonProps {
  className?: string;
  variants?: any;
}
export function AnimatedScrollButton({
  className = "",
  variants,
}: AnimatedScrollButtonProps) {
  return (
    <motion.div
      className={`mt-12 sm:mt-16 ${className}`}
      variants={variants}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
    >
      <Link
        href="#projects"
        className="cursor-pointer p-2 sm:p-3 bg-black/80 hover:bg-black/90 rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label="Rolar para projetos"
      >
        <ArrowDown
          size={20}
          className="sm:w-6 sm:h-6 text-white drop-shadow-lg"
        />
      </Link>
    </motion.div>
  );
}
