"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface SocialLinksProps {
  className?: string;
  variants?: any;
}

export function SocialLinks({ className = "", variants }: SocialLinksProps) {
  return (
    <motion.div
      className={`flex justify-center gap-4 sm:gap-6 ${className}`}
      variants={variants}
    >
      <Link
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer p-3 sm:p-4 bg-black/80 hover:bg-black/90 rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label="GitHub"
      >
        <Github
          size={18}
          className="sm:w-5 sm:h-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform"
        />
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer p-3 sm:p-4 bg-black/80 hover:bg-black/90 rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label="LinkedIn"
      >
        <Linkedin
          size={18}
          className="sm:w-5 sm:h-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform"
        />
      </Link>
      <Link
        href="mailto:paulo@example.com"
        className="cursor-pointer p-3 sm:p-4 bg-black/80 hover:bg-black/90 rounded-full border-2 border-white/50 backdrop-blur-sm transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label="Email"
      >
        <Image
          src="/icons/behance.png"
          alt="Behance icon"
          width={22}
          height={22}
          className="drop-shadow-lg group-hover:scale-110 transition-transform"
        />
      </Link>
    </motion.div>
  );
}
