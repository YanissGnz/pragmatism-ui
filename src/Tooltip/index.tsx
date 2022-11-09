import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const content = cva(
  [
    'm-1 bg-neutral drop-shadow-lg rounded-xl select-none fill-neutral',
    'data-[side=top]:animate-slide-down-and-fade',
    'data-[side=right]:animate-slide-left-and-fade',
    'data-[side=bottom]:animate-slide-up-and-fade',
    'data-[side=left]:animate-slide-right-and-fade',
    ,
  ],
  {
    variants: {
      size: {
        sm: 'px-4 py-1 text-sm',
        md: 'px-4 py-1',
      },
    },
    defaultVariants: { size: 'sm' },
  }
);

export interface TooltipProps
  extends TooltipPrimitive.TooltipContentProps,
    VariantProps<typeof content> {
  arrow?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  className,
  size,
  title,
  arrow = false,
  ...props
}) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger>{props.children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className={content({ size, class: className })}
          {...props}
        >
          {arrow && <TooltipPrimitive.Arrow className="fill-inherit" />}
          {title}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export default Tooltip;
