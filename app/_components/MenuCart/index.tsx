import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useCartStore } from "@/app/(pages)/(app)/cart/_stores/store";
import * as S from "./styles";

export default function MenuCart() {
  const [openCart, setOpenCart] = useState(false);
  const { cart, removeFromCart, totalCost } = useCartStore();
  const cartmenuRef = useRef(null);

  // useOnClickOutside(cartmenuRef, (e) => handleClickOutside(e));

  // const handleClickOutside = (e: any) => {
  //   const target = e.target;

  //   if (target.className.includes("cart-btn")) {
  //     return;
  //   }

  //   setOpenCart(false);
  // };

  // console.log(cart.length);

  return (
    <S.MenuCartWrapper>
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

        {cart.length > 0 && (
          <S.MenuCartCounter>{cart.length}</S.MenuCartCounter>
        )}
      </S.MenuCartButton>
      {openCart && (
        <S.MenuCartContainer ref={cartmenuRef}>
          <S.MenuCartHeader>
            <S.MenuCartTitle>Panier</S.MenuCartTitle>
            <S.MenuCartClose onClick={() => setOpenCart(false)}>
              <Image src="/cart_close.svg" width={28} height={28} alt="" />
            </S.MenuCartClose>
          </S.MenuCartHeader>

          <S.MenuCartList cartLength={cart.length}>
            {cart.map((product: any) => (
              <S.MenuCartItem key={product.id}>
                <S.MenuCartItemWrapper>
                  <S.MenuCartImage imageURL={product.images} />
                  <S.MenuCartInfo>
                    <S.MenuCartName>{product.name}</S.MenuCartName>
                    <S.MenuCartPriceWrapper>
                      <S.MenuCartQuantity>
                        x{product.quantity}
                      </S.MenuCartQuantity>
                      <S.MenuCartPrice>
                        {product.cost * product.quantity}€
                      </S.MenuCartPrice>
                    </S.MenuCartPriceWrapper>
                  </S.MenuCartInfo>
                </S.MenuCartItemWrapper>
                <S.MenuCartRemove onClick={() => removeFromCart(product.id)}>
                  <Image src="/cross.svg" width={24} height={24} alt="" />
                </S.MenuCartRemove>
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

          <S.MenuCartFooter>
            <S.MenuCartFooterBtn onClick={() => setOpenCart(false)}>
              <Link href="/cart">Panier</Link>
            </S.MenuCartFooterBtn>
            <S.MenuCartFooterBtn>
              <Link href="/">Commander</Link>
            </S.MenuCartFooterBtn>
          </S.MenuCartFooter>
        </S.MenuCartContainer>
      )}
    </S.MenuCartWrapper>
  );
}
