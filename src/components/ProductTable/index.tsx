import React from "react"
import { Product } from "../../types/Product"
import { ProductRow } from "../ProductRow"

type Props = Readonly<{ products: Product[] }>

export function ProductTable({ products }: Props) {
  return (
    <table className="ProductTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow product={product} key={product.name} />
        ))}
      </tbody>
    </table>
  )
}
