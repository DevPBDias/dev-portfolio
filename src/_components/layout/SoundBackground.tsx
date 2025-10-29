"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const SoundBackground = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { theme } = useTheme();

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        await audio.pause();
        setIsPlaying(false);
      } else {
        if (audio.readyState < 2) {
          await new Promise<void>((resolve) => {
            audio.addEventListener("canplay", () => resolve(), { once: true });
          });
        }
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn("Erro ao controlar áudio:", err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleAudio}
        className={`${
          theme === "dark"
            ? "bg-white/90 text-black hover:bg-white/80"
            : "bg-white/30 text-white hover:bg-white/40"
        } cursor-pointer flex items-center gap-2 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/20 transition`}
        aria-label="Ativar som da natureza"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        <span className="text-sm font-medium hidden sm:block">
          {isPlaying ? "Som ativo" : "Som desligado"}
        </span>
      </button>

      <audio ref={audioRef} loop preload="auto">
        <source src="/sounds/sound-bg-small-river.wav" type="audio/wav" />
      </audio>
    </div>
  );
};

export default SoundBackground;
