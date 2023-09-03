import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/app/_modules/shop/cart.store";
import ProductCardStock from "./ProductCardStock";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";

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
}: Props) {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(
      {
        name: name,
        description: description,
        id: id,
        cost: price,
        images: imageURL as any,
      },
      1
    );
  };

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
          <S.ProductCardActionButton onClick={handleAddToCart}>
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

        <ProductCardStock stock={stock} />

        <S.ProductCardPrice>${price}</S.ProductCardPrice>

        <Button>
          <Link href={`/boutique/${slug.current}`}>View Product</Link>
        </Button>
      </S.ProductCardBody>
    </S.ProductCardWrapper>
  );
}