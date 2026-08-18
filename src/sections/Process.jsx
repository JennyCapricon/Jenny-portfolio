import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { PROCESS_STEPS } from '../data/portfolio.js';

export default function Process() {
  return (
    <section id="process" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="How I work"
          title="How I Build"
          description="A clear, consistent process I follow on every project."
        />

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {PROCESS_STEPS.map((item, index) => (
            <Reveal key={item.step} delay={index * 80}>
              <li className="group relative h-full rounded-2xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]">
                <span
                  className="font-mono text-3xl font-bold text-ink-line transition-colors duration-300 group-hover:text-accent/80"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                {index < PROCESS_STEPS.length - 1 && (
                  <span
                    className="absolute -right-3.5 top-1/2 hidden -translate-y-1/2 text-ink-line lg:block"
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
