/// <reference types="cypress" />


describe('Ecommerce Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('should successfully login using valid credentials', () => {
    cy.get("input[name='email']").type("test@email.com")
    cy.get("input[name='password']").type("taylorslow")
    cy.get('button').contains('Sign in').click()
    cy.get("div[role='status']").contains("Successful login");
    cy.argosScreenshot("homepage");
  })

})
