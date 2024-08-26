// src/components/buttons/Button.tsx
// Button component

import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import '@/styles/components/buttons.scss';

const ButtonVariant = ['primary', 'secondary', 'outline', 'gradient'] as const;
const ButtonSize = ['sm', 'base'] as const;

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  href?: string; // Add href prop for the URL
  leftIcon?: IconType | LucideIcon;
  rightIcon?: IconType | LucideIcon;
  classNames?: {
    leftIcon?: string;
    rightIcon?: string;
  };
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      href, // Destructure the href prop
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      classNames,
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    const content = (
      <>
        {isLoading && <ImSpinner2 className="button__spinner" />}
        {LeftIcon && <LeftIcon className="button__icon button__icon--left" />}
        {children}
        {RightIcon && (
          <RightIcon className="button__icon button__icon--right" />
        )}
      </>
    );

    if (href) {
      // Render an <a> tag if href is provided
      return (
        <a
          href={href}
          ref={ref as any}
          className={`btn btn-${variant} button--${size} ${
            classNames?.leftIcon ? classNames.leftIcon : ''
          } ${classNames?.rightIcon ? classNames.rightIcon : ''}`}
        >
          {content}
        </a>
      );
    }

    // Default to rendering a <button> tag
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={`btn btn-${variant} button--${size} ${
          classNames?.leftIcon ? classNames.leftIcon : ''
        } ${classNames?.rightIcon ? classNames.rightIcon : ''}`}
      >
        {content}
      </button>
    );
  },
);

export default Button;