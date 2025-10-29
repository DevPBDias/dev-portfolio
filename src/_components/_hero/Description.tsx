"use client";

import { Poppins } from "next/font/google";
import { useTheme } from "@/context/ThemeContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Description = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <p
      className={`text-lg sm:text-xl leading-relaxed text-start ${
        poppins.className
      } ${isLight ? "text-slate-600" : "text-slate-300"}`}
    >
      Especializado em <strong>React</strong> e <strong>Next.js</strong>,
      transformo ideias em experiências digitais excepcionais. Transição de
      carreira da engenharia civil para o desenvolvimento web.
    </p>
  );
};

export default Description;
