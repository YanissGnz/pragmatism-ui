import React from 'react';
import { render } from '@testing-library/react';
import { Link } from '../src/Link';

describe('Link Test', () => {
  it('should renders without crashing', () => {
    render(<Link>Link</Link>);
  });
});
