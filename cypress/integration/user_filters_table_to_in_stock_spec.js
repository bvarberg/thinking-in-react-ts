describe("User filters product table to show only what is in stock", function() {
  it("only displays products that are in stock", function() {
    /**
     * NOTE: This test does not include any set-up steps. Currently, it relies on the application
     * establishing the data that fills in the product table. Ideally, this would be seeded from
     * a location that can be mocked/replaced with fixture data -- making this test more explicit
     * about what it tests and how it establishes its context.
     */
    cy.visit("/")
    cy.get("table").should("contain", "iPhone 5")
    cy.get("input[type='checkbox']").check()
    cy.get("table").should("not.contain", "iPhone 5")
  })
})
