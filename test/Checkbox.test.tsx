import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Checkbox } from '../stories/Checkbox.stories';

describe('Checkbox', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
