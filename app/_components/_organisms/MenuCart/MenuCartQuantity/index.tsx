import React, { useState } from "react";
import * as S from "./styles";

type Props = {
  product: any;

  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
};

export default function MenuCartQuantity({
  product,
  updateQuantity,
  removeFromCart,
}: Props) {
  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <S.MenuCartQuantityHandler>
      <S.MenuCartQuantityButton
        onClick={() => {
          setQuantity(quantity - 1);
          updateQuantity(product.id, quantity - 1);
          if (quantity === 1) {
            return removeFromCart(product.id);
          }
        }}
      >
        -
      </S.MenuCartQuantityButton>
      <S.MenuCartInputNumber>{quantity}</S.MenuCartInputNumber>
      <S.MenuCartQuantityButton
        onClick={() => {
          setQuantity(quantity + 1);
          updateQuantity(product.id, quantity + 1);
        }}
      >
        +
      </S.MenuCartQuantityButton>
    </S.MenuCartQuantityHandler>
  );
}
