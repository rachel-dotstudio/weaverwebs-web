import * as React from 'react';

const TextButtonVariant = ['primary', 'basic'] as const;

type TextButtonProps = {
  variant?: (typeof TextButtonVariant)[number];
} & React.ComponentPropsWithRef<'button'>;

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ children, className, disabled: buttonDisabled }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={buttonDisabled}
        className={className}
      >
        {children}
      </button>
    );
  },
);

export default TextButton;
