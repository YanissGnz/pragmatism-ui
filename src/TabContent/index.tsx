import React from 'react';
import { cva } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const base = cva(['mt-2 data-[state=inactive]:hidden dark:text-neutral'], {
  variants: {},
  defaultVariants: {}
});

export interface TabContentProps extends TabsPrimitive.TabsContentProps {}

const Tab: React.FC<TabContentProps> = ({ className, ...props }) => (
  <TabsPrimitive.Content className={base({ class: className })} {...props} />
);

export default Tab;
