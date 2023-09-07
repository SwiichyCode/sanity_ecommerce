import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import MenuCartButton from "./MenuCartButton";
import MenuCartHeader from "./MenuCartHeader";
import MenuCartList from "./MenuCartList";
import MenuCartFooter from "./MenuCartFooter";
import MenuCartEmpty from "./MenuCartEmpty";
import * as S from "./styles";

export default function MenuCart() {
  const [openCart, setOpenCart] = useState(false);
  const { cart, removeFromCart, updateQuantity, totalCost } = useCartStore();
  const cartmenuRef = useRef(null);

  useOnClickOutside(cartmenuRef, (e) => handleClickOutside(e));

  const handleClickOutside = (e: any) => {
    const target = e.target;

    if (target.className.includes("cart-btn")) {
      return;
    }

    setOpenCart(false);
  };

  console.log("cart", cart);

  return (
    <S.MenuCartWrapper>
      <MenuCartButton
        cart={cart}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      {openCart && (
        <S.MenuCartContainer ref={cartmenuRef}>
          <MenuCartHeader setOpenCart={setOpenCart} />

          {cart.length === 0 ? (
            <MenuCartEmpty />
          ) : (
            <MenuCartList
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              totalCost={totalCost}
            />
          )}

          <MenuCartFooter setOpenCart={setOpenCart} />
        </S.MenuCartContainer>
      )}
    </S.MenuCartWrapper>
  );
}
