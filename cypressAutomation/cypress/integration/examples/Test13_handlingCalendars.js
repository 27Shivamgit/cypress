
describe('Calendar test',()=>
{

it('Verify date selection',()=>{

    // Requirements

    const mnth="5";
    const dt="27"
    const yr="2027"
    const explst=[mnth,dt,yr]

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    cy.get('.react-date-picker__inputGroup').click()
    cy.get('.react-calendar__navigation__label').click()
    cy.get('.react-calendar__navigation__label').click()

    cy.contains("button",yr).click()

    cy.get('.react-calendar__year-view__months__month').eq(Number(mnth)-1).click()                               //eq stores an array of 12 elements

    //cy.get("abbr",dt).click()                  //Extremely useful whenever we need to find any element based on 'tagname' and 'text'          : somehow not working
    cy.get('.react-calendar__month-view__days__day').eq(dt).click()
    

    //Assertion

    cy.log(cy.get('.react-date-picker__inputGroup').text)       //Prints nothing as the html tag is further devided into sub tags for date, month and year each

    cy.get('.react-date-picker__inputGroup__day').each(($el,index)=>{                   //Iteration

        //$el                                                   //returns promise here not value
        // cy.wrap($el)                                        //.text might not work here as there is no text present in subtags rather we need to extract "value" attribute's value(pulling attribute value) 
        //cy.wrap($el).invoke('val')                           //returing promise
        cy.wrap($el).invoke('val').then(function(text){
            cy.log(text)
        })
        cy.wrap($el).invoke('val').should('eq',explst[index])

    })

    // Need more practice, not satisfied with the validation

})
})