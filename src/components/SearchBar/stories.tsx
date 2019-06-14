import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { SearchBar } from "."

storiesOf("SearchBar", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <SearchBar />)
  .add("in stock only", () => <SearchBar inStockOnly={true} />)
  .add("with filter text", () => <SearchBar filterText={"Football"} />)
