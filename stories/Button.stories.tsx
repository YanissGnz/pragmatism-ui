import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'INPUT/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'Button',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
export const Outlined = Template.bind({});
export const Disabled = Template.bind({});
export const Icons = Template.bind({});

Default.args = {};
Outlined.args = { variant: 'outlined' };
Disabled.args = { disabled: true };

Icons.args = {
  startIcon: (
    <svg
      className="h-full w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="2"
      ></circle>
    </svg>
  ),
  endIcon: (
    <svg
      className="h-full w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="2"
      ></circle>
    </svg>
  ),
};
