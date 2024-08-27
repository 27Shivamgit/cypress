
describe('Suite2',function(){
    it('TC9',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // validate price as '25' for 'Master Selenium Automation in simple Python Language' from the table

        
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const txt=$el.text()
            if(txt.includes("Python"))
            {
                //cy.get('tr td:nth-child(2)').eq(index).next().text()            //.text() is again jQuery command and won't work until we resolve the promise
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const pricetxt=price.text()
                    expect(pricetxt).to.equal('25')
                })
            }

        })

      

    })
})