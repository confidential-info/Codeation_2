function Footer() {
  return (
    <footer className="w-full bg-[#0B1B2B] text-white py-16 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-12 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-xl">Codeation</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-white/60 gap-4">
        <span>
          © 2025 Codeation Inc. All rights reserved. Punjab, India & Global.
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          ALL SYSTEMS OPERATIONAL
        </span>
      </div>
    </footer>
  );
}

export default Footer;
