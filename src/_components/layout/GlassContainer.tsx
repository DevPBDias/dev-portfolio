"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const GlassContainer = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className={`relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl w-full max-w-7xl mx-auto text-center
        border backdrop-blur-xl transition-all duration-700
        ${
          isLight
            ? "bg-white/60 border-blue-600/40 text-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.1)]"
            : "bg-slate-900/70 border-blue-300/50 text-slate-100 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        }
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassContainer;
