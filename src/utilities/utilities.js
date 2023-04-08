export function getOffset(URL) {
  let offset;
  try {
    offset = /offset=([0-9]+)/gi.exec(URL).pop();
  } catch (e) {
    offset = undefined;
  }
  return offset;
}

export function getPokemonTypes(pokemon) {
  let types = ''
  pokemon.forEach(pokemonTypes => {
    types += `${pokemonTypes.type.name}` + ' '
  })
  return types.toUpperCase();
}

export function getPokemonName() {
  return document.getElementById('pokemon-name').textContent.toLowerCase();
}

export function uncapitalize(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
