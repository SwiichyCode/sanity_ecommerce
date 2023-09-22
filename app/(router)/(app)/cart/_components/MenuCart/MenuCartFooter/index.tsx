import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";

type Props = {
  setOpenCart: (openCart: boolean) => void;
};

export default function MenuCartFooter({ setOpenCart }: Props) {
  const router = useRouter();

  const handleClick = () => {
    setOpenCart(false);
    router.push("/cart");
  };

  return (
    <S.MenuCartFooter>
      <Button text="Paiement" onClick={handleClick} />
    </S.MenuCartFooter>
  );
}
