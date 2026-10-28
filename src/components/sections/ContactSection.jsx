import { useState } from "react";
import { TESTIMONIALS } from "../../data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative z-10 bg-background1 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-background1 rounded-3xl md:rounded-4xl border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            {/* LEFT: Client Stories */}
            <div className="lg:col-span-5 p-8 md:p-10 lg:p-12 flex flex-col justify-between relative bg-background1">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  // CLIENT STORIES
                </div>
                <h3 className="font-headline-md text-xl md:text-2xl font-bold tracking-tight text-text max-w-md uppercase mb-8">
                  What our customer's say
                </h3>

                {/* Testimonial slides */}
                <div className="relative min-h-55 md:min-h-50 mb-8">
                  {TESTIMONIALS.map((story, i) => (
                    <blockquote
                      key={i}
                      className={`text-lg md:text-xl font-medium text-text/80 leading-relaxed transition-all duration-400 ${i === currentStory ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 hidden"}`}
                    >
                      “{story.quote}”
                      <div className="pt-2">
                        <div className="font-bold text-text text-base md:text-lg">
                          {story.name}
                        </div>
                        <div className="text-xs md:text-sm font-medium text-muted-text mt-0.5">
                          {story.role}
                        </div>
                      </div>
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="relative z-10 pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tracking-widest font-semibold text-text">
                    {String(currentStory + 1).padStart(2, "0")} /{" "}
                    {String(TESTIMONIALS.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentStory(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStory ? "bg-primary w-6" : "bg-border hover:bg-muted-text/30 w-2"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevStory}
                    className="p-2.5 rounded-full border border-border bg-background1 text-text hover:border-primary hover:text-primary shadow-sm transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextStory}
                    className="p-2.5 rounded-full border border-border bg-background1 text-text hover:border-primary hover:text-primary shadow-sm transition-colors cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-7 p-8 md:p-10 lg:p-12 bg-primary text-white flex flex-col justify-between relative">
              <div>
                <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-white/80 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                  // INITIATE DIALOGUE
                </div>
                <h3 className="font-headline-md text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                  LET'S BUILD
                </h3>
                <p className="font-body-md text-sm md:text-base text-white/90 mb-8 leading-relaxed">
                  Have a product, platform, or business challenge in mind? Tell
                  us what you're building.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block font-mono text-xs uppercase font-medium text-white mb-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block font-mono text-xs uppercase font-medium text-white mb-1"
                        htmlFor="email"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block font-mono text-xs uppercase font-medium text-white mb-1"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block font-mono text-xs uppercase font-medium text-white mb-1"
                      htmlFor="message"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows="3"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                      required
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-background1  hover:bg-surface-muted font-headline-sm text-sm font-bold tracking-wide shadow-sm transition-all cursor-pointer"
                    >
                      <span className="text-primary">LET'S TALK</span>
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Guaranteed 24hr response
                </span>
                <a
                  href="mailto:hello@codeation.io"
                  className="hover:text-white transition-colors"
                >
                  hello@codeation.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
