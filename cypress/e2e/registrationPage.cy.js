describe('Página de Cadastro', () => {

  it('Cadastro de usuário com sucesso', () => {

    cy.visit('/')

    cy.contains("a", "Register").click()

    cy.get("[data-test=email]").type("sousa@email.com.br")
    cy.get("[data-test=fullName]").type("sousa")
    cy.get("[data-test=registerUserName]").type("sousa")
    cy.get("[data-test=registerPassword]").type("12345678")
    cy.get("[data-test=btnRegister]").click()
    
  })

  it("Cadastro incorreto de usuário", () => {

    cy.visit("/")

    cy.contains("a", "Register").click()

    cy.get("[data-test=btnRegister]").click()
    cy.get("[data-test=btnRegister]").click()

    cy.contains("Email is required!").should("be.visible")
    cy.contains("Full name is required!").should("be.visible")
    cy.contains("User name is required!").should("be.visible")
    cy.contains("Password is required!").should("be.visible")

  })

})