import { buildProduct } from "."

describe("buildProduct", () => {
  it("builds a default product fixture", () => {
    const received = buildProduct()

    expect(received).toEqual({
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    })
  })
})
