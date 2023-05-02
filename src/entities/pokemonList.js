export default class PokemonList {
  /**
   * @param {Number} total
   * @param {String} nextUrl
   * @param {String} previousUrl
   * @param {Array<String>} names
   * @param {Array<String>} ids
   */
  constructor(total, nextUrl, previousUrl, names, ids) {
      this.total = total;
      this.nextUrl = nextUrl;
      this.previousUrl = previousUrl;
      this.names = names;
      this.ids = ids;
  }
}
