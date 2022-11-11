import React from 'react';
import { render } from '@testing-library/react';
import RadioCheck from '../src/RadioCheck';

describe('RadioCheck Test', () => {
  it('should renders without crashing', () => {
    render(<RadioCheck lable="Lable" />);
  });
});
