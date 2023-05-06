/**
 * @jest-environment jsdom
 */
/// <reference types="Jest" /> 
import { setNewPokemonGrid } from '../grid';
import htmlFixture from './html.fixture.js';
import pokemonsFixture from '../../../cypress/fixtures/pokemons-list-page-1.json'

  document.body.innerHTML = htmlFixture;

  setNewPokemonGrid(pokemonsFixture);

  test('should have 16 pokemons', () => {
    expect(document.querySelector('#pokemon-grid'))
        .toHaveLength(16);
  });

  test('page selector value should be 1', () => {
    expect(document.querySelector('#page-selector').value)
        .toHaveLength(16);
  });


