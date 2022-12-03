/// <reference types="jquery" \>
const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=16&offset=0';
let previousPage = '';
let nextPage = '';
const $pokemonList = document.querySelector('#pokemon-list');
const $pokemonName = document.querySelector('#pokemon-name');
const $pokemonImg = document.querySelector('#pokemon-img');
const $pokemonOrder = document.querySelector('#pokemon-order');
const $pokemonType = document.querySelector('#pokemon-type');
const $pokemonHeight = document.querySelector('#pokemon-height');
const $pokemonWeight = document.querySelector('#pokemon-weight');
const $previousBtn = document.querySelector('#previous-btn');
const $nextBtn = document.querySelector('#next-btn');

function showPokemons(URL) {
    try {
        fetch(URL)
            .then(response => response.json())
            .then(response => {
                deletePokemonsList();
                showPokemonList(response.results);
                previousPage = response.previous;
                nextPage = response.next;
            });
    } catch (error) { console.error(error); }
}

function showPokemonList(pokemons) {
    Object.keys(pokemons).forEach(pokemon => {

        const $pokemonImg = document.createElement('img');
        const $pokemonName = document.createElement('p');
        const $pokemonContainer = document.createElement('div');
        const pokemonNumber = pokemons[pokemon].url.slice(30).match(/(\d+)/g);

        $pokemonContainer.classList = 'list-item';
        $pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
        $pokemonName.textContent = capitalizeFirstLetter((pokemons[pokemon].name));

        $pokemonList.appendChild($pokemonContainer);
        $pokemonContainer.appendChild($pokemonImg);
        $pokemonContainer.appendChild($pokemonName);
    });
}

function getPokemon(pokemonName) {
    try {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
            .then((response) => response.json())
            .then((data) => showPokemonData(data));
    } catch (error) { console.error(error); }
}
function showPokemonData(pokemonData) {

    $pokemonImg.src = pokemonData.sprites["front_default"];
    $pokemonName.textContent = (`${pokemonData.name}`).toUpperCase();
    $pokemonOrder.textContent = (`ORDER: ${pokemonData.order}`)
    $pokemonType.textContent = (`TYPE: ${pokemonData.types[0].type.name}`).toUpperCase();
    $pokemonHeight.textContent = (`HEIGHT: ${pokemonData.height / 10} M`).toUpperCase();
    $pokemonWeight.textContent = (`WEIGHT: ${pokemonData.weight / 10} KG`).toUpperCase();
}

function showPreviousPage() {
    if (previousPage) {
        $previousBtn.classList.remove('is-error');
        showPokemons(previousPage);
    } else {
        $previousBtn.classList.add('is-error');
    }
}

function showNextPage() {
    if (nextPage) {
        $nextBtn.classList.remove('is-error');
        $previousBtn.classList.remove('is-error');
        showPokemons(nextPage);
    } else {
        $nextBtn.classList.add('is-error');
    }
}

