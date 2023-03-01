export function getPokemons(URL) {
    const newURL = removeLimit(URL)
    return fetch(newURL + 'limit=16').then(response => response.json());
}

export function getPokemonData(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then((response) => response.json());
}

function removeLimit(URL){
    let lastIndex = URL.lastIndexOf("limit")
    return URL = URL.substring(0, lastIndex);
}
