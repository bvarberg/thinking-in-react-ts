import React from "react"
import "./index.css"
import { FilterableProductTable } from "../FilterableProductTable"

type Props = Readonly<{ children?: React.ReactNode }>

export function App(_: Props) {
  const products = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
  ]

  return (
    <div className="App">
      <h1>Thinking in React</h1>
      <FilterableProductTable products={products} />
    </div>
  )
}
