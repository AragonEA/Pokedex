import PokemonList from '../entities/pokemonList.js';

/**
 * @param {Object} apiData
 * @returns {PokemonList}
 */

export function mapPokemonList(apiData) {
    const {
        count: total,
        next: nextUrl,
        previous: previousUrl,
        results: results,
    } = apiData;

    const names = results.map((pokemon) => pokemon.name)
    const ids = results.map((pokemon) => (pokemon.url).slice(30).match(/(\d+)/g)[0])  //Get the id from the url

    return new PokemonList(
        total,
        nextUrl,
        previousUrl,
        names,
        ids,
    );
}
