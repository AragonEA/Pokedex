import { getPokemons, getPokemonData } from './pokeapi.js';
import { setNewPokemonGrid, showPokemonData } from './ui.js';

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=16&offset=0';

async function initialize() {
    setNewPokemonGrid(await getPokemons(URL))
    showPokemonData(await getPokemonData('bulbasaur')); //Show data of the first pokemon in the grid
}

initialize();