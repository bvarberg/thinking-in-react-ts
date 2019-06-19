describe("User views product table", () => {
  /**
   * As a user
   * When I visit the home page
   * Then I should see a list of all products
   */
  it("they see all products", () => {
    cy.visit("/")
    cy.get("table")
      .should("contain", "Baseball")
      .and("contain", "Basketball")
      .and("contain", "Football")
      .and("contain", "iPhone 5")
      .and("contain", "iPod Touch")
  })
})
