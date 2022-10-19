import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('', () => {
  test('Teste Componente App, home, About e Favorite Pokemons', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();
    const about = screen.getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();
    const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoritePokemons).toBeInTheDocument();
    userEvent.click(home);
    const encounteredPokemons = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(encounteredPokemons).toBeInTheDocument();

    userEvent.click(about);
    const aboutPokedex = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(aboutPokedex).toBeInTheDocument();

    userEvent.click(favoritePokemons);
    const favoritePokemonsh2 = screen.getByRole('heading', { name: 'Favorite pokémons' });
    expect(favoritePokemonsh2).toBeInTheDocument();
  });
});
