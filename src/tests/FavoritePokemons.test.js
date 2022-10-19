import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('', () => {
  test('Teste Favoritos', () => {
    renderWithRouter(<App />);

    const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(favoritePokemons);
    const pokeEmpty = screen.getByText('No favorite pokemon found');
    expect(pokeEmpty).toBeInTheDocument();

    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();

    userEvent.click(home);
    const buttonDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(buttonDetails);
    const pokemonEscolhido = screen.getByTestId('pokemon-name').textContent;
    const checkboxFavoritar = screen.getByRole('checkbox');
    userEvent.click(checkboxFavoritar);

    userEvent.click(favoritePokemons);
    const nomePokemon = screen.getByText(pokemonEscolhido);
    expect(nomePokemon).toBeInTheDocument();
  });
});
