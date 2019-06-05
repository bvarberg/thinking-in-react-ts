import React from "react"
import { Product } from "../../types/Product"

type Props = Readonly<{ product: Product }>

export function ProductRow({ product }: Props) {
  const name: string | React.ReactElement = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  )

  return (
    <tr className="ProductRow">
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
