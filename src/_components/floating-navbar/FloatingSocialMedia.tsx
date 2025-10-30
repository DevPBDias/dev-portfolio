"use client";
import { SocialLink, socialLinks } from "@/constants/contact-data";

const FloatingGlassSocialBar = () => {
  return (
    <div
      className="fixed top-5 right-5 z-50 flex flex-row items-center gap-2 
        px-3 py-2 rounded-3xl border backdrop-blur-md shadow-xl transition-all duration-500
        bg-blue-900/20 border-blue-200/20 shadow-[0_0_25px_rgba(173,216,230,0.2)]"
    >
      {socialLinks.map((social: SocialLink) => (
        <div key={social.name} className="relative group">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center justify-center p-2 rounded-full transition-all duration-300 
              text-white hover:bg-blue-900/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            {typeof social.icon === "function" ? (
              <social.icon
                size={18}
                className="sm:w-5 sm:h-5"
                color={social.color}
              />
            ) : (
              social.icon
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FloatingGlassSocialBar;
