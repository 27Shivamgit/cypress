
describe('Suite2',function(){
    it('TC5',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //static dropdown           : elements is dropdown are fixed in number

        cy.get('select').select('option2')          //selecting by value
        cy.get('select').select('Option1')          //option name

        //verify whether desired element got selected or not

        cy.get('select').select('Option1').should('have.value','option1')

        //dynamic dropdown

        cy.get('#autocomplete').type('Ind')
        //cy.get('.ui-menu-item div')         // parent child
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()=="India")
            {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')

    })
})