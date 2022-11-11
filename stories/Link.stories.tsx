import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from '../src';

const meta: Meta = {
  title: 'NAVIGATION/Link',
  component: Link,
  argTypes: {
    children: {
      control: {
        type: 'Link'
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<LinkProps> = args => <Link {...args}>Link</Link>;

export const Default = Template.bind({});
export const External = Template.bind({});
export const Icons = Template.bind({});

Default.args = { color: 'primary' };
External.args = { external: true };
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
        strokeWidth="2"
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
        strokeWidth="2"
      ></circle>
    </svg>
  )
};
