"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface PersonalStoryCardProps {
  textColor: string;
  variants?: any;
}

export default function PersonalStoryCard({
  textColor,
  variants,
}: PersonalStoryCardProps) {
  return (
    <motion.div
      className={`bg-black/75 hover:bg-black/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-white/50 transition-all duration-300`}
      variants={variants}
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <Heart className={`${textColor} mr-3`} size={24} color="#ef4444" />
        <h3 className={`text-xl sm:text-2xl font-bold ${textColor}`}>
          Minha Jornada
        </h3>
      </div>
      <div
        className={`text-gray-50 drop-shadow-md space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base`}
      >
        <p>
          Sou Desenvolvedor Frontend focado em React, Nextjs e venho fazendo uma
          transição de carreira após mais de cinco anos na engenharia civil.
          Encontrei no desenvolvimento web uma forma de unir criatividade,
          lógica e impacto real na vida das pessoas. Desde então, venho me
          dedicando a criar interfaces modernas e funcionais que entregam valor
          tanto visual quanto técnico.
        </p>
        <p>
          Sou formado em Desenvolvimento Web Full Stack pela Trybe, onde adquiri
          base sólida em tecnologias front-end e back-end, metodologias ágeis e
          boas práticas de programação. Concluí também minha formação em Cloud
          Computing pela Escola da Nuvem, conquistando o certificado AWS Cloud
          Practitioner.
        </p>
        <p>
          Entre minhas experiências, realizei projetos freelance para Olé Mídia
          e Max Training, conduzindo todo o processo, do design no Figma à
          implantação na Vercel. Além disso, desenvolvi o projeto FTB Platform
          como um trabalho voluntário de aperfeiçoamento, aplicando
          componentização, gerenciamento de estado e integração com APIs. Nessas
          entregas, mantive foco em UI/UX, responsividade e código limpo.
        </p>
        <p>
          Atualmente, busco oportunidades como Desenvolvedor Frontend Júnior, em
          equipes dinâmicas e colaborativas, onde eu possa contribuir com
          resultados impactantes e continuar crescendo como profissional.
        </p>
      </div>
    </motion.div>
  );
}
