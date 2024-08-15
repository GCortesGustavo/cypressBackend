describe("Probando los status", () => {

    it("Debe validar el status code exitoso", () => {
        cy.request("employees")
            .its("status")
            .should("eq", 200)
    })

    it("Debe validar el status code fallido", () => {
        cy.request({url: "employees/4", failOnStatusCode: false})
            .its("status")
            .should("eq", 404)
    })

    it("Crear un usuario y eliminarlo", () => {
        cy.request("POST", "/employees", {
            "id": 4,
            "first_name": "Pepe",
            "last_name": "Mujica",
            "email": "pepito@platzi.com"
        }).as("createdEmployee")
    
        cy.get("@createdEmployee").its("status").should("eq", 201)
    
        cy.get("@createdEmployee")
            .its("body")
            .its("id")
            .then((createdEmployeeId) => {
                cy.request({
                    method: "DELETE",
                    url: `/employees/${createdEmployeeId}`,
                    failOnStatusCode: false
                })
                .its("status")
                .should("eq", 404)
            })
    })


})