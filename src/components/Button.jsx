export default function Button({
  as: Tag = 'a',
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type,
  children,
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
  const variants = {
    primary:
      'bg-accent text-ink hover:bg-accent-strong active:bg-accent-deep hover:shadow-[0_10px_28px_-12px_rgba(232,181,74,0.5)]',
    secondary:
      'border border-ink-line text-paper hover:border-muted/60 hover:bg-white/[0.04]',
    ghost: 'text-muted hover:text-paper hover:bg-white/[0.04]',
  };
  const sizes = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-[15px]',
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (Tag === 'button') {
    return (
      <button type={type || 'button'} onClick={onClick} className={cls} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <Tag href={href} onClick={onClick} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
