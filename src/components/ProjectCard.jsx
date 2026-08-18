import { ExternalIcon, GitHubIcon } from './icons.jsx';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const hasLive = Boolean(project.live);
  const hasGitHub = Boolean(project.github);
  const hasCaseStudy = Boolean(project.caseStudy);
  const isPractice = Boolean(project.practice);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-line bg-ink-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_24px_50px_-22px_rgba(0,0,0,0.85)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
        <img
          src={project.image}
          alt={`${project.name} — ${project.tagline}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-card to-transparent"
          aria-hidden="true"
        />
        {project.featured && (
          <span className="absolute left-3.5 top-3.5 rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
            Featured
          </span>
        )}
        <span className="absolute right-3.5 top-3.5 rounded-md border border-ink-line bg-ink/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-paper">{project.name}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
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

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-accent-strong"
            >
              Live Demo
              <ExternalIcon />
            </a>
          )}
          {hasGitHub && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-3.5 py-2 text-xs font-medium text-paper transition-colors hover:border-muted/60 hover:bg-white/[0.04]"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
          )}
          {hasCaseStudy && (
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-3.5 py-2 text-xs font-medium text-paper transition-colors hover:border-muted/60 hover:bg-white/[0.04]"
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
