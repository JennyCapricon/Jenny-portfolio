import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { PROFILE } from '../data/portfolio.js';

const ITEMS = [
  {
    key: 'cv',
    title: 'CV',
    description: 'My professional resume — education, skills and real projects.',
    icon: 'document',
    href: '#profile',
  },
  {
    key: 'linkedin',
    title: 'LinkedIn',
    description: 'My professional networking profile and connections.',
    icon: 'linkedin',
    href: '#profile',
  },
  {
    key: 'github',
    title: 'GitHub',
    description: 'My code and project repositories.',
    icon: 'github',
    href: PROFILE.github,
    external: true,
  },
  {
    key: 'portfolio',
    title: 'Portfolio',
    description: 'This website — my work, built and documented.',
    icon: 'globe',
    href: '#home',
  },
  {
    key: 'documentation',
    title: 'Project Documentation',
    description: 'Detailed explanations of my major projects.',
    icon: 'book',
    href: '#documentation',
  },
];

function ItemIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    'aria-hidden': true,
  };
  if (name === 'github')
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  if (name === 'linkedin')
    return (
      <svg {...common}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
        <path d="M7 10.5V17M7 7.2v.1" strokeLinecap="round" />
        <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10.5V17" strokeLinecap="round" />
      </svg>
    );
  if (name === 'globe')
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    );
  if (name === 'book')
    return (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
        <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M7 3.5h7L18.5 8v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M14 3.5V8h4.5M8.5 12h7M8.5 15.5h7" strokeLinecap="round" />
    </svg>
  );
}

export default function ProfessionalProfile() {
  const hasCv = Boolean(PROFILE.cvUrl);
  const hasLinkedIn = Boolean(PROFILE.linkedin);

  return (
    <section id="profile" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Graduation & Professional Profile"
          title="My Professional Profile"
          description="One connected developer brand — my CV, LinkedIn, GitHub, this portfolio and project documentation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item, index) => (
            <Reveal key={item.key} delay={index * 80}>
              <div className="flex h-full flex-col rounded-xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-ink-soft text-accent">
                  <ItemIcon name={item.icon} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-paper">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>

                {item.key === 'cv' ? (
                  hasCv ? (
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      <a
                        href={PROFILE.cvUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#c93c41]"
                      >
                        View CV
                      </a>
                      <a
                        href={PROFILE.cvUrl}
                        download="Jenny_CV.pdf"
                        className="rounded-lg border border-ink-line px-3.5 py-2 text-xs font-medium text-paper transition-colors hover:border-muted hover:bg-white/5"
                      >
                        Download CV
                      </a>
                    </div>
                  ) : (
                    <p className="mt-auto rounded-md border border-dashed border-ink-line px-3 py-2 text-[11px] leading-relaxed text-muted">
                      My CV file will be connected here — add it as <code>/cv/Jenny_CV.pdf</code> in
                      the public folder to activate the buttons.
                    </p>
                  )
                ) : item.key === 'linkedin' && !hasLinkedIn ? (
                  <p className="mt-auto rounded-md border border-dashed border-ink-line px-3 py-2 text-[11px] leading-relaxed text-muted">
                    My LinkedIn URL will be connected here once the profile is ready.
                  </p>
                ) : (
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="mt-auto inline-flex items-center justify-center rounded-lg border border-ink-line px-3.5 py-2 text-xs font-medium text-paper transition-colors hover:border-muted hover:bg-white/5"
                  >
                    {item.key === 'github'
                      ? 'View GitHub ↗'
                      : item.key === 'portfolio'
                        ? 'Explore Portfolio'
                        : item.key === 'documentation'
                          ? 'View Documentation'
                          : `View ${item.title}`}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-xl border border-ink-line bg-ink-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Connect With Me
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{PROFILE.professionalFocus}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {hasLinkedIn ? (
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c93c41]"
                  >
                    <ItemIcon name="linkedin" />
                    View LinkedIn
                  </a>
                ) : (
                  <div className="rounded-lg border border-dashed border-ink-line px-4 py-2.5 text-xs leading-relaxed text-muted">
                    LinkedIn profile coming soon — I'll connect it here once it's ready.
                  </div>
                )}
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-muted hover:bg-white/5"
                >
                  <ItemIcon name="github" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}