"use client";
import { socialLinks } from "@/constants/contact-data";
import { ExternalLink } from "lucide-react";

interface SocialLinksGridProps {
  textColor: string;
}

export default function SocialLinksGrid({ textColor }: SocialLinksGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:bg-black/85 rounded-lg transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/30`}
        >
          <div className="p-2 bg-black/50 rounded-lg group-hover:bg-black/60 transition-colors border border-white/30">
            <social.icon
              size={18}
              className="sm:w-5 sm:h-5"
              color={social.color}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className={`font-semibold ${textColor} group-hover:text-blue-300 transition-colors text-sm sm:text-base`}
            >
              {social.name}
            </p>
            <p
              className={`text-xs sm:text-sm text-gray-50 drop-shadow-md truncate`}
            >
              {social.username}
            </p>
          </div>
          <ExternalLink
            size={12}
            className="sm:w-[14px] sm:h-[14px] text-gray-300 group-hover:text-white transition-colors"
          />
        </a>
      ))}
    </div>
  );
}
