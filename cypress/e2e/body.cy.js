describe("Probando el body", () => {

    it("Probar el body", () => {
        cy.request("employees/1")
            .its("body")
            .its("first_name")
            .should("be.equal", "Javier")

        cy.request('employees/1').then(res => {

            //Using expect
            expect(res.status).to.be.equal(200)
            expect(res.headers['content-type']).to.be.equal('application/json')
            expect(res.body['first_name']).to.be.equal('Javier')
        })
    })
})