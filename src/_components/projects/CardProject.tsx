import { Project } from "@/constants/projects-data";
import { useTheme } from "@/context/ThemeContext";
import { EyeIcon, GithubIcon } from "lucide-react";
import Image from "next/image";

const CardProject = ({ project }: { project: Project }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <article
      className={`text-left rounded-xl border backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl h-full flex flex-col min-h-[440px] sm:min-h-[480px] ${
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
        className="w-full h-40 sm:h-48 object-cover object-top rounded-t-xl"
      />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <header className="mb-1 space-y-1 flex-1">
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
            } mt-1 text-sm opacity-80`}
          >
            {project.description}
          </p>
        </header>
        <div className="mt-auto">
          <div className="mb-3 flex flex-wrap gap-2">
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
          <div className="flex flex-col sm:flex-row gap-2 items-start justify-start">
            <a
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors gap-2 ${
                isLight
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-emerald-500 text-slate-900 hover:bg-emerald-600"
              }`}
            >
              <GithubIcon size={20} />
              GitHub
            </a>
            {project.linkDemo && (
              <a
                href={project.linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors gap-2 ${
                  isLight
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-emerald-500 text-slate-900 hover:bg-emerald-600"
                }`}
              >
                <EyeIcon size={20} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
