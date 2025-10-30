"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface ValuesCardProps {
  textColor: string;
  variants?: any;
}

export default function ValuesCard({ textColor, variants }: ValuesCardProps) {
  return (
    <motion.div
      className={`bg-black/75 hover:bg-black/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-white/50 transition-all duration-300`}
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
          <p className={`text-gray-50 drop-shadow-md text-sm sm:text-base`}>
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
          <p className={`text-gray-50 drop-shadow-md text-sm sm:text-base`}>
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
          <p className={`text-gray-50 drop-shadow-md text-sm sm:text-base`}>
            As melhores soluções vêm de perspectivas diversas. Prospero em
            ambientes colaborativos onde as ideias florescem com mais
            facilidade.
          </p>
        </div>
        <div>
          <h4
            className={`text-base sm:text-lg font-semibold ${textColor} mb-2`}
          >
            Adaptabilidade
          </h4>
          <p className={`text-gray-50 drop-shadow-md text-sm sm:text-base`}>
            Cada situação nova ou critica consigo me adaptar rapidamente para
            trazer os melhores resultados possíveis.
          </p>
        </div>
        <div>
          <h4
            className={`text-base sm:text-lg font-semibold ${textColor} mb-2`}
          >
            Responsabilidade
          </h4>
          <p className={`text-gray-50 drop-shadow-md text-sm sm:text-base`}>
            Entregar resultados dentro do prazo e com um bom valor.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
