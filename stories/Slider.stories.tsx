import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Slider, SliderProps } from '../src';

const meta: Meta = {
  title: 'INPUT/Slider',
  component: Slider,
  argTypes: {
    children: {
      control: {
        type: 'Slider',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SliderProps> = args => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = { color: 'primary' };
