import React from 'react';
import { render } from '@testing-library/react';
import Filterg from './Filterg';

test('Filterg renders learn react link', () => {
  const { getByText } = render(<Filterg />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
