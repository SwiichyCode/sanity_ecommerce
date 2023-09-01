import Image from "next/image";
import * as S from "./styles";

type Props = {
  setOpenCart: (openCart: boolean) => void;
};

export default function MenuCartHeader({ setOpenCart }: Props) {
  return (
    <S.MenuCartHeader>
      <S.MenuCartTitle>Panier</S.MenuCartTitle>
      <S.MenuCartClose onClick={() => setOpenCart(false)}>
        <Image src="/cart_close.svg" width={28} height={28} alt="" />
      </S.MenuCartClose>
    </S.MenuCartHeader>
  );
}
