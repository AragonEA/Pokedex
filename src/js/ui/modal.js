import { getPokemon } from '../storage/pokemon.js';

export function setUpModal() {
  const $modal = document.querySelector(".modal");
  const $btn = document.getElementById("modal-btn");
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
  showAbilities(pokemon);
  showMovements(pokemon);
}

async function showAbilities(pokemonName) {
  const pokemon = await getPokemon(pokemonName)
  deletePreviousAbilities();

  pokemon.abilities.sort();
  pokemon.abilities.forEach(ability => {
    addAbility(ability);
  });
  
}

function addAbility(ability){
  const $ability = document.createElement('li');
  $ability.textContent = ability;
  document.querySelector('#abilities').appendChild($ability)
}

async function showMovements(pokemonName) {
  const pokemon = await getPokemon(pokemonName)
  deletePreviousMovements();

  pokemon.movements.sort();
  pokemon.movements.forEach(movement => {
    addMovements(movement);
  });
  
}

function addMovements(movement){
  const $movement = document.createElement('li');
  $movement.textContent = movement;
  document.querySelector('#movements').appendChild($movement)
}

function getPokemonName() {
  return document.getElementById('pokemon-name').textContent.toLowerCase();
}

function deletePreviousAbilities() {
  document.getElementById('abilities').innerHTML = '';
}

function deletePreviousMovements() {
  document.getElementById('movements').innerHTML = '';
}
