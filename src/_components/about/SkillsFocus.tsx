"use client";

import { useTheme } from "@/context/ThemeContext";

const SkillsFocus = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const skills = [
    "Arquitetura Frontend",
    "Responsividade",
    "Cloud computing",
    "UI/UX",
  ];

  return (
    <div className="space-y-4 text-left">
      <h4
        className={`text-lg sm:text-xl font-semibold ${
          isLight ? "text-slate-800" : "text-slate-200"
        }`}
      >
        Foco de Aprendizado
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isLight
                ? "bg-blue-100 text-blue-800 border border-blue-200"
                : "bg-emerald-900/30 text-emerald-300 border border-emerald-700"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsFocus;
