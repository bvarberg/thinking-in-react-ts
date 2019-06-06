import React from "react"
import { Product } from "../../types/Product"
import { SearchBar } from "../SearchBar"
import { ProductTable } from "../ProductTable"

type Props = Readonly<{
  products: Product[]
}>

export function FilterableProductTable({ products }: Props) {
  return (
    <div className="FilterableProductTable">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
