describe('factorial fraction', () => {
  it('should try to enter a fraction and fail gracefully', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')

    const num = Math.random() * 10;
    cy.get('.form-control.input-lg').click().type(num)
    cy.get('.btn-success.btn-lg').click()
    cy.xpath('//div[1]//div[2]//div//p').should('contain.text', 'Please enter an integer')
    })
    })