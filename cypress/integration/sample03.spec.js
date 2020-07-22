/// <reference types="cypress" />
 
context('testar torne-se um programador', () => {
    beforeEach(() => {
      cy.visit('www.torneseumprogramador.com.br')
    })
  
    it('progurar no site ', () => {
        cy.get('#aula').type('integracao continua')
        cy.get('form button').click()
        cy.get('#busca a').first().click()
        cy.wait('7000')
        cy.get('ytp-cued-thumbnail-overlay-image a').click()
    })

  })