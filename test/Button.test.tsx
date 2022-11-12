import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../src/Button';

describe('Button Test', () => {
  it('should renders without crashing', () => {
    render(<Button>Button</Button>);
  });
});
