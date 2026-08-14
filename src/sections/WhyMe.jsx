import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { WHY_ME } from '../data/portfolio.js';

const ICONS = ['user', 'solver', 'responsive', 'learn'];

function WhyIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    'aria-hidden': true,
  };
  if (name === 'responsive')
    return (
      <svg {...common}>
        <rect x="2" y="4" width="14" height="16" rx="2" />
        <path d="M16 8h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6M5 18h2" />
      </svg>
    );
  if (name === 'solver')
    return (
      <svg {...common}>
        <path d="M12 21a9 9 0 1 1 9-9M21 3 12 12" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
        <path d="M16.5 16.5 17.5 21l2-2 2 2 1-4.5" />
      </svg>
    );
  if (name === 'learn')
    return (
      <svg {...common}>
        <path d="M12 3 2 7.5 12 12l10-4.5L12 3Z" />
        <path d="M5 10v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
        <path d="M22 7.5V13" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" strokeLinecap="round" />
    </svg>
  );
}

export default function WhyMe() {
  return (
    <section className="border-t border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Why me"
          title="Why Work With Me"
          description="What I bring to every project I touch."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ME.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="h-full rounded-xl border border-ink-line bg-ink-card p-6 transition-colors duration-300 hover:border-white/20">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-ink-soft text-accent">
                  <WhyIcon name={ICONS[index]} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-paper">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}