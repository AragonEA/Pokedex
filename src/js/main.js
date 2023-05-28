import { getPokemons } from './storage/pokemon.js';
import { setNewPokemon } from './ui/pokemonSection.js';
import { setNewPokemonGrid } from './ui/grid.js'
import { setUpPageSelector } from './ui/pageSelector.js'
import { setUpModal } from './ui/modal.js'

async function initialize() {
    const pokemonList = await getPokemons();
    setNewPokemonGrid(pokemonList)
    addEventListenerToGrid()
    setNewPokemon(pokemonList.names[0]); //Show data of the first pokemon in the grid
    setUpModal();
    setUpPageSelector(pokemonList);
}

initialize();

function addEventListenerToGrid() {
    const $pokemonGrid = document.querySelector('#pokemon-grid');
    $pokemonGrid.addEventListener('click', (event) => {
        const $pokemonSelected = event.target;
        if ('pokemonName' in $pokemonSelected.dataset) {
            setNewPokemon($pokemonSelected.dataset['pokemonName'])
        } else {
            setNewPokemon($pokemonSelected.textContent)
        }
    });
}
