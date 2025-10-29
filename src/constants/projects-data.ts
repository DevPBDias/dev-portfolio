import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  type?: string;
  description: string;
  tags: string[];
  linkGithub: string;
  linkDemo?: string;
  image: string | StaticImageData;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Olé midia website V3",
    description:
      "Site da Olé Mídia em que apresenta a empresa e seus serviços. É possível enviar e-mails a empresa.",
    image: "/images/olemidia.jpg",
    linkDemo: "https://olemidia.com.br/",
    linkGithub: "https://github.com/DevPBDias/ole-midia-v3",
    tags: [
      "React",
      "TS",
      "Styled-components",
      "Framer-motion",
      "Git",
      "EmailJS",
      "Vercel",
    ],
  },
  {
    id: 2,
    title: "Max Trainning website",
    type: "Freelancer",
    description:
      "Site de vendas responsivo do Max Training em que apresenta depoimentos e seus serviços.",
    image: "/images/max-training.png",
    linkDemo: "https://max-training-lp.vercel.app/maxtrainingperformance",
    linkGithub: "https://github.com/DevPBDias/Max-Training-LP",
    tags: ["React", "Vite", "TS", "Styled-components", "Git", "Vercel"],
  },
  {
    id: 3,
    title: "FTB Platform - FullStack",
    description:
      "A FTB Platform é uma solução completa para gerenciamento e divulgação do basquete no estado do Tocantins.",
    image: "/images/ftb.png",
    linkGithub: "https://github.com/DevPBDias/ftb-platform",
    linkDemo: "https://ftb-platform.vercel.app",
    tags: [
      "React",
      "NextJS",
      "Tailwind CSS",
      "TS",
      "Shadcn",
      "Firebase Auth&DB",
      "React-hook-form",
    ],
  },
  {
    id: 4,
    title: "TrybeTunes Reworked",
    description:
      "Foi desenvolvida uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
    image: "/images/trybetunes.jpg",
    linkGithub: "https://github.com/DevPBDias/trybetunes-reworked",
    linkDemo: "https://trybetunes-reworked.vercel.app",
    tags: ["React", "NextJS", "Sass", "TS", "Git"],
  },
  {
    id: 5,
    title: "App de trailers - FullStack",
    description:
      "Projeto pessoal de um mockup de UX/UI Design feito por mim. Foi desenvolvido um app mobile para navegar por filmes, series e animes",
    image: "/images/trailers-app.png",
    linkGithub: "https://github.com/DevPBDias/app-trailers",
    tags: [
      "React",
      "TS",
      "Styled-components",
      "Nodejs",
      "MongoDb",
      "Git",
      "Vercel",
    ],
  },
];
