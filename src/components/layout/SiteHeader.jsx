import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About Us",
    href: "#about",
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 md:top-6">
      <div className="mx-auto flex h-18 w-full max-w-300 items-center justify-between rounded-full bg-[#0b0c10] px-6 shadow-lg md:px-8 lg-px-10 border border-border">
        {/* LOGO */}
        <a
          href="#home"
          aria-label="Codeation Home"
          className="text-[22px] font-semibold tracking-[-0.045em] text-white"
        >
          codeation
        </a>

        {/* Navigation Links */}
        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium tracking-[0.01em] text-white transition-opacity duration-300 hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full px-5 py-2.5 bg-primary hover:bg-primary-dark text-[14px] font-medium tracking-[-0.01em] transition-all duration-300 md:inline-flex"
        >
          <span className="text-white">Contact Me</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white"
            strokeWidth={1.5}
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#0b0c10] transition-all duration-500 ease-out md:hidden border-b border-border shadow-lg ${menuOpen ? "max-h-130 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="px-6 pb-8 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-border py-5 text-[18px] font-medium tracking-tight text-white"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          ))}

          {/* Mobile Contact */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark rounded-xl px-5 py-4 text-[14px] font-medium text-white transition-colors"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}
