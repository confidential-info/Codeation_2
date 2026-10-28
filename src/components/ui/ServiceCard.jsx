export default function ServiceCard({ service, index = 0 }) {
  const isProjects = service.title === "Projects";

  return (
    <article
      data-card-index={index}
      className={`service-card shrink-0 relative grid w-[min(76vw,780px)] ${
        isProjects ? "grid-cols-1" : "grid-cols-1 md:grid-cols-[.92fr_1.08fr]"
      } grid-rows-[auto_1fr] gap-x-10.5 overflow-hidden rounded-3xl border border-border bg-card1 p-6 sm:p-8 shadow-[0_22px_60px_rgba(20,39,52,0.07)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(20,39,52,0.12)] hover:-translate-y-1.5`}
    >
      {!isProjects && (
        <div className="service-card-top col-span-full flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-text">
          <span className="font-mono text-sm font-bold text-text">
            {service.number}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            Codeation service
          </span>
        </div>
      )}

      {!isProjects && service.image && (
        <div className="relative h-[82%] mt-7.5 w-full min-h-55 self-center overflow-hidden rounded-[20px] border border-black/5 shadow-inner">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div
        className={`service-card-copy flex flex-col justify-center ${isProjects ? "text-center py-10 px-4 md:px-12" : "px-1 pt-6 md:pt-10 pb-2.5"}`}
      >
        {isProjects && (
          <div className="mb-4 inline-flex items-center justify-center gap-2 self-center rounded-full bg-text/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background2 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-background2"></span>
            </span>
            Interactive Showcase
          </div>
        )}
        <h3 className="font-display mb-4 text-[clamp(28px,2.8vw,48px)] font-semibold tracking-tight leading-[1.05] text-text">
          {service.title}
        </h3>
        <p
          className={`mb-7 max-w-lg text-sm sm:text-base leading-relaxed text-muted-text ${isProjects ? "mx-auto" : ""}`}
        >
          {service.description}
        </p>

        {isProjects ? (
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-background2/20 bg-background2/5 px-4 py-1.5 text-xs font-semibold text-background2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-background2">
              <span>Scroll further to enter gateway</span>
              <span className="inline-block animate-bounce">↓</span>
            </div>
          </div>
        ) : (
          <div className="service-tags flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface-muted px-3.5 py-1.5 text-xs font-semibold text-text transition-colors hover:border-primary hover:bg-background1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
