import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const base = cva(
  [
    'text-neutral-600',
    'dark:text-neutral-700',
    'flex items-center justify-center',
    'focus:outline-2 focus:outline-offset-4 focus:outline-focus',
    'rounded-full leading-4',
    'transition-colors',
    'data-[state=active]:font-medium',
    'data-[state=active]:bg-white data-[state=active]:text-black ',
    'dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-neutral'
  ],
  {
    variants: {
      size: {
        sm: 'px-5 py-1 text-sm',
        md: 'px-6 py-2',
        lg: 'px-8 py-3 text-lg'
      }
    },
    defaultVariants: { size: 'md' }
  }
);

export interface TabProps
  extends TabsPrimitive.TabsTriggerProps,
    VariantProps<typeof base> {}

const Tab: React.FC<TabProps> = ({ className, size, ...props }) => (
  <TabsPrimitive.Trigger
    className={base({ size, class: className })}
    {...props}
  />
);

export default Tab;
