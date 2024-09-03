
describe('Suite2',function(){
    it('TC8',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       //cy.get('#opentab').click()         // Opens link in new tab

       cy.get('#opentab').invoke('removeAttr','target').click()         //open in same tab

       cy.origin("https://www.qaclickacademy.com/",()=>{
        
        cy.get('#navbarSupportedContent a[href="about.html"]').click()            //working css
        //cy.get('.navbar-nav ml-auto a[href="about.html"]').click()          //Not recognizing???(bcz parent have 2 classes)
        //cy.get('.navbar-nav a[href="about.html"]').click()
        //cy.get('.navbar-nav > :nth-child(4) > a')             //from cypress inspect tool

        cy.get('.mt-50 h2').should('contain',"QAClick Academy")

       })
       //cy.get('#navbarSupportedContent a[href="about.html"]').click()           //will throw cross domain error
       //cy.get('.navbar-nav ml-auto [href="about.html"]')

    })
})