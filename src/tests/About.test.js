import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('', () => {
  test('Teste Componente About', () => {
    renderWithRouter(<About />);
    const info1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');
    const info2 = screen.getByText('One can filter Pokémons by type, and see more details for each one of them');
    expect(info1).toBeInTheDocument();
    expect(info2).toBeInTheDocument();
    const aboutPokedex = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(aboutPokedex).toBeInTheDocument();

    const image = screen.getByAltText('Pokédex');

    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
