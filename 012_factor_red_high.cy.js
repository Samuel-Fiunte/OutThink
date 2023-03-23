describe('red outline', () => {
  it('should have red outline when non integer is entered', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')
    
  cy.get('.form-control.input-lg').click()
  cy.get('#number').type('e')
  cy.get('.btn-success.btn-lg').click()
  cy.get('.form-control.input-lg').should("have.css", 'border', '2px solid rgb(255, 0, 0)')
})
})