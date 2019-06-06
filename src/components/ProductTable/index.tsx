import React from "react"
import { Product } from "../../types/Product"
import { ProductRow } from "../ProductRow"
import { ProductCategoryRow } from "../ProductCategoryRow"

type Props = Readonly<{ products: Product[] }>

export function ProductTable({ products }: Props) {
  let rows: React.ReactElement[] = []
  let lastCategory: null | string = null

  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      )
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <table className="ProductTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
