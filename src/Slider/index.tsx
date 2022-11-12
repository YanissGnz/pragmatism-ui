import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as SliderPrimitive from '@radix-ui/react-slider';

const root = cva(['relative flex items-center select-none touch-none w-52'], {
  variants: {},
  defaultVariants: {},
});

const track = cva(['relative bg-neutral-300 flex-grow rounded-full h-1'], {
  variants: {},
  defaultVariants: {},
});

const range = cva(['h-full absolute rounded-full'], {
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
    },
  },
  defaultVariants: { color: 'primary' },
});

const thumb = cva(
  [
    'h-5 w-5 block bg-white shadow-xl border border-neutral-500 rounded-full hover:bg-neutral-100',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface SliderProps
  extends SliderPrimitive.SliderProps,
    VariantProps<typeof root> {
  color?: 'primary' | 'secondary';
}

export const Slider: React.FC<SliderProps> = ({
  className,
  color,
  ...props
}) => (
  <SliderPrimitive.Root className={root({})} {...props}>
    <SliderPrimitive.Track className={track({})}>
      <SliderPrimitive.Range className={range({ color })} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={thumb({})} />
  </SliderPrimitive.Root>
);
