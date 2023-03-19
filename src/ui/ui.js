import { getPokemons, getPokemonData } from '../api/pokeapi.js';
import { getOffset } from '../utilities/utilities.js';
import { updatePageSelectorValue } from './page-selector.js';

let previousPage = '';
let nextPage = '';
const $pokemonGrid = document.querySelector('#pokemon-grid');
const $pokemonName = document.querySelector('#pokemon-name');
const $pokemonImg = document.querySelector('#pokemon-img');
const $pokemonID = document.querySelector('#pokemon-id');
const $pokemonType = document.querySelector('#pokemon-type');
const $pokemonHeight = document.querySelector('#pokemon-height');
const $pokemonWeight = document.querySelector('#pokemon-weight');
const $previousBtn = document.querySelector('#previous-btn');
const $nextBtn = document.querySelector('#next-btn');

$previousBtn.addEventListener('click', showPreviousPage);
$nextBtn.addEventListener('click', showNextPage);

export function setNewPokemonGrid(response) {

    previousPage = response.previous;
    nextPage = response.next;

    deletePokemonsInGrid();
    createPokemonGrid(response.results)
    updatePageSelectorValue(response.previous);
}

export function createPokemonGrid(pokemons) {

    Object.keys(pokemons).forEach(pokemon => {
        const $pokemonImg = document.createElement('img');
        const $pokemonName = document.createElement('p');
        const $pokemonContainer = document.createElement('div');
        const pokemonNumber = pokemons[pokemon].url.slice(30).match(/(\d+)/g);

        $pokemonContainer.classList = 'grid-item nes-pointer';
        $pokemonName.classList = 'grid-item nes-pointer';

        $pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
        $pokemonName.textContent = capitalize((pokemons[pokemon].name));

        $pokemonGrid.appendChild($pokemonContainer);
        $pokemonContainer.appendChild($pokemonImg);
        $pokemonContainer.appendChild($pokemonName);
    });
}

export function showPokemonData(pokemonData) {
    $pokemonName.textContent = (`${pokemonData.name}`).toUpperCase();
    $pokemonID.textContent = (`ID: ${pokemonData.id}`)
    $pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;
    $pokemonType.textContent = (`TYPE: ${pokemonData.types[0].type.name}`).toUpperCase();
    $pokemonHeight.textContent = (`HEIGHT: ${pokemonData.height / 10} M`).toUpperCase();
    $pokemonWeight.textContent = (`WEIGHT: ${pokemonData.weight / 10} KG`).toUpperCase();
}

$pokemonGrid.addEventListener('click', (event) => {
    const $element = event.target;
    if ($element.classList.contains('grid-item')) {
        setNewPokemonData($element);
    } else if($element.tagName === "IMG"){
        setNewPokemonData($element.nextSibling);
    }
});

async function setNewPokemonData($element){
    const pokemonName = uncapitalize($element.innerText);
    $element.addEventListener('click', showPokemonData(await getPokemonData(pokemonName)));
}

async function showPreviousPage() {
    if (previousPage) {
        $previousBtn.classList.remove('is-error');
        $nextBtn.classList.remove('is-error');
        setNewPokemonGrid(await getPokemons(getOffset(previousPage)));
    } else {
        $previousBtn.classList.add('is-error');
    }
}

async function showNextPage() {
    if (nextPage) {
        $previousBtn.classList.remove('is-error');
        setNewPokemonGrid(await getPokemons(getOffset(nextPage)));
    } else {
        $nextBtn.classList.add('is-error');
    }
}

function deletePokemonsInGrid() {
    document.querySelectorAll('.grid-item').forEach(item => item.remove());;
}

function uncapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
