import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import nextId from 'react-id-generator';

const wrapper = cva(
  [
    ' dark:text-neutral dark:fill-neutral-400 dark:stroke-neutral-400',
    'flex flex-col',
  ],
  {
    variants: {
      disabled: {
        true: [
          //** Light mode
          'text-neutral-500',
          //** Dark mode
          'dark:text-neutral-600',
        ],
      },
      fullWidth: {
        false: 'w-max',
      },
    },
    defaultVariants: { disabled: false, fullWidth: false },
  }
);

const root = cva(
  [
    //** General Layout
    'w-full p-3',
    'flex items-center gap-3',
    'rounded-xl',
    'outline-neutral-300',
    'placeholder:text-neutral-500',
    'outline outline-1 focus-within:outline-2',
    '[&>*:nth-child(2)]:flex-1 [&>*:nth-child(2)]:text-left',
  ],
  {
    variants: {
      color: {
        primary: ['focus-visible:outline-primary'],
        secondary: ['focus-visible:outline-secondary'],
      },
      disabled: {
        true: [
          'outline-0',
          //** Light mode
          'bg-neutral-200',
          'text-neutral-600',
          'stroke-neutral-600',
          'fill-neutral-600',
          //** Dark mode
          'dark:bg-neutral-700',
          'dark:text-neutral-300',
          'dark:stroke-neutral-300',
          'dark:fill-neutral-300',
        ],
      },
      error: { true: ['outline-error', 'focus-within:outline-error'] },
    },
    defaultVariants: { disabled: false, color: 'primary' },
  }
);

export interface SelectProps
  extends SelectPrimitive.SelectProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'dir' | 'defaultValue'>,
    VariantProps<typeof root> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'primary' | 'secondary';
  lable?: string;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  className,
  startIcon,
  endIcon,
  lable,
  disabled,
  helperText,
  errorText,
  color,
  error,
  fullWidth = false,
  ...props
}) => {
  return (
    <div className={wrapper({ disabled, fullWidth, class: className })}>
      <label htmlFor={props.id} className="mb-1 font-medium dark:text-inherit">
        {lable}
      </label>
      <SelectPrimitive.Root disabled={disabled}>
        <SelectPrimitive.SelectTrigger
          className={root({ color, disabled, error })}
        >
          <span id={nextId('start-icon-')}>{startIcon}</span>
          <SelectPrimitive.Value placeholder="Select" />
          <SelectPrimitive.SelectIcon>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6875 1.49219L6.46484 6.49609C6.30078 6.63281 6.13672 6.6875 6 6.6875C5.83594 6.6875 5.67188 6.63281 5.53516 6.52344L0.285156 1.49219C0.0117188 1.24609 0.0117188 0.808594 0.257812 0.5625C0.503906 0.289062 0.941406 0.289062 1.1875 0.535156L6 5.12891L10.7852 0.535156C11.0312 0.289062 11.4688 0.289062 11.7148 0.5625C11.9609 0.808594 11.9609 1.24609 11.6875 1.49219Z"
                fill="#68778D"
              />
            </svg>
          </SelectPrimitive.SelectIcon>
        </SelectPrimitive.SelectTrigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="overflow-hidden bg-neutral text-black dark:bg-neutral-900 dark:text-neutral rounded-lg shadow-lg">
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-6 bg-inherit text-inherit cursor-default">
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="p-2">
              {props.children}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-6 bg-inherit text-inherit cursor-default">
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {helperText && !error && (
        <span className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {helperText}
        </span>
      )}
      {error && (
        <span className="mt-1 text-sm font-medium text-error flex items-center gap-1">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            className="fill-error"
          >
            <path d="M7 0.75C3.11719 0.75 0 3.89453 0 7.75C0 11.6328 3.11719 14.75 7 14.75C10.8555 14.75 14 11.6328 14 7.75C14 3.89453 10.8555 0.75 7 0.75ZM6.34375 4.90625C6.34375 4.55078 6.61719 4.25 7 4.25C7.35547 4.25 7.65625 4.55078 7.65625 4.90625V8.40625C7.65625 8.78906 7.35547 9.0625 7 9.0625C6.61719 9.0625 6.34375 8.78906 6.34375 8.40625V4.90625ZM7 11.6875C6.50781 11.6875 6.125 11.3047 6.125 10.8398C6.125 10.375 6.50781 9.99219 7 9.99219C7.46484 9.99219 7.84766 10.375 7.84766 10.8398C7.84766 11.3047 7.46484 11.6875 7 11.6875Z" />
          </svg>
          {errorText}
        </span>
      )}
    </div>
  );
};
