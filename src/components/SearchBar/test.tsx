import { SearchBar } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("SearchBar", () => {
  it("renders", () => {
    const received = shallowRender(<SearchBar />)

    expect(received).toMatchSnapshot()
  })
})
