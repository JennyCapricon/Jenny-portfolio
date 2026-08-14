import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}