import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import {
  CartIcon,
  DashboardIcon,
  DevicesIcon,
  GitHubIcon,
  LayersIcon,
  MailIcon,
} from '../components/icons.jsx';
import { BUILD_ITEMS, JOURNEY_STAGES, PROFILE, WHY_ME } from '../data/portfolio.js';

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

const BUILD_ICONS = [CartIcon, DashboardIcon, DevicesIcon, LayersIcon];

function SubHeading({ index, label, description }) {
  return (
    <Reveal className="flex flex-col items-center gap-3 text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
        {index} — {label}
      </p>
      {description && (
        <p className="max-w-xl text-sm leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="The developer behind the projects — my story, what I build and where I'm headed."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-7">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                <span className="font-display text-lg font-semibold text-paper">
                  Who I am —{' '}
                </span>
                I'm {PROFILE.name}, a Front-End Web Developer passionate about turning ideas into practical
                digital experiences. I enjoy building responsive interfaces, interactive web
                applications and real-world products that solve problems.
              </p>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                <span className="font-display text-lg font-semibold text-paper">
                  My journey —{' '}
                </span>
                I started with the fundamentals of the web — HTML, CSS and JavaScript — and grew
                into component-based interfaces with React, utility-first styling with Tailwind
                CSS, and finally full applications connected to real databases and authentication.
                Today I ship multi-role, database-connected products used across different types of
                users.
              </p>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                <span className="font-display text-lg font-semibold text-paper">
                  What I build —{' '}
                </span>
                My work includes a multi-vendor e-commerce platform with buyer, vendor, importer
                and admin spaces — plus dashboards, authentication flows and API-connected
                applications that work with real data.
              </p>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                <span className="font-display text-lg font-semibold text-paper">
                  My goals —{' '}
                </span>
                I'm continuously learning by building: every project here is a real application,
                not just a tutorial exercise. My focus is on creating secure, responsive and
                genuinely useful products.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <aside className="relative overflow-hidden rounded-2xl border border-ink-line bg-ink-card p-6 sm:p-8">
              <span
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                aria-hidden="true"
              />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
                / focus
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {FOCUS.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-ink-line bg-ink-soft px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
                / find me
              </p>
              <div className="mt-5 space-y-3.5 text-sm">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 break-all text-muted transition-colors hover:text-paper"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-ink-line bg-ink-soft text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <GitHubIcon size={14} />
                  </span>
                  {PROFILE.githubLabel}
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center gap-3 break-all text-muted transition-colors hover:text-paper"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-ink-line bg-ink-soft text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <MailIcon size={14} />
                  </span>
                  {PROFILE.email}
                </a>
              </div>

              <div className="mt-8">
                <Button href="#projects" variant="secondary" size="sm">
                  See what I've built
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="mt-24">
          <SubHeading
            index="01"
            label="What I Build"
            description="The types of products I create — from storefronts to full role-based applications."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUILD_ITEMS.map((item, index) => {
              const Icon = BUILD_ICONS[index];
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="group h-full rounded-2xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-line bg-ink-soft text-accent transition-colors duration-300 group-hover:border-accent/40">
                      <Icon size={17} />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-24">
          <SubHeading
            index="02"
            label="My Development Journey"
            description="From the fundamentals of the web to full, database-connected applications."
          />
          <Reveal className="mt-12">
            <div className="relative">
              <span
                className="absolute inset-x-10 top-[15px] hidden h-px bg-ink-line lg:block"
                aria-hidden="true"
              />
              <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {JOURNEY_STAGES.map((stage, index) => (
                  <li key={stage.phase} className="relative">
                    <span
                      className="absolute left-0 top-[9px] hidden h-3 w-3 rounded-full border-2 border-accent bg-ink lg:block"
                      aria-hidden="true"
                    />
                    <article className="h-full rounded-2xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                      <span className="font-mono text-xs font-medium text-dim" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                        {stage.label}
                      </p>
                      <h3 className="mt-2 font-display text-base font-semibold text-paper">
                        {stage.phase}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {stage.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {stage.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-md border border-ink-line bg-ink-soft px-2 py-0.5 font-mono text-[10px] text-muted"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <SubHeading
            index="03"
            label="Why Work With Me"
            description="What I bring to every project I touch."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ME.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="group h-full rounded-2xl border border-ink-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <span
                    className="font-mono text-2xl font-bold text-ink-line transition-colors duration-300 group-hover:text-accent/70"
                    aria-hidden="true"
                  >
                    /0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
