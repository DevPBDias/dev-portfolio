import { Code, LucideToolCase, Palette, Rocket } from "lucide-react";

type Skill = {
  category: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  technologies: string[];
  color: string;
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: Code,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "#3b82f6",
  },
  {
    category: "Backend",
    icon: Rocket,
    technologies: [
      "Node.js",
      "MySQL",
      "MongoDB",
      "Express.js",
      "Sequelize",
      "Mongoose",
    ],
    color: "#10b981",
  },
  {
    category: "Design",
    icon: Palette,
    technologies: [
      "Figma",
      "Wireframes",
      "UI/UX",
      "Prototyping",
      "Acessibility",
    ],
    color: "#f59e0b",
  },
  {
    category: "Ferramentas",
    icon: LucideToolCase,
    technologies: [
      "Git",
      "AWS",
      "Vercel",
      "VS Code/Cursor",
      "Swagger",
      "Insomnia",
      "Trello/Kanban",
    ],
    color: "#ef4444",
  },
];

export const stats = [
  { number: "15+", label: "Projetos Concluídos" },
  { number: "1+", label: "Anos de Experiência" },
  { number: "3+", label: "Clientes Satisfeitos" },
  { number: "∞", label: "Copos de água" },
];
