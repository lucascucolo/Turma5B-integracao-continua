/// <reference types="cypress" />
 
context('testar torne-se um programador', () => {
    beforeEach(() => {
      cy.visit('http://google.com')
    })
  
    it('progurar no google ', () => {
        cy.get('form input[type="text"]').type('torne se um programador')
        cy.get('form').submit()
        cy.visit(cy.get('#search .rc a').first())
    })
  })