import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { ExternalIcon, GitHubIcon } from '../components/icons.jsx';
import { PROJECTS, PROJECT_FILTERS } from '../data/portfolio.js';

function FlagshipProject({ project, onOpenCaseStudy }) {
  const hasLive = Boolean(project.live);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-ink-line bg-ink-card transition-all duration-300 hover:border-accent/40 hover:shadow-[0_30px_70px_-30px_rgba(232,181,74,0.18)]">
      <span
        className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} — ${project.tagline}`}
          loading="lazy"
          className="aspect-[21/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-card/90 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-md bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
          Featured Project
        </span>
        <span className="absolute right-4 top-4 rounded-md border border-ink-line bg-ink/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Main Project
            <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
          </p>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
            {project.tagline}
          </p>
        </div>

          <p className="text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-ink-line bg-ink-soft px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2">
            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
              >
                Live Demo
                <ExternalIcon />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
            >
              <GitHubIcon size={15} />
              GitHub
            </a>
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-muted/60 hover:bg-white/[0.04]"
            >
              Case Study
            </button>
          </div>
        </div>
    </article>
  );
}

function SectionLabel({ children }) {
  return (
    <h3 className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-muted">
      {children}
    </h3>
  );
}

export default function Projects({ activeFilter, onFilterChange, onOpenCaseStudy }) {
  const visibleProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.filters.includes(activeFilter);
  });

  const flagship = PROJECTS.find((project) => project.id === 'jay-enterprise');
  const featured = PROJECTS.filter((project) => project.featured && project.id !== 'jay-enterprise');
  const isFiltered = activeFilter !== 'all';

  return (
    <section id="projects" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="A selection of projects I've designed and developed using modern web technologies."
        />

        <Reveal className="mt-10">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap justify-center gap-2"
          >
            {PROJECT_FILTERS.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onFilterChange(filter.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-accent text-ink'
                      : 'border border-ink-line text-muted hover:border-muted/60 hover:text-paper'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {isFiltered ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 80}>
                <ProjectCard project={project} onOpenCaseStudy={onOpenCaseStudy} />
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-16">
              <Reveal>
                <FlagshipProject project={flagship} onOpenCaseStudy={onOpenCaseStudy} />
              </Reveal>
            </div>

            <div className="mt-20">
              <SectionLabel>More Featured Projects</SectionLabel>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featured.map((project, index) => (
                  <Reveal key={project.id} delay={index * 80}>
                    <ProjectCard project={project} onOpenCaseStudy={onOpenCaseStudy} />
                  </Reveal>
                ))}
              </div>
            </div>
          </>
        )}

        {visibleProjects.length === 0 && isFiltered && (
          <p className="mt-12 text-center text-muted">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
