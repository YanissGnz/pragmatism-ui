import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const wrapper = cva('flex flex-col', {
  variants: {
    disabled: {
      true: 'text-neutral-600',
    },
  },
  defaultVariants: { disabled: false },
});

const root = cva(
  [
    'flex items-center gap-2 select-none',
    'p-3 rounded-xl outline-neutral-300 placeholder:text-neutral-500 outline outline-1 focus-visible:outline-2',
  ],
  {
    variants: {
      color: {
        primary: ['focus-visible:outline-primary'],
        secondary: ['focus-visible:outline-secondary'],
      },
      disabled: {
        true: 'text-neutral-600 outline-0 bg-neutral-100 pointer-events-none',
      },
      error: { true: ['outline-error', 'focus-within:outline-error'] },
      fullWidth: {
        true: 'w-full',
        false: 'w-max',
      },
    },
    defaultVariants: { disabled: false, fullWidth: false, color: 'primary' },
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
}

const Select: React.FC<SelectProps> = ({
  className,
  startIcon,
  endIcon,
  lable,
  disabled,
  helperText,
  errorText,
  color,
  error,
  ...props
}) => {
  return (
    <div className={wrapper({ disabled, class: className })}>
      <label htmlFor={props.id} className="mb-1 font-medium">
        {lable}
      </label>
      <SelectPrimitive.Root>
        <SelectPrimitive.SelectTrigger
          className={root({ color, disabled, error })}
        >
          {startIcon}
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
          <SelectPrimitive.Content className="overflow-hidden bg-white rounded-lg shadow-lg">
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
        <span className="mt-1 text-sm text-neutral-600">{helperText}</span>
      )}
      {error && (
        <span className="mt-1 text-sm font-medium text-error flex items-center gap-1">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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

export default Select;
