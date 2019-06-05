import React from "react"

export function SearchBar() {
  return (
    <form className="SearchBar">
      <input type="text" placeholder="Search..." />
      <label htmlFor="onlyShowInStock" style={{ display: "block" }}>
        <input type="checkbox" name="onlyShowInStock" />
        Only show products in stock
      </label>
    </form>
  )
}
