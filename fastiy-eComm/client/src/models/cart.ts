import { IProduct } from "./products";

export interface CartItem {
  product: IProduct;
  quantity: number;
}
