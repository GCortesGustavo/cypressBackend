describe("Probando headers", () => {
    it("Validar header y content type", function () {
        cy.request("http://localhost:3000/employees").its("headers").its("content-type").should("include", "application/json")
    })
})