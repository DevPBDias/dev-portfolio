import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string | StaticImageData;
  technologies: string[];
  category: string;
  year: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Olé midia website V3",
    description:
      "Site da Olé Mídia em que apresenta a empresa e seus serviços. É possível enviar e-mails a empresa.",
    longDescription:
      "Site da Olé Mídia com apresentação institucional, serviços e integração de envio de e-mails pela aplicação.",
    image: "/images/olemidia.jpg",
    technologies: [
      "React",
      "TS",
      "Styled-components",
      "Framer-motion",
      "Git",
      "EmailJS",
      "Vercel",
    ],
    category: "Projeto",
    year: "2024",
    githubUrl: "https://github.com/DevPBDias/ole-midia-v3",
    liveUrl: "https://olemidia.com.br/",
    featured: true,
  },
  {
    id: 2,
    title: "Max Trainning website",
    description:
      "Site de vendas responsivo do Max Training em que apresenta depoimentos e seus serviços.",
    longDescription:
      "Landing page responsiva para o Max Training, destacando serviços, depoimentos e conversão.",
    image: "/images/max-training.png",
    technologies: ["React", "Vite", "TS", "Styled-components", "Git", "Vercel"],
    category: "Freelancer",
    year: "2024",
    githubUrl: "https://github.com/DevPBDias/Max-Training-LP",
    liveUrl: "https://max-training-lp.vercel.app/maxtrainingperformance",
    featured: false,
  },
  {
    id: 3,
    title: "FTB Platform - FullStack",
    description:
      "A FTB Platform é uma solução completa para gerenciamento e divulgação do basquete no estado do Tocantins.",
    longDescription:
      "Plataforma full stack para gerenciamento e divulgação do basquete no Tocantins, com autenticação e painel administrativo.",
    image: "/images/ftb.png",
    technologies: [
      "React",
      "NextJS",
      "Tailwind CSS",
      "TS",
      "Shadcn",
      "Firebase Auth&DB",
      "React-hook-form",
    ],
    category: "Full Stack",
    year: "2024",
    githubUrl: "https://github.com/DevPBDias/ftb-platform",
    liveUrl: "https://ftb-platform.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "TrybeTunes Reworked",
    description:
      "Foi desenvolvida uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
    longDescription:
      "Aplicação para reprodução de músicas com favoritos e edição de perfil, reescrita com melhorias de UX e código.",
    image: "/images/trybetunes.jpg",
    technologies: ["React", "NextJS", "Sass", "TS", "Git"],
    category: "Web App",
    year: "2023",
    githubUrl: "https://github.com/DevPBDias/trybetunes-reworked",
    liveUrl: "https://trybetunes-reworked.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "App de trailers - FullStack",
    description:
      "Projeto pessoal de um mockup de UX/UI Design feito por mim. Foi desenvolvido um app mobile para navegar por filmes, series e animes",
    longDescription:
      "Aplicativo mobile para explorar trailers de filmes, séries e animes, baseado em mockup próprio de UX/UI.",
    image: "/images/trailers-app.png",
    technologies: [
      "React",
      "TS",
      "Styled-components",
      "Nodejs",
      "MongoDb",
      "Git",
      "Vercel",
    ],
    category: "Full Stack",
    year: "2023",
    githubUrl: "https://github.com/DevPBDias/app-trailers",
    featured: false,
  },
];
