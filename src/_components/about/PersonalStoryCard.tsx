"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface PersonalStoryCardProps {
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardHover: string;
  borderColor: string;
  variants?: any;
}

export default function PersonalStoryCard({
  textColor,
  subtextColor,
  cardBg,
  cardHover,
  borderColor,
  variants,
}: PersonalStoryCardProps) {
  return (
    <motion.div
      className={`${cardBg} ${cardHover} backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${borderColor} transition-all duration-300`}
      variants={variants}
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <Heart className={`${textColor} mr-3`} size={24} color="#ef4444" />
        <h3 className={`text-xl sm:text-2xl font-bold ${textColor}`}>
          Minha Jornada
        </h3>
      </div>
      <div
        className={`${subtextColor} space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base`}
      >
        <p>
          Minha jornada na tecnologia começou na faculdade quando construí meu
          primeiro site. O que começou como curiosidade rapidamente se tornou
          uma paixão por criar experiências digitais bonitas e funcionais.
        </p>
        <p>
          Acredito no poder do código limpo, design pensado e pensamento
          centrado no usuário. Cada projeto é uma oportunidade de resolver
          problemas reais e tornar o dia de alguém um pouco melhor.
        </p>
        <p>
          Quando não estou programando, você me encontrará explorando novas
          tecnologias, contribuindo para projetos de código aberto ou
          aproveitando uma boa xícara de café enquanto esboço minha próxima
          grande ideia.
        </p>
      </div>
    </motion.div>
  );
}
