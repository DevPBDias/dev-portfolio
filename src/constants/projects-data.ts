import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  linkGithub: string;
  linkDemo: string;
  image: string | StaticImageData;
}

export const projects: Project[] = [
  {
    title: "Dashboard Analytics",
    description:
      "Painel interativo com gráficos em tempo real, filtros avançados e exportação de relatórios.",
    tags: ["Next.js", "Tailwind", "Charts"],
    linkGithub: "#",
    linkDemo: "#",
    image: "/images/projects/dashboard-analytics.png",
  },
  {
    title: "E-commerce Headless",
    description:
      "Loja headless com checkout otimizado, CMS integrado e buscas ultra rápidas.",
    tags: ["Next.js", "Stripe", "Prisma"],
    linkGithub: "#",
    linkDemo: "#",
    image: "/images/projects/e-commerce-headless.png",
  },
  {
    title: "Landing Page SaaS",
    description:
      "Landing de alta conversão com animações leves e A/B testing integrado.",
    tags: ["React", "A/B", "SEO"],
    linkGithub: "#",
    linkDemo: "#",
    image: "/images/projects/landing-page-saas.png",
  },
  {
    title: "App de Tarefas Colaborativo",
    description:
      "Quadros Kanban, comentários em tempo real e notificações com Web Push.",
    tags: ["Next.js", "Socket", "MongoDB"],
    linkGithub: "#",
    linkDemo: "#",
    image: "/images/projects/app-tarefas-colaborativo.png",
  },
  {
    title: "Blog Pessoal Performático",
    description:
      "MDX, otimização de imagens e dark mode com persistência de tema.",
    tags: ["Next.js", "MDX", "SEO"],
    linkGithub: "#",
    linkDemo: "#",
    image: "/images/projects/blog-pessoal-performatico.png",
  },
];
