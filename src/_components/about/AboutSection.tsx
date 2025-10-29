import TitleSection from "../layout/TitleSection";
import Intro from "@about/Intro";
import Education from "@about/Education";
import Experiences from "@about/Experiences";
import SkillsFocus from "@about/SkillsFocus";
import GlassContainer from "../layout/GlassContainer";

const AboutSection = () => {
  return (
    <GlassContainer>
      <div
        id="sobre"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <TitleSection titleName="Sobre mim" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Intro />
            <SkillsFocus />
          </div>

          <div className="space-y-6">
            <Education />
            <Experiences />
          </div>
        </div>
      </div>
    </GlassContainer>
  );
};

export default AboutSection;
