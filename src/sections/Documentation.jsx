import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { DOCUMENTATION } from '../data/portfolio.js';

function Section({ title, children }) {
  return (
    <section className="border-t border-ink-line pt-6">
      <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {title}
      </h4>
      <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-2">
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

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Documentation() {
  const [activeId, setActiveId] = useState(DOCUMENTATION[0].id);
  const doc = DOCUMENTATION.find((d) => d.id === activeId) || DOCUMENTATION[0];

  return (
    <section id="documentation" className="border-t border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Documentation"
          title="Project Documentation"
          description="In-depth documentation for my major projects — what each one is, the problem it solves and how it was built."
        />

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-ink-line bg-ink-card">
            <div className="flex flex-wrap gap-1 border-b border-ink-line p-3">
              {DOCUMENTATION.map((item) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-accent text-white'
                        : 'text-muted hover:bg-white/5 hover:text-paper'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            <article className="p-6 sm:p-10">
              <div className="overflow-hidden rounded-xl border border-ink-line">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.tagline} interface preview`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold tracking-tight text-paper">{doc.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {doc.tagline}
                </p>
              </div>

              <Section title="Project Overview">
                <p>{doc.overview}</p>
              </Section>

              <Section title="Problem Statement">
                <p>{doc.problem}</p>
              </Section>

              {doc.objectives && (
                <Section title="Objectives">
                  <List items={doc.objectives} />
                </Section>
              )}

              {doc.targetUsers && (
                <Section title="Target Users">
                  <div className="flex flex-wrap gap-1.5">
                    {doc.targetUsers.map((user) => (
                      <span
                        key={user}
                        className="rounded-md border border-ink-line bg-ink-soft px-2.5 py-1 font-mono text-xs text-paper/80"
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </Section>
              )}

              {doc.roles && (
                <Section title="User Roles">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {doc.roles.map((role) => (
                      <div key={role.title} className="rounded-lg border border-ink-line bg-ink-soft/50 p-4">
                        <h5 className="text-sm font-semibold text-paper">{role.title}</h5>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">{role.description}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              <Section title="Core Features">
                <List items={doc.features} />
              </Section>

              {doc.areas && (
                <Section title="How It Works">
                  <div className="space-y-3">
                    {doc.areas.map((area) => (
                      <div key={area.title} className="rounded-lg border border-ink-line bg-ink-soft/50 p-4">
                        <h5 className="text-sm font-semibold text-paper">{area.title}</h5>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">{area.text}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              <Section title="Technologies">
                <ul className="flex flex-wrap gap-1.5">
                  {doc.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-ink-line bg-ink-soft px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="My Role">
                <List items={doc.role} />
              </Section>

              <Section title="Development Process">
                <List items={doc.process} />
              </Section>

              <Section title="Challenges">
                <List items={doc.challenges} />
              </Section>

              <Section title="Solutions">
                <List items={doc.solutions} />
              </Section>

              <Section title="What I Learned">
                <List items={doc.learned} />
              </Section>

              {doc.github && (
                <div className="mt-8">
                  <a
                    href={doc.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-muted hover:bg-white/5"
                  >
                    <GitHubIcon />
                    View on GitHub
                  </a>
                </div>
              )}
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}