import { Users } from "lucide-react";
import TeamCard from "../ui/TeamMember";
import { TEAM_MEMBERS } from "../../data";

export default function TeamSection() {
  return (
    <section
      id="about"
      className="relative z-10 bg-[#0b0c10] text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Ambient warm cyber gold radial glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-212.5 h-130 rounded-full bg-cyber-amber/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-amber-deep/10 blur-[140px]" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-cyber-gold/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md border border-cyber-amber/20">
            <Users className="h-3.5 w-3.5 text-cyber-amber" />
            <span className="text-cyber-gold">Our Core Team</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white">
            The people behind the product.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
            A small, senior team of builders who care deeply about craft,
            clarity, and outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {TEAM_MEMBERS.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-background1"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V100H0V40Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}