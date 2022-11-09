import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as RadioCheck } from '../stories/RadioCheck.stories';

describe('RadioCheck', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioCheck />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
