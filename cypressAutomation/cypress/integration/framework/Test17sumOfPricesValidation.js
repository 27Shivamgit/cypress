/// <reference types="cypress" />
import homePage from "../pageObjects/homePage"
import productsPage from "../pageObjects/productsPage"


describe('fwSuite1',function(){

    before(function(){

    cy.fixture('example').then(function(data){
        this.data=data
    })

})

    it('fw_test4',function(){
        
        const hp=new homePage()
        const pp=new productsPage()

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

        var sum=0

        pp.amtsOfProds().each(($el,index,$list) => {

            cy.log($el.text())
            
            const actValue=$el.text()
            var res=actValue.split(" ")
            res=res[1].trim()
            cy.log(res)

            // sum=sum+res         //res is returned as a string
            sum=sum+Number(res)

        }).then(function(){
            cy.log(sum)
        })
        
        // cy.log(sum)         // it might print '0' due to asynchronous nature as the defined value is already ready which is 'sum=0' and it might print that before executing the login block

        pp.total().then(function(element){

            //element.text()
            const amt=element.text()
            var res=amt.split(" ")
            var tamt=res[1].trim()
            expect(Number(tamt)).to.equal(sum)
           
            
        })

            

   

        


    })






})
