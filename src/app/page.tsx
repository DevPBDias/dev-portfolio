"use client";

import ThemeBackgrounds from "@/_components/main-page/ThemeBackgrounds";
import ThemeSelectorFixed from "@/_components/main-page/ThemeSelectorFixed";
import MainContent from "@/_components/main-page/MainContent";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <ThemeBackgrounds />
      <ThemeSelectorFixed />
      <MainContent />
    </main>
  );
}
