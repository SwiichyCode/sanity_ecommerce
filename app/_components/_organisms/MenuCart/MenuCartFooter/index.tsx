import Link from "next/link";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";

type Props = {
  setOpenCart: (openCart: boolean) => void;
};

export default function MenuCartFooter({ setOpenCart }: Props) {
  return (
    <S.MenuCartFooter>
      <Button onClick={() => setOpenCart(false)}>
        <Link href="/cart">Paiement</Link>
      </Button>
    </S.MenuCartFooter>
  );
}
