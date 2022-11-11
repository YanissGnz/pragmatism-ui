import React from 'react';
import { render } from '@testing-library/react';
import TextField from '../src/TextField';

describe('TextField Test', () => {
  it('should renders without crashing', () => {
    render(<TextField lable="Lable" helperText="Helper text" />);
  });
});
