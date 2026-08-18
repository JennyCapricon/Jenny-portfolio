import Button from '../components/Button.jsx';
import {
  ArrowDownIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from '../components/icons.jsx';
import { PROFILE } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-48 right-[-14%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-accent/50 via-accent/15 to-transparent lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-24 pt-36 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-3xl">
          <p className="animate-enter inline-flex items-center gap-2.5 rounded-full border border-ink-line bg-ink-card/60 px-4 py-2 font-mono text-xs text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {PROFILE.availability}
          </p>

          <h1
            className="animate-enter mt-8 font-display text-[clamp(4.5rem,14vw,8rem)] font-bold leading-[0.92] tracking-[-0.03em] text-paper"
            style={{ animationDelay: '80ms' }}
          >
            Jenny<span className="text-accent">.</span>
          </h1>

          <p
            className="animate-enter mt-6 font-display text-xl font-medium tracking-tight text-paper/90 sm:text-2xl lg:text-[1.75rem]"
            style={{ animationDelay: '150ms' }}
          >
            Front-End <span className="text-accent">Web Developer</span>
          </p>

          <p
            className="animate-enter mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: '220ms' }}
          >
            {PROFILE.heroStatement}
          </p>
          <p
            className="animate-enter mt-3 max-w-xl text-sm leading-relaxed text-dim sm:text-base"
            style={{ animationDelay: '280ms' }}
          >
            {PROFILE.secondaryStatement}
          </p>

          <div
            className="animate-enter mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '340ms' }}
          >
            <Button href="#projects" size="lg">
              View My Projects
              <ArrowDownIcon size={15} />
            </Button>
            <Button href={PROFILE.cvUrl} download="Jenny_Nwadike_Frontend_Developer_CV.pdf" variant="secondary" size="lg">
              <DownloadIcon />
              Download CV
            </Button>
          </div>

          <div
            className="animate-enter mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-ink-line pt-7 text-sm text-muted"
            style={{ animationDelay: '400ms' }}
          >
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 break-all transition-colors hover:text-paper"
            >
              <MailIcon />
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-paper"
            >
              <GitHubIcon />
              GitHub
            </a>
            {PROFILE.linkedin && (
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-paper"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            )}
            <span className="inline-flex items-center gap-2">
              <LocationIcon />
              {PROFILE.location}
            </span>
          </div>
        </div>

        <div
          className="animate-enter relative mx-auto w-56 sm:w-64 lg:mx-0 lg:w-72 xl:w-80"
          style={{ animationDelay: '440ms' }}
        >
          <div
            className="absolute -inset-4 rounded-[2.5rem] bg-accent/[0.08] blur-2xl"
            aria-hidden="true"
          />
          <img
            src="/images/JANE.jpeg"
            alt="Portrait of Jenny, Front-End Web Developer"
            className="relative aspect-[3/4] w-full rounded-[1.75rem] border border-ink-line bg-ink-card object-cover object-top shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]"
          />
          <span
            className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            aria-hidden="true"
          />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-ink-line bg-ink-card px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted backdrop-blur-sm">
            {PROFILE.role}
          </span>
        </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent md:block"
      >
        <ArrowDownIcon size={18} />
      </a>
    </section>
  );
}
