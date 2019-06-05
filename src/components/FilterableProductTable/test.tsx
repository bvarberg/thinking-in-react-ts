import { FilterableProductTable } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"
import { Product } from "../../types/Product"

describe("FilterableProductTable", () => {
  describe("with a few products", () => {
    it("renders", () => {
      const products: Product[] = [
        {
          category: "Sporting Goods",
          price: "$49.99",
          stocked: true,
          name: "Football",
        },
        {
          category: "Sporting Goods",
          price: "$9.99",
          stocked: true,
          name: "Baseball",
        },
        {
          category: "Sporting Goods",
          price: "$29.99",
          stocked: false,
          name: "Basketball",
        },
        {
          category: "Electronics",
          price: "$99.99",
          stocked: true,
          name: "iPod Touch",
        },
        {
          category: "Electronics",
          price: "$399.99",
          stocked: false,
          name: "iPhone 5",
        },
      ]

      const received = shallowRender(
        <FilterableProductTable products={products} />,
      )

      expect(received).toMatchSnapshot()
    })
  })
})
