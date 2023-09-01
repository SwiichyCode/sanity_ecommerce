import * as S from "./styles";

type Props = {
  product: any;
};

export default function MenuCartInformations({ product }: Props) {
  return (
    <S.MenuCartInfo>
      <S.MenuCartName>{product.name}</S.MenuCartName>
      <S.MenuCartPriceWrapper>
        <S.MenuCartPrice>{product.cost * product.quantity}€</S.MenuCartPrice>
      </S.MenuCartPriceWrapper>
    </S.MenuCartInfo>
  );
}
