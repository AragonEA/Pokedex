/**
 * @jest-environment jsdom
 */
/// <reference types="Jest" /> 
import { setNewPokemonGrid } from '../grid';

document.body.innerHTML = `
<body>
<header>
    <img id="logo" src="./src/assets/img/pokemonLogo.png" alt="pokedex logo">
</header>
<main>
    <div class="container">

        <section class="left">
            <div id="pokemon-data" class="nes-container is-centered background-white border-radius">
                <picture>
                    <img id="pokemon-img" class="img" alt="pokemon-image">
                </picture>
                <p id="pokemon-name" class="title">NAME</p>
                <ul class="nes-list is-disc" id="pokemon-stats">
                    <li id="pokemon-id">ID: </li>
                    <li id="pokemon-type">TYPE: </li>
                    <li id="pokemon-height">HEIGHT: </li>
                    <li id="pokemon-weight">WEIGHT: </li>
                </ul>
                <div>
                    <button id="modal-btn" class="nes-btn">Show Abilities & Movements</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="modal-title">
                                <span id="close-btn" class="close">&times;</span>
                                <h2>Abilities</h2>
                            </div>
                            <div id="abilities-section" class="modal-data">
                                <ul id="abilities">
                                    <li>Loading...</li>
                                </ul>
                            </div>
                            <div class="modal-title">
                                <h2>Movements</h2>
                            </div>
                            <div id="movements-section" class="modal-data">
                                <ul id="movements">
                                    <li>Loading...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
<footer>
    <a href="https://github.com/AragonEA" target="_blank">AragonEA<i class="nes-icon github is-small"></i></a>
</footer>
<script src="src/js/main.js" type="module"></script>
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

setNewPokemonGrid(pokemonList);


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


