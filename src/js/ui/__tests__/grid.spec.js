/**
 * @jest-environment jsdom
 */
/// <reference types="Jest" /> 
import { showNewPokemonGrid } from '../grid';

document.body.innerHTML = `
<body>
<main>
    <div class="container">

        <section class="right">
            <div id="pokemon-grid" class="nes-container is-centered background-white border-radius">
            </div>
            <nav id="nav-bar">
                <button id="previous-btn" type="button" class="nes-btn is-error">Previous</button>
                <div class="nes-select">
                    <form onsubmit="return false" id="selector-form">
                        <select id="page-selector" name="selector">
                        </select>
                        <input id="select-btn" class="nes-btn" type="submit" value="Select Page">
                    </form>
                </div>
                <button id="next-btn" type="button" class="nes-btn">Next</button>
            </nav>
        </section>
        
    </div>
</main>
</body>`;

const pokemonList = {
    "total": 1281,
    "nextUrl": "https://pokeapi.co/api/v2/pokemon/?offset=16&limit=16",
    "previousUrl": null,
    "names": [
        "bulbasaur",
        "ivysaur",
        "venusaur",
        "charmander",
        "charmeleon",
        "charizard",
        "squirtle",
        "wartortle",
        "blastoise",
        "caterpie",
        "metapod",
        "butterfree",
        "weedle",
        "kakuna",
        "beedrill",
        "pidgey"
    ],
    "ids": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16"
    ]
}

showNewPokemonGrid(pokemonList);


const $gridItems = document.querySelectorAll('.grid-item');

test('should have 16 pokemons', () => {
    expect($gridItems.length).toBe(16);
});


test('all pokemons should have a name', () => {
    for (let i = 0; i < ($gridItems).length; i++) {
        expect($gridItems[i].dataset.pokemonName).toContain(pokemonList.names[i]);
    }
});

test('all pokemons should have an image', () => {
    for (let i = 0; i < ($gridItems).length; i++) {
        const $image = $gridItems[i].firstChild
        if ($image) {
            expect($image.src)
                .toContain(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonList.ids[i]}.png`);
        }
    }
});


