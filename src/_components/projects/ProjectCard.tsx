"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Tag } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardHover: string;
  borderColor: string;
  tagBg: string;
  tagBorder: string;
  secondaryButton: string;
  variants?: any;
}

export default function ProjectCard({
  project,
  textColor,
  subtextColor,
  cardBg,
  cardHover,
  borderColor,
  tagBg,
  tagBorder,
  secondaryButton,
  variants,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`${cardBg} ${cardHover} backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${borderColor} transition-all duration-300 group`}
      variants={variants}
      whileHover={{ scale: 1.03, y: -3 }}
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <Tag size={16} className="sm:w-[18px] sm:h-[18px] text-blue-400" />
          <span className={`text-xs sm:text-sm ${subtextColor} font-medium`}>
            {project.category}
          </span>
        </div>
        <span className={`text-xs sm:text-sm ${subtextColor} font-medium`}>
          {project.year}
        </span>
      </div>

      <h4
        className={`text-base sm:text-lg font-bold ${textColor} mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors`}
      >
        {project.title}
      </h4>

      <p
        className={`${subtextColor} mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className={`px-2 py-1 ${tagBg} rounded text-xs ${subtextColor} border ${tagBorder}`}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className={`px-2 py-1 text-xs ${subtextColor}`}>
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer p-2 ${secondaryButton} rounded-lg transition-all duration-300 group/link focus:outline-none focus:ring-4 focus:ring-gray-400`}
          >
            <ExternalLink
              size={14}
              className="sm:w-4 sm:h-4 text-white group-hover/link:scale-110 transition-transform"
            />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer p-2 ${secondaryButton} rounded-lg transition-all duration-300 group/link focus:outline-none focus:ring-4 focus:ring-gray-400`}
          >
            <Github
              size={14}
              className="sm:w-4 sm:h-4 text-white group-hover/link:scale-110 transition-transform"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
}
