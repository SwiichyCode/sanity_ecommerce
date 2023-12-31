"use client";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import MenuCartImage from "../MenuCart/MenuCartImage";
import MenuCartInformations from "../MenuCart/MenuCartInformations";
import MenuCartTotalPrice from "../MenuCart/MenuCartTotalPrice";
import MenuCartEmpty from "../MenuCart/MenuCartEmpty";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";

type Props = {
  user?: any;
};

export default function Summary({ user }: Props) {
  const { cart, totalCost } = useCartStore();

  const ifFish = cart.some((product) => product.category === "poisson");

  console.log("cart", ifFish);

  return (
    <S.SummaryWrapper>
      <S.SummaryHeader>
        <S.SummaryTitle>Résumé</S.SummaryTitle>
      </S.SummaryHeader>

      <S.SummaryList cartLength={cart.length}>
        {cart.length === 0 ? (
          <MenuCartEmpty />
        ) : (
          cart.map((product, index) => (
            <S.SummaryItem key={index}>
              <S.SummaryItemWrapper>
                <MenuCartImage imageURL={product.images} />
                <MenuCartInformations product={product} />
              </S.SummaryItemWrapper>
              <S.SummaryItemQuantity>x{product.quantity}</S.SummaryItemQuantity>
            </S.SummaryItem>
          ))
        )}
      </S.SummaryList>

      {cart.length > 0 && (
        <S.SummaryFooter>
          <MenuCartTotalPrice totalCost={totalCost} cart={cart} />
          {!user && (
            <S.SummaryAlert>
              Veuillez vous connecter pour procéder au paiement
            </S.SummaryAlert>
          )}
          <Button type="submit" disabled={user ? false : true}>
            Continuer
          </Button>
        </S.SummaryFooter>
      )}
    </S.SummaryWrapper>
  );
}
