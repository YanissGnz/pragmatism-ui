import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, SwitchProps } from '../src';

const meta: Meta = {
  title: 'INPUT/Switch',
  component: Switch,
  argTypes: {
    children: {
      control: {
        type: 'Switch',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SwitchProps> = args => <Switch {...args} />;

export const Default = Template.bind({ withIcon: false });
export const Icon = Template.bind({});

Default.args = { color: 'primary' };
Icon.args = { withIcon: true };
