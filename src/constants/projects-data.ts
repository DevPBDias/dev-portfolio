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
      "Typescript",
      "Styled-components",
      "Framer-motion",
      "Git",
      "EmailJS",
      "Vercel",
    ],
    category: "Freelancer",
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
    technologies: [
      "React",
      "Vite",
      "Typescript",
      "Styled-components",
      "Git",
      "Vercel",
    ],
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
      "Typescript",
      "Shadcn",
      "Firebase Auth&DB",
      "React-hook-form",
      "Figma",
      "Vercel",
    ],
    category: "Freelancer",
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
    technologies: [
      "React",
      "NextJS",
      "Sass",
      "Typescript",
      "Git",
      "Vercel",
      "Figma",
    ],
    category: "Pessoal",
    year: "2023",
    githubUrl: "https://github.com/DevPBDias/trybetunes-reworked",
    liveUrl: "https://trybetunes-reworked.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "App de trailers",
    description:
      "Projeto pessoal de um mockup de UX/UI Design feito por mim. Foi desenvolvido um app mobile para navegar por filmes, series e animes",
    longDescription:
      "Aplicativo mobile para explorar trailers de filmes, séries e animes, baseado em mockup próprio de UX/UI.",
    image: "/images/trailers-app.png",
    technologies: [
      "React",
      "Typescript",
      "Styled-components",
      "Nodejs",
      "MongoDb",
      "Git",
      "Vercel",
    ],
    category: "Pessoal",
    year: "2023",
    githubUrl: "https://github.com/DevPBDias/app-trailers",
    featured: false,
  },
  {
    id: 6,
    title: "Nelore INDI Ouro App",
    description:
      "Aplicativo desenvolvido para processar e exportar planilhas com gerenciamento de gado nelore feita para ser usada ser internet no ambiente de curral",
    longDescription:
      "Aplicativo desenvolvido para processar e exportar planilhas com gerenciamento de gado nelore feita para ser usada ser internet no ambiente de curral",
    image: "/images/nelore-app.png",
    technologies: [
      "React",
      "NextJS",
      "Next-PWA",
      "Shadcn/ui",
      "Typescript",
      "Tailwind css",
      "SQLite",
      "Framer-motion",
      "Git/Github",
      "Vercel",
    ],
    category: "Freelancer",
    year: "2025",
    githubUrl: "https://github.com/DevPBDias/rico-ouro-app",
    liveUrl: "https://rico-ouro-app-i3oc.vercel.app",
    featured: true,
  },
  {
    id: 7,
    title: "AllInOne Web App",
    description:
      "Projeto pessoal para colocar em prática os aprendizados de angular. O projeto é um Todo-List com um pomodoro de 25mins",
    longDescription:
      "Projeto pessoal para colocar em prática os aprendizados de angular. O projeto é um Todo-List com um pomodoro de 25mins",
    image: "/images/angular-todo-pomodoro.png",
    technologies: ["Angular", "Typescript", "Tailwind css", "Git", "Vercel"],
    category: "Pessoal",
    year: "2025",
    githubUrl: "https://github.com/DevPBDias/angular-modern-todo-list",
    liveUrl: "https://angular-modern-todo-list.vercel.app",
    featured: true,
  },
];
