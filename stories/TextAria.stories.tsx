import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextAria, TextAriaProps } from '../src';

const meta: Meta = {
  title: 'INPUT/TextAria',
  component: TextAria,
  argTypes: {
    children: {
      control: {
        type: 'TextAria',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextAriaProps> = args => (
  <TextAria {...args} placeholder="Placeholder" rows={6} />
);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  lable: 'Lable',
  helperText: 'Helper Text',
  maxRow: 10,
};
Disabled.args = { disabled: true, lable: 'Lable' };
Error.args = {
  lable: 'Lable',
  error: true,
  errorText: 'Error Text',
  helperText: 'Helper Text',
};
