import React from 'react';
import { render } from '@testing-library/react';
import Switch from '../src/Switch';

describe('Switch Test', () => {
  it('should renders without crashing', () => {
    render(<Switch />);
  });
  it('should renders with icon without crashing', () => {
    render(<Switch withIcon />);
  });
});
