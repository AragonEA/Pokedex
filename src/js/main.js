import { getPokemons } from './storage/pokemon.js';
import { showNewPokemon } from './ui/pokemonSection.js';
import { showNewPokemonGrid } from './ui/grid.js'
import { setUpPageSelector } from './ui/pageSelector.js'
import { setUpModal } from './ui/modal.js'

async function initialize() {
    const pokemonList = await getPokemons();
    showNewPokemonGrid(pokemonList)
    addEventListenerToGrid()
    showNewPokemon(pokemonList.names[0]); //Show data of the first pokemon in the grid
    setUpModal();
    setUpPageSelector(pokemonList);
}

initialize();

function addEventListenerToGrid() {
    const $pokemonGrid = document.querySelector('#pokemon-grid');
    $pokemonGrid.addEventListener('click', (event) => {
        const $pokemonSelected = event.target;
        if ('pokemonName' in $pokemonSelected.dataset) {
            showNewPokemon($pokemonSelected.dataset['pokemonName'])
        } else {
            showNewPokemon($pokemonSelected.textContent)
        }
    });
}
