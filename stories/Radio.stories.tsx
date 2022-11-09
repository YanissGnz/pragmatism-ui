import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps } from '../src';

const meta: Meta = {
  title: 'INPUT/Radio',
  component: Radio,
  argTypes: {
    children: {
      control: {
        type: 'Radio',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioProps> = args => (
  <div className="flex flex-col justify-center gap-2">
    <Radio {...args} name="default-radio" lable="Lable 1" />
    <Radio {...args} name="default-radio" lable="Lable 2" />
    <Radio {...args} name="default-radio" lable="Lable 3" />
  </div>
);

export const Default = Template.bind({});

Default.args = { color: 'primary', disabled: false };
