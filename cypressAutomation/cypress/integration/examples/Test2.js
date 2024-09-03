/// <reference types="Cypress" />      

describe('Suite1',function(){
    it('TC2',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get(".product:visible").should("have.length",4)

        cy.get('.products').as('productLocator')        //Aliasing

        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('Hey there')
        })
        //console.log('Hey there')        //asynchronous
        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes("Cashews")){
                cy.wrap($el).find('button').click()         
            }
        })

        //assert if logo text is correctly displayed 
        cy.get('.brand').should('have.text','GREENKART')      //Chai assertion type:  'should'

        // To print in cypress logs
        const logo=cy.get('.brand').then(function(logoelement)         
        {
            cy.log(logoelement.text())

        })
    })
})