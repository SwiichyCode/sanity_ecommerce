import * as S from "./styles";

type Props = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export default function ProductQuantity({ quantity, setQuantity }: Props) {
  return (
    <S.ProductQuantityWrapper>
      <S.ProductQuantityButton
        onClick={() => {
          if (quantity === 1) {
            return;
          }
          setQuantity(quantity - 1);
        }}
      >
        -
      </S.ProductQuantityButton>
      <S.ProductQuantityText>{quantity}</S.ProductQuantityText>
      <S.ProductQuantityButton onClick={() => setQuantity(quantity + 1)}>
        +
      </S.ProductQuantityButton>
    </S.ProductQuantityWrapper>
  );
}
