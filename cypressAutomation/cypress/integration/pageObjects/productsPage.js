class productsPage{

checkOutButton(){
    return cy.get('.btn-primary')
}
successButton(){
    return cy.get('.btn-success')
}
deliveryLocation(){
    return cy.get('#country')
}
suggestedLocation(){
    return cy.get('.suggestions')
    // return cy.get('.suggestions > ul > li > a')
}
agreeTerms(){
    return cy.get('input[type="checkbox"]')
}
purchaseButton(){
    return cy.get('input[value="Purchase"]')
}
textVal(){
    return cy.get('.alert')
}
amtsOfProds(){
    return cy.get('tr td:nth-child(4) strong')
}
total(){
    return cy.get('h3 strong')
}

}

export default productsPage