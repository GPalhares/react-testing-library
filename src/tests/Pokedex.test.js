import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('', () => {
  test('Teste Componente Pokedex Funciona corretamente', () => {
    renderWithRouter(<App />);
    const encounteredPokemons = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(encounteredPokemons).toBeInTheDocument();
    const pokemonAtual = screen.getByTestId('pokemon-name').textContent;
    const buttonNext = screen.getByTestId('next-pokemon');
    userEvent.click(buttonNext);
    const pokemonProximo = screen.getByTestId('pokemon-name').textContent;
    expect(pokemonAtual).not.toBe(pokemonProximo);
    const pokemonQuantidade = screen.getAllByTestId('pokemon-type');
    expect(pokemonQuantidade.length).toBe(1);
  });
  test('Teste Botoes de Tipo de Pokemon', () => {
    renderWithRouter(<App />);
    const todosBotoes = screen.getAllByTestId('pokemon-type-button');
    expect(todosBotoes[0].textContent).toBe('Electric');
    expect(todosBotoes[1].textContent).toBe('Fire');
    expect(todosBotoes[2].textContent).toBe('Bug');
    expect(todosBotoes[3].textContent).toBe('Poison');
    expect(todosBotoes[4].textContent).toBe('Psychic');
    expect(todosBotoes[5].textContent).toBe('Normal');
    expect(todosBotoes[6].textContent).toBe('Dragon');
    const botaoAll = screen.getByTestId('');
    expect(botaoAll).toBeInTheDocument();
  });
  test('Teste se o pokemon muda de acordo com tipo clickado', () => {
    renderWithRouter(<App />);
    const todosBotoes = screen.getAllByTestId('pokemon-type-button');
    userEvent.click(todosBotoes[0]);
    expect(screen.getByTestId('pokemon-type').textContent).toBe(todosBotoes[0].textContent);
    userEvent.click(todosBotoes[1]);
    expect(screen.getByTestId('pokemon-type').textContent).toBe(todosBotoes[1].textContent);
    userEvent.click(todosBotoes[2]);
    expect(screen.getByTestId('pokemon-type').textContent).toBe(todosBotoes[2].textContent);
    userEvent.click(todosBotoes[3]);
    expect(screen.getByTestId('pokemon-type').textContent).toBe(todosBotoes[3].textContent);
    userEvent.click(todosBotoes[4]);
    expect(screen.getByTestId('pokemon-type').textContent).toBe(todosBotoes[4].textContent);
    userEvent.click(todosBotoes[5]);
    expect(screen.getByTestId('pokemon-type').textContent).toBe(todosBotoes[5].textContent);
    userEvent.click(todosBotoes[6]);
    expect(screen.getByTestId('pokemon-type').textContent).toBe(todosBotoes[6].textContent);
    const botaoAll = screen.getByTestId('');
    userEvent.click(botaoAll);
    expect(screen.getByTestId('pokemon-name').textContent).toBe('Pikachu');
  });
});
