import { X, CheckCircle2, Layers, Cpu, Award } from "lucide-react";
import { useEffect } from "react";

export default function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050b12]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 flex flex-col max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-background1 shadow-2xl transition-all duration-300 animate-in zoom-in-95">
        {/* Header Preview Banner */}
        <div className={`relative h-56 sm:h-72 w-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden ${project.gradient || "bg-linear-to-br from-blue-600 via-sky-600 to-indigo-900"}`}>
          {/* Subtle noise/grid overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-background1/20 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {project.category}
            </span>

            <button
              onClick={onClose}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform duration-200 hover:scale-105 hover:bg-black/70"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          <div className="relative z-10 text-white">
            <p className="text-sm font-medium text-white/80">{project.client}</p>
            <h2 id="project-dialog-title" className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-text mb-2">
              Overview
            </h3>
            <p className="text-base sm:text-lg text-text leading-relaxed font-normal">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-border py-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-surface-muted rounded-2xl p-4 border border-border">
                  <span className="font-display block text-2xl sm:text-3xl font-extrabold text-text">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-muted-text mt-0.5 block">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack and Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3 text-text">
                <Cpu className="h-4 w-4 text-primary" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-text">
                  Technology Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface-muted px-3.5 py-1.5 text-xs font-medium text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-text">
                <Layers className="h-4 w-4 text-primary" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-text">
                  Key Deliverables
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-text">
                {project.deliverables?.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-text">{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-border bg-surface-muted/50 px-6 sm:px-10 py-4.5">
          <div className="flex items-center gap-2 text-xs text-muted-text">
            <Award className="h-4 w-4 text-amber-500" />
            <span>Delivered by Codeation Engineering Team</span>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-text bg-background1 hover:bg-surface-muted transition-colors shadow-md border-border border cursor-pointer"
          >
            <span>Close Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
