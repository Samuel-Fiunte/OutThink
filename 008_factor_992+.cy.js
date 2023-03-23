// please note this is a test designed to fail, but I included line 13 to make it pass if needed
describe('factorial over 991', () => {
  it('should try to calculate the factorial of a number over 991 and fail gracefully', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')

    const num = Math.floor(Math.random() * 9013) + 992;
    cy.get('.form-control.input-lg').click().type(num)
    cy.get('.btn-success.btn-lg').click()
    cy.xpath('/html/body/div[1]/div[2]/div/p/text()[1]')
    .should(($el) => {
      const text = $el.text();
      // this line is here in case you want to make this test pass. knowingly passing an error.
      // expect(text.trim().length).to.be.equal(0);
      expect(text.trim().length).to.be.greaterThan(0);
    })
    // this line is here for whenever the message for negative numbers is implemented 
    // cy.xpath('//div[1]//div[2]//div//p').should('contain.text', Negative numbers message)
    })
    })