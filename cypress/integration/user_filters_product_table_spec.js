describe("User filters product table", () => {
  /**
   * As a user
   * When I visit the home page
   * And I fill in the search box
   * Then I should only see products that match the text I entered
   */
  describe("they fill in text to search for", () => {
    it("they see only products that match", function() {
      cy.visit("/")
      cy.get("table").should("contain", "iPhone 5")
      cy.get("input[type='text']").type("Football")
      cy.get("table").should("not.contain", "iPhone 5")
    })
  })

  /**
   * As a user
   * When I visit the home page
   * And I toggle the in stock only option
   * Then I should only see products that are in stock
   */
  describe("they toggle to show only items in stock", () => {
    it("they see only products that are in stock", () => {
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
})
