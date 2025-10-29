"use client";

import { useTheme } from "@/context/ThemeContext";

const Experiences = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-4">
      <h4
        className={`text-lg text-left sm:text-xl font-semibold ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        Experiências
      </h4>
      <div className="space-y-3 text-left">
        <div
          className={`p-4 rounded-lg flex flex-col items-start justify-start gap-2 ${
            isLight
              ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
              : "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600"
          }`}
        >
          <div className="flex flex-row items-center gap-2 ">
            <h5
              className={`font-semibold ${
                isLight ? "text-slate-800" : "text-slate-200"
              }`}
            >
              Projetos Trybe
            </h5>
            <p
              className={`text-sm ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              - Front-end, Back-end e Full-stack
            </p>
          </div>
          <p
            className={`text-sm mt-1 ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Desenvolvimento de projetos individuais e em grupo simulando a vida
            profissional, com diversas stacks e com metodologia ágil.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg flex flex-col items-start justify-start gap-2 ${
            isLight
              ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
              : "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600"
          }`}
        >
          <div className="flex flex-row items-center gap-2 ">
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
              - Olé Mídia e Max Training
            </p>
          </div>
          <p
            className={`text-sm mt-1 ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Desenvolvimento de landing pages - do design no Figma à implantação
            na Vercel
          </p>
        </div>
        <div
          className={`p-4 rounded-lg flex flex-col items-start justify-start gap-2 ${
            isLight
              ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
              : "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600"
          }`}
        >
          <div className="flex flex-col items-start gap-2 ">
            <h5
              className={`font-semibold ${
                isLight ? "text-slate-800" : "text-slate-200"
              }`}
            >
              Projeto voluntário
            </h5>
            <p
              className={`text-sm ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              <strong>FTB Platform</strong> - criação de um site instuticional
              com dashboard (mini-CMS)
            </p>
            <p
              className={`text-sm ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              <strong>Magick Tracker</strong> - participação em um projeto de
              colaborativo, fiquei responsavel pela melhoria do front-end e
              troca de design system da aplicação
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
