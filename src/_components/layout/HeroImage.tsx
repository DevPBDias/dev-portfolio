"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

const HeroImage = () => {
  const { theme } = useTheme();
  const [fade, setFade] = useState(false);
  const [bgImage, setBgImage] = useState(() =>
    theme === "dark" ? "/images/night.png" : "/images/day.png"
  );

  useEffect(() => {
    if (
      bgImage !== (theme === "dark" ? "/images/night.png" : "/images/day.png")
    ) {
      setFade(true);
      const timeout = setTimeout(() => {
        setBgImage(theme === "dark" ? "/images/night.png" : "/images/day.png");
        setFade(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [theme, bgImage]);

  return (
    <div className="absolute inset-0">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    </div>
  );
};

export default HeroImage;
