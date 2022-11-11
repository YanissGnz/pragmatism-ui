import React from 'react';
import { render } from '@testing-library/react';
import { Tabs, Tab, TabContent, TabsRoot } from '../src';

describe('Tabs Test', () => {
  it('should renders without crashing', () => {
    render(
      <TabsRoot defaultValue="1" className="rounded-lg h-80 shadow-xl">
        <Tabs>
          <Tab value="1">Tab 1</Tab>
          <Tab value="2">Tab 2</Tab>
          <Tab value="3">Tab 3</Tab>
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
  });
});
