import { getPokemon } from '../storage/pokemon.js';

const $pokemonName = document.querySelector('#pokemon-name');
const $pokemonImg = document.querySelector('#pokemon-img');
const $pokemonID = document.querySelector('#pokemon-id');
const $pokemonType = document.querySelector('#pokemon-type');
const $pokemonHeight = document.querySelector('#pokemon-height');
const $pokemonWeight = document.querySelector('#pokemon-weight');

function showPokemon(pokemon) {
    
    $pokemonName.textContent = (`${pokemon.name}`).toUpperCase();
    $pokemonID.textContent = (`ID: ${pokemon.id}`)
    $pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    $pokemonImg.setAttribute(onerror, "this.src='./assets/img/pokemonNotFound.png'")
    $pokemonType.textContent = 'TYPE: ' + pokemon.types;
    $pokemonHeight.textContent = (`HEIGHT: ${pokemon.height / 10} M`).toUpperCase();
    $pokemonWeight.textContent = (`WEIGHT: ${pokemon.weight / 10} KG`).toUpperCase();
    
} 

export async function showNewPokemon(pokemon) {
    showPokemon(await getPokemon(pokemon));
}
