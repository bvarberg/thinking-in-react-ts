import React from "react"
import { Product } from "../../types/Product"

type Props = Readonly<{ product: Product }>

export function ProductRow({ product }: Props) {
  return (
    <tr className="ProductRow" key={product.name}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
