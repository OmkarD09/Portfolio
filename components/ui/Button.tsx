import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-apricot focus:ring-offset-2 focus:ring-offset-obsidian disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-electric-apricot text-obsidian hover:bg-apricot-hover font-semibold active:translate-y-px',
    secondary:
      'bg-soft-charcoal text-warm-ivory border border-charcoal-border hover:border-natural-taupe active:translate-y-px',
    outline:
      'bg-transparent text-warm-ivory border border-charcoal-border hover:border-electric-apricot active:translate-y-px',
    ghost:
      'bg-transparent text-natural-taupe hover:text-warm-ivory hover:bg-soft-charcoal',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-sm gap-1.5',
    md: 'text-sm px-4 py-2 rounded-sm gap-2',
    lg: 'text-base px-6 py-2.5 rounded-md gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
