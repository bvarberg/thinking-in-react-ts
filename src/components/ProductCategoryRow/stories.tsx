import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { ProductCategoryRow } from "."

storiesOf("ProductCategoryRow", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <ProductCategoryRow category="Sporting Goods" />)
