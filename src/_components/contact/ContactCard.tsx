"use client";

import { useTheme } from "@/context/ThemeContext";
import { Mail } from "lucide-react";

const ContactCard = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${
        isLight
          ? "bg-white/70 border-slate-200 shadow-sm"
          : "bg-slate-900/40 border-slate-800 shadow-black/20"
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-2xl ${
          isLight ? "bg-blue-300/30" : "bg-emerald-400/10"
        }`}
      />
      <div className="space-y-4">
        <h3
          className={`${
            isLight ? "text-slate-900" : "text-slate-50"
          } text-xl font-semibold`}
        >
          Vamos construir algo incrível?
        </h3>
        <p
          className={`${isLight ? "text-slate-700" : "text-slate-300"} text-sm`}
        >
          Se você tem um projeto em mente ou quer trocar uma ideia, me envie um
          email. Respondo rapidamente.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="mailto:devpbdias@gmail.com"
            className={`cursor-pointer inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors gap-2 ${
              isLight
                ? "bg-blue-700 text-white hover:bg-blue-800"
                : "bg-emerald-500 text-slate-900 hover:bg-emerald-600"
            }`}
          >
            <Mail size={18} />
            Falar por email
          </a>
          <a
            href="/cv/PauloBruno_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              isLight
                ? "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                : "border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900"
            }`}
          >
            Ver CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
