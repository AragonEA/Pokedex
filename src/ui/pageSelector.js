import { getPokemons } from '../storage/pokemon.js';
import { setNewPokemonGrid } from './grid.js';
import { getOffset } from '../utilities/utilities.js';

const POKEMONS_LIMIT = 16
const $previousBtn = document.querySelector('#previous-btn');
const $nextBtn = document.querySelector('#next-btn');
const $pageSelector = document.querySelector('#page-selector');
const $form = document.querySelector('#selector-form');
let previousPage = '';
let nextPage = '';

$form.onsubmit = handleEvent;
$previousBtn.addEventListener('click', showPreviousPage);
$nextBtn.addEventListener('click', showNextPage);

function handleEvent(event) {
  const pageSelected = $form[`selector`].value;
  const limit = 16;
  const offset = (limit * (pageSelected - 1));
  changePage(offset, limit)
  event.preventDefault();

}

export function setUpPageSelector(pokemons) {
  const TOTAL_POKEMONS = pokemons.count;
  const TOTAL_PAGES = Math.ceil(TOTAL_POKEMONS / POKEMONS_LIMIT) + 1;
  for (let i = 1; i < TOTAL_PAGES; i++) {
    $pageSelector.appendChild(createSelectorElement(i));
  }
}

function createSelectorElement(pageNumber) {
  const $item = document.createElement('option');
  $item.value = pageNumber;
  $item.textContent = pageNumber;
  return $item;
}

async function changePage(offset, limit) {
  const pokemons = await getPokemons(offset, limit);
  setNewPokemonGrid(pokemons)
}

export function updatePageSelectorValue(page) {
  const newValue = (getOffset(page) / POKEMONS_LIMIT) + 2;
  $pageSelector.value = newValue;
}

export function updatePageVariables(previous, next) {
  previousPage = previous;
  nextPage = next;
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
