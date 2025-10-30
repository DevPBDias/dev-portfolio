"use client";
import { motion } from "framer-motion";

interface ContactHeaderProps {
  textColor: string;
  subtextColor: string;
  variants?: any;
}

export default function ContactHeader({
  textColor,
  subtextColor,
  variants,
}: ContactHeaderProps) {
  return (
    <motion.div className="text-center mb-12 sm:mb-16" variants={variants}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold ${textColor} mb-4 sm:mb-6`}
      >
        Entre em Contato
      </h2>
      <p
        className={`text-base sm:text-lg md:text-xl ${subtextColor} max-w-4xl mx-auto leading-relaxed px-4 sm:px-0`}
      >
        Estou sempre interessado em novas oportunidades e projetos empolgantes.
        Se você tem uma pergunta, quer trabalhar junto ou apenas quer dizer olá,
        adoraria ouvir de você!
      </p>
    </motion.div>
  );
}
