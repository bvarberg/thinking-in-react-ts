import { SearchBar } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("SearchBar", () => {
  it("renders", () => {
    const received = shallowRender(<SearchBar />)

    expect(received).toMatchSnapshot()
  })

  describe("with in stock only", () => {
    it("renders", () => {
      const inStockOnly = true

      const received = shallowRender(<SearchBar inStockOnly={inStockOnly} />)

      expect(received).toMatchSnapshot()
    })
  })

  describe("with filter text", () => {
    it("renders", () => {
      const filterText = "Football"

      const received = shallowRender(<SearchBar filterText={filterText} />)

      expect(received).toMatchSnapshot()
    })
  })
})
