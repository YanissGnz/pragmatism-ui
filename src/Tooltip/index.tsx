import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const content = cva(
  [
    'm-1',
    'bg-neutral-500 text-neutral fill-neutral-500',
    'dark:bg-neutral-600 dark:text-neutral dark:fill-neutral-600',
    'drop-shadow-lg rounded-lg select-none',
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
        md: 'px-4 py-1'
      }
    },
    defaultVariants: { size: 'sm' }
  }
);

export interface TooltipProps
  extends TooltipPrimitive.TooltipContentProps,
    VariantProps<typeof content> {
  arrow?: boolean;
  title: string;
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
      <TooltipPrimitive.Trigger asChild>
        <div className="w-max h-max">{props.children}</div>
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        className={content({ size, class: className })}
        {...props}
      >
        {arrow && <TooltipPrimitive.Arrow className="fill-inherit" />}
        {title}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export default Tooltip;
