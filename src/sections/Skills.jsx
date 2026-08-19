import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { LEARNING, SKILLS } from '../data/portfolio.js';

const GROUPS = [
  { key: 'frontend' },
  { key: 'apps' },
  { key: 'tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-line bg-ink-soft/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="Technologies I use to build real, working applications — from interface to database."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map(({ key }, index) => {
            const group = SKILLS[key];
            return (
              <Reveal key={key} delay={index * 80}>
                <div className="group flex h-full flex-col rounded-2xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-semibold text-paper">
                      {group.title}
                    </h3>
                    <span
                      className="font-mono text-xs font-medium text-ink-line transition-colors duration-300 group-hover:text-accent/70"
                      aria-hidden="true"
                    >
                      /0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{group.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-ink-line bg-ink-soft px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-paper"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-ink-line bg-ink-card p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
                  Currently learning
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Topics I'm actively working on right now — not yet mastered, but part of my
                  current development journey.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {LEARNING.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-dashed border-ink-line px-2.5 py-1.5 font-mono text-xs text-paper/80 transition-colors hover:border-accent/40 hover:text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
