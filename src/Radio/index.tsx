import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const base = cva(
  [
    'rounded-full border border-neutral-500 flex items-center justify-center stroke-none',
    'peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-400',
    'peer-disabled:cursor-default peer-disabled:border-neutral-300 peer-checked:peer-disabled:bg-neutral-400 ',
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
          'peer-checked:border-0 peer-checked:bg-primary peer-checked:text-neutral peer-checked:stroke-white peer-checked:',
        secondary:
          'peer-checked:border-0 peer-checked:bg-secondary peer-checked:text-neutral peer-checked:stroke-white',
      },
    },
    defaultVariants: { size: 'md', color: 'primary' },
  }
);

const lableStyle = cva(['peer-disabled:text-neutral-600'], {
  variants: {
    size: {
      sm: 'text-sm',
      md: '',
      lg: 'text-lg',
    },
  },
  defaultVariants: { size: 'md' },
});

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof base> {
  color?: 'primary' | 'secondary';
  lable?: string;
}

const Radio: React.FC<RadioProps> = ({
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
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_1233_15078)">
          <rect x="4.5" y="4.5" width="9" height="9" rx="4.5" fill="white" />
        </g>
        <defs>
          <filter
            id="filter0_dd_1233_15078"
            x="-55.5"
            y="-55.5"
            width="129"
            height="131"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="30" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.101961 0 0 0 0 0.117647 0 0 0 0 0.137255 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1233_15078"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="30" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.101961 0 0 0 0 0.117647 0 0 0 0 0.137255 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1233_15078"
              result="effect2_dropShadow_1233_15078"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1233_15078"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
    <span className={lableStyle({ size })}>{lable}</span>
  </label>
);

export default Radio;
