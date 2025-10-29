"use client";

import { useTheme } from "@/context/ThemeContext";

const Intro = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-4 text-left">
      <h3
        className={`text-lg sm:text-xl font-semibold ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        Resumo de carreira
      </h3>
      <div
        className={`p-4 rounded-lg space-y-4 ${
          isLight
            ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
            : "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600"
        }`}
      >
        <p
          className={`text-sm leading-relaxed ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
        >
          Sou formado em Engenharia Civil, mas há alguns anos decidi seguir
          minha verdadeira vocação e migrar para a área de tecnologia. Concluí o
          curso de Desenvolvimento Web Full Stack pela Trybe, onde aprendi desde
          front-end até back-end com foco em boas práticas, metodologias ágeis e
          trabalho em equipe.
        </p>
        <p
          className={`text-sm leading-relaxed ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
        >
          Desde então, venho me dedicando a criar soluções digitais que unam
          design e funcionalidade. Desenvolvi sites e aplicações personalizadas
          para pequenas empresas, cuidando de todo o processo, desde o layout no
          Figma até a implementação com React, Next.js e TypeScript. Também atuo
          em projetos pessoais que me permitem experimentar novas tecnologias e
          aprimorar minhas habilidades técnicas e criativas.
        </p>
        <p
          className={`text-sm leading-relaxed ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
        >
          Além da programação, gosto de manter uma rotina equilibrada. Pratico
          basquete e academia, o que me ajuda a manter foco e disciplina, e
          costumo estudar diariamente para evoluir como desenvolvedor.
        </p>
        <p
          className={`text-sm leading-relaxed ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
        >
          Sou curioso, gosto de aprender coisas novas e acredito que a
          tecnologia tem o poder de transformar o dia a dia das pessoas. Meu
          objetivo é continuar crescendo profissionalmente, contribuindo com
          soluções inovadoras e trabalhando em ambientes dinâmicos onde eu possa
          gerar impacto real.
        </p>
      </div>
    </div>
  );
};

export default Intro;
