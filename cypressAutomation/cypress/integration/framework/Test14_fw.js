/// <reference types="Cypress" />

describe('fwSuite1',function(){

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data              //'this' keyword refers to the whole class (scope will be entire class)
        })

    })

    it('fw_test1',function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        // cy.get(':nth-child(1) > .form-control').type('Rani')         //from Cypress
        // data from fixture : example.json
        // cy.fixture('example').then(function(data){                          // scope if within the block (need to make it global)
        //     cy.get(':nth-child(1) > .form-control').type(data.name)
        // })

        cy.get(':nth-child(1) > .form-control').type(this.data.name)


        // cy.get('#exampleFormControlSelect1')         : from Cypress
        // cy.get('select').select('Female')

        cy.get('select').select(this.data.gender)

    })
})