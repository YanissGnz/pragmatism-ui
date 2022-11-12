import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const slider = cva(
  [
    'relative inline-block rounded-full cursor-pointer transition-all ',
    'before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:transition-all',
  ],
  {
    variants: {
      color: {
        primary: 'bg-neutral-400 peer-checked:bg-primary',
        secondary: 'bg-neutral-400 peer-checked:bg-secondary',
      },
      size: {
        sm: [
          'h-5 w-9',
          'before:h-4 before:w-4 before:left-0.5 peer-checked:before:translate-x-full',
        ],
        md: [
          'h-6 w-11',
          'before:h-[18px] before:w-[18px] before:left-1 peer-checked:before:translate-x-full',
        ],
        lg: [
          'h-8 w-16',
          'before:h-6 before:w-6 before:left-1 peer-checked:before:translate-x-8',
        ],
      },
    },
    defaultVariants: { color: 'primary', size: 'md' },
  }
);

const icon = cva('absolute top-1/2 -translate-y-1/2', {
  variants: {
    size: {
      sm: 'left-1 ',
      md: 'left-2 scale-125',
      lg: 'left-4 scale-150',
    },
    withIcon: {
      false: 'hidden',
    },
  },
  defaultVariants: { size: 'md', withIcon: true },
});

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof slider> {
  color?: 'primary' | 'secondary';
  withIcon?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  color,
  size,
  withIcon = false,
  ...props
}) => (
  <label className="inline-flex relative items-center cursor-pointer rounded-full focus-within:outline focus-within:outline-offset-1 focus-within:outline-blue-500">
    <input
      type="checkbox"
      value=""
      defaultChecked
      className="sr-only peer"
      {...props}
    />
    <div className={slider({ color, size, class: className })}></div>
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={icon({ size, withIcon })}
    >
      <path
        fill="white"
        d="M9.17969 0.320312C9.43359 0.554688 9.43359 0.964844 9.17969 1.19922L4.17969 6.19922C3.94531 6.45312 3.53516 6.45312 3.30078 6.19922L0.800781 3.69922C0.546875 3.46484 0.546875 3.05469 0.800781 2.82031C1.03516 2.56641 1.44531 2.56641 1.67969 2.82031L3.73047 4.87109L8.30078 0.320312C8.53516 0.0664062 8.94531 0.0664062 9.17969 0.320312Z"
      />
    </svg>
  </label>
);
