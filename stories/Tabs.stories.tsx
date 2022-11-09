import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tab, Tabs, TabProps, TabContent, TabsRoot } from '../src';
import { useState } from '@storybook/addons';

const meta: Meta = {
  title: 'NAVIGATION/Tabs',
  component: Tab,
  argTypes: {
    children: {
      control: {
        type: 'Tab',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TabProps> = args => (
  <TabsRoot>
    <Tabs>
      <Tab {...args} value="1">
        Tab 1
      </Tab>
      <Tab {...args} value="2">
        Tab 2
      </Tab>
      <Tab {...args} value="3">
        Tab 3
      </Tab>
    </Tabs>
  </TabsRoot>
);

const TemplateWithContent: Story<TabProps> = args => (
  <TabsRoot defaultValue="1" className="rounded-lg h-80 shadow-xl">
    <Tabs>
      <Tab {...args} value="1">
        Tab 1
      </Tab>
      <Tab {...args} value="2">
        Tab 2
      </Tab>
      <Tab {...args} value="3">
        Tab 3
      </Tab>
    </Tabs>
    <TabContent
      value="1"
      className="flex-grow   flex items-center  justify-center"
    >
      <h1 className="text-xl font-medium">Content 1</h1>
    </TabContent>
    <TabContent
      value="2"
      className="flex-grow   flex items-center  justify-center"
    >
      <h1 className="text-xl font-medium">Content 2</h1>
    </TabContent>
    <TabContent
      value="3"
      className="flex-grow   flex items-center  justify-center"
    >
      <h1 className="text-xl font-medium">Content 3</h1>
    </TabContent>
  </TabsRoot>
);

export const Default = Template.bind({});
export const TabsWithContent = TemplateWithContent.bind({});

Default.args = { size: 'md' };
TabsWithContent.args = { size: 'md' };
