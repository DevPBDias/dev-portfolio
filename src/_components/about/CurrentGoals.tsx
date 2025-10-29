"use client";

import { useTheme } from "@/context/ThemeContext";

const CurrentGoals = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-4">
      <h4
        className={`text-lg sm:text-xl font-semibold ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        Objetivos Atuais
      </h4>
      <div
        className={`p-4 rounded-lg ${
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
          Busco oportunidades como{" "}
          <strong>Desenvolvedor Frontend Júnior</strong> em equipes dinâmicas e
          colaborativas, onde eu possa contribuir com resultados impactantes e
          continuar crescendo como profissional.
        </p>
      </div>
    </div>
  );
};

export default CurrentGoals;
