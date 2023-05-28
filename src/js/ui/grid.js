import { setNewPokemon } from './pokemonSection.js';

export function setNewPokemonGrid(pokemonList) {
    deletePreviousPokemonGrid();
    createPokemonGrid(pokemonList);
}

function createPokemonGrid(pokemonList) {
    const $pokemonGrid = document.querySelector('#pokemon-grid');

    for (let i = 0; i < (pokemonList.ids).length; i++) {
        const $pokemonContainer = document.createElement('div');
        $pokemonContainer.dataset.pokemonName = pokemonList.names[i];
        $pokemonContainer.classList = 'grid-item nes-pointer';
        $pokemonContainer.appendChild(createIconElement(pokemonList.ids[i], pokemonList.names[i]));
        $pokemonContainer.appendChild(createNameElement(pokemonList.names[i]));
        $pokemonGrid.appendChild($pokemonContainer);
    }
}

function createNameElement(pokemonName) {
    const $pokemonName = document.createElement('p');
    $pokemonName.textContent = (pokemonName);
    return $pokemonName;
}

function createIconElement(id, pokemonName) {
    const $pokemonIcon = document.createElement('img');
    $pokemonIcon.dataset.pokemonName = pokemonName;
    $pokemonIcon.classList = 'pokemon-icon'
    $pokemonIcon.setAttribute('onerror', "javascript:this.src='src/assets/img/pokemonNotFound.png'")
    $pokemonIcon.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
    return $pokemonIcon;
}


function deletePreviousPokemonGrid() {
    document.querySelectorAll('.grid-item').forEach(item => item.remove());
}