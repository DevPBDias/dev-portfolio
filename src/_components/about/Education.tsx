"use client";

import { useTheme } from "@/context/ThemeContext";

const Education = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-4">
      <h4
        className={`text-lg sm:text-xl font-semibold ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        Formação
      </h4>
      <div className="space-y-3">
        <div
          className={`p-4 rounded-lg border-l-4 ${
            isLight
              ? "bg-blue-50 border-blue-500 text-slate-700"
              : "bg-slate-800/50 border-emerald-500 text-slate-300"
          }`}
        >
          <h5 className="font-semibold">Desenvolvimento Web Full Stack</h5>
          <p className="text-sm opacity-80">Trybe</p>
        </div>
        <div
          className={`p-4 rounded-lg border-l-4 ${
            isLight
              ? "bg-blue-50 border-blue-500 text-slate-700"
              : "bg-slate-800/50 border-emerald-500 text-slate-300"
          }`}
        >
          <h5 className="font-semibold">Cloud Computing</h5>
          <p className="text-sm opacity-80">
            Escola da Nuvem - AWS Cloud Practitioner
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
