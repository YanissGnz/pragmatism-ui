import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';

const item = cva(
  [
    'flex items-center select-none relative py-1 pr-8 pl-6 outline-none rounded-lg',
    'hover:bg-neutral-100',
    'dark:hover:bg-neutral-700',
  ],
  {
    variants: { disabled: { true: 'text-neutral-300 pointer-events-none' } },
    defaultVariants: { disabled: false },
  }
);

export interface SelectItemProps
  extends SelectPrimitive.SelectItemProps,
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof item> {
  withIcon?: boolean;
  disabled?: boolean;
}

export const SelectItem: React.FC<SelectItemProps> = ({
  className,
  withIcon = false,
  disabled,
  ...props
}) => (
  <SelectPrimitive.Item {...props} className={item({ disabled })}>
    <SelectPrimitive.ItemText>{props.children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center stroke-black dark:stroke-neutral">
      <svg
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.29999 5.09998L4.29999 7.09998L8.79999 1.09998"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
);
