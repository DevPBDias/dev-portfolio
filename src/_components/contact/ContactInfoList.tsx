"use client";
import { ExternalLink } from "lucide-react";

interface ContactInfoItem {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;
  label: string;
  value: string;
  href: string;
  color: string;
}

interface ContactInfoListProps {
  items: ContactInfoItem[];
  textColor: string;
}

export default function ContactInfoList({
  items,
  textColor,
}: ContactInfoListProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((info) => (
        <a
          key={info.label}
          href={info.href}
          target={info.href.startsWith("http") ? "_blank" : undefined}
          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`cursor-pointer flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-black/85 rounded-lg transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/30`}
        >
          <div className="p-2 sm:p-3 bg-black/50 rounded-lg border border-white/30">
            <info.icon size={18} className="sm:w-5 sm:h-5" color={info.color} />
          </div>
          <div className="flex-1">
            <p
              className={`text-xs sm:text-sm text-gray-50 drop-shadow-md font-medium`}
            >
              {info.label}
            </p>
            <p
              className={`${textColor} group-hover:text-blue-300 transition-colors font-semibold text-sm sm:text-base`}
            >
              {info.value}
            </p>
          </div>
          <ExternalLink
            size={14}
            className="sm:w-4 sm:h-4 text-gray-300 group-hover:text-white ml-auto transition-colors"
          />
        </a>
      ))}
    </div>
  );
}
