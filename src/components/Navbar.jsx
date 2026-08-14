import { useEffect, useState } from 'react';
import { NAV_LINKS, PROFILE } from '../data/portfolio.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? 'border-ink-line bg-ink/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-tight text-paper transition-opacity hover:opacity-80"
          aria-label="Jenny — back to top"
        >
          <span className="text-accent">&gt;_</span> Jenny
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg border border-ink-line px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-muted hover:bg-white/5 lg:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-ink-soft text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-line bg-ink/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-paper transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-paper"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}