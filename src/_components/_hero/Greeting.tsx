"use client";
import { motion } from "framer-motion";
interface GreetingProps {
  className?: string;
  variants?: any;
}
export function Greeting({ className = "", variants }: GreetingProps) {
  return (
    <motion.p
      className={`text-base sm:text-lg md:text-xl text-gray-50 drop-shadow-md mb-3 sm:mb-4 font-medium ${className}`}
      variants={variants}
    >
      Olá, eu sou
    </motion.p>
  );
}
