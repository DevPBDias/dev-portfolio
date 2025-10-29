"use client";

import { useSection } from "@/context/SectionContext";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { Download } from "lucide-react";

const CtaButtons = () => {
  const { setActiveSection } = useSection();
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => setActiveSection("projetos")}
        className={`cursor-pointer px-4 py-2 rounded-xl min-w-36 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
          isLight
            ? "bg-blue-700 text-white hover:bg-blue-800"
            : "bg-emerald-500 text-slate-900 hover:bg-emerald-600"
        }`}
      >
        Ver Projetos
      </button>
      <Link
        href="/cv/PauloBruno_CV.pdf"
        download="PauloBruno_CV.pdf"
        className={`flex items-center justify-center gap-2 min-w-36 cursor-pointer px-4 py-2 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ${
          isLight
            ? "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
            : "border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900"
        }`}
      >
        <Download
          size={20}
          className="group-hover:translate-y-[1px] transition-transform"
        />
        CV
      </Link>
    </div>
  );
};

export default CtaButtons;
