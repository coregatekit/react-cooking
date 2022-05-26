import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders react cooking menu name', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Cooking/i);
  expect(linkElement).toBeInTheDocument();
});
