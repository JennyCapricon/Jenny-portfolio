import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { LEARNING, SKILLS } from '../data/portfolio.js';

const GROUPS = [
  { key: 'frontend', icon: 'layout' },
  { key: 'apps', icon: 'layers' },
  { key: 'database', icon: 'database' },
  { key: 'tools', icon: 'tools' },
];

function GroupIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    'aria-hidden': true,
  };
  if (name === 'database')
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    );
  if (name === 'tools')
    return (
      <svg {...common}>
        <path d="M14.7 6.3a4.5 4.5 0 0 0-6.1 5.6L3 17.5V21h3.5l5.6-5.6a4.5 4.5 0 0 0 5.6-6.1l-3 3-2.1-.7-.7-2.1 3-3Z" />
      </svg>
    );
  if (name === 'layers')
    return (
      <svg {...common}>
        <path d="M12 2.5 21.5 7 12 11.5 2.5 7 12 2.5Z" strokeLinejoin="round" />
        <path d="M4.5 11.5 12 15l7.5-3.5" strokeLinecap="round" />
        <path d="M4.5 16.5 12 20l7.5-3.5" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="Technologies I use to build real, working applications — from interface to database."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map(({ key, icon }, index) => {
            const group = SKILLS[key];
            return (
              <Reveal key={key} delay={index * 90}>
                <div className="h-full rounded-xl border border-ink-line bg-ink-card p-6 transition-colors duration-300 hover:border-white/20">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-ink-soft text-accent">
                    <GroupIcon name={icon} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-paper">{group.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{group.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-ink-line bg-ink-soft px-2 py-0.5 font-mono text-[11px] text-muted"
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
          <div className="rounded-xl border border-ink-line bg-ink-card p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Currently learning
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Topics I'm actively working on right now — not yet mastered, but part of my
                  current development journey.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {LEARNING.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-dashed border-ink-line px-2.5 py-1 font-mono text-xs text-paper/80"
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