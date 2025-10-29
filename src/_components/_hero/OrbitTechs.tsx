import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

export function OrbitingCirclesDemo() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles
        iconSize={40}
        orbitColor={isLight ? "blue" : "emerald"}
        orbitOpacity={isLight ? 0.4 : 0.3}
      >
        <TechIcon src="/icons/reactjs.png" alt="React" size={40} />
        <TechIcon src="/icons/Next.js.png" alt="Next.js" size={40} />
        <TechIcon src="/icons/Tailwind CSS.png" alt="Tailwind CSS" size={40} />
        <TechIcon src="/icons/TypeScript.png" alt="TypeScript" size={40} />
        <TechIcon src="/icons/Html 5.png" alt="HTML5" size={40} />
        <TechIcon src="/icons/CSS3 1.png" alt="CSS3" size={40} />
      </OrbitingCircles>

      <OrbitingCircles
        iconSize={30}
        radius={100}
        reverse
        speed={2}
        orbitColor={isLight ? "indigo" : "slate"}
        orbitOpacity={isLight ? 0.35 : 0.25}
      >
        <TechIcon src="/icons/Figma.png" alt="Figma" size={30} />
        <TechIcon src="/icons/github.png" alt="GitHub" size={30} />
        <TechIcon src="/icons/Node.js.png" alt="Node.js" size={30} />
        <TechIcon src="/icons/MongoDB.png" alt="MongoDB" size={30} />
        <TechIcon src="/icons/trello.png" alt="Trello" size={30} />
        <TechIcon src="/icons/Express.png" alt="Express.js" size={30} />
        <TechIcon src="/icons/JavaScript.png" alt="JavaScript" size={30} />
      </OrbitingCircles>
    </div>
  );
}

const TechIcon = ({
  src,
  alt,
  size = 40,
}: {
  src: string;
  alt: string;
  size?: number;
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain filter drop-shadow-sm hover:drop-shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          filter: "brightness(1.1) contrast(1.1)",
        }}
      />
    </div>
  );
};
