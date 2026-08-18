import { ExternalIcon, GitHubIcon } from './icons.jsx';
import { JAY_ENTERPRISE_CASE_STUDY } from '../data/portfolio.js';

function Block({ title, children }) {
  return (
    <div>
      <h4 className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
        {title}
        <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
      </h4>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-0.5 text-accent">
            ›
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyContent({ project, onClose }) {
  const study = JAY_ENTERPRISE_CASE_STUDY;

  const openDocumentation = () => {
    onClose?.();
    document.getElementById('documentation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article className="p-6 sm:p-10">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
        Case Study
      </p>
      <h3 id="case-study-title" className="mt-2 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
        {project.name}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">{project.tagline}</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-ink-line">
        <img
          src={project.image}
          alt={`${project.name} interface preview`}
          className="aspect-[21/9] w-full object-cover"
        />
      </div>

      <div className="mt-8">
        <Block title="The Problem">
          <p>{study.problem}</p>
        </Block>
      </div>

      <div className="mt-8">
        <Block title="The Solution">
          <p>{study.solution}</p>
        </Block>
      </div>

      <div className="mt-8">
        <Block title="My Role">
          <List items={project.contribution} />
        </Block>
      </div>

      <div className="mt-8">
        <Block title="How I Built It">
          <List items={study.approach} />
        </Block>
      </div>

      <div className="mt-8">
        <Block title="Key Features">
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.keyFeatures.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-0.5 text-accent">
                  ›
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <div className="mt-8">
        <Block title="Challenges">
          <List items={study.challenges} />
        </Block>
      </div>

      <div className="mt-8">
        <Block title="What I Learned">
          <List items={study.learned} />
        </Block>
      </div>

      <div className="mt-8">
        <Block title="Outcome">
          <p>{study.outcome}</p>
        </Block>
      </div>

      <div className="mt-8">
        <Block title="Technologies">
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
        </Block>
      </div>

      {project.github && (
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
          >
            <GitHubIcon size={15} />
            View the source on GitHub
            <ExternalIcon />
          </a>
          <button
            type="button"
            onClick={openDocumentation}
            className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-muted/60 hover:bg-white/[0.04]"
          >
            View Documentation
          </button>
        </div>
      )}
    </article>
  );
}
