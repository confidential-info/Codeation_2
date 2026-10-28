import { useEffect } from "react";

export function useScrollEffects(heroRef) {
  useEffect(() => {
    const hero = heroRef?.current;

    if (!hero) return;

    const heroImage = hero.querySelector("[data-hero-image]");
    const heroImageContainer = heroImage?.firstElementChild;
    const heroContent = hero.querySelector("[data-hero-content]");

    if (!heroImage || !heroImageContainer || !heroContent) {
      return;
    }

    let ticking = false;

    const clamp = (value, min, max) => {
      return Math.min(Math.max(value, min), max);
    };

    const update = () => {
      ticking = false;

      const rect = hero.getBoundingClientRect();
      const heroHeight = hero.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollable = Math.max(heroHeight - viewportHeight, viewportHeight * 0.35);
      const rawProgress = -rect.top / scrollable;

      const progress = clamp(rawProgress, 0, 1);

      const sectionScale = 1 - progress * 0.05;
      hero.style.transform = `scale(${sectionScale})`;
      hero.style.transformOrigin = "top-center";

      /*  IMAGE SCALE
       * Starts slightly zoomed in.
       * Pulls back while scrolling.
       */
      const imageScale = 1.08 - progress * 0.08;

      heroImageContainer.style.transform = `
        scale(${imageScale})
      `;

      /*
       * ---------------------------------------------------
       * IMAGE Y POSITION
       * ---------------------------------------------------
       *
       * Gives the image a subtle parallax/pull-back.
       */
      const imageTranslateY = progress * -40;

      heroImage.style.transform = `
        translate3d(0, ${imageTranslateY}px, 0)
      `;

      /*
       * ---------------------------------------------------
       * HERO CONTENT
       * ---------------------------------------------------
       *
       * Slightly moves the text upward as the hero
       * transitions away.
       */
      const contentTranslateY = progress * -45;
      const contentOpacity = 1 - progress * 0.35;

      heroContent.style.transform = `
        translate3d(0, ${contentTranslateY}px, 0)
        scale(${sectionScale})
      `;

      heroContent.style.opacity = contentOpacity;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", requestUpdate, { passive: true });

    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);

      window.removeEventListener("resize", requestUpdate);
    };
  }, [heroRef]);
}
