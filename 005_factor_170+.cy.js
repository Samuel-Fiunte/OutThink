describe('factorial 170 to 991', () => {
  it('should calculate the factorial of an integer greater than 170', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')

    const num = Math.floor(Math.random() * 820) + 171;
    cy.get('.form-control.input-lg').click().type(num)
    cy.get('.btn-success.btn-lg').click()
    cy.xpath('//div[1]//div[2]//div//p').should('contain.text', 'Infinity')
  })
})