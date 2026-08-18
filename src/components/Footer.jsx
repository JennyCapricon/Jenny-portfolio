import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx';
import { PROFILE } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-9 sm:px-8 md:flex-row">
        <div className="flex items-center gap-4">
          <p className="font-display text-lg font-bold tracking-tight text-paper">
            Jenny<span className="text-accent">.</span>
          </p>
          <span className="hidden text-sm text-muted sm:inline">
            © {new Date().getFullYear()} Jenny. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GitHubIcon size={15} />
          </a>
          {PROFILE.linkedin && (
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon size={15} />
            </a>
          )}
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email Jenny"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <MailIcon size={15} />
          </a>
        </div>

        <p className="text-xs text-muted md:hidden">
          © {new Date().getFullYear()} Jenny. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
