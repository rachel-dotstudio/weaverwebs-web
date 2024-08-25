import * as React from 'react';

const PrimaryLinkVariant = ['primary', 'secondary'] as const;

type PrimaryLinkProps = {
  variant?: (typeof PrimaryLinkVariant)[number];
  className?: string;
  href: string;
  children: React.ReactNode;
};

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  ({ children, variant = 'primary', className = '', href }, ref) => {
    return (
      <a href={href} className={`link link--${variant} ${className}`} ref={ref}>
        {children}
      </a>
    );
  },
);

export default PrimaryLink;
