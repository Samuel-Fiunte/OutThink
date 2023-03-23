describe('factor 0', () => {
  it('should check the factoring of 0', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')
    
  cy.get('.form-control.input-lg').click()
  cy.get('#number').type('0')
  cy.get('.btn-success.btn-lg').click()
  cy.xpath('//div[1]//div[2]//div//p').should('contain.text', '1')
  // I tried to find this using the class name and div but no luck, hence I decided to use the full xpath
})
})