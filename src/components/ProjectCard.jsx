function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const hasGitHub = Boolean(project.github);
  const isPractice = Boolean(project.practice);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-line bg-ink-card transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_45px_-18px_rgba(0,0,0,0.8)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-soft">
        <img
          src={project.image}
          alt={`${project.name} — ${project.tagline}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
            Featured
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-md border border-ink-line bg-ink/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="text-lg font-semibold text-paper">{project.name}</h3>
          <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-accent">
            {project.tagline}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-ink-line bg-ink-soft px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.keyFeatures && (
          <details className="rounded-lg border border-ink-line bg-ink-soft/60 px-4 py-3">
            <summary className="cursor-pointer text-xs font-medium text-paper">
              Key features
            </summary>
            <ul className="mt-3 space-y-1.5">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex gap-2 text-xs leading-relaxed text-muted">
                  <span aria-hidden="true" className="text-accent">
                    ›
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </details>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {hasGitHub && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-3.5 py-2 text-xs font-medium text-paper transition-colors hover:border-muted hover:bg-white/5"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          )}
          {project.caseStudy && (
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#c93c41]"
            >
              Case Study
            </button>
          )}
        </div>

        {isPractice && (
          <p className="rounded-md bg-ink-soft px-3 py-1.5 font-mono text-[11px] text-muted">
            Front-End / practice build — focused on UI craft.
          </p>
        )}
      </div>
    </article>
  );
}