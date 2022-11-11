import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Banner, BannerProps } from '../src';

const meta: Meta = {
  title: 'DISPLAY/Banner',
  component: Banner,
  argTypes: {
    children: {
      control: {
        type: 'Banner'
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<BannerProps> = args => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = { title: 'Title', description: 'Description' };
