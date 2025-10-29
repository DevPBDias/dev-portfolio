"use client";

import { useTheme } from "@/context/ThemeContext";

const Intro = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3
          className={`text-xl sm:text-2xl font-semibold ${
            isLight ? "text-slate-800" : "text-slate-200"
          }`}
        >
          Desenvolvedor Frontend
        </h3>
        <p
          className={`text-lg leading-relaxed ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
        >
          Focado em React e Next.js, venho fazendo uma transição de carreira
          após mais de cinco anos na engenharia civil. Encontrei no
          desenvolvimento web uma forma de unir criatividade, lógica e impacto
          real na vida das pessoas.
        </p>
        <p
          className={`leading-relaxed ${
            isLight ? "text-slate-600" : "text-slate-400"
          }`}
        >
          Desde então, venho me dedicando a criar interfaces modernas e
          funcionais que entregam valor tanto visual quanto técnico.
        </p>
      </div>
    </div>
  );
};

export default Intro;
