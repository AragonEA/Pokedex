import { getPokemons } from '../api/pokeapi.js';
import { setNewPokemonGrid } from '../ui/ui.js';


let $form = document.querySelector('#selector-form');
$form.onsubmit = handleEvent;


export function loadPageSelector(pokemons){
 const TOTAL_POKEMONS = pokemons.count;
 const POKEMONS_PER_PAGE = 16
 const TOTAL_PAGES = Math.ceil( TOTAL_POKEMONS / POKEMONS_PER_PAGE) + 1;

 const $pageSelector = document.querySelector('#page-selector');

 for (let i = 1; i < TOTAL_PAGES; i++) {
 $pageSelector.appendChild(createSelectorElement(i));
 
}

}

function createSelectorElement(pageNumber){
  const $item = document.createElement('option');
  $item.value = pageNumber;
  $item.textContent = pageNumber;
  return $item;

}

function handleEvent(event) {
  const pageSelected = $form[`selector`].value;
  const limit = 16;
  const offset = (limit * (pageSelected - 1));
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  changePage(URL)
  event.preventDefault();
}

async function changePage(URL){
  const pokemons = await getPokemons(URL);
  setNewPokemonGrid(pokemons)
}

