import Image from "next/image";
import * as S from "./styles";

type Props = {
  cart: any;
  openCart: boolean;
  setOpenCart: (openCart: boolean) => void;
};

export default function MenuCartButton({ cart, openCart, setOpenCart }: Props) {
  return (
    <S.MenuCartButton
      className="cart-btn"
      onClick={() => setOpenCart(!openCart)}
    >
      <Image
        className="cart-btn"
        src="/cart_white.svg"
        width={28}
        height={28}
        alt=""
      />

      {cart.length > 0 && <S.MenuCartCounter>{cart.length}</S.MenuCartCounter>}
    </S.MenuCartButton>
  );
}
