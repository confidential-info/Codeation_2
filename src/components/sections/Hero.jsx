import { forwardRef, useEffect, useRef, useState } from "react";

const ROTATING_WORDS = ["design", "build", "scale"];

const Hero = forwardRef(function Hero(_, ref) {
  const [activeWord, setActiveWord] = useState(0);
  const wordRef = useRef(null);

  /* Rotating words */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((current) => (current + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!wordRef.current) return;

    wordRef.current.animate(
      [
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 500, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
    );
  }, [activeWord]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-[#0b0c10] rounded-b-[80px]"
    >
      {/* Ambient warm cyber gold radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-212.5 h-130 rounded-full bg-cyber-amber/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-amber-deep/10 blur-[140px]" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-cyber-gold/8 blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center px-6 pt-32 md:px-10 lg:px-12"
      >
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12131a]/90 backdrop-blur-md border border-cyber-amber/35 shadow-[0_0_18px_rgba(245,158,11,0.18)] mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-cyber-amber shadow-[0_0_10px_#f59e0b] animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-cyber-gold">
            Digital Product & Technology Partner
          </span>
        </div>

        {/* Main Heading */}
        <div className="max-w-5xl">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.12] tracking-tight text-white">
            Bridge the gap between
            <br />
            <span className="italic font-normal text-cyber-gold   ">
              Technology
            </span>{" "}
            and{" "}
            <span className="italic font-normal text-cyber-gold">Business</span>
          </h1>
        </div>

        {/* Secondary statement */}
        <div className="mt-8 flex max-w-2xl flex-col text-[clamp(1rem,1.5vw,1.25rem)] font-medium leading-[1.2] tracking-tight text-white/90 md:mt-10">
          <div>
            We{" "}
            <span
              ref={wordRef}
              className="inline-flex items-center justify-center mx-1 bg-[#0f1015] rounded-md border border-cyber-amber/40 shadow-[0_0_12px_rgba(245,158,11,0.2)] px-2 py-0.5 font-bold text-cyber-gold font-mono text-[15px]"
            >
              {ROTATING_WORDS[activeWord]}
            </span>{" "}
            mission-critical digital products.
          </div>
        </div>

        {/* HERO IMAGE */}
        <div data-hero-image className="relative z-10 mt-10 w-full md:mt-14">
          <div className="relative mx-auto flex justify-center items-center max-w-3xl overflow-hidden rounded-3xl bg-black/10 shadow-2xl md:rounded-4xl">
            <img
              src="/images/hero-image.gif"
              alt="Codeation digital product"
              className="block h-auto w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Transition Spacer */}
      <div
        data-hero-transition
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45vh]"
      />
    </section>
  );
});

export default Hero;
