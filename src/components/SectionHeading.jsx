import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      {eyebrow && (
        <p className="inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent">
          <span className="hidden h-px w-8 bg-accent/40 sm:block" aria-hidden="true" />
          {eyebrow}
          <span className="hidden h-px w-8 bg-accent/40 sm:block" aria-hidden="true" />
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-paper text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
