import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../src/Banner';

describe('Banner Test', () => {
  it('should renders without crashing', () => {
    render(<Banner title="title" />);
  });
});
