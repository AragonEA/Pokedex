import { updatePageSelectorValue, updatePageVariables } from './pageSelector.js';
import { setNewPokemon } from './pokemonSection.js';
import { capitalize } from '../utilities/utilities.js';

const $pokemonGrid = document.querySelector('#pokemon-grid');

export function setNewPokemonGrid(response) {

    deletePokemonsInGrid();
    createPokemonsInGrid(response.results)
    updatePageSelectorValue(response.previous);
    updatePageVariables(response.previous, response.next);
}

function createPokemonsInGrid(pokemons) {

    Object.keys(pokemons).forEach(pokemon => {
        const $pokemonIcon = document.createElement('img');
        const $pokemonName = document.createElement('p');
        const $pokemonContainer = document.createElement('div');
        const pokemonID = pokemons[pokemon].url.slice(30).match(/(\d+)/g);

        $pokemonContainer.classList = 'grid-item nes-pointer';
        $pokemonName.classList = 'grid-item nes-pointer';
        $pokemonIcon.classList = 'pokemon-icon'
        $pokemonIcon.setAttribute('onerror', "javascript:this.src='src/ui/img/pokemonNotFound.png'")
        $pokemonIcon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`;
        $pokemonName.textContent = capitalize((pokemons[pokemon].name));

        $pokemonGrid.appendChild($pokemonContainer);
        $pokemonContainer.appendChild($pokemonIcon);
        $pokemonContainer.appendChild($pokemonName);
    });
}

$pokemonGrid.addEventListener('click', (event) => {
    const $pokemonSelected = event.target;
    if ($pokemonSelected.classList.contains('grid-item')) {
        setNewPokemon($pokemonSelected);
    } else if ($pokemonSelected.tagName === "IMG") {
        setNewPokemon($pokemonSelected.nextSibling);
    }
});

function deletePokemonsInGrid() {
    document.querySelectorAll('.grid-item').forEach(item => item.remove());
}