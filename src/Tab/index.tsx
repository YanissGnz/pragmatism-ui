import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const base = cva(
  [
    'leading-4 flex items-center justify-center text-neutral-700 rounded-full transition-colors',
    'focus:outline-2 focus:outline-offset-4 focus:outline-focus',
    'data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-medium',
  ],
  {
    variants: {
      size: {
        sm: 'px-5 py-1 text-sm',
        md: 'px-6 py-2',
        lg: 'px-8 py-3 text-lg',
      },
    },
    defaultVariants: { size: 'md' },
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
