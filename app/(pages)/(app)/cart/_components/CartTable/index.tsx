import Image from "next/image";
import * as S from "./styles";

type Props = {
  cart: any;
};

export default function CartTable({ cart }: Props) {
  console.log(cart);
  return (
    <S.CartTableWrapper>
      <S.CartTableHead>
        <S.CartTableHeadItem>Product</S.CartTableHeadItem>
        <S.CartTableHeadItem>Prix</S.CartTableHeadItem>
        <S.CartTableHeadItem>Quantité</S.CartTableHeadItem>
        <S.CartTableHeadItem>Total</S.CartTableHeadItem>
      </S.CartTableHead>
      <S.CartTableBody>
        {cart.map((item: any) => (
          <S.CartTableBodyWrapper>
            <S.CartTableBodyItem key={item.id}>
              <S.CartTableBodyItemImg src={item.images} />
              <S.CartTableBodyItemTitle>{item.name}</S.CartTableBodyItemTitle>
            </S.CartTableBodyItem>

            <S.CartTableBodyItem key={item.id}>
              {item.cost}€
            </S.CartTableBodyItem>
            <S.CartTableBodyItem key={item.id}>
              {item.quantity}
            </S.CartTableBodyItem>
            <S.CartTableBodyItem key={item.id}>
              {item.cost * item.quantity}
            </S.CartTableBodyItem>
          </S.CartTableBodyWrapper>
        ))}
      </S.CartTableBody>
    </S.CartTableWrapper>
  );
}
