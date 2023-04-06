import { getPokemonTypes, uncapitalize } from '../utilities/utilities.js';
import { getPokemon } from '../storage/pokemon.js';

const $pokemonName = document.querySelector('#pokemon-name');
const $pokemonImg = document.querySelector('#pokemon-img');
const $pokemonID = document.querySelector('#pokemon-id');
const $pokemonType = document.querySelector('#pokemon-type');
const $pokemonHeight = document.querySelector('#pokemon-height');
const $pokemonWeight = document.querySelector('#pokemon-weight');

$pokemonImg.setAttribute('onerror', "javascript:this.src='src/ui/img/pokemonNotFound.png'")

export function showPokemon(pokemon) {
    $pokemonName.textContent = (`${pokemon.name}`).toUpperCase();
    $pokemonID.textContent = (`ID: ${pokemon.id}`)
    $pokemonImg.setAttribute(onerror, "this.src='./img/pokemonNotFound.png'")
    $pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    $pokemonType.textContent = 'TYPE: ' + getPokemonTypes(pokemon.types);
    $pokemonHeight.textContent = (`HEIGHT: ${pokemon.height / 10} M`).toUpperCase();
    $pokemonWeight.textContent = (`WEIGHT: ${pokemon.weight / 10} KG`).toUpperCase();

}

export async function setNewPokemon($pokemon) {
    const pokemonName = uncapitalize($pokemon.innerText);
    showPokemon(await getPokemon(pokemonName));
}
