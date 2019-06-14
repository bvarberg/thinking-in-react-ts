import React, { useState } from "react"
import { Product } from "../../types/Product"
import { SearchBar } from "../SearchBar"
import { ProductTable } from "../ProductTable"

type Props = Readonly<{
  products: Product[]
}>

export function FilterableProductTable({ products }: Props) {
  const [filterText, setFilterText] = useState("")
  function handleFilterTextChange(event: React.ChangeEvent<Element>): void {
    const target = event.target as HTMLInputElement
    setFilterText(target.value)
  }

  const [inStockOnly, setInStockOnly] = useState(false)
  function handleInStockOnlyChange(event: React.ChangeEvent<Element>): void {
    const target = event.target as HTMLInputElement
    setInStockOnly(target.checked)
  }

  const filteredProducts = products
    .filter(product => (inStockOnly ? product.stocked : true))
    .filter(product => product.name.indexOf(filterText) !== -1)

  return (
    <div className="FilterableProductTable">
      <SearchBar
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
        inStockOnly={inStockOnly}
        handleInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  )
}
