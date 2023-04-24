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
  try {
    pokemon.forEach(pokemonTypes => {
      types += `${pokemonTypes.type.name}` + ' '
    })
  } catch (e) {
    types = '';
  }
  return types.toUpperCase();
}

export function capitalize(string) {
  try {
    string = string.charAt(0).toUpperCase() + string.slice(1);
  } catch (e) {
    //console.error(e)
  }
  return string;
}

export function uncapitalize(string) {
  try {
    string = string.charAt(0).toLowerCase() + string.slice(1);
  } catch (e) {
    //console.error(e)
  }
  return string;
}

