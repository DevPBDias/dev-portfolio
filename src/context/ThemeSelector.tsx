"use client";

import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trees, Cloud, Building2 } from "lucide-react";

export type ThemeType = "forest-moon" | "anime-sky" | "cyberpunk-city";

interface ThemeSelectorProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export default function ThemeSelector({
  currentTheme,
  onThemeChange,
}: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const themes = [
    { id: "forest-moon", icon: Trees, color: "#22c55e", label: "Forest" },
    { id: "anime-sky", icon: Cloud, color: "#60a5fa", label: "Anime" },
    { id: "cyberpunk-city", icon: Building2, color: "#ff6400", label: "Cyber" },
  ];

  const currentThemeObj =
    themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <div className="relative z-50">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 backdrop-blur-md border-2 border-white/40 shadow-2xl hover:bg-black/80 transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label="Select theme"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {React.createElement(currentThemeObj.icon, {
            size: 18,
            color: currentThemeObj.color,
            strokeWidth: 2.5,
          })}
        </motion.div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 right-12 sm:right-14 bg-black/70 backdrop-blur-md rounded-xl p-2 shadow-2xl border-2 border-white/40 flex gap-2 pointer-events-auto"
        >
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                onThemeChange(theme.id as ThemeType);
                setIsOpen(false);
              }}
              className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition-all duration-200 min-w-[60px] sm:min-w-[70px] focus:outline-none focus:ring-4 focus:ring-white/50 ${
                currentTheme === theme.id
                  ? "bg-white/20 shadow-inner border border-white/40"
                  : "hover:bg-white/10 border border-transparent"
              }`}
            >
              {React.createElement(theme.icon, {
                size: 16,
                color: theme.color,
                strokeWidth: 2.5,
              })}
              <span className="mt-1 text-xs font-semibold text-white">
                {theme.label}
              </span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
