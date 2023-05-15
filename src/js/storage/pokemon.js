import { mapPokemon } from '../mappers/pokemon.js'
import { mapPokemonList } from '../mappers/pokemonList.js'
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
      throw new Error(`Pokemon ${pokemonName} not found`);
    } else {
      return mapPokemon(pokemon);
    }
  } catch (e) {
    const pokemon = await getPokemonFromApi(pokemonName);
    savePokemon(pokemonName, pokemon);
    return mapPokemon(pokemon);
  }
}

export async function getPokemons(offset = 0, limit = POKEMONS_LIMIT) {

  try {
    const pokemons = JSON.parse(localStorage.getItem(getPokemonsKey(offset, limit)));
    if (pokemons === null) {
      throw new Error(`Pokemons list with offset ${offset} and limit ${limit} not found`);
    } else {
      return mapPokemonList(pokemons);
    }
  } catch (e) {
    const pokemons = await getPokemonsFromApi(offset, limit);
    savePokemons(offset, limit, pokemons);
    return mapPokemonList(pokemons);
  }
}



export function savePokemon(pokemonName, pokemon) {

  if (pokemonName === undefined || typeof pokemon !== 'object') {
    throw new Error('A pokemon name and a pokemon is required to save to localStorage');
  }
  try {
    localStorage.setItem(getPokemonKey(pokemonName), JSON.stringify(pokemon));
  } catch (e) {
    console.error(e);
  }
}


export function savePokemons(offset, limit, pokemons) {
  if (offset === undefined || limit === undefined) {
    throw new Error('Offset, limit and pokemons are required');
  }
  try {
    localStorage.setItem(getPokemonsKey(offset, limit), JSON.stringify(pokemons));
  } catch (e) {
    console.error(e);
  }
}


function getPokemonKey(pokemonName) {
  return `pokemon_${pokemonName}`;
}

function getPokemonsKey(offset, limit) {
  return `pokemons_${offset}_${limit}`;
}
