
describe('Suite2',function(){
    it('TC11',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.visit(url)
            cy.origin(url,() => {
                cy.get('div.sub-menu-bar a[href*="about"]').click()

            })
            
            //cy.get('div.sub-menu-bar a[href*="about"]').click()
        })

       
    })
})