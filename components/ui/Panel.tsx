import React from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  children: React.ReactNode;
}

export function Panel({
  variant = 'default',
  children,
  className = '',
  ...props
}: PanelProps) {
  const variants = {
    default: 'bg-soft-charcoal/80 border border-charcoal-border',
    elevated:
      'bg-soft-charcoal border border-charcoal-border',
    bordered: 'bg-transparent border border-charcoal-border',
  };

  return (
    <div
      className={`rounded-md p-6 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
