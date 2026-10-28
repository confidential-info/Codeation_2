import { useRef, useState } from "react";
import ServiceCard from "../ui/ServiceCard";
import ProjectDialog from "../ui/ProjectDialog";
import ProjectsGateway from "./ProjectsGateway";
import { range, easeInOut, clamp } from "../../utils/scrollMath";
import useScrollScene from "../hooks/useScrollSense";
import { SERVICES } from "../../data";

const T = {
  slideEnd: 0.55,
  zoomStart: 0.55,
  zoomEnd: 0.8,
};

function applyLayer(
  layer,
  { visible, interactive, clip, scale, innerOpacity },
) {
  if (!layer) return;
  layer.style.visibility = visible ? "visible" : "hidden";
  layer.style.pointerEvents = interactive ? "auto" : "none";
  layer.style.clipPath = clip ?? "none";
  const inner = layer.querySelector("[data-inner]");
  if (inner) {
    inner.style.transform = `scale(${scale})`;
    inner.style.opacity = String(innerOpacity);
  }
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useScrollScene(sectionRef, (p) => {
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!sticky || !track) return;

    // 1) Horizontal slide
    const slideT = range(p, 0, T.slideEnd);
    const maxX = Math.max(0, track.scrollWidth - window.innerWidth);
    track.style.transform = `translate3d(${-slideT * maxX}px,0,0)`;

    // 2) Zoom INTO the last card (Projects)
    const zoomT = easeInOut(range(p, T.zoomStart, T.zoomEnd));
    const lastCard = track.lastElementChild;

    if (lastCard && zoomT > 0) {
      if (zoomT >= 1) {
        applyLayer(projectsRef.current, {
          visible: true,
          interactive: true,
          clip: "none",
          scale: 1,
          innerOpacity: 1,
        });
      } else {
        const s = sticky.getBoundingClientRect();
        const c = lastCard.getBoundingClientRect();
        const k = 1 - zoomT;

        const top = clamp(c.top - s.top, 0, s.height) * k;
        const left = clamp(c.left - s.left, 0, s.width) * k;
        const right = clamp(s.right - c.right, 0, s.width) * k;
        const bottom = clamp(s.bottom - c.bottom, 0, s.height) * k;

        applyLayer(projectsRef.current, {
          visible: true,
          interactive: zoomT > 0.9,
          clip: `inset(${top}px ${right}px ${bottom}px ${left}px round ${24 * k}px)`,
          scale: 0.7 + 0.3 * zoomT,
          innerOpacity: clamp((zoomT - 0.35) / 0.65),
        });
      }
    } else {
      applyLayer(projectsRef.current, {
        visible: false,
        interactive: false,
        scale: 0.7,
        innerOpacity: 0,
      });
    }

    // Fade heading and hint as the zoom begins
    sticky.style.setProperty("--fade", String(1 - clamp(p / 0.25)));
  });

  return (
    <>
      <section
        ref={sectionRef}
        id="services"
        className="services-scroll relative z-4 h-[600vh] bg-surface-muted"
      >
        <div
          ref={stickyRef}
          className="services-sticky sticky top-0 h-screen min-h-[680px] overflow-hidden bg-surface-muted"
        >
          <div
            className="absolute top-[7.5vh] left-[max(4vw,30px)] z-10"
            style={{ opacity: "var(--fade, 1)" }}
          >
            <p className="section-label mb-3 text-xs font-semibold uppercase tracking-[1.8px] text-muted-text">
              What we do
            </p>
            <h2 className="font-display m-0 text-[clamp(29px,3vw,48px)] leading-[1.03] text-text">
              Built for the distance,
              <br />
              not just the launch.
            </h2>
          </div>

          <div
            className="absolute top-[9vh] right-[max(4vw,30px)] z-10 h-0.5 w-37.5 overflow-hidden bg-text/10"
            aria-hidden="true"
          >
            <span
              className="block h-full w-full origin-left bg-primary"
              style={{ transform: "scaleX(var(--services-progress, 0))" }}
            />
          </div>

          <div
            ref={trackRef}
            className="services-track absolute top-[30vh] left-0 flex items-stretch gap-8 px-[max(5vw,calc((100vw-min(76vw,780px))/2))] pr-[22vw]"
            style={{ willChange: "transform" }}
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          <ProjectsGateway
            ref={projectsRef}
            onSelectProject={setSelectedProject}
          />
        </div>
      </section>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
