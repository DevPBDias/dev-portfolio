"use client";

import { Roboto_Slab } from "next/font/google";
import { useTheme } from "@/context/ThemeContext";

const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["700"] });

const Greeting = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-2 flex flex-col items-start justify-center">
      <p
        className={`text-sm font-medium uppercase tracking-wider ${
          isLight ? "text-blue-600" : "text-emerald-400"
        }`}
      >
        Olá, eu sou
      </p>
      <h1
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
          robotoSlab.className
        } ${isLight ? "text-slate-900" : "text-slate-50"}`}
      >
        Paulo Bruno
      </h1>
    </div>
  );
};

export default Greeting;
