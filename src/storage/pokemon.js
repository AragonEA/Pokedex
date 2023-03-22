import {
  getPokemons as getPokemonsFromApi,
  getPokemon as getPokemonFromApi
}
  from '../api/pokeapi.js'

const POKEMONS_LIMIT = 16;

export async function getPokemon(pokemonName) {

  if (pokemonName === undefined) {
    throw new Error('A name is needed to load a pokemon');
  }
  try {
    const pokemon = JSON.parse(localStorage.getItem(getPokemonKey(pokemonName)));
    if (pokemon === null) {
      throw new Error(`Pokemon with ${id} not found`);
    } else {
      return pokemon;
    }
  } catch (e) {
    const pokemon = await getPokemonFromApi(pokemonName);
    savePokemon(pokemonName, pokemon);
    return pokemon;
  }
}
export function savePokemon(pokemonName, pokemon) {

  if (pokemonName === undefined || typeof pokemon !== 'object') {
    throw new Error('An ID and a pokemon is required to save to localStorage');
  }
  localStorage.setItem(getPokemonKey(pokemonName), JSON.stringify(pokemon));
}

export function savePokemons(offset, limit, pokemons) {
  if (offset === undefined || limit === undefined) {
    throw new Error('Offset, limit and pokemons are required');
  }
  localStorage.setItem(getPokemonsKey(offset, limit), JSON.stringify(pokemons));
}


function getPokemonKey(pokemonName) {
  return `pokemon_${pokemonName}`;
}

