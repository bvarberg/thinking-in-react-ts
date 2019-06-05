import { ProductTable } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"
import { Product } from "../../types/Product"

describe("ProductTable", () => {
  it("renders", () => {
    const products: Product[] = []

    const received = shallowRender(<ProductTable products={products} />)

    expect(received).toMatchSnapshot()
  })
})
