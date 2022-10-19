import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('', () => {
  test('Teste Componente Pokedex', () => {
    renderWithRouter(<App />);
    const encounteredPokemons = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(encounteredPokemons).toBeInTheDocument();
    const pokemonAtual = screen.getByTestId('pokemon-name').textContent;
    const buttonNext = screen.getByTestId('next-pokemon');
    const nomePokemon = screen.getByText(pokemonAtual);
    userEvent.click(buttonNext);

    expect(nomePokemon).not.toBeInTheDocument();
  });
});
