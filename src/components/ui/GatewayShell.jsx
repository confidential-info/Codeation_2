import { forwardRef } from "react";

export const GatewayShell = forwardRef(function GatewayShell(
  { id, z = "z-30", children },
  ref,
) {
  return (
    <div
      ref={ref}
      id={id}
      className={`absolute inset-0 ${z} overflow-hidden bg-[#0b0c10] text-white`}
      style={{
        visibility: "hidden",
        pointerEvents: "none",
        willChange: "clip-path, opacity",
      }}
    >
      {/* Ambient warm cyber gold radial glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-212.5 h-130 rounded-full bg-cyber-amber/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-amber-deep/10 blur-[140px]" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-cyber-gold/8 blur-[120px]" />
      </div>

      <div
        data-inner
        className="relative z-10 flex min-h-full w-full flex-col items-center justify-start px-4 py-8 sm:px-8 md:px-12 overflow-y-auto"
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </div>
    </div>
  );
});

export default GatewayShell;