import { ProductCategoryRow } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("ProductCategoryRow", () => {
  it("renders", () => {
    const category = "Sporting Goods"

    const received = shallowRender(<ProductCategoryRow category={category} />)

    expect(received).toMatchSnapshot()
  })
})
