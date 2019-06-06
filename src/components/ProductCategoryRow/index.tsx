import React from "react"

type Props = Readonly<{ category: string }>

export function ProductCategoryRow({ category }: Props) {
  return (
    <tr className="ProductCategoryRow">
      <th colSpan={2}>{category}</th>
    </tr>
  )
}
