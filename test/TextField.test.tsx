import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as TextField } from '../stories/TextField.stories';

describe('TextField', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
