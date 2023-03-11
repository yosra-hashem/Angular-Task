import { Product } from "./product";

export interface IProduct {
    products: Product[],
      total: number,
      skip: number,
      limit: number
}
