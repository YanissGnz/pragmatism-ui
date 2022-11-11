import React from 'react';
import { render } from '@testing-library/react';
import Radio from '../src/Radio';

describe('Radio Test', () => {
  it('should renders without crashing', () => {
    render(<Radio lable="Lable" />);
  });
});
