import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project,
  onSelect,
  animationClass,
  animationDelay,
}) {
  return (
    <div
      onClick={() => onSelect(project)}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0f1015] p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer sm:p-7 ${animationClass ?? ""}`}
      style={
        animationDelay != null
          ? { animationDelay: `${animationDelay}ms` }
          : undefined
      }
    >
      <div
        className={`relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl p-5 ${project.gradient}`}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {project.category}
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-110 group-hover:bg-cyber-amber group-hover:text-obsidian-950">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div>
          <span className="block text-xs font-medium text-white/70">
            {project.client}
          </span>
          <h4 className="font-display mt-0.5 text-lg font-bold tracking-tight text-white">
            {project.title}
          </h4>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col justify-between">
        <p className="line-clamp-2 text-sm leading-relaxed text-white/70">
          {project.description}
        </p>

        <div className="mt-5 border-t border-white/10 pt-4">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="rounded-full bg-white/5 border border-white/10 px-2 py-1 text-[11px] font-medium text-white/60">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
