import React from "react"
import { Product } from "../../types/Product"
import { SearchBar } from "../SearchBar"

type Props = Readonly<{
  products: Product[]
}>

export function FilterableProductTable({ products }: Props) {
  return (
    <div className="FilterableProductTable">
      <SearchBar />
      {products.map(product => {
        return <div key={product.name}>{product.name}</div>
      })}
    </div>
  )
}
