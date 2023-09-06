import MenuCartImage from "../MenuCartImage";
import MenuCartInformations from "../MenuCartInformations";
import MenuCartQuantity from "../MenuCartQuantity";
import MenuCartTotalPrice from "../MenuCartTotalPrice";
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
  console.log("cart", cart);
  return (
    <S.MenuCartList cartLength={cart.length}>
      {cart.map((product: any) => (
        <S.MenuCartItem key={product.id}>
          <S.MenuCartItemWrapper>
            <MenuCartImage imageURL={product.images} />
            <MenuCartInformations product={product} />
          </S.MenuCartItemWrapper>
          <MenuCartQuantity
            product={product}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </S.MenuCartItem>
      ))}
      {cart.length > 0 && (
        <MenuCartTotalPrice totalCost={totalCost} cart={cart} />
      )}
    </S.MenuCartList>
  );
}
