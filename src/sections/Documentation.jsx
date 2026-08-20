import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { ExternalIcon, GitHubIcon } from '../components/icons.jsx';
import { DOCUMENTATION } from '../data/portfolio.js';

function Section({ title, children }) {
  return (
    <section className="border-t border-ink-line pt-8">
      <h4 className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
        {title}
        <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
      </h4>
      <div className="mt-4 text-sm leading-relaxed text-muted">{children}</div>
    </section>
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

export default function Documentation() {
  const [activeId, setActiveId] = useState(DOCUMENTATION[0].id);
  const doc = DOCUMENTATION.find((d) => d.id === activeId) || DOCUMENTATION[0];

  return (
    <section id="documentation" className="border-t border-ink-line bg-ink-soft/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Documentation"
          title="Project Documentation"
          description="In-depth documentation for my major projects — what each one is, the problem it solves and how it was built."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-ink-line bg-ink-card">
            <div
              className="flex flex-wrap gap-x-1 border-b border-ink-line px-4 sm:px-6"
            >
              {DOCUMENTATION.map((item) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveId(item.id)}
                    className={`-mb-px border-b-2 px-4 py-3.5 text-sm font-medium transition-colors ${
                      active
                        ? 'border-accent text-paper'
                        : 'border-transparent text-muted hover:text-paper'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            <article className="p-6 sm:p-10">
              <div className="overflow-hidden rounded-2xl border border-ink-line">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.tagline} interface preview`}
                  loading="lazy"
                  className={`aspect-[21/9] w-full ${
                    doc.imageFit === 'contain' ? 'object-contain' : 'object-cover'
                  }`}
                />
              </div>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
                  {doc.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
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
                      <div key={role.title} className="rounded-xl border border-ink-line bg-ink-soft/50 p-4">
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
                      <div key={area.title} className="rounded-xl border border-ink-line bg-ink-soft/50 p-4">
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
                    className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-muted/60 hover:bg-white/[0.04]"
                  >
                    <GitHubIcon size={15} />
                    View on GitHub
                    <ExternalIcon />
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
