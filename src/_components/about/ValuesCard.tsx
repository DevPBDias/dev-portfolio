"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface ValuesCardProps {
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardHover: string;
  borderColor: string;
  variants?: any;
}

export default function ValuesCard({
  textColor,
  subtextColor,
  cardBg,
  cardHover,
  borderColor,
  variants,
}: ValuesCardProps) {
  return (
    <motion.div
      className={`${cardBg} ${cardHover} backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${borderColor} transition-all duration-300`}
      variants={variants}
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <Users className={`${textColor} mr-3`} size={24} color="#3b82f6" />
        <h3 className={`text-xl sm:text-2xl font-bold ${textColor}`}>
          O Que Eu Valorizo
        </h3>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h4
            className={`text-base sm:text-lg font-semibold ${textColor} mb-2`}
          >
            Abordagem Centrada no Usuário
          </h4>
          <p className={`${subtextColor} text-sm sm:text-base`}>
            Cada decisão começa com o usuário. Crio experiências que são
            intuitivas, acessíveis e agradáveis de usar.
          </p>
        </div>
        <div>
          <h4
            className={`text-base sm:text-lg font-semibold ${textColor} mb-2`}
          >
            Aprendizado Contínuo
          </h4>
          <p className={`${subtextColor} text-sm sm:text-base`}>
            A tecnologia evolui rapidamente, e eu também. Estou sempre
            explorando novas ferramentas, frameworks e metodologias.
          </p>
        </div>
        <div>
          <h4
            className={`text-base sm:text-lg font-semibold ${textColor} mb-2`}
          >
            Colaboração
          </h4>
          <p className={`${subtextColor} text-sm sm:text-base`}>
            As melhores soluções vêm de perspectivas diversas. Prospero em
            ambientes colaborativos onde as ideias podem florescer.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
