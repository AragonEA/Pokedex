export function getPokemons(URL) {
    return fetch(URL).then(response => response.json());
}

export function getPokemonData(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then((response) => response.json());
}
