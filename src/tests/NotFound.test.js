import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('', () => {
  test('Teste Componente NotFound', () => {
    renderWithRouter(<NotFound />);
    const notFoundH2 = screen.getByRole('heading', { name: 'Page requested not found' });
    expect(notFoundH2).toBeInTheDocument();

    const image = screen.getByAltText('Pikachu crying because the page requested was not found');

    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
