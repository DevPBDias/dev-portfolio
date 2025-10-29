"use client";

import { Poppins } from "next/font/google";
import { useTheme } from "@/context/ThemeContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const ProfessionalTitle = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-4">
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${
          poppins.className
        } ${isLight ? "text-slate-700" : "text-slate-200"}`}
      >
        Desenvolvedor Frontend
      </h2>
      <div
        className={`w-16 h-1 rounded-full ${
          isLight ? "bg-blue-600" : "bg-emerald-500"
        }`}
      ></div>
    </div>
  );
};

export default ProfessionalTitle;
