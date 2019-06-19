describe("User filters product table with search text", function() {
  it("only displays products that match", function() {
    cy.visit("/")
    cy.get("table").should("contain", "iPhone 5")
    cy.get("input[type='text']").type("Football")
    cy.get("table").should("not.contain", "iPhone 5")
  })
})
