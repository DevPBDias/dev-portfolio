"use client";
import { motion } from "framer-motion";
import { Calendar, Eye, Github } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface FeaturedProject {
  id: number;
  title: string;
  longDescription: string;
  image: string | StaticImageData;
  technologies: string[];
  category: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardFeaturedProps {
  project: FeaturedProject;
  textColor: string;
  primaryButton: string;
  secondaryButton: string;
  variants?: any;
}

export default function ProjectCardFeatured({
  project,
  textColor,
  primaryButton,
  secondaryButton,
  variants,
}: ProjectCardFeaturedProps) {
  return (
    <motion.div
      className={`bg-black/75 hover:bg-black/85 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/50 transition-all duration-300 group`}
      variants={variants}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative overflow-hidden h-40 sm:h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <span className="px-2 sm:px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white border border-white/40 font-medium">
            {project.category}
          </span>
        </div>

        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1">
          <Calendar size={12} className="sm:w-[14px] sm:h-[14px] text-white" />
          <span className="text-xs sm:text-sm text-white font-medium">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h4
          className={`text-lg sm:text-xl font-bold ${textColor} mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors`}
        >
          {project.title}
        </h4>

        <p
          className={`text-gray-50 drop-shadow-md mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base`}
        >
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 bg-black/60 rounded-md text-xs text-gray-50 drop-shadow-md border border-white/40`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 sm:py-2 ${primaryButton} text-white rounded-lg transition-all duration-300 text-sm font-semibold group/btn focus:outline-none focus:ring-4 focus:ring-blue-300`}
            >
              <Eye
                size={14}
                className="sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform"
              />
              Demo ao Vivo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 sm:py-2 ${secondaryButton} text-white rounded-lg border border-white/40 transition-all duration-300 text-sm font-semibold group/btn focus:outline-none focus:ring-4 focus:ring-gray-400`}
            >
              <Github
                size={14}
                className="sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform"
              />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
