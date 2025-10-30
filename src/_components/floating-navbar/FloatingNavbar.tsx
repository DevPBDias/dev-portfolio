"use client";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", icon: <Home size={22} />, label: "Home" },
  { id: "sobre", icon: <User size={22} />, label: "Sobre" },
  { id: "projetos", icon: <FolderGit2 size={22} />, label: "Projetos" },
  { id: "contato", icon: <Mail size={22} />, label: "Contato" },
];

const FloatingGlassNavbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let foundId = "home";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top - 120;
          if (top < window.innerHeight / 2) {
            foundId = sec.id;
          }
        }
      }
      setActive(foundId);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden lg:flex fixed top-1/2 left-9 -translate-y-1/2 z-50 flex-col items-center gap-7 px-4 py-6 rounded-3xl border shadow-xl backdrop-blur-xl transition-all duration-500 bg-blue-900/20 border-blue-200/20">
      {sections.map((section) => (
        <div key={section.id} className="relative group">
          <button
            onClick={() => navigate(section.id)}
            aria-current={active === section.id ? "page" : undefined}
            className={`cursor-pointer flex items-center justify-center p-2 rounded-full transition-all duration-300 text-blue-100
              hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-400
              ${
                active === section.id
                  ? "shadow-xl bg-blue-100/20 ring-2 ring-blue-400 scale-110"
                  : ""
              }
            `}
          >
            {section.icon}
          </button>
          <span className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs px-2 py-1 rounded-md backdrop-blur-md border bg-blue-900/60 border-blue-100/20 text-blue-100">
            {section.label}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default FloatingGlassNavbar;
