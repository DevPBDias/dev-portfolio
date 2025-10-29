"use client";

import { useTheme } from "@/context/ThemeContext";

const Education = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-4 text-left">
      <h4
        className={`text-lg sm:text-xl font-semibold ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        Formação
      </h4>
      <div className="space-y-3">
        <div
          className={`p-4 rounded-lg flex flex-col items-start justify-start gap-2 ${
            isLight
              ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
              : "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600"
          }`}
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <h5 className="font-semibold">Trybe</h5>
            <p className="text-sm opacity-80">
              - Desenvolvimento Web Full Stack - 04/2023
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <h5 className="font-semibold">Coursera</h5>
            <p className="text-sm opacity-80">- UX Google Design - 03/2024</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <h5 className="font-semibold">Escola da Nuvem</h5>
            <p className="text-sm opacity-80">
              - Cloud Computing & WS Cloud Practitioner - 06/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
