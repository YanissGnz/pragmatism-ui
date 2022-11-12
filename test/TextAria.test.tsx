import React from 'react';
import { render } from '@testing-library/react';
import { TextAria } from '../src/TextAria';

describe('TextAria Test', () => {
  it('should renders without crashing', () => {
    render(<TextAria lable="Lable" helperText="Helper text" />);
  });
});
