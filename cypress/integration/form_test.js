describe("test our form inputs", () => {
    /* beforeEach will run before each "it" within the same describe*/
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
    it("add texts to inputs and submit form", () => {
      // fill out form
      cy.get("[data-cy=name]").type("Emily").should("have.value", "Emily");
      cy.get("[data-cy=email]")
        .type("emily@lambda.com")
        .should("have.value", "emily@lambda.com");
      cy.get("[data-cy=motivation]")
        .type("I want to help")
        .should("have.value", "I want to help");
        
      cy.get("[data-cy=positions]")
        .select("Yard Work")
        .should("have.value", "Yard Work");
      cy.get("[type=checkbox]").check().should("be.checked");
      // submits the form
      cy.get("[data-cy=submit]").click();
      //checks that the submit effect shows on page (confirmation msg)
      cy.get("pre").should("exist");
    });
    // it
  });