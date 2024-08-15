describe("Probando headers", () => {
    it("Validar header y content type", function () {
        cy.request("/employees").its("headers").its("content-type").should("include", "application/json")
    })
})