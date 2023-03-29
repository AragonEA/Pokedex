import { getPokemons, getPokemon } from './api/pokeapi.js';
import { setNewPokemonGrid, showPokemon } from './ui/ui.js';
import { loadPageSelector } from './ui/page-selector.js'

async function initialize() {
    const pokemons = await getPokemons();
    setNewPokemonGrid(pokemons)
    showPokemon(await getPokemon('bulbasaur')); //Show data of the first pokemon in the grid
    loadPageSelector(pokemons);
}

initialize();
