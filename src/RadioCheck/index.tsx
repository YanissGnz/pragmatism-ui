import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const base = cva(
  [
    //** General Layout
    'flex items-center justify-center stroke-none',
    'rounded-full border fill-none',
    'peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus',
    'peer-checked:border-0',
    'peer-disabled:cursor-default peer-disabled:border-neutral-300',
    //** Light mode
    'border-neutral-500',
    'peer-checked:peer-disabled:bg-neutral-200',
    //** Dark mode
    'dark:border-neutral-300',
    'dark:peer-disabled:border-neutral-700',
    'dark:peer-checked:peer-disabled:bg-neutral-700',
  ],
  {
    variants: {
      size: {
        sm: 'w-4 h-4',
        md: 'w-[18px] h-[18px]',
        lg: 'w-5 h-5',
      },
      color: {
        primary:
          'peer-checked:bg-primary peer-checked:stroke-primary-contrast-text',
        secondary:
          'peer-checked:bg-secondary peer-checked:stroke-secondary-contrast-text',
      },
    },
    defaultVariants: { size: 'md', color: 'primary' },
  }
);

const lableStyle = cva(
  [
    'dark:text-neutral',
    'peer-disabled:cursor-default peer-disabled:text-neutral-700 dark:peer-disabled:text-neutral-500',
  ],
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: '',
        lg: 'text-lg',
      },
    },
    defaultVariants: { size: 'md' },
  }
);
export interface RadioCheckProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof base> {
  color?: 'primary' | 'secondary';
  lable?: string;
}

export const RadioCheck: React.FC<RadioCheckProps> = ({
  className,
  color,
  size,
  lable,
  ...props
}) => (
  <label className="cursor-pointer select-none inline-flex items-center gap-2">
    <input type="radio" className="sr-only peer" {...props} />
    <span className={base({ size, color })}>
      <svg
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.29999 5.09998L4.29999 7.09998L8.79999 1.09998"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className={lableStyle({ size })}>{lable}</span>
  </label>
);
