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
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
  const variants = {
    primary:
      'bg-accent text-white hover:bg-[#c93c41] active:bg-[#b33236]',
    secondary:
      'border border-ink-line text-paper hover:border-muted hover:bg-white/5',
    ghost: 'text-muted hover:text-paper hover:bg-white/5',
  };
  const sizes = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
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