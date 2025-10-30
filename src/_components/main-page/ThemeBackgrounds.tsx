"use client";
import CyberpunkCitySky from "@/themes/CyberCity";
import ForestMoonSky from "@/themes/ForestMoon";
import AnimeSky from "@/themes/SeaSky";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeBackgrounds() {
  const { currentTheme: theme, transitioning } = useTheme();
  return (
    <>
      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "forest-moon" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <ForestMoonSky />
      </div>

      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "anime-sky" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <AnimeSky />
      </div>

      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "cyberpunk-city" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <CyberpunkCitySky />
      </div>
    </>
  );
}
