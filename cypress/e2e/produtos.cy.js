/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve solucionar um produto da lista', () => {
        cy.get('[class= "product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class= "product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()


        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
    })
});