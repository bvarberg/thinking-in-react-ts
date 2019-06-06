import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { ProductTable } from "."

storiesOf("ProductTable", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <ProductTable products={[]} />)
  .add("with a few products", () => (
    <ProductTable
      products={[
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
      ]}
    />
  ))
