import Link from "next/link";
import Button from "../../Button";
import * as S from "./styles";

export default function MenuCartEmpty() {
  return (
    <S.MenuCartQuantityWrapper>
      <p>Votre panier est vide</p>
      <Button>
        <Link href="/boutique">Voir la boutique</Link>
      </Button>
    </S.MenuCartQuantityWrapper>
  );
}
