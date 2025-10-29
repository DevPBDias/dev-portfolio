"use client";

import { useTheme } from "@/context/ThemeContext";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

const ContactSocials = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="space-y-2 ml-auto">
      <p className={`${isLight ? "text-slate-600" : "text-slate-300"} text-sm`}>
        Ou me encontre nas redes:
      </p>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/DevPBDias"
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer p-2 rounded-full transition ${
            isLight ? "hover:bg-blue-900/10" : "hover:bg-blue-100/10"
          }`}
          aria-label="GitHub"
        >
          <Github size={22} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/devpaulobrunomdias"
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer p-2 rounded-full transition ${
            isLight ? "hover:bg-blue-900/10" : "hover:bg-blue-100/10"
          }`}
          aria-label="LinkedIn"
        >
          <Linkedin size={22} color="white" />
        </a>
        <a
          href="https://www.behance.net/pbdias"
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer p-2 rounded-full transition ${
            isLight ? "hover:bg-blue-900/10" : "hover:bg-blue-100/10"
          }`}
          aria-label="Behance"
        >
          <Image
            src="/icons/behance.png"
            alt="Behance"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactSocials;
