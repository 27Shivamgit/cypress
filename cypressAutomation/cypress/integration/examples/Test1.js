/// <reference types="Cypress" />      
 //auto_suggestions/inteligent_code_completion

// cypress  -Spec file/Test file        ` similar java class/java file
/*
describe('MyFirstTestSuite',function(){
    it('MyFirstTest',function(){
        expect(true).to.equal(false)
    })
})
*/    

// ********************************************************************



describe('Suite1',function(){
    it('TC1',function(){

        //cy.visit("https://rahulshettyacademy.com") 
        //https://github.com/cypress-io/cypress-realworld-app
        //https://github.com/AutomationPanda/device-registry-flask
        //https://www.saucedemo.com/
        //https://parabank.parasoft.com/parabank/index.htm
        //https://webdriveruniversity.com/index.html
        //https://thinking-tester-contact-list.herokuapp.com/
        
        //*          https://ultimateqa.com/automation

        //cy.visit("https://automationintesting.online/#/")
        //cy.visit("https://ultimateqa.com/filling-out-forms/")
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //Selenium get 'hits url' whereas Cypress get 'acts as findelement' of Selenium
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //verify whether 4 results are getting displayed or not
        //cy.get('.product').should('have.length',4)            //Return even hidden elements as well
        cy.get(".product:visible").should("have.length",4)

        //          Parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        //select 2nd product
        //cy.get('.products').find('.product').eq(2)
        //click add to cart button
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        

    })
})