import React from 'react';
import { render } from '@testing-library/react';
import { SelectItem, Select } from '../src';

describe('Select Test', () => {
  it('should renders without crashing', () => {
    render(
      <Select lable="Lable" helperText="Helper Text">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
        <SelectItem value="3">Option 3</SelectItem>
        <SelectItem value="4">Option 4</SelectItem>
      </Select>
    );
  });
});
