"use client";

import { Poppins } from "next/font/google";
import { useTheme } from "@/context/ThemeContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Description = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <p
      className={`text-lg leading-relaxed text-start ${poppins.className} ${
        isLight ? "text-slate-600" : "text-slate-300"
      }`}
    >
      Especializado em <strong>React</strong>, <strong>Next.js</strong> e{" "}
      <strong>UX/UI Design</strong>. Apaixonado por soluções digitais que fazem
      diferença na vida das pessoas.
    </p>
  );
};

export default Description;
