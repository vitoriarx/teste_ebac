/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click({ force: true });

        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click({force:true});

        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it.only('Deve fazer login com sucesso - Usando fixture' , () => {
        
        cy.fixture('perfil.json').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click({force:true});

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('ebac_invalido@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click({ force: true })

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy. get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click({force:true})

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})