import * as S from "./styles";

type Props = {
  category: string;
  handleAddToCart: () => void;
  stock: number;
};

export default function ProductCardAction({
  category,
  handleAddToCart,
  stock,
}: Props) {
  return (
    category !== "poisson" && (
      <S.ProductCardActionButton onClick={handleAddToCart}>
        <S.ProductCartActionIcon
          src="/cart.svg"
          width={24}
          height={24}
          alt=""
        />
      </S.ProductCardActionButton>
    )
  );
}
