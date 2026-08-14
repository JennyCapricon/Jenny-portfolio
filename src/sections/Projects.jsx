import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { PROJECTS, SMALL_PROJECTS, PROJECT_FILTERS } from '../data/portfolio.js';

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function FlagshipProject({ project, onOpenCaseStudy }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-ink-line bg-ink-card transition-colors duration-300 hover:border-white/20">
      <div className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden border-b border-ink-line lg:border-b-0 lg:border-r">
          <img
            src={project.image}
            alt={`${project.name} — ${project.tagline}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
          <span className="absolute left-4 top-4 rounded-md bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
            ⭐ Flagship Project
          </span>
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Featured Build</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-paper sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              What's inside
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex gap-2 text-xs leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-0.5 text-accent">
                    ›
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

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

          <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c93c41]"
            >
              View Case Study
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-muted hover:bg-white/5"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ activeFilter, onFilterChange, onOpenCaseStudy }) {
  const visibleProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.filters.includes(activeFilter);
  });

  const flagship = PROJECTS.find((project) => project.id === 'jay-enterprise');
  const featured = PROJECTS.filter((project) => project.featured && project.id !== 'jay-enterprise');
  const more = PROJECTS.filter((project) => !project.featured);
  const isFiltered = activeFilter !== 'all';

  return (
    <section id="projects" className="border-t border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Real applications I've designed, built and connected to real data."
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
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-accent text-white'
                      : 'border border-ink-line text-muted hover:border-muted hover:text-paper'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {isFiltered ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 80}>
                <ProjectCard project={project} onOpenCaseStudy={onOpenCaseStudy} />
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-14">
              <Reveal>
                <FlagshipProject project={flagship} onOpenCaseStudy={onOpenCaseStudy} />
              </Reveal>
            </div>

            <h3 className="mt-20 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Featured Projects
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project, index) => (
                <Reveal key={project.id} delay={index * 80}>
                  <ProjectCard project={project} onOpenCaseStudy={onOpenCaseStudy} />
                </Reveal>
              ))}
            </div>

            <h3 className="mt-20 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              More Projects
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((project, index) => (
                <Reveal key={project.id} delay={index * 80}>
                  <ProjectCard project={project} onOpenCaseStudy={onOpenCaseStudy} />
                </Reveal>
              ))}
            </div>

            <h3 className="mt-20 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Front-end explorations
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SMALL_PROJECTS.map((project, index) => (
                <Reveal key={project.id} delay={index * 70}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-ink-line bg-ink-card transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    <div className="aspect-[16/9] overflow-hidden bg-ink-soft">
                      <img
                        src={project.image}
                        alt={`${project.name} — ${project.label}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {project.label}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-paper">{project.name}</h4>
                      <p className="text-xs leading-relaxed text-muted">{project.description}</p>
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-ink-line bg-ink-soft px-1.5 py-0.5 font-mono text-[10px] text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
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