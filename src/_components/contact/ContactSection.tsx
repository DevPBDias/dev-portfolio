"use client";

import { motion } from "framer-motion";
import ContactHeader from "./ContactHeader";
import ContactInfoList from "./ContactInfoList";
import SocialLinksGrid from "./SocialLinksGrid";
import { contactInfo } from "@/constants/contact-data";
import { useTheme } from "@/context/ThemeContext";
import { Heart } from "lucide-react";

export default function ContactSection() {
  const { currentTheme } = useTheme();

  const textColor =
    currentTheme === "forest-moon"
      ? "text-green-500 drop-shadow-lg"
      : currentTheme === "anime-sky"
      ? "text-blue-500 drop-shadow-lg"
      : "text-orange-500 drop-shadow-lg";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contato"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactHeader textColor={textColor} variants={itemVariants} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <motion.div
            className="bg-black/75 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-white/50"
            variants={itemVariants}
          >
            <h3
              className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 sm:mb-6`}
            >
              Informações de Contato
            </h3>
            <ContactInfoList items={contactInfo} textColor={textColor} />
          </motion.div>

          <motion.div
            className="bg-black/75 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-white/50"
            variants={itemVariants}
          >
            <h3
              className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 sm:mb-6`}
            >
              Minhas redes sociais
            </h3>
            <SocialLinksGrid textColor={textColor} />
          </motion.div>
        </div>

        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-gray-50 drop-shadow-md text-base sm:text-lg px-4 sm:px-0 flex items-center justify-center gap-2">
            Obrigado pela visita! Feito com{" "}
            <Heart color="red" size={24} className="animate-pulse" /> por
            DevPauloDias.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
