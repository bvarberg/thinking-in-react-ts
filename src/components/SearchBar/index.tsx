import React from "react"

type Props = Readonly<{
  filterText?: string
  inStockOnly?: boolean
  handleFilterTextChange?: (e: React.ChangeEvent) => void
  handleInStockOnlyChange?: (e: React.ChangeEvent) => void
}>

export function SearchBar({
  filterText = "",
  inStockOnly = false,
  handleFilterTextChange,
  handleInStockOnlyChange,
}: Props) {
  return (
    <form className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <label htmlFor="inStockOnly" style={{ display: "block" }}>
        <input
          type="checkbox"
          name="inStockOnly"
          checked={inStockOnly}
          onChange={handleInStockOnlyChange}
        />
        Only show products in stock
      </label>
    </form>
  )
}
