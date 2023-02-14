import { getPokemons, getPokemonData } from '../api/pokeapi.js';
import { setNewPokemonGrid, showPokemonData } from '../ui/ui.js';
import { loadPageSelector } from '../ui/page-selector.js'

const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16';

async function initialize() {
    const pokemons = await getPokemons(URL);
    setNewPokemonGrid(pokemons)
    showPokemonData(await getPokemonData('bulbasaur')); //Show data of the first pokemon in the grid
    loadPageSelector(pokemons);
}

initialize();
