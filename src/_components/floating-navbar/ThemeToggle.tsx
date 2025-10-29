"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = ({ styles }: { styles?: string | undefined }) => {
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className={`${styles} cursor-pointer p-2 rounded-full transition-all duration-300 hover:scale-110 
          ${isLight ? "text-yellow-400" : "text-blue-400"}`}
      title={isLight ? "Modo Noite" : "Modo Dia"}
    >
      {isLight ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
};

export default ThemeToggle;
