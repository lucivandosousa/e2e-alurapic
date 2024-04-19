describe("Testa a requição com sucesso na API", () => {

  beforeEach(() => {
    cy.visit("/")
  })

  it("Login com sucesso", () => {
    cy.request({
      method: "POST",
      url: "https://alurapic-api.onrender.com/user/login",
      body: {
        "userName": "sousa",
        "password": "12345678"
      }
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
    })
  })

})