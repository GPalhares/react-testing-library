import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('', () => {
  test('Teste Details', () => {
    renderWithRouter(<App />);

    const buttonDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(buttonDetails);

    const headingDetails = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(headingDetails).toBeInTheDocument();

    const headingPokemon = screen.getByRole('heading', { name: 'Summary' });
    expect(headingPokemon).toBeInTheDocument();

    expect(buttonDetails).not.toBeInTheDocument();

    const info = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(info).toBeInTheDocument();

    const headingPokemonLocations = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
    expect(headingPokemonLocations).toBeInTheDocument();

    const image = screen.getAllByAltText('Pikachu location');
    expect(image[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(image[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');

    const checkboxFavoritar = screen.getByRole('checkbox');
    userEvent.click(checkboxFavoritar);

    const imageStar = screen.getByAltText('Pikachu is marked as favorite');
    expect(imageStar).toHaveAttribute('src', '/star-icon.svg');

    const label = screen.getByText('Pokémon favoritado?');
    expect(label).toBeInTheDocument();

    userEvent.click(checkboxFavoritar);

    expect(imageStar).not.toBeInTheDocument();
  });
});
