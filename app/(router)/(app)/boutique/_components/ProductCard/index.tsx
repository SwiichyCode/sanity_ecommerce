import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import ProductCardStock from "./ProductCardStock";
import Button from "@/app/_components/_atoms/Button";
import ProductCardAction from "./ProductCardAction";
import { ProductCardProps } from "./types";
import * as S from "./styles";

export default function ProductCard({
  imageURL,
  id,
  name,
  slug,
  description,
  stock,
  price,
  category,
  weight,
}: ProductCardProps) {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(
      {
        name: name,
        description: description,
        id: id,
        productId: uuidv4(),
        price: price,
        images: imageURL as any,
        category: category,
        weight: weight,
      },
      1
    );
  };

  if (stock <= 0) return null;

  return (
    <S.ProductCardWrapper>
      <S.ProductCardHeader>
        <S.ProductCardImage imageURL={imageURL} />
      </S.ProductCardHeader>
      <S.ProductCardBody>
        <S.ProductCardTitleWrapper>
          <S.ProductCardTitle>{name}</S.ProductCardTitle>
        </S.ProductCardTitleWrapper>

        <S.ProductCardDescription>{description}</S.ProductCardDescription>

        <ProductCardStock stock={stock} />

        <S.ProductCardPrice>€{price}</S.ProductCardPrice>

        <S.ProductCardFooter>
          <Button>
            <Link href={`/boutique/${slug && slug.current}`}>
              Voir le produit
            </Link>
          </Button>

          <ProductCardAction
            category={category}
            handleAddToCart={handleAddToCart}
            stock={stock}
          />
        </S.ProductCardFooter>
      </S.ProductCardBody>
    </S.ProductCardWrapper>
  );
}
