"use client";
import { skills } from "@/constants/techs-data";
import { motion } from "framer-motion";

interface SkillsGridProps {
  textColor: string;
  variants?: any;
}

export default function SkillsGrid({ textColor, variants }: SkillsGridProps) {
  return (
    <motion.div className="mb-12 sm:mb-16" variants={variants}>
      <h3
        className={`text-2xl sm:text-3xl font-bold ${textColor} text-center mb-8 sm:mb-12`}
      >
        Habilidades & Tecnologias
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            className={`bg-black/75 hover:bg-black/85 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-white/50 transition-all duration-300 group`}
            variants={variants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <skill.icon
                className={`mr-2 sm:mr-3 group-hover:scale-110 transition-transform`}
                size={20}
                color={skill.color}
              />
              <h4 className={`text-base sm:text-lg font-semibold ${textColor}`}>
                {skill.category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 sm:px-3 py-1 bg-black/60 rounded-full text-xs sm:text-sm text-gray-50 drop-shadow-md border border-white/40`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
