import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from '../src/Tooltip';
import Button from '../src/Button';

describe('Tooltip Test', () => {
  it('should renders without crashing', () => {
    render(
      <Tooltip title="Tooltip">
        <Button>Tooltop</Button>
      </Tooltip>
    );
  });
});
