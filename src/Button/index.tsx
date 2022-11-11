import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const containedButton = cva(
  [
    //** General Layout
    'font-semibold',
    'inline-flex  items-center justify-around',
    'transition-shadow ease-linear',
    'select-none rounded-xl outline-2 outline-offset-2 focus:outline-focus',
    //** Light mode
    'disabled:bg-neutral-200 disabled:text-neutral-600 disabled:shadow-none!',
    //** Dark mode
    'dark:disabled:bg-neutral-700  dark:disabled:text-neutral-300'
  ],
  {
    variants: {
      color: {
        primary: [
          'text-primary-contrast-text ',
          'bg-primary',
          'hover:bg-primary/80',
          'active:bg-primary/90'
        ],
        secondary: [
          'text-secondary-contrast-text',
          'bg-secondary',
          'hover:bg-secondary/80',
          'active:bg-secondary/90'
        ]
      },
      size: {
        xs: ['px-3 py-2 text-sm  gap-2'],
        sm: ['px-4 py-3 text-sm gap-2'],
        md: ['px-5 py-3 text-base gap-4'],
        lg: ['px-6 py-4 text-lg gap-4'],
        xl: ['px-7 py-5 text-xl gap-5']
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-max'
      },
      elevated: {
        true: 'shadow-lg'
      }
    },
    compoundVariants: [
      {
        size: 'md',
        fullWidth: false,
        elevated: false,
        color: 'primary'
      }
    ],
    defaultVariants: {
      size: 'md',
      elevated: false,
      fullWidth: false,
      color: 'primary'
    }
  }
);

const outlinedButton = cva(
  [
    //** General Layout
    'font-semibold',
    'flex items-center gap-2',
    'transition-shadow ease-linear',
    'border select-none rounded-xl outline-2 outline-offset-2 focus-visible:outline-blue-500',
    //** Light mode
    'disabled:bg-neutral-200 disabled:text-neutral-600 disabled:shadow-none!',
    //** Dark mode
    'dark:disabled:bg-neutral-700  dark:disabled:text-neutral-300'
  ],
  {
    variants: {
      color: {
        primary: [
          //** Light mode
          'text-primary',
          'border-neutral-300',
          'hover:bg-primary/10',
          'active:bg-primary/20',
          //** Dark mode
          'dark:text-primary-light',
          'dark:border-neutral-100',
          'dark:hover:bg-primary/5',
          'dark:active:bg-primary/20'
        ],
        secondary: [
          //** Light mode
          'text-secondary',
          'border-neutral-300',
          'hover:bg-setext-secondary/10',
          'active:bg-setext-secondary/20',
          //** Dark mode
          'dark:text-secondary-light',
          'dark:border-neutral-100',
          'dark:hover:bg-secondary/5',
          'dark:active:bg-secondary/20'
        ]
      },
      size: {
        xs: ['px-3 py-2 text-sm  gap-2'],
        sm: ['px-4 py-3 text-sm gap-2'],
        md: ['px-5 py-3 gap-4'],
        lg: ['px-6 py-4 text-lg gap-4'],
        xl: ['px-7 py-5 text-lg gap-5']
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-max'
      }
    },
    defaultVariants: {
      size: 'md',
      fullWidth: false,
      color: 'primary'
    }
  }
);

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof containedButton | typeof outlinedButton> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
              class: className
            })
          : outlinedButton({
              size,
              color,
              fullWidth,
              class: className
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
