describe("Probando request", () => {

    it("Debe crear un empleado", () => {

        cy.request({
            method: "POST",
            url:  "/employees", 
            body : {
            "id": "5",
            "first_name": "Gustavo",
            "last_name": "Cortes",
            "email": "gustiavo@platzi.com"
        }}).then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.first_name).to.be.eq("Gustavo")
            expect(response.body).to.have.property("id")

            // Guardar el ID en Cypress.env
            Cypress.env('id', response.body.id)
        })
    })

    it("Validar que el empleado existe en la BD", () => {
        cy.request("GET", "/employees").then(response => {
            expect(response.body[response.body.length - 1].first_name).to.eq("Gustavo")
        })
    })


    it("Editar un empleado", () => {
        const id = Cypress.env('id')
        cy.request({
            method: "PUT", 
            url: `/employees/${id}`,
            body:{
                first_name: "Adolfo",
                email: "Gustavito@mail.com"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.first_name).to.be.eq("Adolfo")
        })
    })
    
    it("Eliminar un empleado", () => {
        const id = Cypress.env('id')
        cy.request({
            method: "DELETE", 
            url: `/employees/${id}`,
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})