/// <reference types='Cypress' />

describe('fwSuite1',function(){

    before(function(){

    cy.fixture('example').then(function(data){
        this.data=data
    })

})

    it('fw_test2',function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get(':nth-child(1) > .form-control').type(this.data.name)                    //argument is getting passed from 'example.json' under 'fixtures' folder

        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)

        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')             

        // cy.get(':nth-child(7) > :nth-child(4)')         //Cypress
        cy.get('#inlineRadio3').should('be.disabled')

        /// *******************************************************************************************
        cy.get(':nth-child(2) > .nav-link').click()

        // cy.selectProduct('Nokia Edge')          // method gets called out from 'commands.js' under 'support' folder
        // cy.selectProduct('iphone X')
        
        // Alternate

        //this.data.productName
        
        cy.pause()              // Helps in debugging
        //or
        cy.debug()              //Same

        this.data.productName.forEach(function(element){

            cy.selectProduct(element)                           // Custom command and fixtures for data import

        })

        
    })

})
