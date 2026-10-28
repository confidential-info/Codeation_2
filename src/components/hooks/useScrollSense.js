import { useEffect, useRef } from "react";
import { clamp } from "../../utils/scrollMath";

/**
 * Tracks scroll progress (0..1) through a tall section that contains a sticky stage.
 * Calls onUpdate(progress) once per animation frame while scrolling.
 */
export default function useScrollScene(sectionRef, onUpdate) {
  const callback = useRef(onUpdate);
  callback.current = onUpdate;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp(-rect.top / scrollable) : 0;
      section.style.setProperty("--services-progress", progress.toString());
      callback.current(progress);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionRef]);
}