import React from 'react';
import { cva } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

//

const base = cva(['w-max flex flex-col']);

export interface TabsRootProps extends TabsPrimitive.TabsProps {}

const TabsRoot: React.FC<TabsRootProps> = ({ className, ...props }) => (
  <TabsPrimitive.Root className={base({ class: className })} {...props} />
);

export default TabsRoot;
