export default class Pokemon {
    /**
     * @param {Number} id
     * @param {String} name
     * @param {String} image
     * @param {String} height
     * @param {String} weight
     * @param {Array<String>} abilities
     * @param {Array<String>} types
     * @param {Array<Movimiento>} movements
     */
    constructor(id, name, image, height, weight, abilities = [], types = [], movements = []) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.types = types;
        this.movements = movements;
    }
}
