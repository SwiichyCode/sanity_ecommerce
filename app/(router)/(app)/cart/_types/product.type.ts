import { Sizes } from "./sizes.type";

export interface Product {
  name: string;
  description: string;
  id: string;
  productId: string;
  price: number;
  images: string;
  quantity?: number;
  sizes?: Sizes;
  weight?: number;
  category: string;
}
