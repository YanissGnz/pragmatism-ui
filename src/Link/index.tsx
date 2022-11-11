import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import nextId from 'react-id-generator';

const base = cva(
  [
    'cursor-pointer',
    'flex items-center gap-1',
    'outline-none outline-offset-4 focus-visible:outline-2 focus-visible:outline-blue-500 '
  ],
  {
    variants: {
      color: {
        primary:
          'text-primary hover:text-primary-700 fill-primary stroke-primary',
        secondary:
          'text-secondary hover:text-secondary-700 fill-secondary stroke-secondary',
        default: [
          //** Light mode
          'text-black fill-black stroke-black',
          //** Dark mode
          'dark:text-neutral dark:fill-neutral dark:stroke-neutral'
        ]
      },
      disabled: {
        true: [
          'outline-none! pointer-events-none',
          //** Light mode
          'text-neutral-500 fill-neutral-500 stroke-neutral-500',
          //** Dark mode
          'dark:text-neutral-600 dark:fill-neutral-600 dark:stroke-neutral-600'
        ]
      }
    },
    defaultVariants: { color: 'primary', disabled: false }
  }
);

export interface LinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof base> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({
  className,
  disabled,
  color,
  startIcon,
  endIcon,
  external = false,
  ...props
}) => {
  if (external)
    return (
      <a className={base({ color, disabled, class: className })} {...props}>
        {props.children}
        <span id={nextId('end-icon-')}>
          <svg
            width="10"
            height="9"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M7.3125 1.375C6.98438 1.375 6.75 1.14062 6.75 0.8125C6.75 0.507812 6.98438 0.25 7.3125 0.25H10.6875C10.9922 0.25 11.25 0.507812 11.25 0.8125V4.1875C11.25 4.51562 10.9922 4.75 10.6875 4.75C10.3594 4.75 10.125 4.51562 10.125 4.1875V2.17188L5.4375 6.83594C5.22656 7.07031 4.875 7.07031 4.66406 6.83594C4.42969 6.625 4.42969 6.27344 4.66406 6.03906L9.32812 1.375H7.3125ZM0.75 2.3125C0.75 1.60938 1.33594 1 2.0625 1H4.6875C4.99219 1 5.25 1.25781 5.25 1.5625C5.25 1.89062 4.99219 2.125 4.6875 2.125H2.0625C1.94531 2.125 1.875 2.21875 1.875 2.3125V9.4375C1.875 9.55469 1.94531 9.625 2.0625 9.625H9.1875C9.28125 9.625 9.375 9.55469 9.375 9.4375V6.8125C9.375 6.50781 9.60938 6.25 9.9375 6.25C10.2422 6.25 10.5 6.50781 10.5 6.8125V9.4375C10.5 10.1641 9.89062 10.75 9.1875 10.75H2.0625C1.33594 10.75 0.75 10.1641 0.75 9.4375V2.3125Z" />
          </svg>
        </span>
      </a>
    );
  return (
    <a className={base({ color, disabled, class: className })} {...props}>
      <span id={nextId('start-icon-')}>{startIcon}</span>
      {props.children}
      <span id={nextId('end-icon-')}>{endIcon}</span>
    </a>
  );
};

export default Link;
