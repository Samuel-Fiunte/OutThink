describe('factorial chars', () => {
  it('should try to calculate the factorial of a an alphabet and an special characters and fail', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')

    const randomChar = "abcdefghijklmnñopqrstuvwxyz";
    const randomSpecialChars = randomChar.charAt(Math.floor(Math.random() * randomChar.length));
    const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    const randomSpecialChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    cy.get('.form-control.input-lg').click().type(randomSpecialChars + randomSpecialChar)
    cy.get('.btn-success.btn-lg').click()
    cy.xpath('//div[1]//div[2]//div//p').should('contain.text', 'Please enter an integer')
  })
})