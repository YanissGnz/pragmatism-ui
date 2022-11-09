import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Tooltip, TooltipProps } from '../src';

const meta: Meta = {
  title: 'DISPLAY/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: {
        type: 'Tooltip',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TooltipProps> = args => (
  <Tooltip {...args} title="tooltip">
    <Button>Button</Button>
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {};
