"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const sections = [
  { id: "home", icon: <Home size={20} />, label: "Home" },
  { id: "sobre", icon: <User size={20} />, label: "Sobre" },
  { id: "projetos", icon: <FolderGit2 size={20} />, label: "Projetos" },
  { id: "contato", icon: <Mail size={20} />, label: "Contato" },
];

const socialLinks = [
  {
    id: "github",
    icon: <Github size={20} />,
    url: "https://github.com/DevPBDias",
  },
  {
    id: "linkedin",
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/devpaulobrunomdias",
  },
  {
    id: "behance",
    icon: (
      <Image src="/icons/behance.png" alt="Behance" width={22} height={22} />
    ),
    url: "https://www.behance.net/pbdias",
  },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDay = theme === "light";

  const toggle = () => setOpen((v) => !v);
  const navigate = (id: "home" | "sobre" | "projetos" | "contato") => {
    // Mobile/tablet: rolagem suave para a seção
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback para hash
      window.location.hash = `#${id}`;
    }
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        aria-label="Abrir menu"
        onClick={toggle}
        className={`fixed top-5 left-5 z-[60] p-2 rounded-xl border backdrop-blur-md transition ${
          isDay
            ? "bg-white/60 border-blue-400/30 text-blue-900"
            : "bg-blue-900/30 border-blue-200/20 text-blue-100"
        }`}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className={`absolute inset-0 ${
              isDay ? "bg-black/30" : "bg-black/50"
            }`}
            onClick={toggle}
          />
          <nav
            className={`absolute top-0 left-0 w-72 p-6 flex flex-col justify-start border-r backdrop-blur-xl transition-transform ${
              isDay
                ? "bg-white/70 border-blue-400/30"
                : "bg-blue-950/40 border-blue-200/20"
            }`}
          >
            <div className="space-y-6">
              <button aria-label="Fechar menu" onClick={toggle} className="p-2">
                <X size={20} />
              </button>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => navigate(s.id as any)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition ${
                        isDay
                          ? "hover:bg-blue-900/10 text-blue-900"
                          : "hover:bg-blue-100/10 text-blue-100"
                      }`}
                    >
                      {s.icon}
                      <span>{s.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition ${
                    isDay ? "hover:bg-blue-900/10" : "hover:bg-blue-100/10"
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
