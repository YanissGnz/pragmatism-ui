import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Switch } from '../stories/Switch.stories';

describe('Switch', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Switch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
