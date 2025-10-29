"use client";
import { useTheme } from "@/context/ThemeContext";

const ContactSection = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="min-h-[400px] flex items-center justify-center py-20 px-6">
      <div className="text-center space-y-6">
        <h2 className={`text-4xl font-bold drop-shadow-sm ${
          isLight ? "text-slate-900" : "text-slate-50"
        }`}>Contato</h2>

        <p className={isLight ? "text-slate-700" : "text-slate-200"}>
          Quer conversar, contratar ou colaborar comigo?
        </p>

        <p className={isLight ? "text-slate-800" : "text-slate-100"}>
          Vamos construir algo incrível juntos.
        </p>

        <a
          href="mailto:devpbdias@gmail.com"
          className={`underline underline-offset-4 font-semibold transition-all duration-300 ${
            isLight 
              ? "text-blue-700 hover:text-blue-900" 
              : "text-emerald-400 hover:text-emerald-300"
          }`}
        >
          devpbdias@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
