export interface Product {
  id: string;
  productId: string;
  name: string;
  description: string;
  price: number;
  images: string;
  quantity?: number;
  sizes?: number;
  weight?: number;
  category: string;
}
