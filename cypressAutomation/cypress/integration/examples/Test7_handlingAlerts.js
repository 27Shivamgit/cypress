
describe('Suite2',function(){
    it('TC7',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()         
        // pop up gets handles automatically by Cypress
        cy.get('[value="Confirm"]').click()
        // pop up gets handles automatically by Cypress

        //window:alert
        cy.on('window:alert',(str)=>{
            //Mocha Test Framework
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>{
            //Mocha Test Framework
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


    })
})