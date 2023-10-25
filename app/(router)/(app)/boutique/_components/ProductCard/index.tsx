import Link from "next/link";
import ProductCardStock from "./ProductCardStock";
import Button from "@/app/_components/_atoms/Button";
import { ProductCardProps } from "@/sanity/types/product-type";
import * as S from "./styles";

export default function ProductCard({
  slug,
  name,
  description,
  images,
  price,
  stock,
}: ProductCardProps) {
  if (stock <= 0) return null;

  return (
    <S.ProductCardWrapper>
      <S.ProductCardHeader>
        <S.ProductCardImage imageURL={images} />
      </S.ProductCardHeader>
      <S.ProductCardBody>
        <S.ProductCardTitleWrapper>
          <S.ProductCardTitle>{name}</S.ProductCardTitle>
        </S.ProductCardTitleWrapper>

        <S.ProductCardDescription>{description}</S.ProductCardDescription>

        <ProductCardStock stock={stock} />

        <S.ProductCardPrice>{price.toFixed(2)}€</S.ProductCardPrice>

        <S.ProductCardFooter>
          <Button>
            <Link href={`/boutique/${slug && slug.current}`}>
              Voir le produit
            </Link>
          </Button>
        </S.ProductCardFooter>
      </S.ProductCardBody>
    </S.ProductCardWrapper>
  );
}
