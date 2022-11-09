import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Banner, BannerProps } from '../src';

const meta: Meta = {
  title: 'DISPLAY/Banner',
  component: Banner,
  argTypes: {
    children: {
      control: {
        type: 'Banner',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BannerProps> = args => (
  <>
    <Banner
      {...args}
      title="Title"
      description="Description"
      className="mb-2"
    />
    <Banner {...args} title="Title" />
  </>
);

export const Default = Template.bind({});

Default.args = {};
