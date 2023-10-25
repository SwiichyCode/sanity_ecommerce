type Images = {
  asset: {
    _ref: string;
    _type: string;
  };
  _key: string;
  _type: string;
};

export type ProductType = {
  id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  variants: {
    size: number;
    sizeUnit: string;
    price: number;
    weight: number;
    stock: number;
  }[];
  images: Images[];
  category: string;
  portabletext: string;
};

export type ProductCardProps = {
  id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  images: string;
  price: number;
  stock: number;
  category: string;
};
