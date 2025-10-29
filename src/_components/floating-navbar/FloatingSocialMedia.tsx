"use client";
import { useTheme } from "@/context/ThemeContext";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    id: "github",
    icon: <Github size={22} />,
    url: "https://github.com/DevPBDias",
  },
  {
    id: "linkedin",
    icon: <Linkedin size={22} />,
    url: "https://www.linkedin.com/in/devpaulobrunomdias",
  },
  {
    id: "behance",
    icon: (
      <Image src="/icons/behance.png" alt="Behance" width={28} height={28} />
    ),
    url: "https://behance.net/seuusuario",
  },
];

const FloatingGlassSocialBar = () => {
  const { theme } = useTheme();
  const isDay = theme === "light";

  return (
    <div
      className={`fixed top-6 right-6 z-50 flex flex-row items-center gap-2 
        px-3 py-2 rounded-3xl border backdrop-blur-md shadow-xl transition-all duration-500
        ${
          isDay
            ? "bg-white/40 border-blue-400/30 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            : "bg-blue-900/20 border-blue-200/20 shadow-[0_0_25px_rgba(173,216,230,0.2)]"
        }`}
    >
      {socialLinks.map((social) => (
        <div key={social.id} className="relative group">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center justify-center p-2 rounded-full transition-all duration-300 
              text-white hover:bg-blue-900/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            {social.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FloatingGlassSocialBar;
