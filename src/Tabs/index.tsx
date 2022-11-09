import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

//

const list = cva(['p-1 w-max flex bg-neutral-100 rounded-full gap-2'], {
  variants: {},
  defaultVariants: {},
});

export interface TabsProps
  extends TabsPrimitive.TabsProps,
    VariantProps<typeof list> {}

const Tabs: React.FC<TabsProps> = ({ className, ...props }) => (
  <TabsPrimitive.List className={list({ class: className })}>
    {props.children}
  </TabsPrimitive.List>
);

export default Tabs;
