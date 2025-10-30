"use client";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

interface ContactFormProps {
  formData: { name: string; email: string; subject: string; message: string };
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  textColor: string;
  subtextColor: string;
  borderColor: string;
  inputBg: string;
  inputFocus: string;
  primaryButton: string;
  cardBg: string;
  variants?: any;
}

export default function ContactForm({
  formData,
  isSubmitting,
  onChange,
  onSubmit,
  textColor,
  subtextColor,
  borderColor,
  inputBg,
  inputFocus,
  primaryButton,
  cardBg,
  variants,
}: ContactFormProps) {
  return (
    <motion.div
      className={`${cardBg} backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${borderColor}`}
      variants={variants}
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <MessageCircle
          className={`${textColor} mr-3`}
          size={24}
          color="#3b82f6"
        />
        <h3 className={`text-xl sm:text-2xl font-bold ${textColor}`}>
          Enviar Mensagem
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-semibold ${textColor} mb-2`}
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${inputBg} ${inputFocus} border-2 ${borderColor} rounded-lg ${textColor} placeholder-gray-300 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-sm sm:text-base`}
              placeholder="Seu Nome"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-semibold ${textColor} mb-2`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${inputBg} ${inputFocus} border-2 ${borderColor} rounded-lg ${textColor} placeholder-gray-300 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-sm sm:text-base`}
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className={`block text-sm font-semibold ${textColor} mb-2`}
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={onChange}
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${inputBg} ${inputFocus} border-2 ${borderColor} rounded-lg ${textColor} placeholder-gray-300 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-sm sm:text-base`}
            placeholder="Sobre o que é?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className={`block text-sm font-semibold ${textColor} mb-2`}
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
            rows={4}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${inputBg} ${inputFocus} border-2 ${borderColor} rounded-lg ${textColor} placeholder-gray-300 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 resize-none text-sm sm:text-base`}
            placeholder="Conte-me sobre seu projeto ou apenas diga olá..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`cursor-pointer w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 ${primaryButton} disabled:bg-blue-500 text-white rounded-lg transition-all duration-300 font-semibold group focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send
                size={16}
                className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform"
              />
              Enviar Mensagem
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
