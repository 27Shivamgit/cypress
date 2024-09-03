import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import homePage from "../../../pageObjects/homePage"
import productsPage from "../../../pageObjects/productsPage"

const hp=new homePage()
const pp=new productsPage()

Given('Open eCommerce Page',()=>{

    cy.visit(Cypress.env('url')+"/angularpractice/")

})

When('add items to cart',()=>{

    hp.getShopTab().click()


    this.data.productName.forEach(function(element){

        cy.selectProduct(element)
        
    })
    pp.checkOutButton().click()
})

And('validate total price',()=>{

    var sum=0

    pp.amtsOfProds().each(($el,index,$list) => {

        cy.log($el.text())
        
        const actValue=$el.text()
        var res=actValue.split(" ")
        res=res[1].trim()
        cy.log(res)

        sum=sum+Number(res)

    }).then(function(){
        cy.log(sum)
    })
    

    pp.total().then(function(element){

        const amt=element.text()
        var res=amt.split(" ")
        var tamt=res[1].trim()
        expect(Number(tamt)).to.equal(sum)
       
        
    })

})

Then('select country, submit and verify Success',()=>{

    pp.checkOutButton().click()
        pp.successButton().click()
        pp.deliveryLocation().type('India')
        Cypress.config('defaultCommandTimeout',9000)      
        pp.suggestedLocation().click()
        pp.agreeTerms().check({force:true})
        pp.purchaseButton().click()
        
        pp.textVal().then(function(element){
            const txt=element.text()
            expect(txt.includes('Success')).to.be.true

        })

})