import { forwardRef, useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GatewayShell from "../ui/GatewayShell";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data";

const ProjectsGrid = ({
  items,
  offset,
  newIds,
  direction,
  onSelectProject,
}) => (
  <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
    {items.map((project, i) => {
      const isEntering = newIds.has(project.id);
      return (
        <ProjectCard
          key={project.id}
          project={project}
          index={i + offset}
          onSelect={onSelectProject}
          animationClass={
            isEntering
              ? direction === 1
                ? "project-enter-right"
                : "project-enter-left"
              : undefined
          }
          animationDelay={i * 90}
        />
      );
    })}
  </div>
);

const ProjectsCarousel = ({ projects, onSelectProject }) => {
  const total = projects.length;
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [newIds, setNewIds] = useState(() => new Set());

  const visibleCount = Math.min(3, total);

  const getVisible = useCallback(
    (start) => {
      const items = [];
      for (let i = 0; i < visibleCount; i += 1) {
        items.push(projects[(start + i) % total]);
      }
      return items;
    },
    [projects, total, visibleCount],
  );

  // Ids already on screen at mount -> they must NOT animate in.
  const seenRef = useRef(null);
  if (seenRef.current === null) {
    seenRef.current = new Set(getVisible(0).map((p) => p.id));
  }

  useEffect(() => {
    const visible = getVisible(startIndex);
    const entering = new Set();
    visible.forEach((p) => {
      if (!seenRef.current.has(p.id)) entering.add(p.id);
    });
    seenRef.current = new Set(visible.map((p) => p.id));
    setNewIds(entering);
  }, [startIndex, getVisible]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
  }, [total]);

  return (
    <div className="flex w-full items-center gap-3 sm:gap-4 md:gap-6">
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous project"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-cyber-amber/50 hover:bg-cyber-amber/20 hover:text-cyber-gold active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="min-w-0 flex-1">
        <ProjectsGrid
          items={getVisible(startIndex)}
          offset={startIndex}
          newIds={newIds}
          direction={direction}
          onSelectProject={onSelectProject}
        />
      </div>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next project"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-cyber-amber/50 hover:bg-cyber-amber/20 hover:text-cyber-gold active:scale-95 cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

const ProjectsGateway = forwardRef(function ProjectsGateway(
  { onSelectProject },
  ref,
) {
  const USE_CAROUSEL = PROJECTS.length > 3;

  return (
    <GatewayShell ref={ref} id="projects" z="z-30">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center pt-14 pb-28 sm:pt-20 sm:pb-32">
        <div className="mb-6 max-w-3xl text-center sm:mb-8">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,3rem)] font-bold leading-[1.05] tracking-tight text-white">
            Engineered for Impact.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-white/90 sm:text-sm md:text-base">
            Click on any project below to inspect the architecture, metrics, and
            technical deliverables.
          </p>
        </div>

        {USE_CAROUSEL ? (
          <ProjectsCarousel
            projects={PROJECTS}
            onSelectProject={onSelectProject}
          />
        ) : (
          <ProjectsGrid
            items={PROJECTS}
            offset={0}
            newIds={new Set()}
            direction={1}
            onSelectProject={onSelectProject}
          />
        )}

      </div>
    </GatewayShell>
  );
});

export default ProjectsGateway;
