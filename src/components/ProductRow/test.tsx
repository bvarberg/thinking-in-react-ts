import { ProductRow } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"
import { Product } from "../../types/Product"
import { buildProduct } from "../../utils/buildProduct"

describe("ProductRow", () => {
  it("renders", () => {
    const product: Product = buildProduct()

    const received = shallowRender(<ProductRow product={product} />)

    expect(received).toMatchSnapshot()
  })
})
