import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const containedButton = cva(
  'rounded-xl font-semibold transition-shadow ease-linear select-none flex items-center justify-around  outline-2 outline-offset-2 focus-visible:outline-blue-500',
  {
    variants: {
      color: {
        primary: [
          'bg-primary text-primary-contrast-text ',
          'hover:bg-primary-700 active:bg-primary-500',
          'disabled:bg-neutral-100 disabled:text-neutral-600 disabled:shadow-none!',
        ],
        secondary: [
          'bg-secondary text-secondary-contrast-text',
          'hover:bg-secondary-700 active:bg-secondary-500',
        ],
      },
      size: {
        xs: ['px-3 py-2 text-sm  gap-2'],
        sm: ['px-4 py-3 text-sm gap-2'],
        md: ['px-5 py-3 gap-4'],
        lg: ['px-6 py-4 text-lg gap-4'],
        xl: ['px-7 py-5 text-lg gap-5'],
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-max',
      },
      elevated: {
        true: 'shadow-lg',
      },
    },
    compoundVariants: [
      {
        size: 'md',
        fullWidth: false,
        elevated: false,
        color: 'primary',
      },
    ],
    defaultVariants: {
      size: 'md',
      elevated: false,
      fullWidth: false,
      color: 'primary',
    },
  }
);

const outlinedButton = cva(
  'rounded-xl font-semibold transition-shadow ease-linear select-none flex items-center gap-2 outline-2 outline-offset-2 focus-visible:outline-blue-500',
  {
    variants: {
      color: {
        primary: [
          'border border-neutral-300 text-primary',
          'hover:bg-neutral-100 active:bg-neutral-200',
          'disabled:bg-neutral-100 disabled:text-neutral-600 disabled:shadow-none!',
        ],
        secondary: [
          'border border-neutral-300 text-secondary',
          'hover:bg-neutral-100 active:bg-neutral-200',
          'disabled:bg-neutral-100 disabled:text-neutral-600 disabled:shadow-none!',
        ],
      },
      size: {
        xs: ['px-3 py-2 text-sm  gap-2'],
        sm: ['px-4 py-3 text-sm gap-2'],
        md: ['px-5 py-3 gap-4'],
        lg: ['px-6 py-4 text-lg gap-4'],
        xl: ['px-7 py-5 text-lg gap-5'],
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-max',
      },
    },
    defaultVariants: {
      size: 'md',
      fullWidth: false,
      color: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof containedButton | typeof outlinedButton> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  elevated?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'contained',
  size,
  elevated = false,
  fullWidth,
  color,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button
      className={
        variant === 'contained'
          ? containedButton({
              size,
              color,
              fullWidth,
              elevated,
              class: className,
            })
          : outlinedButton({
              size,
              color,
              fullWidth,
              class: className,
            })
      }
      {...props}
    >
      {startIcon && <span>{startIcon}</span>}
      {props.children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
