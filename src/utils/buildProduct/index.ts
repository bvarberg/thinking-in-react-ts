import { Product } from "../../types/Product"

type BuildProduct = () => Product

export const buildProduct: BuildProduct = () => {
  return {
    category: "Sporting Goods",
    name: "Football",
    price: "$49.99",
    stocked: true,
  }
}
