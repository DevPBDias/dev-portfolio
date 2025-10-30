"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfoList from "./ContactInfoList";
import SocialLinksGrid from "./SocialLinksGrid";
import { contactInfo } from "@/constants/contact-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textColor = "text-white drop-shadow-lg";
  const subtextColor = "text-gray-50 drop-shadow-md";
  const cardBg = "bg-black/75";
  const cardHover = "hover:bg-black/85";
  const borderColor = "border-white/50";
  const inputBg = "bg-black/60";
  const inputFocus = "focus:bg-black/70";
  const primaryButton = "bg-blue-600 hover:bg-blue-700";

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    console.log("Form submitted:", formData);
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
        <ContactHeader
          textColor={textColor}
          subtextColor={subtextColor}
          variants={itemVariants}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <ContactForm
            formData={formData}
            isSubmitting={isSubmitting}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            textColor={textColor}
            subtextColor={subtextColor}
            borderColor={borderColor}
            inputBg={inputBg}
            inputFocus={inputFocus}
            primaryButton={primaryButton}
            cardBg={cardBg}
            variants={itemVariants}
          />

          <div className="space-y-6 sm:space-y-8">
            <motion.div
              className={`${cardBg} backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${borderColor}`}
              variants={itemVariants}
            >
              <h3
                className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 sm:mb-6`}
              >
                Informações de Contato
              </h3>
              <ContactInfoList
                items={contactInfo}
                textColor={textColor}
                subtextColor={subtextColor}
                cardHover={cardHover}
              />
            </motion.div>

            <motion.div
              className={`${cardBg} backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${borderColor}`}
              variants={itemVariants}
            >
              <h3
                className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 sm:mb-6`}
              >
                Me Siga
              </h3>
              <SocialLinksGrid
                textColor={textColor}
                subtextColor={subtextColor}
                cardHover={cardHover}
              />
            </motion.div>
          </div>
        </div>

        <motion.div className="text-center" variants={itemVariants}>
          <p className={`${subtextColor} text-base sm:text-lg px-4 sm:px-0`}>
            Obrigado pela visita! Estou ansioso para me conectar com você.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
