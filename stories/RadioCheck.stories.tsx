import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioCheck, RadioCheckProps } from '../src';

const meta: Meta = {
  title: 'INPUT/RadioCheck',
  component: RadioCheck,
  argTypes: {
    children: {
      control: {
        type: 'RadioCheck',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioCheckProps> = args => (
  <div className="flex flex-col justify-center gap-2">
    <RadioCheck {...args} name="default-radio" lable="Lable 1" />
    <RadioCheck {...args} name="default-radio" lable="Lable 2" />
    <RadioCheck {...args} name="default-radio" lable="Lable 3" />
  </div>
);

export const Default = Template.bind({});

Default.args = { color: 'primary', disabled: false };
