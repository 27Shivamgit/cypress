
describe('Suite2',function(){
    it('TC4',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //checking the chekboxes
        
        cy.get('#checkBoxOption2').check()
        cy.get('#checkBoxOption1').click()
        
        //validating whether checkboxes are checked or not
        
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption1').check().should('be.checked')
        
        //cy.get('#checkBoxOption3').should('be.checked')     //failed
        
        //verifying the attached text/value of checked checkbbox
        
        //cy.get('#checkBoxOption2').should('have.value','Option2')
        // OR
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')           //compact assertion
        
        // to uncheck
        
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        
        //getting all the checkboxes
        
        //cy.get('input[type="checkbox"]').check()          //checks all
        cy.get('input[type="checkbox"]').check(['option3'])

    })
})