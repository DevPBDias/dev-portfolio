"use client";
import { useTheme } from "@/context/ThemeContext";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "home", icon: <Home size={22} />, label: "Home" },
  { id: "sobre", icon: <User size={22} />, label: "Sobre" },
  { id: "projetos", icon: <FolderGit2 size={22} />, label: "Projetos" },
  { id: "contato", icon: <Mail size={22} />, label: "Contato" },
];

const FloatingGlassNavbar = () => {
  const { theme } = useTheme();
  const isDay = theme === "light";
  const navigate = (id: "home" | "sobre" | "projetos" | "contato") => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#${id}`;
    }
  };

  return (
    <nav
      className={`hidden lg:flex fixed top-1/2 left-24 -translate-y-1/2 z-50 flex-col items-center gap-6 
      px-3 py-5 rounded-3xl border shadow-xl backdrop-blur-xl transition-all duration-500
      ${
        isDay
          ? "bg-white/40 border-blue-400/30 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          : "bg-blue-900/20 border-blue-200/20 shadow-[0_0_25px_rgba(173,216,230,0.2)]"
      }`}
    >
      <ThemeToggle styles="hidden lg:block" />

      {sections.map((section) => (
        <div key={section.id} className="relative group">
          <button
            onClick={() => navigate(section.id as any)}
            className={`cursor-pointer flex items-center justify-center p-2 rounded-full transition-all duration-300
            ${
              isDay
                ? "text-blue-900 hover:bg-blue-900/10"
                : "text-blue-100 hover:bg-blue-100/10"
            }
            hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]`}
          >
            {section.icon}
          </button>

          <span
            className={`absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300
            text-sm px-2 py-1 rounded-md backdrop-blur-md border 
            ${
              isDay
                ? "bg-white border-white/30 text-blue-900"
                : "bg-blue-900/60 border-blue-100/20 text-blue-100"
            }`}
          >
            {section.label}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default FloatingGlassNavbar;
