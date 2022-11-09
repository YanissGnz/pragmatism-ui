import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../src';

const meta: Meta = {
  title: 'INPUT/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      control: {
        type: 'Checkbox',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = { color: 'primary', disabled: false, lable: 'Lable' };
