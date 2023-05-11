import { setNewPokemon } from './pokemonSection.js';

const $pokemonGrid = document.querySelector('#pokemon-grid');

export function setNewPokemonGrid(pokemonList) {
    deletePreviousPokemonGrid();
    createPokemonGrid(pokemonList)
}

function createPokemonGrid(pokemonList) {
    for (let i = 0; i < (pokemonList.ids).length; i++) {
        const $pokemonContainer = document.createElement('div');
        $pokemonContainer.classList = 'grid-item nes-pointer';
        $pokemonGrid.appendChild($pokemonContainer);
    } 
}

function createNameElement(pokemonName){
    const $pokemonName = document.createElement('p');
    $pokemonName.textContent = (pokemonName);
    return $pokemonName;
}

function createIconElement(id, pokemonName){
    const $pokemonIcon = document.createElement('img');
    $pokemonIcon.classList = 'pokemon-icon'
    $pokemonIcon.setAttribute('onerror', "javascript:this.src='src/assets/img/pokemonNotFound.png'")
    $pokemonIcon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return $pokemonIcon;
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