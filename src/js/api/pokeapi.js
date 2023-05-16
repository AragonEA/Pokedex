const POKEMONS_LIMIT = 16;

export function getPokemons(offset = 0, limit = POKEMONS_LIMIT) {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(URL).then(response => response.json());
}

export function getPokemon(pokemonName) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/` 
    return fetch(URL).then(response => response.json());
}
