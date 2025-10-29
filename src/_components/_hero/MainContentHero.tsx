import Greeting from "./Greeting";
import ProfessionalTitle from "./ProfessionalTitle";
import Description from "./Description";
import CtaButtons from "./CtaButtons";
import { OrbitingCirclesDemo } from "./OrbitTechs";
import GlassContainer from "../layout/GlassContainer";

const MainContentHero = () => {
  return (
    <GlassContainer>
      <div
        id="home"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]"
      >
        <div className="space-y-8 flex flex-col items-start justify-center">
          <Greeting />
          <ProfessionalTitle />
          <Description />
          <CtaButtons />
        </div>
        <OrbitingCirclesDemo />
      </div>
    </GlassContainer>
  );
};

export default MainContentHero;
