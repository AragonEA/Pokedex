/// <reference types="cypress"/>

const URL = ' http://127.0.0.1:8080'

context('Pokedex', { testIsolation: false }, () => {

  before(() => {

    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16', { fixture: 'pokemons-list-page-1.json' })
      .as('getFirstPage');
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=16&limit=16', { fixture: 'pokemons-list-page-2.json' })
      .as('getSecondPage');
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur/', { fixture: 'bulbasaur.json' })
      .as('getBulbasaur');
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/blastoise/', { fixture: 'blastoise.json' })
      .as('getBlastoise');
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/raichu/', { fixture: 'raichu.json' })
      .as('getRaichu');

    cy.visit(URL);

  });

  describe('Check pokemons in fist page', () => {

    const TOTAL_POKEMONS_IN_GRID = 16
    const TOTAL_POKEMON_NAMES_IN_GRID = 16

    it('pokemons grid should have 16 pokemons', () => {
      cy.get('#pokemon-grid').find('.grid-item').should('have.length', TOTAL_POKEMONS_IN_GRID + TOTAL_POKEMON_NAMES_IN_GRID);
    });
  });

  describe('Check data of the first pokemon in the grid', () => {

    it('pokemon data panel should show the data of the first pokemon in the grid', () => {
      cy.get('#pokemon-img').should('be.visible');
      cy.get('#pokemon-name').contains('BULBASAUR');
      cy.get('#pokemon-id').contains('ID: 1');
      cy.get('#pokemon-type').contains('TYPE: GRASS');
      cy.get('#pokemon-height').contains('HEIGHT: 0.7 M');
      cy.get('#pokemon-weight').contains('WEIGHT: 6.9 KG');
    });
  });

  describe('Test Abilities & Movements Modal', () => {

    it('Test abilities', () => {
      cy.get('#modal-btn').click()
      const abilities = []
      cy.get('#abilities li').each(($li) => abilities.push($li.text()))
      cy.wrap(abilities).should('deep.equal', [
        'OVERGROW',
        'CHLOROPHYLL'
      ])
      cy.get('#close-btn').click()
    });

    it('Test movements', () => {
      cy.get('#modal-btn').click()
      const movements = []
      cy.get('#movements li').each(($li) => movements.push($li.text()))
      cy.wrap(movements).should('deep.equal', [
        'RAZOR-WIND', 'SWORDS-DANCE', 'CUT', 'BIND', 'VINE-WHIP', 'HEADBUTT', 'TACKLE', 'BODY-SLAM', 'TAKE-DOWN', 'DOUBLE-EDGE', 'GROWL', 'STRENGTH', 'MEGA-DRAIN', 'LEECH-SEED', 'GROWTH', 'RAZOR-LEAF', 'SOLAR-BEAM', 'POISON-POWDER', 'SLEEP-POWDER', 'PETAL-DANCE', 'STRING-SHOT', 'TOXIC', 'RAGE', 'MIMIC', 'DOUBLE-TEAM', 'DEFENSE-CURL', 'LIGHT-SCREEN', 'REFLECT', 'BIDE', 'SLUDGE', 'SKULL-BASH', 'AMNESIA', 'FLASH', 'REST', 'SUBSTITUTE', 'SNORE', 'CURSE', 'PROTECT', 'SLUDGE-BOMB', 'MUD-SLAP', 'OUTRAGE', 'GIGA-DRAIN', 'ENDURE', 'CHARM', 'FALSE-SWIPE', 'SWAGGER', 'FURY-CUTTER', 'ATTRACT', 'SLEEP-TALK', 'RETURN', 'FRUSTRATION', 'SAFEGUARD', 'SWEET-SCENT', 'SYNTHESIS', 'HIDDEN-POWER', 'SUNNY-DAY', 'ROCK-SMASH', 'FACADE', 'NATURE-POWER', 'HELPING-HAND', 'INGRAIN', 'KNOCK-OFF', 'SECRET-POWER', 'WEATHER-BALL', 'GRASS-WHISTLE', 'BULLET-SEED', 'MAGICAL-LEAF', 'NATURAL-GIFT', 'WORRY-SEED', 'SEED-BOMB', 'ENERGY-BALL', 'LEAF-STORM', 'POWER-WHIP', 'CAPTIVATE', 'GRASS-KNOT', 'VENOSHOCK', 'ROUND', 'ECHOED-VOICE', 'GRASS-PLEDGE', 'WORK-UP', 'GRASSY-TERRAIN', 'CONFIDE', 'GRASSY-GLIDE'
      ])
      cy.get('#close-btn').click()
    });
  });


  describe('Test navegation', () => {

    it('previous button should be red in first pokemon page', () => {
      cy.get('#previous-btn')
        .should('have.attr', 'class')
        .and('contain', 'nes-btn is-error');
    });

    it('pokemon page should change when clicking a nav button', () => {

      cy.get('#page-selector').contains('1');

      cy.contains('Charmander').should("be.visible");
      cy.get('#next-btn').click();

      cy.get('#page-selector').contains('2');

      cy.contains('Pikachu').should("be.visible");
      cy.get('#previous-btn').click();

      cy.contains('Charmander').should("be.visible");
    });

    it('previous button should be white after first pokemon page', () => {
      cy.get('#previous-btn')
        .should('have.attr', 'class')
        .and('contain', 'nes-btn');
    });

  });

  describe('Pokemon data should load when a pokemon is clicked', () => {

    it('should show data when a pokemon is clicked in the fist page', () => {
      cy.contains('Blastoise').click();

      cy.get('#pokemon-img').should('be.visible');
      cy.get('#pokemon-name').contains('BLASTOISE');
      cy.get('#pokemon-id').contains('ID: 9');
      cy.get('#pokemon-type').contains('TYPE: WATER');
      cy.get('#pokemon-height').contains('HEIGHT: 1.6 M');
      cy.get('#pokemon-weight').contains('WEIGHT: 85.5 KG');
    });

    it('should show data when a pokemon is clicked in the second page', () => {
      cy.get('#next-btn').click();

      cy.contains('Raichu').click();

      cy.get('#pokemon-img').should('be.visible');
      cy.get('#pokemon-name').contains('RAICHU');
      cy.get('#pokemon-id').contains('ID: 26');
      cy.get('#pokemon-type').contains('TYPE: ELECTRIC');
      cy.get('#pokemon-height').contains('HEIGHT: 0.8 M');
      cy.get('#pokemon-weight').contains('WEIGHT: 30 KG');
    });
  });

});

