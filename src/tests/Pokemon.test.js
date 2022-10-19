import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('', () => {
  test('Teste Componente Pokemon', () => {
    const { history } = renderWithRouter(<App />);
    const nomePokemon = screen.getByTestId('pokemon-name').textContent;
    expect(nomePokemon).toBe('Pikachu');
    const typePokemon = screen.getByTestId('pokemon-type').textContent;
    expect(typePokemon).toBe('Electric');
    const weightPokemon = screen.getByTestId('pokemon-weight').textContent;
    expect(weightPokemon).toBe('Average weight: 6.0 kg');
    const image = screen.getByAltText('Pikachu sprite');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    const detailsPokemon = screen.getByRole('link', { name: 'More details' });
    const urlHref = detailsPokemon.href.slice(16);
    userEvent.click(detailsPokemon);
    const { pathname } = history.location;
    expect(pathname).toBe(urlHref);
    const checkboxFavoritar = screen.getByRole('checkbox');
    userEvent.click(checkboxFavoritar);

    const imageStar = screen.getByAltText('Pikachu is marked as favorite');
    expect(imageStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
