import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, SelectItem, SelectProps } from '../src';

const meta: Meta = {
  title: 'INPUT/Select',
  component: Select,
  argTypes: {
    children: {
      control: {
        type: 'Select'
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<SelectProps> = args => (
  <Select {...args}>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
    <SelectItem value="3">Option 3</SelectItem>
    <SelectItem value="4">Option 4</SelectItem>
  </Select>
);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Error = Template.bind({});
export const Icons = Template.bind({});

Default.args = { lable: 'Lable', helperText: 'Helper Text' };
Disabled.args = { disabled: true, lable: 'Lable' };
Error.args = {
  lable: 'Lable',
  error: true,
  errorText: 'Error Text',
  helperText: 'Helper Text'
};
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
