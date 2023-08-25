import * as S from "./styles";
import Image from "next/image";
import Button from "@/app/_components/Button";
import product from "@/sanity/schemas/product";

type Props = {
  imageURL: string;
  name?: string;
  description?: string;
  stars?: number;
  stock?: number;
  price?: number;
};

export default function ProductCard({
  imageURL,
  name,
  description,
  stars,
  stock,
  price,
}: Props) {
  return (
    <S.ProductCardWrapper>
      <S.ProductCardHeader>
        <S.ProductCardImage imageURL={imageURL} className="a" />
        <S.ProductCardAction>
          <S.ProductCardActionButton>
            <S.ProductCartActionIcon
              src="/heart_2.svg"
              width={24}
              height={24}
              alt=""
            />
          </S.ProductCardActionButton>
          <S.ProductCardActionButton>
            <S.ProductCartActionIcon
              src="/cart.svg"
              width={24}
              height={24}
              alt=""
            />
          </S.ProductCardActionButton>
          <S.ProductCardActionButton>
            <S.ProductCartActionIcon
              src="/eyes.svg"
              width={24}
              height={24}
              alt=""
            />
          </S.ProductCardActionButton>
        </S.ProductCardAction>
      </S.ProductCardHeader>
      <S.ProductCardBody>
        <S.ProductCardTitleWrapper>
          <S.ProductCardTitle>{name}</S.ProductCardTitle>
          <S.ProductCardStars>
            <Image src="/star.svg" width={16} height={16} alt="" />
            <span>{stars}</span>
          </S.ProductCardStars>
        </S.ProductCardTitleWrapper>

        <S.ProductCardDescription>{description}</S.ProductCardDescription>

        <S.ProductCardStock>
          <Image src="/stocks.svg" width={16} height={16} alt="" />
          <span>{stock} en stock</span>
        </S.ProductCardStock>

        <S.ProductCardPrice>${price}</S.ProductCardPrice>

        <Button text="Plus d'info..." />
      </S.ProductCardBody>
    </S.ProductCardWrapper>
  );
}
