import { getPokemons } from '../api/pokeapi.js';
import { setNewPokemonGrid } from '../ui/ui.js';
import { getOffset } from '../utilities/utilities.js';

const $form = document.querySelector('#selector-form');
$form.onsubmit = handleEvent;

const $pageSelector = document.querySelector('#page-selector');

export function loadPageSelector(pokemons) {

  const TOTAL_POKEMONS = pokemons.count;
  const POKEMONS_LIMIT = 16
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

function handleEvent(event) {
  const pageSelected = $form[`selector`].value;
  const limit = 16;
  const offset = (limit * (pageSelected - 1));
  const currentPage = Math.ceil(offset / limit) + 1;
  changePage(offset, limit)

  event.preventDefault();
}

  setNewPokemonGrid(pokemons)
}

