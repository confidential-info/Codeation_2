export default function TeamCard({ member }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-[#0f1015] p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7">
      <div className="mb-6 flex items-center justify-center">
        <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-white/10">
          <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-display mb-1 text-[clamp(20px,2vw,26px)] font-semibold tracking-tight text-white">{member.name}</h3>
        <p className="mb-3 text-sm font-medium text-cyber-gold">{member.role}</p>
        <p className="text-sm leading-relaxed text-white/70">{member.bio}</p>
      </div>
    </div>
  );
}