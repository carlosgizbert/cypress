describe("Login no Sauce Labs", () => {
  it("Realiza login", () => {
    cy.visit("/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.get(".title").should("be.visible")
  })
})
