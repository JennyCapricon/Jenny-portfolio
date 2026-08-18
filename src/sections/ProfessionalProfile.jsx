import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { DownloadIcon, ExternalIcon, GitHubIcon, LinkedInIcon } from '../components/icons.jsx';
import { PROFILE } from '../data/portfolio.js';

const ITEMS = [
  {
    key: 'linkedin',
    title: 'LinkedIn',
    description: 'My professional networking profile and connections.',
    href: PROFILE.linkedin,
    external: true,
    label: 'View LinkedIn ↗',
  },
  {
    key: 'github',
    title: 'GitHub',
    description: 'My code and project repositories.',
    href: PROFILE.github,
    external: true,
    label: 'View GitHub ↗',
  },
  {
    key: 'portfolio',
    title: 'Portfolio',
    description: 'My live portfolio website — this project, deployed.',
    href: PROFILE.portfolioUrl,
    external: true,
    label: 'View Portfolio ↗',
  },
  {
    key: 'documentation',
    title: 'Project Documentation',
    description: 'Detailed explanations of my major projects.',
    href: '#documentation',
    label: 'View Documentation',
  },
];

export default function ProfessionalProfile() {
  const hasLinkedIn = Boolean(PROFILE.linkedin);

  return (
    <section id="profile" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Resume"
          title="My CV"
          description="A closer look at my professional background — my resume, LinkedIn, GitHub and this portfolio."
        />

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-ink-line bg-ink-card p-8 sm:p-12">
            <span
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.05] blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
                  / curriculum vitae
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
                  My professional resume
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  My resume covers my education, skills and the real projects I've built — from
                  responsive front-ends to database-connected applications. View it online or
                  download the PDF.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-muted/60 hover:bg-white/[0.04]"
                >
                  View CV
                  <ExternalIcon />
                </a>
                <a
                  href={PROFILE.cvUrl}
                  download="Jenny_Nwadike_Frontend_Developer_CV.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong hover:shadow-[0_10px_28px_-12px_rgba(232,181,74,0.5)]"
                >
                  <DownloadIcon />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <Reveal key={item.key} delay={index * 80}>
              <a
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex h-full flex-col rounded-2xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <span
                  className="font-mono text-xs font-medium text-ink-line transition-colors duration-300 group-hover:text-accent/70"
                  aria-hidden="true"
                >
                  /0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                  {item.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-ink-line bg-ink-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
                  Connect With Me
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {PROFILE.professionalFocus}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {hasLinkedIn ? (
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
                  >
                    <LinkedInIcon />
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
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-muted/60 hover:bg-white/[0.04]"
                >
                  <GitHubIcon size={15} />
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
