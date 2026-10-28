const logos = [
  { name: "GoPro" },
  { name: "Gillette" },
  { name: "Revolut" },
  { name: "NESPRESSO" },
  { name: "alan" },
];

export default function TrustedClients() {
  return (
    <section className="relative z-3 bg-background1 py-6 overflow-hidden">
      <div className="mx-auto mb-16 w-[min(1100px,calc(100%-48px))] text-center">
        <p className="text-[clamp(14px,1.2vw,16px)] font-medium tracking-[-0.01em] text-muted-text">
          Trusted by organizations building what&apos;s next
        </p>
      </div>

      <div
        className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]"
        aria-label="Organizations we work with"
      >
        <div className="marquee-track flex">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-8 sm:mx-12 inline-flex shrink-0 items-center justify-center text-text opacity-[0.67] hover:opacity-100 transition-opacity"
            >
              <span className="font-display text-lg sm:text-xl font-bold tracking-[0.5px]">
                {logo.name}
              </span>
            </div>
          ))}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-clone-${index}`}
              aria-hidden="true"
              className="mx-8 sm:mx-12 inline-flex shrink-0 items-center justify-center text-text opacity-[0.67] hover:opacity-100 transition-opacity"
            >
              <span className="font-display text-lg sm:text-xl font-bold tracking-[0.5px]">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
