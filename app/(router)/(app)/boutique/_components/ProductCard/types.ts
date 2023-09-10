export interface ProductCardProps {
  imageURL: string;
  id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  stars: number;
  stock: number;
  price: number;
  category: string;
  weight: number;
  sizes?: any;
}
