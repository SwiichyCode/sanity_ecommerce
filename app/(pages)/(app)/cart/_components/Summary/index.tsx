"use client";
import MenuCartImage from "@/app/_components/MenuCart/MenuCartImage";
import { useCartStore } from "../../_stores/store";
import MenuCartInformations from "@/app/_components/MenuCart/MenuCartInformations";
import MenuCartTotalPrice from "@/app/_components/MenuCart/MenuCartTotalPrice";
import Button from "@/app/_components/Button";
import * as S from "./styles";

type Props = {
  user?: any;
};

export default function Summary({ user }: Props) {
  const { cart, totalCost } = useCartStore();

  return (
    <S.SummaryWrapper>
      <S.SummaryHeader>
        <S.SummaryTitle>Résumé</S.SummaryTitle>
      </S.SummaryHeader>

      <S.SummaryList>
        {cart.map((product) => (
          <S.SummaryItem>
            <S.SummaryItemWrapper>
              <MenuCartImage imageURL={product.images} />
              <MenuCartInformations product={product} />
            </S.SummaryItemWrapper>
            <S.SummaryItemQuantity>x{product.quantity}</S.SummaryItemQuantity>
          </S.SummaryItem>
        ))}
      </S.SummaryList>

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
    </S.SummaryWrapper>
  );
}
