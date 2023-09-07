import * as S from "./styles";

type Props = {
  cart: any;
  totalCost: (cart: any) => number;
};

export default function MenuCartTotalPrice({ totalCost, cart }: Props) {
  return (
    <S.MenuCartTotalWrapper>
      <S.MenuCartTotalTitle>Total</S.MenuCartTotalTitle>
      <S.MenuCartTotalPrice>
        {Math.round((totalCost(cart) * 100) / 100)}€
      </S.MenuCartTotalPrice>
    </S.MenuCartTotalWrapper>
  );
}
