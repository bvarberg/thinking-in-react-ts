import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { ProductRow } from "."

storiesOf("ProductRow", module)
  .addDecorator(decoratorCentered)
  .add("default", () => (
    <ProductRow
      product={{
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football",
      }}
    />
  ))
