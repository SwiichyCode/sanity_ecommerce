import * as S from "./styles";

type Props = {
  product: any;
  isOrderDetail?: boolean;
};

export default function MenuCartInformations({
  product,
  isOrderDetail,
}: Props) {
  const { name, sizes, sizesUnit, price, quantity } = product;
  const totalPrice = price * quantity;

  return (
    <S.MenuCartInfo>
      <S.MenuCartName isOrderDetail={isOrderDetail}>
        {isOrderDetail && sizes ? `${name} (${sizes})` : name}
      </S.MenuCartName>
      {!isOrderDetail && sizes && (
        <S.MenuCartSize>
          {sizes}
          {sizesUnit}
        </S.MenuCartSize>
      )}
      <S.MenuCartPriceWrapper>
        {!isOrderDetail && (
          <S.MenuCartPrice>{totalPrice.toFixed(2)}€</S.MenuCartPrice>
        )}
        {isOrderDetail && quantity > 1 && (
          <>
            <S.MenuCartPrice>Prix: {price.toFixed(2)}€</S.MenuCartPrice>
            <S.MenuCartPrice>x{quantity}</S.MenuCartPrice>
          </>
        )}
      </S.MenuCartPriceWrapper>
      {isOrderDetail && <S.MenuCartPrice>Total: {totalPrice}€</S.MenuCartPrice>}
    </S.MenuCartInfo>
  );
}
