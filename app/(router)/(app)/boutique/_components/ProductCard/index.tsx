import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import ProductCardStock from "./ProductCardStock";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";
import ProductCardAction from "./ProductCardAction";
import ProductCardStars from "./ProductCardStars";

type Props = {
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
};

export default function ProductCard({
  imageURL,
  id,
  name,
  slug,
  description,
  stars,
  stock,
  price,
  category,
}: Props) {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(
      {
        name: name,
        description: description,
        id: id,
        productId: uuidv4(),
        cost: price,
        images: imageURL as any,
      },
      1
    );
  };

  return (
    <S.ProductCardWrapper>
      <S.ProductCardHeader>
        <S.ProductCardImage imageURL={imageURL} />
      </S.ProductCardHeader>
      <S.ProductCardBody>
        <S.ProductCardTitleWrapper>
          <S.ProductCardTitle>{name}</S.ProductCardTitle>
          {/* <ProductCardStars stars={stars} /> */}
        </S.ProductCardTitleWrapper>

        <S.ProductCardDescription>{description}</S.ProductCardDescription>

        <ProductCardStock stock={stock} />

        <S.ProductCardPrice>${price}</S.ProductCardPrice>

        <S.ProductCardFooter>
          <Button>
            <Link href={`/boutique/${slug && slug.current}`}>
              Voir le produit
            </Link>
          </Button>

          <ProductCardAction
            category={category}
            handleAddToCart={handleAddToCart}
          />
        </S.ProductCardFooter>
      </S.ProductCardBody>
    </S.ProductCardWrapper>
  );
}
