/// <reference types="cypress" />
import {faker} from '@faker-js/faker'; 

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer o pré cadastro com sucesso', () => {
        const fakeEmail = faker.internet.email();
        cy.get('#reg_email').type(fakeEmail);
        cy.get('#reg_password').type('@TesteTeste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o pré-cadastro com sucesso usando comandos customizados', () => {
        const fakeEmail2 = faker.internet.email();
        cy.preCadastro(fakeEmail2, 'senha!@forte', 'Fábio', 'Araújo')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
});