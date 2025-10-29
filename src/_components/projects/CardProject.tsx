import { Project } from "@/constants/projects-data";
import { useTheme } from "@/context/ThemeContext";
import { EyeIcon, GithubIcon } from "lucide-react";
import Image from "next/image";

const CardProject = ({ project }: { project: Project }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="pl-4 basis-1/3">
      <article
        className={`h-full rounded-xl border backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl ${
          isLight
            ? "bg-white/70 border-slate-200 shadow-sm"
            : "bg-slate-900/40 border-slate-800 shadow-black/20"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-5 flex h-full flex-col">
          <header className="mb-3">
            <h3
              className={`text-xl font-semibold ${
                isLight ? "text-slate-900" : "text-slate-50"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`${
                isLight ? "text-slate-700" : "text-slate-300"
              } mt-1`}
            >
              {project.description}
            </p>
          </header>
          <div className="mt-auto">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                    isLight
                      ? "bg-slate-100 text-slate-700"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors gap-2 ${
                isLight
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-emerald-500 text-slate-900 hover:bg-emerald-600"
              }`}
            >
              <GithubIcon size={20} />
              GitHub
            </a>
            <a
              href={project.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors gap-2 ${
                isLight
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-emerald-500 text-slate-900 hover:bg-emerald-600"
              }`}
            >
              <EyeIcon size={20} />
              Demo
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardProject;
