"use client";
import ThemeSelector from "@/context/ThemeSelector";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSelectorFixed() {
  const { currentTheme, changeTheme } = useTheme();
  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50">
      <ThemeSelector currentTheme={currentTheme} onThemeChange={changeTheme} />
    </div>
  );
}
