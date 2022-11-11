import * as React from 'react';
import { render } from '@testing-library/react';
import Slider from '../src/Slider';

describe('Slider Test', () => {
  it('should renders without crashing', () => {
    render(<Slider />);
  });
});
