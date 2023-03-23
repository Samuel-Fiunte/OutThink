// This is a brittle test because this border color changes a lot
describe('blue border', () => {
  it('should display a blue border when clicking in the box', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')
    
  cy.get('.form-control.input-lg').click()
  cy.wait(1000)
  cy.get('.form-control.input-lg').should("have.css", 'border-bottom-color', 'rgb(102, 175, 233)')
  })
})