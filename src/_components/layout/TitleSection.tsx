import { useTheme } from "@/context/ThemeContext";

export default function TitleSection({
  titleName,
  subtitle,
}: {
  titleName: string;
  subtitle?: string;
}) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="text-left space-y-4">
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-sm ${
          isLight ? "text-slate-900" : "text-slate-50"
        }`}
      >
        {titleName}
      </h2>
      <div
        className={`w-1/5 h-1 mr-auto rounded-full ${
          isLight ? "bg-blue-600" : "bg-emerald-500"
        }`}
      ></div>
      <p
        className={`mr-auto max-w-2xl mt-4 ${
          isLight ? "text-slate-700" : "text-slate-200"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}
