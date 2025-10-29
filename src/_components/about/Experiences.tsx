"use client";

import { useTheme } from "@/context/ThemeContext";

const Experiences = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-4">
      <h4
        className={`text-lg sm:text-xl font-semibold ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        Experiências
      </h4>
      <div className="space-y-3">
        <div
          className={`p-4 rounded-lg ${
            isLight
              ? "bg-slate-50 border border-slate-200"
              : "bg-slate-800/30 border border-slate-700"
          }`}
        >
          <h5
            className={`font-semibold ${
              isLight ? "text-slate-800" : "text-slate-200"
            }`}
          >
            Projetos Freelance
          </h5>
          <p
            className={`text-sm ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Olé Mídia e Max Training
          </p>
          <p
            className={`text-sm mt-1 ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Design no Figma à implantação na Vercel
          </p>
        </div>
        <div
          className={`p-4 rounded-lg ${
            isLight
              ? "bg-slate-50 border border-slate-200"
              : "bg-slate-800/30 border border-slate-700"
          }`}
        >
          <h5
            className={`font-semibold ${
              isLight ? "text-slate-800" : "text-slate-200"
            }`}
          >
            FTB Platform
          </h5>
          <p
            className={`text-sm ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Projeto voluntário - Componentização e APIs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
