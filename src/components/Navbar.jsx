import { useEffect, useState } from 'react';
import { NAV_LINKS, PROFILE } from '../data/portfolio.js';
import { CloseIcon, DownloadIcon, MenuIcon } from './icons.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-ink-line bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="group flex items-baseline gap-0.5 font-display text-xl font-bold tracking-tight text-paper"
          aria-label="JaneFrances — back to top"
        >
          <span className="transition-opacity group-hover:opacity-80">JaneFrances</span>
          <span className="text-accent transition-colors group-hover:text-accent-strong">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-paper' : 'text-muted hover:text-paper'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-[3px] h-1 rounded-full bg-accent transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.cvUrl}
            download="Jenny_Nwadike_Frontend_Developer_CV.pdf"
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:bg-accent-strong hover:shadow-[0_10px_28px_-12px_rgba(232,181,74,0.5)] md:inline-flex"
          >
            <DownloadIcon />
            Download CV
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-ink-card text-paper transition-colors hover:border-muted/60 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink-line bg-ink/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    active === link.href ? 'bg-white/[0.06] text-paper' : 'text-muted hover:bg-white/[0.04] hover:text-paper'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={PROFILE.cvUrl}
                download="Jenny_Nwadike_Frontend_Developer_CV.pdf"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-accent-strong"
              >
                <DownloadIcon />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
