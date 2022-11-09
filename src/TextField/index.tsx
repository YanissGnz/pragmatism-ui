import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const wrapper = cva('flex flex-col', {
  variants: {
    disabled: {
      true: 'text-neutral-600',
    },
  },
  defaultVariants: { disabled: false },
});

const base = cva(
  [
    'flex items-center gap-2 ',
    'p-3 rounded-xl outline-neutral-300 placeholder:text-neutral-500 outline outline-1 focus-within:outline-2',
  ],
  {
    variants: {
      color: {
        primary: ['focus-within:outline-primary '],
        secondary: ['focus-within:outline-secondary'],
      },
      disabled: {
        true: 'text-neutral-600 outline-0 bg-neutral-100',
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

const textField = cva(['outline-none flex-1'], {
  variants: {
    fullWidth: {
      true: 'w-full',
      false: 'w-max',
    },
  },
  defaultVariants: { fullWidth: false },
});

export interface TextFieldProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof base> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'primary' | 'secondary';
  lable?: string;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  className,
  startIcon,
  endIcon,
  error,
  lable,
  disabled,
  helperText,
  errorText,
  fullWidth,
  color,
  ...props
}) => {
  return (
    <div className={wrapper({ disabled, class: className })}>
      <label htmlFor={props.id} className="mb-1 font-medium">
        {lable}
      </label>
      <div className={base({ disabled, error, color })}>
        <span id={props.id + '-startIcon'}>{startIcon}</span>
        <input
          className={textField({ fullWidth })}
          {...props}
          disabled={disabled}
        />
        <span id={props.id + 'endIcon'}>{endIcon}</span>
      </div>
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

export default TextField;
