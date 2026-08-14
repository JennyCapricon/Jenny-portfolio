import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { JOURNEY_STAGES } from '../data/portfolio.js';

export default function Journey() {
  return (
    <section id="journey" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Growth"
          title="My Development Journey"
          description="The path I've taken from the fundamentals to building full, real-world applications."
        />

        <ol className="relative mt-16 space-y-10 before:absolute before:inset-y-2 before:left-4 before:w-px before:bg-ink-line sm:grid sm:grid-cols-2 sm:space-y-12 sm:gap-y-0 sm:before:left-1/2 sm:before:-translate-x-1/2">
          {JOURNEY_STAGES.map((stage, index) => {
            const flip = index % 2 === 1;
            return (
              <li key={stage.phase} className="relative pl-12 sm:w-1/2 sm:pl-0">
                <span
                  className="absolute left-4 top-2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-ink-line bg-ink-soft font-mono text-[11px] font-bold text-accent sm:left-1/2"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={flip ? 'sm:pl-10' : 'sm:pr-10'}>
                  <Reveal delay={index * 60}>
                    <article className="rounded-xl border border-ink-line bg-ink-card p-6 transition-colors duration-300 hover:border-white/20">
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        {stage.label}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-paper">{stage.phase}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{stage.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {stage.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-md border border-ink-line bg-ink-soft px-2 py-0.5 font-mono text-[11px] text-muted"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">
            This timeline reflects my learning and development journey — the projects above are the
            practical result of each stage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}