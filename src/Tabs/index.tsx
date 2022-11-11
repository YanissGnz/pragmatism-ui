import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

//

const list = cva(
  ['w-max p-1', 'flex rounded-full gap-2', 'bg-neutral-100', 'dark:bg-black'],
  {
    variants: {},
    defaultVariants: {}
  }
);

export interface TabsProps
  extends TabsPrimitive.TabsProps,
    VariantProps<typeof list> {}

const Tabs: React.FC<TabsProps> = ({ className, ...props }) => (
  <TabsPrimitive.List className={list({ class: className })}>
    {props.children}
  </TabsPrimitive.List>
);

export default Tabs;
