"use client";
import { motion } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
}

interface StatsCardProps {
  stats: StatItem[];
  textColor: string;
  variants?: any;
}

export default function StatsCard({
  stats,
  textColor,
  variants,
}: StatsCardProps) {
  return (
    <motion.div
      className={`bg-black/75 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-white/50`}
      variants={variants}
    >
      <h3
        className={`text-2xl sm:text-3xl font-bold ${textColor} text-center mb-6 sm:mb-8`}
      >
        Em Números
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="text-center"
            variants={variants}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className={`text-2xl sm:text-3xl md:text-4xl font-bold ${textColor} mb-1 sm:mb-2`}
            >
              {stat.number}
            </div>
            <div
              className={`text-xs sm:text-sm md:text-base text-gray-50 drop-shadow-md`}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
