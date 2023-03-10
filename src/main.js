import { getPokemons, getPokemonData } from './api/pokeapi.js';
import { setNewPokemonGrid, showPokemonData } from './ui/ui.js';
import { loadPageSelector } from './ui/page-selector.js'

async function initialize() {
    const pokemons = await getPokemons();
    setNewPokemonGrid(pokemons)
    showPokemonData(await getPokemonData('bulbasaur')); //Show data of the first pokemon in the grid
    loadPageSelector(pokemons);
}

initialize();
