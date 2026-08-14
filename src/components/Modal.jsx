import { useEffect, useRef } from 'react';

export default function Modal({ open, onClose, labelledBy, children, wide = false }) {
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    previousFocus.current = document.activeElement;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previousFocus.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onBackdropClick}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`relative max-h-[85vh] w-full overflow-y-auto rounded-xl border border-ink-line bg-ink-card shadow-2xl outline-none ${
          wide ? 'max-w-4xl' : 'max-w-3xl'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-ink-line bg-ink-soft text-muted transition-colors hover:border-muted hover:text-paper"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}