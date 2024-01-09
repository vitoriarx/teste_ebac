/// <reference types="cypress" />

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer o pré cadastro', () => {
        cy.get('#reg_email').type('testedeemail321@gmail.com')
        cy.get('#reg_password').type('@Teste.com')
        cy.get(':nth-child(4) > .button').click()
    });
});