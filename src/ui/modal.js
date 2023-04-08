import { getPokemon } from '../storage/pokemon.js';
import { getPokemonName } from '../utilities/utilities.js';

export function setUpModal() {
  const $modal = document.querySelector(".modal");
  const $btn = document.getElementById("modalBtn");
  const $span = document.getElementsByClassName("close")[0];

  $btn.onclick = function () {
    $modal.style.display = "block";
    showMovementsAndAbilities();
  }

  $span.onclick = function () {
    $modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == $modal) {
      $modal.style.display = "none";
    }
  }
}

function showMovementsAndAbilities() {
  const pokemon = getPokemonName();

  showAbilities(pokemon)
  showMovements(pokemon)
}

async function showAbilities(pokemonName) {
  const pokemon = await getPokemon(pokemonName)
  deletePreviousAbilities();
  const abilities = getAbilities(pokemon.abilities);
  document.querySelector('#abilities-section').appendChild(abilities)
}

async function showMovements(pokemonName) {
  const pokemon = await getPokemon(pokemonName)
  deletePreviousMovements();
  const movements = getMovements(pokemon.moves);
  document.querySelector('#movements-section').appendChild(movements)
}

function getAbilities(abilities) {
  const $abilitiesList = document.querySelector('#abilities')
  let abilityName = '';

  abilities.forEach((ability) => {
    abilityName = `${ability.ability.name}`;
    const li = document.createElement('li');
    li.textContent = abilityName.toUpperCase();
    $abilitiesList.appendChild(li)
  });
  return $abilitiesList;
}

function getMovements(movements) {
  const $movementsList = document.querySelector('#movements')
  let movementName = '';

  movements.forEach((movement) => {
    movementName = `${movement.move.name}`;
    const li = document.createElement('li');
    li.textContent = movementName.toUpperCase();
    $movementsList.appendChild(li)
  });
  return $movementsList;
}

function deletePreviousAbilities() {
  document.getElementById('abilities').innerHTML = '';
}

function deletePreviousMovements() {
  document.getElementById('movements').innerHTML = '';
}
