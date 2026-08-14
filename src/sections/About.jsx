import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { PROFILE } from '../data/portfolio.js';

const FOCUS = [
  'Front-End Development',
  'Responsive Design',
  'React',
  'JavaScript',
  'API Integration',
  'Authentication',
  'Database-connected applications',
  'Supabase',
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Introduction"
          title="About Me"
          description="The developer behind the projects."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                I'm Jenny, a Front-End Web Developer passionate about turning ideas into practical
                digital experiences. I enjoy building responsive interfaces, interactive web
                applications and real-world products that solve problems.
              </p>
              <p>
                My work includes a multi-vendor e-commerce platform with buyer, vendor, importer
                and admin spaces — plus dashboards, authentication flows and API-connected
                applications that work with real data.
              </p>
              <p>
                I'm continuously learning by building: every project here is a real application,
                not just a tutorial exercise.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <aside className="rounded-xl border border-ink-line bg-ink-card p-6">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                My development focus
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {FOCUS.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-ink-line bg-ink-soft px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Find me
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-muted transition-colors hover:text-paper"
                >
                  GitHub — {PROFILE.githubLabel}
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="block break-all text-muted transition-colors hover:text-paper"
                >
                  Email — {PROFILE.email}
                </a>
              </div>

              <div className="mt-8">
                <Button href="#projects" size="sm">
                  See what I've built
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}