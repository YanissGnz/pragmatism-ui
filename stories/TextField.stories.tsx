import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '../src';

const meta: Meta = {
  title: 'INPUT/TextField',
  component: TextField,
  argTypes: {
    children: {
      control: {
        type: 'TextField',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextFieldProps> = args => (
  <TextField {...args} placeholder="Placeholder" />
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
  helperText: 'Helper Text',
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
