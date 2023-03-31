/// <reference types="cypress"/>

const URL = ' http://127.0.0.1:8080'

context('Pokedex', { testIsolation: false }, () => {

  before(() => {

    cy.visit(URL);
  });

  describe('Load fist page', () => {

    const TOTAL_POKEMONS_IN_GRID = 16
    const TOTAL_POKEMON_NAMES_IN_GRID = 16

    it('pokemons grid should have 16 pokemons', () => {
      cy.get('#pokemon-grid').find('.grid-item').should('have.length', TOTAL_POKEMONS_IN_GRID + TOTAL_POKEMON_NAMES_IN_GRID);
    });
  });

  describe('Load fist pokemon data', () => {

    it('pokemon data panel should show the data of the first pokemon in the grid', () => {
      cy.get('#pokemon-img').should('be.visible');
      cy.get('#pokemon-name').contains('BULBASAUR');
      cy.get('#pokemon-id').contains('ID: 1');
      cy.get('#pokemon-type').contains('TYPE: GRASS');
      cy.get('#pokemon-height').contains('HEIGHT: 0.7 M');
      cy.get('#pokemon-weight').contains('WEIGHT: 6.9 KG');
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

      cy.get('#page-selector').contains('1');

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

