import MenuCartQuantity from "../MenuCartQuantity";
import * as S from "./styles";

type Props = {
  cart: any;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  totalCost: (cart: any) => number;
};

export default function MenuCartList({
  cart,
  updateQuantity,
  removeFromCart,
  totalCost,
}: Props) {
  return (
    <S.MenuCartList cartLength={cart.length}>
      {cart.map((product: any) => (
        <S.MenuCartItem key={product.id}>
          <S.MenuCartItemWrapper>
            <S.MenuCartImage imageURL={product.images} />
            <S.MenuCartInfo>
              <S.MenuCartName>{product.name}</S.MenuCartName>
              <S.MenuCartPriceWrapper>
                <S.MenuCartPrice>
                  {product.cost * product.quantity}€
                </S.MenuCartPrice>
              </S.MenuCartPriceWrapper>
            </S.MenuCartInfo>
          </S.MenuCartItemWrapper>
          <MenuCartQuantity
            product={product}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </S.MenuCartItem>
      ))}
      {cart.length > 0 && (
        <S.MenuCartTotalWrapper>
          <S.MenuCartTotalTitle>Total</S.MenuCartTotalTitle>
          <S.MenuCartTotalPrice>
            {Math.round((totalCost(cart) * 100) / 100)}€
          </S.MenuCartTotalPrice>
        </S.MenuCartTotalWrapper>
      )}
    </S.MenuCartList>
  );
}
