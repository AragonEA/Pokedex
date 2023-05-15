import Pokemon from '../entities/pokemon.js';

/**
 * @param {Object} apiData
 * @returns {Pokemon}
 */

export function mapPokemon(apiData) {
  const {
    id,
    name,
    height,
    weight,
    types,
    abilities,
    moves,
  } = apiData;
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return new Pokemon(
    id,
    name,
    image,
    height,
    weight,
    abilities.map((item) => item.ability.name),
    types.map((item) => item.type.name),
    moves.map((item) => item.move.name,),
  );
}
