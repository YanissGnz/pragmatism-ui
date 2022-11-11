import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '../src/Checkbox';

describe('Checkbox Test', () => {
  it('should renders without crashing', () => {
    render(<Checkbox lable="Lable" />);
  });
});
