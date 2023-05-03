import { getPokemons, getPokemon } from './storage/pokemon.js';
import { showPokemon } from './ui/pokemonSection.js';
import { setNewPokemonGrid } from './ui/grid.js'
import { setUpPageSelector } from './ui/pageSelector.js'
import { setUpModal } from './ui/modal.js'

async function initialize() {
    const pokemons = await getPokemons();
    setNewPokemonGrid(pokemons)
    showPokemon(await getPokemon('bulbasaur')); //Show data of the first pokemon in the grid
    setUpModal();
    setUpPageSelector(pokemons);
}

initialize();
