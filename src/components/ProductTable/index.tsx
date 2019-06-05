import React from "react"
import { Product } from "../../types/Product"

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
      {products.map(product => (
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </table>
  )
}
