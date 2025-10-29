"use client";

import Greeting from "./Greeting";
import ProfessionalTitle from "./ProfessionalTitle";
import Description from "./Description";
import CtaButtons from "./CtaButtons";
import { OrbitingCirclesDemo } from "./OrbitTechs";

const MainContentHero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
        {/* Left Column - Main Content */}
        <div className="space-y-8 flex flex-col items-start justify-center">
          <Greeting />
          <ProfessionalTitle />
          <Description />
          <CtaButtons />
        </div>

        {/* Right Column - Visual Elements */}
        <OrbitingCirclesDemo />
      </div>
    </div>
  );
};

export default MainContentHero;
