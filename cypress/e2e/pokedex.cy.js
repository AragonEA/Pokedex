const URL = 'http://127.0.0.1:8080'

context('Pokedex', () => {

  before(() => {
    cy.visit(URL);
  });

  describe('Load pokedex elements', () => {
    const TOTAL_POKEMONS = 16

    it('logo in header should be visible', () => {
      cy.get('#logo').should('be.visible');
    });

    it('pokemons grid should have pokemons', () => {
      cy.get('#pokemon-list').find('.list-item').should('have.length', TOTAL_POKEMONS);
    });

    it('pokemon data panel should show data of the first pokemon in grid', () => {
      cy.get('#pokemon-img').should('be.visible');
      cy.get('#pokemon-name').contains('BULBASAUR');
      cy.get('#pokemon-order').contains('ORDER: 1');
      cy.get('#pokemon-type').contains('TYPE: GRASS');
      cy.get('#pokemon-height').contains('HEIGHT: 0.7 M');
      cy.get('#pokemon-weight').contains('WEIGHT: 6.9 KG');
    });

    it('nav-bar button should be visible', () => {
      cy.get('#nav-bar').should('be.visible');
      cy.get('#previous-btn').should('be.visible');
      cy.get('#next-btn').should('be.visible');
    });

    it('previous button should be red', () => {
      cy.get('#previous-btn')
        .should('have.attr', 'class')
        .and('contain', 'nes-btn is-error');
    });

    it('footer should be visible', () => {
      cy.get('footer').should('be.visible');
    });

  });



  describe('Test navegation buttons', () => {

    it('previous button should be red in first pokemon page', () => {
      cy.get('#previous-btn')
        .should('have.attr', 'class')
        .and('contain', 'nes-btn is-error');
    });

    it('pokemon page should change when clicking a nav button', () => {

      cy.contains('Charmander').should("be.visible");

      cy.get('#next-btn').click();

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
});

