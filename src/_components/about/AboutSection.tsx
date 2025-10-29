"use client";
import { useTheme } from "@/context/ThemeContext";
import TitleSection from "../layout/TitleSection";
import Intro from "@about/Intro";
import CurrentGoals from "@about/CurrentGoals";
import Education from "@about/Education";
import Experiences from "@about/Experiences";
import SkillsFocus from "@about/SkillsFocus";

const AboutSection = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`min-h-[600px] w-full flex items-center justify-center transition-colors duration-500 ${
        isLight ? "text-slate-800" : "text-slate-100"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <TitleSection titleName="Sobre mim" />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <Intro />
            <CurrentGoals />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Education />
            <Experiences />
            <SkillsFocus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
