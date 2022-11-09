import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const base = cva(
  ['flex flex-col items-start gap-0.5 border-2 rounded-xl w-fit '],
  {
    variants: {
      color: {
        info: 'border-info bg-info/10 text-info fill-info',
        success: 'border-success bg-success/10 text-success fill-success',
        warning: 'border-error bg-error/10 text-error fill-error',
      },
      size: {
        sm: 'min-w-[300px] text-sm px-2 py-2',
        md: 'min-w-[350px] text-sm px-3 py-3',
        lg: 'min-w-[400px] text-sm  px-4 py-3 ',
      },
    },
    defaultVariants: { size: 'md', color: 'info' },
  }
);

const icon = cva(['fill-inherit text-left'], {
  variants: {
    size: {
      sm: '',
      md: 'scale-110',
      lg: 'scale-125',
    },
  },
  defaultVariants: { size: 'md' },
});

const text = cva(['font-semibold flex-1'], {
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl',
    },
  },
  defaultVariants: { size: 'md' },
});

export interface BannerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof base> {
  color?: 'info' | 'success' | 'warning';
  lable?: string;
  title: string;
  description?: string;
}

const Banner: React.FC<BannerProps> = ({
  className,
  color = 'info',
  title,
  size,
  description,
}) => (
  <div className={base({ color, size, class: className })}>
    <div className="w-full flex items-center gap-2">
      <span>
        {color === 'info' && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={icon({ size })}
          >
            <path d="M8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0ZM8 4C8.53125 4 9 4.46875 9 5C9 5.5625 8.53125 6 8 6C7.4375 6 7 5.5625 7 5C7 4.46875 7.4375 4 8 4ZM9.25 12H6.75C6.3125 12 6 11.6875 6 11.25C6 10.8438 6.3125 10.5 6.75 10.5H7.25V8.5H7C6.5625 8.5 6.25 8.1875 6.25 7.75C6.25 7.34375 6.5625 7 7 7H8C8.40625 7 8.75 7.34375 8.75 7.75V10.5H9.25C9.65625 10.5 10 10.8438 10 11.25C10 11.6875 9.65625 12 9.25 12Z" />
          </svg>
        )}
        {color === 'success' && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={icon({ size })}
          >
            <path d="M0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8ZM11.5938 6.625C11.9375 6.28125 11.9375 5.75 11.5938 5.40625C11.25 5.0625 10.7188 5.0625 10.375 5.40625L7 8.78125L5.59375 7.40625C5.25 7.0625 4.71875 7.0625 4.375 7.40625C4.03125 7.75 4.03125 8.28125 4.375 8.625L6.375 10.625C6.71875 10.9688 7.25 10.9688 7.59375 10.625L11.5938 6.625Z" />
          </svg>
        )}
        {color === 'warning' && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={icon({ size })}
          >
            <path d="M8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0ZM7.25 4.75C7.25 4.34375 7.5625 4 8 4C8.40625 4 8.75 4.34375 8.75 4.75V8.75C8.75 9.1875 8.40625 9.5 8 9.5C7.5625 9.5 7.25 9.1875 7.25 8.75V4.75ZM8 12.5C7.4375 12.5 7 12.0625 7 11.5312C7 11 7.4375 10.5625 8 10.5625C8.53125 10.5625 8.96875 11 8.96875 11.5312C8.96875 12.0625 8.53125 12.5 8 12.5Z" />
          </svg>
        )}
      </span>
      <h2 className={text({ size })}>{title}</h2>
    </div>
    <p className="ml-6">{description}</p>
  </div>
);

export default Banner;
