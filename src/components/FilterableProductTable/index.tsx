import React, { useState } from "react"
import { Product } from "../../types/Product"
import { SearchBar } from "../SearchBar"
import { ProductTable } from "../ProductTable"

type Props = Readonly<{
  products: Product[]
}>

/**
 * TODO: Change references to this type to the correct type.
 *
 * When I use `React.ChangeEvent` the `event.target` does not have a `checked`
 * property. I'm not sure what the correct annotation is for these event handler
 * functions.
 */
type FIXME = any

export function FilterableProductTable({ products }: Props) {
  const [filterText, setFilterText] = useState("")
  function handleFilterTextChange(event: FIXME): void {
    setFilterText(event.target.value)
  }

  const [inStockOnly, setInStockOnly] = useState(false)
  function handleInStockOnlyChange(event: FIXME): void {
    setInStockOnly(event.target.checked)
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
