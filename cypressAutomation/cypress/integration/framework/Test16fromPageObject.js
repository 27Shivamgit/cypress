/// <reference types="cypress" />
import homePage from "../pageObjects/homePage"
import productsPage from "../pageObjects/productsPage"


describe('fwSuite1',function(){

    before(function(){

    cy.fixture('example').then(function(data){
        this.data=data
    })

})

    it('fw_test3',function(){
        //Cypress.config('defaultCommandTimeout',10000)
        const hp=new homePage()
        const pp=new productsPage()

        // cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(Cypress.env('url')+"/angularpractice/")

        hp.getEditBox().type(this.data.name)
        hp.getGender().select(this.data.gender)
        hp.getTwoWayDataBinding().should('have.value',this.data.name)
        hp.getEditBox().should('have.attr','minlength','2')
        hp.getEnterpreneurRB().should('be.disabled')
        
        hp.getShopTab().click()


        this.data.productName.forEach(function(element){

            cy.selectProduct(element)
            
        })
        pp.checkOutButton().click()
        pp.successButton().click()
        pp.deliveryLocation().type('India')
        // pp.agreeTerms().check({force:true})          //working
        // Or
        //cy.wait(10000)            Changed config.js
        Cypress.config('defaultCommandTimeout',9000)           //we can define it here itself
        pp.suggestedLocation().click()
        pp.agreeTerms().check({force:true})
        pp.purchaseButton().click()
        //pp.textVal().should('contain','Success')          //Working fine, trying another approach
        
        pp.textVal().then(function(element){
            const txt=element.text()

            // if(txt.includes('Success')){

            // }

            expect(txt.includes('Success')).to.be.true

        })
           
    })






})
