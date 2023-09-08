import * as S from "./styles";

type Props = {
  category: string;
  handleAddToCart: () => void;
};

export default function ProductCardAction({
  category,
  handleAddToCart,
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
