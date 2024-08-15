describe("Probando errores", () => {

    it("Debe validar el status code fallido y el mensaje de error", () => {

        cy.request({url: 'https://pokeapi.co/api/v2/4545', failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response.body).to.be.eq("Not Found")
            })
    })
})