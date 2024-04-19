describe("Página de Login", () => {

  beforeEach(() => {
    
    cy.visit("/")

  })

  it("Login de usuário com sucesso", () => {

    const user = {
      user: "sousa",
      password: "12345678"
    }

    cy.get("[data-test=loginUserName]").type(user.user)
    cy.get("[data-test=loginPassword]").type(user.password)
    cy.get("[data-test=loginBtn]").click()
    cy.url().should("be.equal", `https://3076-cypress-alurapic-front.vercel.app/#/user/${user.user}`)

  })

  it("Login incorreto de usuário com dados vazios", () => {

    cy.contains("User name is required!").should("be.visible")
    cy.contains("Password is required!").should("be.visible")

  })

})