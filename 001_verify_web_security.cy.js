describe('Verify Security of Website', () => {
  it('should check if page is secure and crypto is available', () => {
    cy.visit('https://qainterview.pythonanywhere.com/')
    
    cy.window().then((win) => {
      // Check that the connection is secure
      expect(win.location.protocol).to.equal('https:')
  
      // Check that cryptographic functions are available
      expect(win.crypto.subtle).to.exist
    })
  })
})