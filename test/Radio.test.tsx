import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Radio } from '../stories/Radio.stories';

describe('Radio', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Radio />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
