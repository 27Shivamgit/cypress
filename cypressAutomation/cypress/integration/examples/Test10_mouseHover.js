
describe('Suite2',function(){
    it('TC10',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //cy.get('#mousehover').invoke('show')            //super parent('grand parent') won't allow to interact with child
        
        cy.get('.mouse-hover-content').invoke('show')           //direct parent
        cy.contains('Top').click()
        // OR           //comment either above 2 lines or below 1 line
        cy.contains('Top').click({force:true})

        cy.url().should('include','top')

        // force click w/o showing the hover element(if our goal to only click the element)
        cy.contains('Reload').click({force:true})
       
    })
})