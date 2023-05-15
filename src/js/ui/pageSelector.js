import { getPokemons } from '../storage/pokemon.js';
import { setNewPokemonGrid as changePage } from './grid.js';
import { getOffset } from '../utilities/utilities.js';

const POKEMONS_LIMIT = 16
const $previousBtn = document.querySelector('#previous-btn');
const $nextBtn = document.querySelector('#next-btn');
const $pageSelector = document.querySelector('#page-selector');
const $form = document.querySelector('#selector-form');

let previousPage = '';
let nextPage = '';

$form.onsubmit = handleFormEvent;
$previousBtn.addEventListener('click', showPreviousPage);
$nextBtn.addEventListener('click', showNextPage);

function handleFormEvent(event) {
  const pageSelected = $form[`selector`].value;
  const newPage = (POKEMONS_LIMIT * (pageSelected - 1));
  handlePageChange(newPage);

  event.preventDefault();
}

async function handlePageChange(offset) {

  const pageSelected = await getPokemons(offset)
  const {
    nextUrl: next,
    previousUrl: previous,
  } = pageSelected;

  previousPage = previous;
  nextPage = next;

  changePage(pageSelected);
}

export function setUpPageSelector(pokemonList) {
  const {
    total: POKEMONS,
    nextUrl: next,
    previousUrl: previous,
  } = pokemonList;

  previousPage = previous;
  nextPage = next;

  const PAGES = Math.ceil(POKEMONS / POKEMONS_LIMIT) + 1; //
  for (let i = 1; i < PAGES; i++) { // 
    $pageSelector.appendChild(createSelectorElement(i));
  }
}

function createSelectorElement(pageNumber) {
  const $item = document.createElement('option');
  $item.value = pageNumber;
  $item.textContent = pageNumber;
  return $item;
}

async function showPreviousPage() {
  if (previousPage) {
    $previousBtn.classList.remove('is-error');
    $nextBtn.classList.remove('is-error');
    await handlePageChange(getOffset(previousPage));
  } else {
    $previousBtn.classList.add('is-error');
  }
}

async function showNextPage() {
  if (nextPage) {
    $previousBtn.classList.remove('is-error');
    await handlePageChange(getOffset(nextPage));
  } else {
    $nextBtn.classList.add('is-error');
  }
}
